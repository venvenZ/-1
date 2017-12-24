
(function () {
    'use strict';
    angular.module('enjoyApp')
        .controller('login.Controller',function ($scope,$state) {
          $scope.stateGo=function () {
              $state.go('app.introduce');
          }
            $scope.down=function () {
                window.location.href='libs/WEB前端开发--张颖.docx'
            }
        })
})();