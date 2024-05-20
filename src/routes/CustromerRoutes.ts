import express from "express";
import {
  registerCustomer,
  getCustomer,
  customerTransactions,
  deleteCustomer,
} from "../controllers/customerController";

const customerRoutes = express.Router();

customerRoutes.get("/", getCustomer);
customerRoutes.post("/register", registerCustomer);
customerRoutes.post("/:customerId/transaction", customerTransactions);
customerRoutes.delete("/:customerId/", deleteCustomer);

export default customerRoutes;
