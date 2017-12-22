angular.module('app')
    .controller('informationCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
        function ($scope, $stateParams, $rootScope, $state, $http) {
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