const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/backendDB")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("DB connection error:", error);
  });
