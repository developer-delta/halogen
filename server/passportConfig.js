//For all the configuration for passports so we can authenticate a user
const User = require("./userData");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    //Defining local strategy for passport. So when running it, we get username and password in a done parameter
    //Done parameter is like we have completed this step so let go to the next step
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false); //null is the error and false is the user
        //if there is a user, then compare it with bcrypt's password
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          //if true, return that user and run the done function otherwise comparision fails (password is not same)
          if (result) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );
  //Passport requires serializeUser and deserializeUser
  //serializeUser stores a cookie inside the browser
  passport.serializeUser((user, cb) => {
    cb(null, user.id); //Take the user that we got from our local strategy and create a cookie with the user.id inside of it
  });

  //deserializeUser takes that cookie and unravles it and returns a user from it
  passport.deserializeUser((id, cb) => {
    //We want to find the user in the database with the ID matching the cookies ID
    //If there is a user, then it return the callback with the user
    User.findOne({ _id: id }, (err, user) => {
      //Only going to send user information for getUser method (fron MongoDB)
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};
