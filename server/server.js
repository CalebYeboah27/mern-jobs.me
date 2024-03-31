import express from "express";
import dotenv from "dotenv";

import notFoundMiddleWare from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

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

mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready");
  });
  
  mongoose.connection.on("error", (err) => {
    console.error(err);
  });
  async function startServer() {
    await mongoose.connect(process.env.MONGO_URI, {});
  
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  }
  

startServer()
