import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const connectDB = (url) => {
    return mongoose.connect(url)
}

export default connectDB