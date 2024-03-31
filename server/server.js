import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import notFoundMiddleWare from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import connectDB from "./db/connect.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello from Jobify api</h1>");
});

app.get("/error", (req, res) => {
  throw new Error("There was an error");
});

app.use(notFoundMiddleWare);

app.use(errorHandlerMiddleware);

mongoose.set("strictQuery", true);

mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready");
  });

  mongoose.connection.on("error", (err) => {
    console.error(err);
  });

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  } catch (err) {
    console.error(err);
  }
};

startServer();
