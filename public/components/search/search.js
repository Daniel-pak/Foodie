angular.module("RecipeApp")

.controller("SearchController", ["$scope", "PassFood", "GetFood", function ($scope, PassFood, GetFood) {

    var searchWord = PassFood.passSearchWord()

    GetFood.getSearchedFood(searchWord).then(function (response) {
        $scope.searchedFood = response.data.recipes;
    })

    $scope.getThisRecipe = function (index) {
        var recipeId = $scope.searchedFood[index].recipe_id
        PassFood.savingRID(recipeId);
    }

    $scope.addToFavorites = function (index) {
        GetFood.addRecipeToMyList($scope.searchedFood[index]);
    }


}])