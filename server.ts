import express from "express";
import rateLimit from "express-rate-limit";
import { runCrons } from "./index.js";
const app = express();
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
});
app.use(limiter);
app.get("/", (req, res) => {
  runCrons();
  res.send("Cron Service is running & all crons executed");
});

app.listen(3000, () => {
  console.log("Cron service listening on port 3000");
});
