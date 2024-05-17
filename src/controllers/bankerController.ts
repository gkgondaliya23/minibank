import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Banker } from "../entities/Banker";

export const getBankers = async (_req: Request, res: Response) => {
  try {
    let bankers = await getRepository(Banker).find({});
    res.json(bankers);
  } catch (error) {
    res.json({ message: "Internal Error" });
  }
};


export const resgisterBanker = async (req:Request, res:Response) => {
  try {
    const {email, password, firstName, lastName, card_number, employee_number} = req.body;

    const banker = Banker.create({
      email,
      password,
      firstName,
      lastName,
      card_number,
      employee_number
    });
    await banker.save();
    res.json(banker);
  } catch (error) {
    res.json({ message: "Internal Error", error });
  }
}