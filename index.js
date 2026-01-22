const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;

app.use(express.json());
app.use(cors());

// ✅ DB connection
require("./connection");

// ✅ Model import
const BlogModel = require("./model/Blog");

// ✅ POST API (add data)
app.post("/add", async (req, res) => {
  try {
    const data = await BlogModel(req.body);
    await data.save();
    res.status(200).send({ message: "Data added successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
});

// ✅ GET API (fetch data)
app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
