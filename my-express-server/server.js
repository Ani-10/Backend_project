//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: sundar1anindya2@gmail.com");
});

app.get("/about", function(req, res){
  res.send("I am Ani, a software engineer");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</li><li>Code</li><li>Travel</li></ul>");
});

app.listen(3000, function(){
  console.log("Server start on port 3000");
});
