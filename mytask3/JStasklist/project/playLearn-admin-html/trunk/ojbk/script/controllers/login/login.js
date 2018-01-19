angular.module('app')
    .controller('loginCtrl', ['$scope', '$state', '$http', function ($scope, $state, $http) {
        $scope.login = function () {
            // var data = {
            //     name: $scope.name,
            //     pwd: $scope.pwd
            // }
            // var promise = $http({
            //     method: 'post',
            //     url: '/playlearn/post/a/login',
            //     headers: {'content-type': 'application/x-www-form-urlencoded'},
            //     transformRequest: function (data) {
            //         return $.param(data);
            //     },
            //     data: data
            // })
            // promise.then(function (res) {
            //     if (res.data.code == 0) {
            //         $state.go('backStage');
            //     }else{
            //         alert(11);
            //     }
            //     $scope.code = res.data.code;
            //     console.log(res.data.code);
            //     console.log(res.data.message);
            //     console.log(res);
            // }
            // )
            $state.go('backStage')
        }
    }])


