var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var validate = require("mongoose-validator");

var emailValidator = [
  validate({
    validator : "isEmail",
    message : "Must be an valid Email"
  })
];

var numberValidator = [
  validate({
    validator : (num) => {
      return /^\d{10}$/.test(num);
    },
    message : "Mobile Number should be of 10 digits"
  })
];

var userSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  contact : {
    type : Number,
    required : true,
    validate : numberValidator
  },
  email : {
    type : String,
    required : true,
    unique : true,
    validate : emailValidator
  },
  pass : {
    type : String,
    required : true
  }
});

var User = module.exports = mongoose.model("User", userSchema);
