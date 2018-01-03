angular.module("app")
    .controller("installCtrl", [ "install",function (install) {
        var vm = this;
        vm.data = install();
        console.log(vm.data);


    }])