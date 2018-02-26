angular.module('app')
    .controller('chartsCtrl',['$scope','Course_service',function ($scope,Course_service) {
        var vm = this;
        Course_service.get_Enroll({
            params:vm.params
        })
        .then(
            function (res) {
                console.log(res);
                vm.count = [];
                vm.total = [];
                vm.date = [];
                vm.data=[...res.data];
                console.log(vm.date);
                angular.forEach(vm.data,function (item,index) {
                    vm.count.push(item.count);
                    vm.total.push(item.total);
                    vm.date.push(item.date);
                })
                console.log(vm.count);
                console.log(vm.total);
                console.log(vm.date);
            }
        )
    }])