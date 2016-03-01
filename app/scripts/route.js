(function() {
  'use strict';

  angular
    .module('neoreachtest', ['ngRoute', 'restangular'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: '/views/home.html',
          controller: 'SubmitController',
          controllerAs: 'submit'
        })
        .when('/', {
          redirectTo: '/home'
        });
    });
})();
