const path = require("path");
const express = require("express");
require("dotenv").config();

//Getting information from mockResponse.json
const mockResponse = require("../mockResponse.json");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, "../client/build")));
//Mongoose setup code below

// getting-started.js
const mongoose = require("mongoose");
mongoose.connect(
  process.env.HALOGEN_WEB || "mongodb://localhost:3001/showtracker",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("It's working!");
});

app.get("/api", (req, res) => {
  //json stands for javascript object notation (data type)
  res.json({ message: "Halogen under construction" });
});

//Uses res.json to return mockResponse as json
app.get("/profiles", function (req, res, next) {
  res.json(mockResponse);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
