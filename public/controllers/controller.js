var app = angular.module('contactlistApp',[]);
app.controller('AppCtrl', AppCtrl)

function AppCtrl($scope, $http){
	$scope.disableAdd = false;
var refresh = function(){
	$http.get("/contactlist").success(function(response){
		$scope.contactlist = response;
		$scope.contact = "";
	});

};

refresh();

$scope.addContact = function(){
    $http.post("/contactlist", $scope.contact).success(function(response){
    	refresh();
    });
};

$scope.remove = function(id){
    $http.delete("/contactlist/" + id).success(function(response){
    	refresh();
    });
};

$scope.edit = function(contact){
	$scope.contact = contact;
	$scope.disableAdd = true;
 
};

$scope.update = function(id){
    $http.put("/contactlist/" + $scope.contact._id, $scope.contact).success(function(response){
    	refresh();
    });
};

$scope.deSelect = function(id){
	$scope.contact = "";
	$scope.disableAdd = false;
	} 

}
