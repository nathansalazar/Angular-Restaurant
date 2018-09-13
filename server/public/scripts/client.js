

let foodApp = angular.module('FoodApp',[]);

foodApp.controller('FoodController', ['$window',function($window){
    let self = this;
    self.foods = [{name: 'taco', deliciousness: 81}];
    self.inputName = '';
    self.inputDeliciousness = '';

    self.click = function(){
        if(self.inputDeliciousness){//uses truthiness of non-zero numbers
            self.foods.push({name: self.inputName, deliciousness: self.inputDeliciousness});
        }
        else{//uses truthiness of undefined
            $window.alert('Rating must be between 1 and 100.');
        }
        
    }
}]);