import express from 'express';
import { registerCustomer, getCustomer, customerTransactions } from '../controllers/customerController';

const customerRoutes = express.Router();

customerRoutes.get('/', getCustomer);
customerRoutes.post('/register', registerCustomer);
customerRoutes.post('/:customerId/transaction', customerTransactions);

export default customerRoutes;