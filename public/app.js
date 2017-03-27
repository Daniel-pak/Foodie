angular.module("RecipeApp", ["ngRoute"])

.controller("MainController", ["$scope", "PassFood", "$location",function ($scope, PassFood, $location) {
    $scope.searchFood = function (searchWord) {
        PassFood.searchWord = searchWord;
        
        $location.path(`/search/${searchWord}`);
        $scope.newSearch = "";
    }
}])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            controller: "HomeController",
            templateUrl: "components/home/home.html"
        })
        .when("/topRated", {
            controller: "TopRatedController",
            templateUrl: "components/topRated/topRated.html"
        })
        .when("/thisRecipe", {
            controller: "ThisRecipeController",
            templateUrl: "components/thisRecipe/thisRecipe.html"
        })
        .when("/myRecipes", {
            controller: "MyRecipesController",
            templateUrl: "components/myRecipes/myRecipes.html"
        })
        .when("/search/:search", {
            controller: "SearchController",
            templateUrl: "components/search/search.html"
        })
        .otherwise({
            redirectTo: "/home"
        })
}])