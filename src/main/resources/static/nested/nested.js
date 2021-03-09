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
    
    // var findItemById = function(items, itemId) {
     //   return _.find(items, function(item) {
     //     return item.itemId === itemId;
    //    });
   //   };
  /**  $scope.getValuesFromTable = function (item) {
    	$scope.models.dropzones = _.findItemById(item, item.id, function(itemid){
  			if(itemid.isPresent()){
  			
  				return item;
  			}
  			
  			else item = [];
  		}
    }); **/
    
    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});
