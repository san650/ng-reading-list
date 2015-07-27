'use strict';

var BOOKS = [
  {
    "OCLC": 35022004,
    "title": "Microserfs",
    "publicationDate": "1995",
    "author": "Douglas Coupland"
  },
  {
    "OCLC": 34818133,
    "title": "Do Androids Dream of Electric Sheep?",
    "publicationDate": "1968",
    "author": "Philip K. Dick"
  },
  {
    "OCLC": 67871286,
    "title": "Ubik",
    "publicationDate": "1969",
    "author": "Philip K. Dick"
  },
  {
    "OCLC": 47677622,
    "title": "Lord of the Flies",
    "publicationDate": "1955",
    "author": "William Golding"
  },
  {
    "OCLC": 19811474,
    "title": "I, Claudius",
    "publicationDate": "1934",
    "author": "Robert Graves"
  },
  {
    "LCCN": 60007847,
    "title": "To Kill a Mockingbird",
    "publicationDate": "1960",
    "author": "Harper Lee"
  },
  {
    "OCLC": 7956273,
    "title": "All the King’s Men",
    "publicationDate": "1946",
    "author": "Robert Penn Warren"
  }
];

/**
 * @ngdoc function
 * @name readingListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the readingListApp
 */
angular.module('readingListApp')
  .controller('MainCtrl', function ($scope) {
    $scope.books = BOOKS;
  });
