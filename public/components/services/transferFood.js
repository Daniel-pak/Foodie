angular.module("RecipeApp")

.service("PassFood", function () {

    this.id;
    this.searchWord;

    this.savingRID = function (rId) {
        this.id = rId;
    }
    
    this.passRID = function() { 
        return this.id;
    }
    
    this.searchWord = function(searchWord) { 
        this.searchWord = searchWord;
    }
    
    this.passSearchWord = function() { 
        return this.searchWord
    }

})