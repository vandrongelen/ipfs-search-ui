'use strict';

var angular = require('angular');

module.exports = function () {
  return function(text) {
    return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
  };
};