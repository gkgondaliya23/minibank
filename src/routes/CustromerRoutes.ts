import express from 'express';
import { registerCustomer, getCustomer } from '../controllers/customerController';

const customerRoutes = express.Router();

customerRoutes.get('/', getCustomer);
customerRoutes.post('/register', registerCustomer);

export default customerRoutes;