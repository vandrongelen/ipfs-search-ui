'use strict';

var angular = require('angular');

var app = angular.module('app', [
  require('./ng-search-results.html')
]);

var search_controller = require('./ng-search.controller');
var search_directive = require('./ng-search.directive');
var html_filter = require('./ng-html-to-plain-text.filter');

app.controller('ngSearchController', search_controller);
app.directive('ngSearchDirective', search_directive);
app.filter('ngHtmlToPlainText', html_filter);