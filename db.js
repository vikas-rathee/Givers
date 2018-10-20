var mongoose = require("mongoose");
var DBURI = "mongodb://admin:admin1@ds151612.mlab.com:51612/auth";

mongoose.connect(DBURI , { useNewUrlParser: true });

mongoose.connection.on("connected",() => {
  console.log("Connected to the Database");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
