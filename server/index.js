const path = require("path");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, "../client/build")));

//Import MongoClient as MongoDB module exports MongoClient which allow us to connect to a MongoDB database.
const { MongoClient } = require("mongodb");

//Creating a constant for conection to URI or config vars
const uri = process.env.HALOGEN_WEB;

//An instance of MongoClient after adding config vars
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/showtracker", (req, res) => {
  client.connect((err) => {
    const dataTable = client.db("showtracker");
    dataTable
      .collection("shows")
      .find({})
      .toArray()
      .then((shows) => {
        if (err) throw err;
        return res.json(shows);
      })
      .then(() => client.close());
  });
});

app.get("/api", (req, res) => {
  //json stands for javascript object notation (data type)
  res.json({ message: "Halogen under construction" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
