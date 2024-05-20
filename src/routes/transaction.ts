import express from "express";
import { getTransactions, updateTransaction} from "../controllers/transactionController";

const transactionRoutes = express.Router();

transactionRoutes.get("/", getTransactions);
transactionRoutes.put('/banker/:bankerId/customer/:customerId', updateTransaction);

export default transactionRoutes;