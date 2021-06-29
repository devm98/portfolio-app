import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  await mongoose.connect

  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    dbName: "portfolios-minh"
  });
  return handler(req, res);
};

export default connectDB;
