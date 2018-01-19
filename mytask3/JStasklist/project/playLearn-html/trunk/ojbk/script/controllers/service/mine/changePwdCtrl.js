angular.module('app')
    .controller("changePwdCtrl", ["$state", "$stateParams", "$http", function ($state, $stateParams, $http) {
        var vm = this;
        vm.send = function () {
            $http({
                url: '/a/u/password/modify',
                method: 'post',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;cgarst'
                },
                transformRequest: function (data) {
                    return 'oldPassword=222222&newPassword=111111';
                },
                data: {
                    oldPassword: '222222',
                    newPassword: '111111',
                }
            })

        }
    }])