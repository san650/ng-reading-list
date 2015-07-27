'use strict';

function filter(books, shelve) {
  return books.filter(function(e) {
    return e.shelves.indexOf(shelve) >= 0;
  });
}

angular
  .module('readingListComponents', [])
  .directive('shelve', [function() {
    return {
      restrict: 'E',
      templateUrl: 'views/shelve.html',
      scope: {
        title: '@',
        filter: '@',
        allBooks: '='
      },
      controller: ['$scope', function($scope) {
        $scope.books = filter($scope.allBooks, $scope.filter);
      }]
    };
  }]);
