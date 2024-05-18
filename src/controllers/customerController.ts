import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Customer } from "../entities/Customers";
import { Transaction, TransactionType } from "../entities/Transaction";

export const getCustomer = async (_req: Request, res: Response) => {
  try {
    const customers = await getRepository(Customer).find({});
    res.json(customers);
  } catch (error) {
    res.json({ message: "Internal Error" });
  }
};

export const registerCustomer = async (req: Request, res: Response) => {
  try {
    const { email, password, firstName, lastName, card_number } = req.body;
    let customer = Customer.create({
      email,
      password,
      firstName,
      lastName,
      card_number,
    });
    await customer.save();
    res.json(customer);
  } catch (error) {
    res.json({ message: "Internal Error" });
  }
};

export const customerTransactions = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;
    const { type, amount } = req.body;
    const customer = await Customer.findOne({
      where: { id: parseInt(customerId) },
    });

    if (!customer) {
      return res.json({ message: "Customer is not Found!!!" });
    }

    const transaction = await Transaction.create({
      type,
      amount,
      customer,
    });
    await transaction.save();
    if (type === TransactionType.DEPOSITE) {
      customer.balance += amount;
    } else if (type === TransactionType.WITHDRAW) {
      if (customer.balance < amount) {
        return res.status(400).json({ message: "Insufficient balance" });
      }
      customer.balance -= amount;
    }
    await customer.save();
    return res.json({ message: "Transaction is added to customer account" });
  } catch (error) {
    return res.json({ message: "Internal Error" });
  }
};
