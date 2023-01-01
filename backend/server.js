const fs = require("fs");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Data = require("./model/data");

const app = express();

app.use(express.json());
app.use(cors());

// connect to mongodb
mongoose
  .connect(
    "mongodb+srv://rhodzeey:12345@cluster0.tpb0e.mongodb.net/assignment?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connected"));

app.get("/", (req, res) => {
  res.send({
    title: "hello world",
  });
});

const data = JSON.parse(fs.readFileSync("./jsondata.json", "utf-8"));

console.log(data);

// import data to MongoDB
const importData = async () => {
  try {
    await Data.create(data);
    console.log("data successfully imported");
    // to exit the process
    process.exit();
  } catch (error) {
    console.log("error", error);
  }
};

importData();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
