'use strict';

/**
 * @ngdoc service
 * @name clientApp.jquery
 * @description
 * # jquery
 * Factory in the clientApp.
 */
angular.module('sko.common.jquery', [])
  .factory('$', function ($window) {
    return $window.jQuery;
  });