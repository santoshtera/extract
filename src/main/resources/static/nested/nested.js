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
    
    var formData = {
  		itemsInfo: $scope.tableItem	
    };
    
    $scope.submit = function () {
  	  
  	  $http.post("/workOrderDetails", formData).
        success(function (response) {
      	  $scope.response = response;
      //	this.response.formData.itemsInfo = [];
      	  console.log($scope.response);
      	  
        }).
        error(function () {
        	// $formData.itemsInfo = [];
            alert("Submit Form failed, please try again");
           
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
