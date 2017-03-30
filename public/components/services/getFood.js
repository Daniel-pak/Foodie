angular.module("RecipeApp")

.service("GetFood", ["$http", function ($http) {

    this.topRatedFood = function () {
        return $http.get("foodie/food");
    }
    
    this.thisRecipe = function(rId) { 
        return $http.get(`foodie/food/${rId}`);
    }
    
    this.returnTypeRecipes = function(type) { 
        return $http.get(`foodie/home/${type}`);
    }
    
    this.addRecipeToMyList = function(food) { 
        return $http.post('foodie/myRecipes', food);
    }
    
    this.myRecipes = function() { 
        return $http.get("foodie/myRecipes");
    }
    
    this.deleteThisRecipe = function(id) { 
        return $http.delete(`foodie/myRecipes/${id}`)
    }
    
    this.getSearchedFood = function(searchWord) {
        return $http.get(`foodie/search/${searchWord}`)
    }
    
}])