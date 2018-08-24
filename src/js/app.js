angular.module('helloWorldApp', [
    'ngRoute',
    'ngResource'
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            });
    }
]);
