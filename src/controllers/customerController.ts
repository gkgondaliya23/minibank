import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Customer } from "../entities/Customers";

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
