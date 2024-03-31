import connectDB from "./connect.js";

const PORT = process.env.PORT || 5000;

const startServer = async (expressApp) => {
  try {
    await connectDB(process.env.MONGO_URI);
    expressApp.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  } catch (err) {
    console.error(err);
  }
};

export default startServer;
