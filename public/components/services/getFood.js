angular.module("RecipeApp")

.service("GetFood", ["$http", function ($http) {

    this.topRatedFood = function () {
        return $http.get("/food");
    }
    
    this.thisRecipe = function(rId) { 
        return $http.get(`/food/${rId}`);
    }
    
    this.returnTypeRecipes = function(type) { 
        return $http.get(`/home/${type}`);
    }
    
    this.addRecipeToMyList = function(food) { 
        return $http.post('/myRecipes', food);
    }
    
    this.myRecipes = function() { 
        return $http.get("/myRecipes");
    }
    
    this.deleteThisRecipe = function(id) { 
        return $http.delete(`/myRecipes/${id}`)
    }
    
    this.getSearchedFood = function(searchWord) {
        return $http.get(`/search/${searchWord}`)
    }
    
}])