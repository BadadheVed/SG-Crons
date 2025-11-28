import express from "express";
import rateLimit from "express-rate-limit";
import { runCrons } from "./index.js";
const app = express();

app.get("/", (req, res) => {
  runCrons();
  res.send("Cron Service is running & all crons executed");
});

app.listen(3000, () => {
  console.log("Cron service listening on port 3000");
});
