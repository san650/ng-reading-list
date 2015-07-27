'use strict';

/**
 * @ngdoc overview
 * @name readingListApp
 * @description
 * # readingListApp
 *
 * Main module of the application.
 */
angular
  .module('readingListApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'readingListFilters',
    'readingListComponents'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
