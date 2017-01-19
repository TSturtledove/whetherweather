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
// have the controllers in a separate file
angular
  .module("overweather", ["ngRoute"])
  .config(function($routeProvider, $locationProvider){
    $routeProvider.when("/", {
      controller: "mainWeather",
      templateUrl: "main.html"
    })
    .when("/weather", {
      controller: "weather",
      templateUrl: "weather.html"
    })
  })
  .controller("mainWeather", function($scope) {
    $scope.greeting = "hello all you peoples on the other side of the screen"
  })
