const User = require("./models/User");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, callback) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return callback(null, false); //null is for no error and false is the user
        //if there is a user, then compare the user's password with bcrypt's password
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result) {
            return callback(null, user);
          } else {
            return callback(null, false);
          }
        });
      });
    })
  );

  //serializeUser stores a cookie inside the browser
  passport.serializeUser((user, cb) => cb(null, user.id)); //Takes the user that we got from our local strategy and create a cookie with the user.id inside of it

  //deserializeUser takes that cookie and unravles it and returns a user from it
  //We want to find the user in the database with the ID matching the cookies ID
  passport.deserializeUser((id, cb) => User.findOne({ _id: id }, (err, user) => cb(err, { user })));

};
