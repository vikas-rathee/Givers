var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var validate = require("mongoose-validator");

var tutorSchema = new Schema({
  subject : String,
  topic : String,
  location : String,
  stime : Date

});

var User = module.exports = mongoose.model("User", userSchema);
