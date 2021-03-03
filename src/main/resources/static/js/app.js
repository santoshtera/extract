angular.module('myApp', ['ngAnimate']);

angular.module('myApp')
.controller('myController', function ($scope, $http) {

  $scope.cart = [];
  $scope.showConfirm = false;
  var findItemById = function(items, itemId) {
    return _.find(items, function(item) {
      return item.itemId === itemId;
    });
  };
  
  $scope.getCost = function(item) {
    return item.qty * item.price;
  };

  $scope.addItem = function(itemToAdd) {
    var found = findItemById($scope.cart, itemToAdd.itemId);
    if (found) {
      found.qty += itemToAdd.qty;
    }
    else {
      $scope.cart.push(angular.copy(itemToAdd));}
  };
  
  $scope.getTotal = function() {
    var total =  _.reduce($scope.cart, function(sum, item) {
      return sum + $scope.getCost(item);
    }, 0);
    console.log('total: ' + total);
    return total;
  };
  
  $scope.clearCart = function() {
    $scope.cart.length = 0;
    $scope.name='';
    $scope.address='';
    $scope.card = '';
    $scope.showConfirm = true;
  };
  
  $scope.getMenu = function () {
	  
	  $http.get("/getMenu").
      success(function (response) {
    	  $scope.menu = response;
    	  console.log($scope.menu);
      }).
      error(function () {
          alert("Getting menu failed, please try again");
      });
  };
  
  
  var orderData = {
		 name: "fname",
		 email: "email",
		 address: "StAddress",
		phone: "1231231231",
		itemsInfo: $scope.cart
  };
  
 $scope.placeOrder = function () {
	  
	  $http.post("/postOrder", orderData).
      success(function (response,) {
    	  $scope.orderConfirmNum = response.orderNum;
    	  $scope.showConfirm = true;
    	  console.log($scope.orderConfirmNum);
      }).
      error(function () {
          alert("Order failed, please try again");
      });
  };
  
});
