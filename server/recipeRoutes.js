var express = require("express");
var recipesRoutes = express.Router();
var request = require("request");

recipesRoutes.get("/food", function (req, res) {
    request("http://food2fork.com/api/search?key=6d05eac0a6714496324f866d0f413653", function (error, response, body) {
        res.send(body);
    })
})

recipesRoutes.get("/food/:id", function (req, res) {

    var id = req.params.id
    request(`http://food2fork.com/api/get?key=6d05eac0a6714496324f866d0f413653&rId=${id}`, function (error, response, body) {
        res.send(body);
    })

})

recipesRoutes.get("/home/:type", function (req, res) {
    var type = req.params.type;

    request(`http://food2fork.com/api/search?key=6d05eac0a6714496324f866d0f413653&q=${type}`, function (error, response, body) {
        res.send(body);
    })

})

var myRecipes = [];

recipesRoutes.post("/myRecipes", function (req, res) {
    var object = req.body;
    var id = object.recipe_id;;
    for (var i = 0; i < myRecipes.length; i++) {
        if (myRecipes[i].recipe_id === id) {
            res.status(406).send({
                message: "This item was already added!"
            })
        }
    }
    myRecipes.push(object);
    res.send(object);
})

recipesRoutes.get("/myRecipes", function (req, res) {
    res.send(myRecipes);
})

recipesRoutes.delete("/myRecipes/:id", function (req, res) {

    var id = req.params.id;
    for (var i = 0; i < myRecipes.length; i++) {
        if (myRecipes[i].recipe_id === id) {
            myRecipes.splice(i, 1);
            res.send({
                message: "Item deleted!"
            });
        }
    }
})

recipesRoutes.get("/search/:search", function (req, res) {

    var searchWord = req.params.search;
        request(`http://food2fork.com/api/search?key=6d05eac0a6714496324f866d0f413653&q=${searchWord}`, function (error, response, body) {
            res.send(body);
        })

})


module.exports = recipesRoutes;