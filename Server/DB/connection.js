import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(process.env.DATABASE)
    .then((result) => {
      console.log(`DB Conncted`);
    })
    .catch((err) => {
      console.log(`Fail To Connect DB ... ${err}`);
    });
};

export default connectDB;