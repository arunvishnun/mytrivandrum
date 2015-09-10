'use strict';

/* jshint -W098 */
angular.module('mean.review').controller('ReviewController', ['$scope', 'Global', 'Review',
  function($scope, Global, Review) {
    $scope.global = Global;
    $scope.package = {
      name: 'review'
    };
  }
]);
