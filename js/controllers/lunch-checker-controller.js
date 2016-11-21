(function(){
  'using strict';

  angular.module('LunchChecker')
  .controller('LunchCheckerController', LunchCheckerController);
  //protect code from minifaction
  LunchCheckerController.$inject = ['$scope'];
  function LunchCheckerController($scope){
    //scope variables
    $scope.dishes = "";
    $scope.dishesArray = [];
    $scope.errorMessage = "";
    $scope.redErrorMessageClass = true;
    //button click handler
    $scope.checkDishes = function(){
      $scope.dishesArray = getFilteredElements($scope.dishes.split(','));
      if($scope.dishesArray.length == 0){
        $scope.errorMessage = "Please enter data first";
        $scope.redErrorMessageClass = true;
      }else if ($scope.dishesArray.length <= 3) {
        $scope.errorMessage = "Enjoy";
        $scope.redErrorMessageClass = false;
      }else if($scope.dishesArray.length > 3){
        $scope.errorMessage = "Too much";
        $scope.redErrorMessageClass = false;
      }
    };
    //helper function for filtering user input of dishes
    function getFilteredElements(array){
      var temp = [];
      for(var index in array){
        var value = array[index];
        temp.push(value.trim());
      }
      return temp.filter(n => n != "");
    };
    //invoke first time to set error message
    $scope.checkDishes();
  };
})();
