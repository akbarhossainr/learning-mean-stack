var myApp = angular.module('myApp', []);

myApp.controller('ContactListController', function($scope, $http){
	$http.get('contactlist').then(function (response) {
		console.log(response);
		$scope.contactlist = response.data;
	});
});