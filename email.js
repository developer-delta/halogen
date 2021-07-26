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

