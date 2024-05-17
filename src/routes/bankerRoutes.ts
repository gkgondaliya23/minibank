import express from "express";
import { getBankers, resgisterBanker } from "../controllers/bankerController";

const bakerRoutes = express.Router();

bakerRoutes.get("/", getBankers);
bakerRoutes.post('/register', resgisterBanker);

export default bakerRoutes;
