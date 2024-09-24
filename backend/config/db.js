import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://eshaangupta33:8Ava5inMGYJ2VcfT@dinedash.qjjz5.mongodb.net/DineDash"
    )
    .then(() => console.log("DB Connected"));
};
