angular.module('app')
    .controller('chartsCtrl',['$scope','Course_service',function ($scope,Course_service) {
        var vm = this;
        Course_service.get_Enroll({
            params:vm.params
        })
        .then(
            function (res) {
                console.log(res)
                vm.data = res.data.data
                vm.count = [];
                vm.total = [];
                angular.forEach(vm.data,function (item,index) {
                    vm.count.push(item.count);
                    vm.total.push(item.grandTotal);
                })
                console.log(vm.count)
            }
        )
    }])