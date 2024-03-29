const mongoose = require("mongoose");
// Schema defines the structure of our data so we can save users to the database in a uniform format
const user = new mongoose.Schema({
  username: String,
  password: String,
  palettes: [
    {
      outerGradientColor: String,
      innerGradientColor: String,
      ringColor: String,
      ringName: String,
    },
  ],
});

module.exports = mongoose.model("User", user);
