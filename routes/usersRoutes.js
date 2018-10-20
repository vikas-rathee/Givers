var express = require("express");
var router = express.Router();
var User = require("../models/user");
var _ = require("lodash");
var bcrypt = require('bcryptjs');
var session = require("express-session");



router.get("/signup", (req,res) => {
  var errObj = new errorObj();
  res.render("signup", {err : errObj});
});




router.get("/login", (req,res) => {
  res.render("login");
});


router.post("/signup",(req, res) => {

  var newUser = new User({
    name : req.body.name,
    contact : req.body.contact,
    email : req.body.email,
    pass : req.body.pass
  });

  newUser.save((err, newUser) => {
    if(err)
    {
      var errObj = new errorObj();
      _.forOwn(err.errors, (value, key) => {
        if(value.kind === "required")
          errObj[key] = "This Field cannot be empty";
        else
          errObj[key] = value.message;
      })
      res.render("signup", {err : errObj});
      return;
    }
    console.log(newUser);
    res.redirect("/users/login");
  })

});


module.exports = router;




function errorObj(){
    this.name ="";
    this.pass = "";
    this.contact = "";
    this.email = "";
}
