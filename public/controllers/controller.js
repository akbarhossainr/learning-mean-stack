var myApp = angular.module('myApp', []);

myApp.controller('ContactListController', function($scope, $http){
	var getContactList = function () {
		$http.get('contactlist').then(function (response) {
			console.log(response.data);
			$scope.contactlist = response.data;
		});
	};

	getContactList();

	$scope.submit = function () {
		console.log($scope.contact._id);

		if ($scope.contact._id != undefined) {
			$http.put('contactlist/'+$scope.contact._id, $scope.contact).then(function (response) {
				console.log(response.data);
				$scope.contact = {};
			});
		}else{
			$http.post('contactlist', $scope.contact).then(function (response) {
				console.log(response.data);
				$scope.contact = {};
			});
		}
		getContactList();
	};

	$scope.deleteContact = function (id) {
		$http.delete('contactlist/'+id).then(function (response) {
			console.log(response.data);
		});
		getContactList();
	};

	$scope.editContact = function (id) {
		$http.get('contactlist/'+id).then(function (response) {
			console.log(response.data);
			var contact = response.data;
			$scope.contact = contact;

		});
	};

	$scope.reset = function () {
		$scope.contact = {};
	};

});