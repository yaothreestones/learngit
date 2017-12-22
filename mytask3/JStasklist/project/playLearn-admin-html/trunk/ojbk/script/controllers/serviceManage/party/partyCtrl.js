angular.module('app')
    .controller('partyCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
        function ($scope, $stateParams, $rootScope, $state, $http) {
            $scope.thaw = function () {
                alert(111)
            }
            $scope.names = [
                "全部",
                "一年級",
                "二年級",
                "三年級",
                "四年級",
                "五年級",
                "六年級",
            ]
            $scope.state = [
                "全部",
                "正常",
                "凍結",
            ]
        }
    ])