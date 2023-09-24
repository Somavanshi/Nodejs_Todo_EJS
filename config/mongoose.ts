import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/todo-tasks');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Mongoose Connected successfully");
});