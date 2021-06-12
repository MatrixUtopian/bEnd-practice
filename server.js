//jshint esversion:6
const express = require("express");
const app = express();

app.get("/", function(req ,res){
  res.send("<h1>hello</h1>");
});

app.listen(3000  , function(){
  console.log("server started");
});
