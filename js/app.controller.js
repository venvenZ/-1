(function () {
    'use strict';
    angular.module('enjoyApp')
        .controller('app.Controller', function ($scope,$state) {
            $scope.stateGo = function (index) {
                $scope.index = index
                switch (index) {
                    case 0:
                        $state.go('app.introduce');
                        break;
                    case 1:
                        $state.go('app.idea');
                        break;
                    case 2:
                        $state.go('app.experience');
                        break;
                    case 3:
                        $state.go('app.project');
                        break;
                }
            }
        })
})();