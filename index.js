import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
export const MONGO_DATABASE = process.env.MONGO_DATABASE;

export const client = new MongoClient(MONGO_URL);


await client.connect();
console.log("MongoDB Connected");

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send({ message: "Server running successfully" });
});


app.use("/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});