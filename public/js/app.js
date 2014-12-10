'use strict';
var app = angular.module('forh', ['ngRoute']);

// Route configs
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'    
    })
    .when('/boardmembers',{
        templateUrl: 'partials/boardmembers.html',
        controller: 'BoardMembersController'
    })
    .when('/member/:id', {
        templateUrl: 'partials/member.html',
        controller: 'MemberDetailController'
    })
    .when('/contact',{
        templateUrl: 'partials/contact.html',
        controller: 'ContactController'
    })
    .otherwise({ redirectTo: '/' });
}]);

// Controllers
app.controller('HomeController', [ '$scope', '$rootScope', function($scope, $rootScope){    
    $rootScope.showBanner = true;
}]);

app.controller('BoardMembersController', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.showBanner = false;
}]);

app.controller('ContactController', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.showBanner = false;
}]);

app.controller('HomeMembersController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
    $scope.currentBloodType = 'A-';

    $http.get('/getavailableuserlist').
      success(function(data, status, headers, config) {
        console.log(data);
        
        // this callback will be called asynchronously
        // when the response is available
      }).
      error(function(data, status, headers, config) {
        console.log(data);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

    $scope.members = [
        {
            name: 'Prajwal Simkhada',
            gender: 'Male',
            address: 'Machhindra Bahal, Lalitpur',
            contact: '9814131415'
        },
        {
            name: 'Sudip Bazimaya',
            gender: 'Male',
            address: 'Balkumari, Lalitpur',
            contact: '9814132555'
        },
        {
            name: 'Merina Shrestha',
            gender: 'Female',
            address: 'Gyaneshwor, Kathmandu',
            contact: '98141123123'
        },
        {
            name: 'Paul Thompson',
            gender: 'Male',
            address: 'Jwagal, Lalitpur',
            contact: '123123123'
        }
    ];

    $scope.getMember = function(bloodType){
        alert(bloodType);
    };
}]);

app.controller('MemberDetailController', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){
    $rootScope.showBanner = false;
    // alert($route);
}]);