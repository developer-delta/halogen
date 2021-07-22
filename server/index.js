const path = require("path");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));
//Mongoose setup code below

// getting-started.js
const mongoose = require('mongoose');
mongoose.connect(process.env.HALOGEN_WEB || 'mongodb+srv://hnegash:AiVb0JWV7MOejVIt@halogen-west.d2kkg.mongodb.net/showtracker?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //Do we keep this kitty stuff or should we rewrite it?
  const kittySchema = new mongoose.Schema({
    name: String
  });
  const Kitten = mongoose.model('Kitten', kittySchema);
  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'
  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }
  
  const Kitten = mongoose.model('Kitten', kittySchema);
  const fluffy = new Kitten({ name: 'fluffy' });
  fluffy.speak(); // "Meow name is fluffy"
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })
  Kitten.find({ name: /^fluff/ }, callback);

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
