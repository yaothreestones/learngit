angular.module('app')
    .controller('partyCtrl', ['$scope', '$stateParams', '$state','$rootScope',  '$http',
        function ($scope, $stateParams, $state,$rootScope,  $http) {
        $scope.thaw=function () {
            var aa = $rootScope.modalConfrim('解冻后将无法登陆，是否冻结该账户？');
            aa.then(function () {
                console.log(11)
            })
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
            $scope.maxSize = 5;
            $scope.totalItems = 80;
            $scope.currentPage = 1;
        }
    ])