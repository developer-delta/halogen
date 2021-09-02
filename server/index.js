const path = require("path");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors"); //for security
const passport = require("passport"); //for entire authentication library
const passportLocal = require("passport-local").Strategy; //passportLocal as a strategy --- local username and password
const cookieParser = require("cookie-parser"); //parse all cookies that we use for the authentication
const bcrypt = require("bcryptjs"); //for hashing the passwords
const session = require("express-session"); //for our Express sessions
const User = require("./models/User");

//Getting information from mockResponse.json
const mockResponse = require("../mockResponse.json");

const PORT = process.env.PORT || 3001;
const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";
const sessionSecret = process.env.SESSION_SECRET;

const app = express();
app.use(express.static(path.resolve(__dirname, "../client/build")));
//Mongoose setup code below

// getting-started.js
mongoose.connect(
  process.env.HALOGEN_WEB || "mongodb://localhost:3001/showtracker",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongoose Is Connected");
});

//----------------------------------------- START OF MIDDLEWARE-----------------------------------------------

app.use(express.json()); //For middleware to parse incoming requests as json
app.use(express.urlencoded({ extended: true })); //For middleware to recogizes the incoming Request object as strings or arrays
app.use(
  cors({
    //To allow requests to our web server from another domain
    origin: clientUrl, // <-- location of the react app we're connecting to
    credentials: true,
  })
);
app.enable("trust proxy");
app.use(
  session({
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true,
    proxy: true,
  })
);
app.use(cookieParser(sessionSecret));
app.use(passport.initialize()); //Intitializes passport to make this fully functional
app.use(passport.session()); //Intitializes the session that is part of passport
require("./passportConfig")(passport); //Pass the instance of passport that we have used as a parameter

//----------------------------------------- END OF MIDDLEWARE-----------------------------------------------

//----------------------------------------- START OF ROUTES-------------------------------------------------

//Uses res.json to return mockResponse as json
app.get("/profiles", function (req, res, next) {
  res.json(mockResponse);
});

//------Routes for Passport
//Implement local strategy that we defined in passportConfig.js and autenticate users (login users from the authentication method)
//Have their request in a response and next parameter is to move on to the next route
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next); //Have their request in a response and next parameter is to move on to the next route
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10); //Hash password to eliminate plain text password
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

app.get("/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  console.log(req.user);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});

//----------------------------------------- END OF ROUTES---------------------------------------------------

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
