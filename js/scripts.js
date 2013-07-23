var app = angular.module("app", []).config(function($routeProvider){
	$routeProvider.when('login', {
		templateURL: 'login.html',
		controller: 'LoginController'
	});

	$routeProvider.otherwise( redirectTo: '/login');
});

app.controller('LoginController', function(){
	//alert('Trying to login anna!! B-)');
});