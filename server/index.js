const express = require("express");
const path = require("path");
require("dotenv").config();

const { MongoClient } = require("mongodb");
const dbUri = process.env.MONGO_URI;
const client = new MongoClient(dbUri, { useUnifiedTopology: true });

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/test-data", (req, res) => {
  client.connect((err) => {
    const collection = client.db("test_db").collection("users");

    collection
      .find({})
      .toArray()
      .then((allUsers) => {
        return res.json(allUsers)
      })
      .then(() => client.close())
  });
});

app.get("/api", (req, res) => {
  //json stands for javascript object notation (data type)
  res.json({ message: "Halogen under construction" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
