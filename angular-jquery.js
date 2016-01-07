'use strict';

/**
 * @ngdoc service
 * @name clientApp.jquery
 * @description
 * # jquery
 * Factory in the clientApp.
 */
angular.module('sko.jquery', [])
  .factory('$', function ($window) {
    return $window.jQuery;
  });