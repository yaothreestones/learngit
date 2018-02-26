angular.module('app')
    .controller("mail", ["$scope", "$state", "$http", "Course_service", "$uibModal", function ($scope, $state, $http, Course_service, $uibModal) {
        var vm = this;
        vm.$stateParams = $state.params;
        vm.send = function () {
            Course_service.changeMail(vm.$stateParams.email, "[" + vm.$stateParams.dataId + "]")
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.message = res.data.message;
                        $state.go("app.means")
                    } else {
                        var dialog = bootbox.dialog({
                            message: '<p class="text-center" style="margin: auto">邮箱不能为空</p>',
                            closeButton: false
                        });
                        setTimeout(function () {
                            dialog.modal('hide');
                        },1500)
                    }
                }, function (res) {
                    alert('请求失败')
                })
        }

    }])