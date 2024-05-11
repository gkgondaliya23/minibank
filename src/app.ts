import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createConnection } from "typeorm";
import customerRoutes from "./routes/CustromerRoutes";
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/customer', customerRoutes);

app.listen(port, async () => {
  try {
    createConnection()
      .then(() => console.log(`Database is connected`))
      .catch((err) => console.log(err));
    console.log(`Server start at http://localhost:${port}`);
  } catch (error) {
    throw new Error("Unable to Connectction with Server and Database");
  }
});
