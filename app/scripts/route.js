(function() {
  'use strict';

  angular
    .module('neoreachtest', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: '/views/home.html'
        })
        .when('/' {
          redirectTo: '/home'
        });
    });
})();
