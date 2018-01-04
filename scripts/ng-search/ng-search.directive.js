'use strict';

var angular = require('angular');

module.exports = function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'ng-search-results.html'
    };
};