//create email model and schema
let mongoose = require('mongoose');
let validator = require('validator')
let emailSchema = new mongoose.Schema({
    email: String
  })
  
  module.exports = mongoose.model('Email', emailSchema)
  let EmailModel = require('server/index.js')

  let msg = new EmailModel({
    email: 'ada.lovelace@gmail.com'
  })
  let emailSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: (value) => {
        return validator.isEmail(value)
      }
    }
  })
  module.exports = mongoose.model('Email', emailSchema)

//Setup done --below are features
//save email
msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
//fetch email 
   EmailModel
  .find({
    email: 'ada.lovelace@gmail.com'   // search query
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
  //update email
  EmailModel
  .findOneAndUpdate(
    {
      email: 'ada.lovelace@gmail.com'  // search query
    }, 
    {
      email: 'theoutlander@live.com'   // field:values to update
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
  //delete email
  EmailModel
  .findOneAndRemove({
    email: 'theoutlander@live.com'
  })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error(err)
  })