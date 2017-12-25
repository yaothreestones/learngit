angular.module('app')
    .controller('helpCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
        function ($scope, $stateParams, $rootScope, $state, $http) {
            $scope.delete=function () {
                var out = $rootScope.modalConfrim('是否删除该帮助模板？');
                out.then(function () {
                    console.log(11)
                })
            }
        }
    ])