var express = require("express");
var app = express(); 
var bodyParser = require("body-parser");
var request = require("request");
var path = require("path");


app.use(express.static(path.join(__dirname, "..", "public")));

app.use(bodyParser.json()); 

app.use(require("./recipeRoutes"));


app.listen(8080, function() { 
    console.log("Recipe up and fully functioning --- Ready to grab your information! (>'-')>")
})