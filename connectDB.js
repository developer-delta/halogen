if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//Import MongoClient as MongoDB module exports MongoClient which allow us to connect to a MongoDB database.
const { MongoClient } = require("mongodb");

//Creating a constant for conection to URI or config vars
const uri = process.env.HALOGEN_WEB;

//An instance of MongoClient after adding config vars
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const dataTable = client.db("test_db");
  dataTable
    .collection("users")
    .find({})
    .toArray((result) => {
      if (err) throw err;
      res.json(result);
      console.log(shows);
      db.close();
    });
});

module.exports = connectDB;

/* 
client.connect((err) => {
  const collection = client.db("showtracker").collection("shows");
  collection.find({}, (err) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.json(shows);
      console.log("MongoDB Connected...");
    }
    db.close();
  });
}); */
