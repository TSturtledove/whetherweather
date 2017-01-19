// const app = angular.module("overweather", ["ngRoute"])
//
// app.config(function($routeProvider, $locationProvider) {
//   $locationProvider.hashPrefix("");
//
//   $routeProvider
//   .when("/", {
//     controller: "mainWeather",
//     templateUrl: "main.html" //could also change to just "template" and type out the html here
//   })
//   .when("/", {
//     controller: ""
//   })
// })


// angular.module("overweather", ["ngRoute"]) //makes
//
// angular.module("overweather") //calls


// could also chain these like, but when you chain it like this you can't
// have the controllers in a separate files unless you reference the module like
// this: angular.module("overweather").controller()
angular
  .module("overweather", ["ngRoute"])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
    .when("/", {
      controller: "mainWeather",
      templateUrl: "main.html"
    })
    .when("/weather/:zipcode", {
      controller: "weatherzip",
      templateUrl: "weather.html"
    })
  })
  .controller("mainWeather", function($scope, $location) {
    $scope.greeting = "hello all you peoples on the other side of the screen"
    $scope.getweather = function() {
      $location.url(`/weather/${$scope.zip}`)
    }
  })
.controller("weatherzip", function($scope, $http, $routeParams) {


  // if using $http instead of a factory


  $http.get(`http://api.wunderground.com/api/b0b52efaf85246e2/conditions/q/${$routeParams.zipcode}.json`)
  .then(function(respose) {
    return respose.data.current_observation.temperature_string
  }).then(function(temp) {
    $scope.temp =temp
  })


// could also do it this way
// .then(function(respose) {
//   return {
//     temp: respose.data.current_observation.temperature_string,
//     city: respose.data.current_observation.display_location.full,
//
//   }
// }).then(function(weather) {
//   $scope.temp = weather.temp
// })


//if using a factory write
    // weatherFactory
    // .getweather($routeParams.zipcode)


})

//
// .factory("weatherFactory", function($http) {
//   return {
//     getweather (zip) {   //give you "getweather: function()"
//
//     }
//   }
// }
