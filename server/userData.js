const mongoose = require("mongoose");
// schema defines the structure of our data so we can save users to the database in a uniform format
const user = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("User", user);
