angular.module('myApp')
    .controller('backStage',['$scope','login1','$state',function ($scope,login1,$state) {
        $scope.showArticleLists = function () {
            login1.articleList_in().then(function (res) {
                console.log(res)
            })
        };
        $scope.logOut = function () {
            login1.logOut_in().then(function (res) {
                if(res.data.code === 0){
                    console.log('success');
                    $state.go('login')
                }
            })
        }
    }]);