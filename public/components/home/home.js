angular.module("RecipeApp")

.controller("HomeController", ["$scope", "GetFood", "PassFood", function ($scope, GetFood, PassFood) {

    $scope.clicked = false;

    $scope.getFoodType = function (type) {
        GetFood.returnTypeRecipes(type).then(function (response) {
            console.log(response.data);
            $scope.categoryItems = response.data.recipes
        });
    }

    $scope.resetFoodCategory = function () {
        $scope.categoryItems = "";
    }

    $scope.getThisRecipe = function (index) {
        var recipeId = $scope.categoryItems[index].recipe_id
        PassFood.savingRID(recipeId);
    }

    $scope.addToFavorites = function (index) {
        GetFood.addRecipeToMyList($scope.categoryItems[index]);
    }
    
}]);