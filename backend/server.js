require("dotenv").config();

const fs = require("fs");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Data = require("./model/Data");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", true);

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"));

app.get("/getAllData", async (req, res) => {
  let limit = 50;
  let response = await Data.find().limit(limit);
  res.json({ data: response, status: "success" });
});

// const data = JSON.parse(fs.readFileSync("./jsondata.json", "utf-8"));

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

// importData();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
