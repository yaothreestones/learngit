angular.module('app')
    .controller('informationCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
        function ($scope, $stateParams, $rootScope, $state, $http) {
            $scope.grounding=function () {
                var grounding = $rootScope.modalConfrim('是否下架该资讯用户？');
                grounding.then(function () {
                    console.log(11)
                })
            }
            $scope.delete=function () {
                var out = $rootScope.modalConfrim('是否删除？');
                out.then(function () {
                    console.log(11)
                })
            }
            $scope.class = [
                "全部",
                "數學",
                "語文",
                "外語",
            ]
            $scope.state = [
                "全部",
                "上架",
                "下架",
            ]

        }
    ])