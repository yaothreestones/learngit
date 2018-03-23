angular.module('app').controller('homeController', function () {
    var vm = this;
    vm.items = [];
    vm.checkbox = [];
    vm.if = [];
    vm.else = [];
    vm.num = 0;
    vm.hide = false;
    vm.translate = false
    var count = 1;
    vm.keypress = function (x) {
        if (x.keyCode !== 13 || !vm.model) return;
        vm.items[count - 1] = {
            id: count,
            name: vm.model
        };
        vm.checkbox.push(false);
        vm.if.push(true);
        vm.else.push(true);
        vm.num++
            
        count++;
        vm.model = ''
    };
    vm.changeStatus = function (x) {
      
        if (x === true) {
            vm.num--
        } else {
            vm.num++
        }
    }
    vm.all = function () {
        angular.forEach(vm.if, function (data, index, array) {
            array[index] = vm.else[index] = true
        })
       
    }
    vm.unfinish = function () {
        angular.forEach(vm.checkbox, function (data, index, array) {
            if (data === true) {
                vm.else[index] = vm.if[index] = false
            } else {
                vm.else[index] = vm.if[index] = true
            }
        })
        
    }
    vm.finished = function () {
        angular.forEach(vm.checkbox, function (data, index, array) {
            if (data === true) {
                vm.else[index] = vm.if[index] = true
            } else {
                vm.else[index] = vm.if[index] = false
            }
        })
        
    }
    vm.sloge = function () {
        vm.translate = !vm.translate
        vm.hide = !vm.hide
    }
})