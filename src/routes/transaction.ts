import express from "express";
import { getTransactions} from "../controllers/transactionController";

const transactionRoutes = express.Router();

transactionRoutes.get("/", getTransactions);
// transactionRoutes.post('/register', resgisterBanker);

export default transactionRoutes;