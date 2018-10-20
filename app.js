var express = require("express");
var path = require("path");
var app = express();
var db = require("./db");
var User = require("./models/user");
var passport = require("passport");
var localStrategy = require("passport-local").Strategy;
var userRouter = require("./routes/usersRoutes");
var expressValidator = require("express-validator");
var bodyParser = require("body-parser");
var flash = require("connect-flash");
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");


// For session Management
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);

// To set ejs as the templating engine
app.set("view engine", "ejs");


// To set the path from where the views will be rendered
app.set("views", path.join(__dirname + "/views")); // views is also the default directory btw

// Serving static files like css, images etc.
app.use(express.static(__dirname + "/public"));

// Use body parser to parse x-www-form-urlencoded data which is the data submitted by form
app.use(bodyParser.urlencoded({ extended: false }));

// Parse body to JSON
app.use(bodyParser.json());

// Use connect-flash
// app.use(flash());

// Session
// app.use(session({
//   secret : "itachiuchiha",
//   maxAge : 10 * 24 * 60 * 1000,
//   resave : true,
//   saveUninitialized : false,
//   store : new MongoStore({mongooseConnection : mongoose.connection})
// }));








// Routing
app.get("/", (req, res) => {
  res.render("home", {count : ""});
})

app.use("/users", userRouter);




app.listen(3000, () => {
  console.log("Listening to port 3000");
});
