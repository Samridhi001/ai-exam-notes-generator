import express from "express";

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.json("Server is running");
});

app.listen(port,()=>{
  console.log(`server running on port ${port}`);
});