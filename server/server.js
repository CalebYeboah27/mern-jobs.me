import express from "express";
import dotenv from "dotenv";

// routes
import authRouter from "./routes/auth.router.js";
import jobsRouter from "./routes/jobs.router.js";

// use middleware
import notFoundMiddleWare from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

import startServer from "./db/startServer.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello from Jobify api</h1>");
});

app.get("/error", (req, res) => {
  throw new Error("There was an error");
});

app.use("/api/v1", authRouter);
app.use("/api/v1", jobsRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

startServer(app);
