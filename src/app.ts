import express from "express";
import helmet from "helmet";
import cors from "cors";
import "./config/db/setup";
import expressGlobalErrorHandling from "./utils/errorHandling/express-global-err-handling";
import userRouter from "./modules/users";

const app = express();

console.log("welocome...")

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(userRouter);
app.use(expressGlobalErrorHandling);

app.get("/test", (req, res) => {
  res.send("test is successfull")
}) 

// Handle unhandled rejections and log to console and MongoDB
process.on("unhandledRejection", (reason, promise) => {
  console.log("error", reason);
  console.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
  process.exit(1);
});

// Handle uncaught exceptions and log to console and MongoDB
process.on("uncaughtException", (err, origin) => {
  console.log("error", `Caught exception: ${err}, origin: ${origin}`);
  console.error(`Caught exception: ${err}, origin: ${origin}`);
  process.exit(1);
});

export default app;
