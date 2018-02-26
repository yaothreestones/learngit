angular.module("app")
    .controller("ChangeMailboxCtrl", ['$state', '$rootScope', '$uibModal', 'Course_service', function ($state, $rootScope, $uibModal, Course_service) {
        var vm = this;
        vm.$stateParams = $state.params;

        Course_service.userinfo()
            .then(function (res) {
                if (res.data.code == 0) {
                    vm.user = res.data.data;
                } else {
                    alert('请求失败')
                }
            })
        vm.$textarea = function () {
            var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
            var obj = document.getElementById("tell"); //要验证的对象
            if (obj.value === "") { //输入不能为空
                var dialog = bootbox.dialog({
                    message: '<p class="text-center" style="margin: auto">邮箱不能为空</p>',
                    closeButton: false
                });
                setTimeout(function () {
                    dialog.modal('hide');
                },1500)
                return false;
            } else if (!reg.test(obj.value)) { //正则验证不通过，格式不对
                var dialog = bootbox.dialog({
                    message: '<p class="text-center" style="margin: auto">验证不通过</p>',
                    closeButton: false
                });
                setTimeout(function () {
                    dialog.modal('hide');
                },1500)
                return false;
            } else {
                Course_service.get_Detail(vm.user)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.user = res.data.data;
                            console.log(vm.user);
                            $state.go("app.personal");
                        }
                    }, function (res) {
                        alert('请求失败')
                    })
                return true;
            }
        }

    }])