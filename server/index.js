const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  //json stands for javascript object notation (data type)
  res.json({ message: "Halogen under construction" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
