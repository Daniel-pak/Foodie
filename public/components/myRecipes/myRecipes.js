angular.module("RecipeApp")

.controller("MyRecipesController", ["$scope", "GetFood", "PassFood", function ($scope, GetFood, PassFood) {

    GetFood.myRecipes().then(function (response) {
        $scope.myRecipes = response.data;
    })

    $scope.deleteRecipeItem = function (index) {
        var id = $scope.myRecipes[index].recipe_id;
        GetFood.deleteThisRecipe(id).then(function (response) {
            console.log(response);
        })
        $scope.myRecipes.splice(index, 1);
    }

    $scope.getThisRecipe = function (index) {
        var recipeId = $scope.myRecipes[index].recipe_id
        PassFood.savingRID(recipeId);
    }

}])