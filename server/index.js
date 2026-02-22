import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/connectDb.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.json("Server is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});