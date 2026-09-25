const mongoose = require("mongoose");

require("dotenv").config({
  path: "../../../.env",
  quiet: true
});

console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
 .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
