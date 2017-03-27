angular.module("RecipeApp")

.controller("ThisRecipeController", ["$scope", "PassFood", "GetFood", "$window", function ($scope, PassFood, GetFood, $window) {

    var recipeId = PassFood.passRID()

    GetFood.thisRecipe(recipeId).then(function (response) {
        $scope.thisRecipe = response.data.recipe;
        console.log($scope.thisRecipe);
    })

    $scope.addToFavorites = function () {
        GetFood.addRecipeToMyList($scope.thisRecipe);
    }

    $scope.tweetThis = function () {
        $window.open("http://twitter.com/home?status=" + "Hey guys check out this awesome recipe!" + " " + $scope.thisRecipe.source_url);
    }

}])