
(function () {
    'use strict';
    angular.module('enjoyApp')
        .controller('login.Controller',function ($scope,$state) {
          $scope.stateGo=function () {
              $state.go('app.introduce')
          }
        })
})();