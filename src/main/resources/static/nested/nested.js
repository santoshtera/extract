/**
 * The controller doesn't do much more than setting the initial data model
 */
angular.module("demo").controller("NestedListsDemoController", function($scope,$http) {

	$scope.tableItem = [];
    $scope.models = {
        selected: null,
        templates: [
            {name: "GetRDMS",type: "item"},
            {name: "ExecuteSP", type: "item"},
            {name: "ExecuteCommand", type: "item"},
            {name: "CreateCSV",type: "item"},
            {name: "SendEmail",type: "item"}
        ],
        dropzones: {
            "A": [
            	{
                    "name": "GetRDMS",
                    "type": "item",
                    "id": 9
                } 
            ] 
        }
    };

    $scope.saveForLater = function(formItem){
    	console.log(formItem);
    	$scope.tableItem.push(angular.copy(formItem));
    	this.formItem = '';
    }

    $scope.open = function () {

        var modalInstance = $modal.open({
          templateUrl: 'modalTemplate.html',
          controller: 'ModalController',
          resolve: {
              msg: function () {
                return $scope.msg;
              }
          }
         
        });
  
        modalInstance.result.then(function () {
            $log.info('Modal Okay');
            $scope.msg = '';
        }, function () {
          $log.info('Modal dismissed ');
          $scope.msg = '';
        });
      };
    
    $scope.submit = function () {
       
        var formData = {
        itemsInfo: $scope.tableItem	
         };
  
  	  $http.post("/workOrderDetails", formData).
        success(function (response) {
      	  $scope.response = response;
      //	this.response.formData.itemsInfo = [];
            console.log($scope.response);
            $scope.msg = "Successfull Update";
      	  $scope.open();
      	  
        }).
        error(function () {
        	// $formData.itemsInfo = [];
            $scope.msg = "Please Try again";
            $scope.open();
           
        });
    };
    
    var findItemById = function(items, itemId) {
        return _.find(items, function(item) {
          return item.id === itemId;
        });
      };
    
      
   $scope.getValuesFromTable = function (item) {
	   console.log(item);

	   var found = findItemById($scope.tableItem, item.id);
	    if (found) {
	    	console.log("in find  found" + found);
	    	
	    	this.formItem = angular.copy(found);
	    	$scope.foundItem = found;

	    	console.log("Present FormItem" + this.formItem);

	    	
	    }
	    else {
	    	console.log("in find  Not found");
	    	$scope.foundItem = '';
	    	}
	    
    }; 
    
    $scope.$watch($scope.formItem, function() {
        console.log("Watching formItem Change" + $scope.formItem)
    });

});

angular.module('demo').controller('ModalController', function ($scope, $modalInstance,msg) {
	
	
	$scope.message = msg;
  $scope.ok = function () {
	  
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});