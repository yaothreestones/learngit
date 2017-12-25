angular.module('app')
    .controller('imageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
        function ($scope, $stateParams, $rootScope, $state, $http) {
            $scope.delete=function () {
                var out = $rootScope.modalConfrim('是否删除该意见反馈？');
                out.then(function () {
                    console.log(11)
                })
            }
        }
    ])