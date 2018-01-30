angular.module("app")
    .controller("ChangeMailboxCtrl", ['$state', '$rootScope', '$uibModal', 'Course_service', function ($state, $rootScope, $uibModal, Course_service) {
        var vm = this;
        vm.$stateParams = $state.params;
        $rootScope.config.headNav.finish.isShow = true;

        vm.$textarea = function () {
            var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
            var obj = document.getElementById("tell"); //要验证的对象
            if (obj.value === "") { //输入不能为空
                alert("输入不能为空!");
                return false;
            } else if (!reg.test(obj.value)) { //正则验证不通过，格式不对
                alert("验证不通过!");
                return false;
            } else {
                alert("通过！");
                return true;
            }
        }

    }])