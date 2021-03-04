/**
 * The controller doesn't do much more than setting the initial data model
 */
angular.module("demo").controller("NestedListsDemoController", function($scope) {

	$scope.tableItem = [];
    $scope.models = {
        selected: null,
        templates: [
            {name: "GetRDMS", id: 1, type: "item"},
            {name: "ExecuteSP", id: 2, type: "item"},
            {name: "ExecuteCommand", type: "item",id: 3},
            {name: "CreateCSV", id: 4, type: "item"},
            {name: "SendEmail", id: 5, type: "item"}
        ],
        dropzones: {
            "A": [
                {
                    "name": "GetRDMS",
                    "type": "item",
                    "id": 1,
                },
                {
                    "name": "ExecuteSP",
                    "type": "item",
                    "id": "2"
                },
                {
                    "name": "ExecuteCommand",
                    "type": "item",
                    "id": "3"
                },
                {
                    "name": "CreateCSV",
                    "type": "item",
                    "id": "4"
                }
            ]
        }
    };

    $scope.saveForLater = function(formItem){
    	console.log(formItem);
    	$scope.tableItem.push(angular.copy(formItem));
    	this.formItem = '';
    	
    }
    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});