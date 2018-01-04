'use strict';

var $ = require('jquery');

var angular = require('angular');

module.exports = function($scope, $http) {

  $scope.count = 0;
  $scope.pages = 0;
  $scope.url = 'http://api.ipfs-search.com/v1/search'; // The url of our search
  $scope.items = [];
  var cover = $('.cover');
  var spinner = $('.spinner');
  var notification = $('.notification');
  var pagination = $('.pager')
  cover.removeClass('show');
  
  $scope.search = function() {
    
    console.log("search started");
    spinner.addClass('show');
    notification.removeClass('show');
    cover.removeClass('show');
    pagination.removeClass('show');
    
    console.log($scope.querystring);
    console.log($scope.count);
    
    $http({
      url: $scope.url, 
      method: "GET",
      params: {q: $scope.querystring, page: $scope.count},
      timeout: 2000
    })
    .then(function(response) {
      $scope.status = response.status;
      $scope.data = response.data;
      $scope.result = response.data;
      $scope.pages = response.data.page_count;
      $scope.items = response.data.hits;
      console.log(response.data);
    })
    .catch(function(response) {
      $scope.data = response.data;
      $scope.status = response.status; 
    })
    .finally(function() {
      spinner.removeClass('show');
      pagination.addClass('show');
      if ($scope.items.length === 0) {
        notification.addClass('show');
      }
    });
  }

  $scope.increment = function() {
    if ($scope.count < $scope.pages) {
      $scope.count = $scope.count + 1;
    }
    $scope.search();
  }

  $scope.decrement = function() {
    $scope.count = $scope.count - 1;
    if ($scope.count < 0){
      $scope.count = 0;
    }
    $scope.search();
  }
}