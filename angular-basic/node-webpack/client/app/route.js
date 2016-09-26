angular.module('app')
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/dashboard',
            {
            templateUrl:"demo/dashboard/dashboard.html",
            controller:'dashboardController'
            })
            .when('/location',
            {
                templateUrl:"demo/location/location.html",
                controller:'locationController'
            })
            .otherwise({redirectTo: '/dashboard'});

}]);