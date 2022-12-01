const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/Automoviles");
  console.log("MongoDB Connected");
};

console.log("Paila")
module.exports = { connectDB };
