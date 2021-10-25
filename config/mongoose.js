const mongoose = require("mongoose");
const DB = process.env.DATABASE;

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};
connectDB();
