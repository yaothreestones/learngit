angular.module("app")
    .controller("mineCtrl", [ "mineConstant",function (mineConstant) {
        var vm = this;
        vm.data = mineConstant();
        console.log(vm.data);

        vm.test = {
            img:"image/mine/drawing.png",
            nike:"萌宝儿",
            grade:"三年级",
            mail:"mengbaoer@163.com",
        }
    }])