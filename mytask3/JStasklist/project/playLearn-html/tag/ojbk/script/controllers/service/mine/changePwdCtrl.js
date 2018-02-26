angular.module('app')
    .controller("changePwdCtrl", ["$scope", "$state", "$stateParams", "$http", "Course_service", function ($scope, $state, $stateParams, $http, Course_service) {
        var vm = this;
        vm.Course_service = Course_service;
        vm.$pop={
            show:false,
            txt:'',
            do: function (txt) {
                this.txt=txt;
                this.show=true;
                setTimeout(function (_this) {
                    _this.show=false;
                    $scope.$apply();
                },1500,this);
            }
        }
        vm.send = function () {
            if(vm.againPassword!==vm.newPassword){
                vm.$pop.do('两次密码输入不一致');
                return;
            }
            if(vm.againPassword.length<6){
                vm.$pop.do('密码最少6位');
                return;
            }
            if(vm.oldPassword==vm.newPassword&&vm.oldPassword==vm.againPassword){
                vm.$pop.do('三次输入相同，请重新输入');
                return;
            }
            Course_service.get_ChangePwd({
                newPassword: vm.newPassword,
                oldPassword: vm.oldPassword,
                againPassword: vm.againPassword
            })
                .then(function (res) {
                    if (res.data.code == -5033) {
                        vm.code = res.data.code;
                        $state.go("app.login");
                        var dialog = bootbox.dialog({
                            message: '<p class="text-center" style="margin: auto">密码修改成功！请重新登录</p>',
                            closeButton: false
                        })
                        setTimeout(function () {
                            dialog.modal('hide');
                        }, 1500)
                    }
                }, function (res) {
                    alert('请求失败')
                })
        }
    }])