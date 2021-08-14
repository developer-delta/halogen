const mongoose = require("mongoose");
//schema allows us to to post users to the database
const user = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("User", user);
