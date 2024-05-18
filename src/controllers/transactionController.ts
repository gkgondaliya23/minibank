import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Transaction } from "../entities/Transaction";

export const getTransactions = async (_req: Request, res: Response) => {
  try {
    let transactions = await getRepository(Transaction).find({});
    res.json(transactions);
  } catch (error) {
    res.json({ message: "Internal Error" });
  }
};