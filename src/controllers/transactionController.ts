import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Customer } from "../entities/Customers";
import { Transaction } from "../entities/Transaction";
import { Banker } from "../entities/Banker";

export const getTransactions = async (_req: Request, res: Response) => {
  try {
    let transactions = await getRepository(Transaction).find({});
    res.json(transactions);
  } catch (error) {
    res.json({ message: "Internal Error" });
  }
};

export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const { bankerId, customerId } = req.params;
    const customer = await Customer.findOne({
      where: { id: parseInt(customerId) },
    });

    const banker = await Banker.findOne({
      where: { id: parseInt(bankerId) },
    });
    if(!customer || !banker){
      return res.json({message: 'Banker or Customer is not FOUND...!!!'});
    }
    banker.customers = [
      customer
    ]
    await banker.save();
    return res.json({message: 'Link banker to customer Successflly...'});
  } catch (error) {
    return res.json({ message: "Internal Error" });
  }
};
