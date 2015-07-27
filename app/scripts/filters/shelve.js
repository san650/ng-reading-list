'use strict';

angular.module('readingListFilters', [])
  .filter('shelveNext', function() {
    return function(books) {
      return books.filter(function(e) {
        return e.shelves.indexOf('next') >= 0;
      })
    };
  });
