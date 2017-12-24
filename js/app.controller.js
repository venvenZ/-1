
(function () {
    'use strict';
    angular.module('enjoyApp')
        .controller('app.Controller',function ($scope) {
            $scope.stateGo=function (index) {
                $scope.index=index
            }
        })
})();