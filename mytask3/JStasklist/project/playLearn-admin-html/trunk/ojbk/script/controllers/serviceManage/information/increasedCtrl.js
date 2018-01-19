angular.module('app')
    .controller('increasedCtrl',['$scope','$stateParams','pathProject','Course_service',function ($scope,$stateParams,pathProject,Course_service) {
        // var vm = $scope.vm = {};
        // vm.data = $stateParams;
        // console.log(vm.data);
        // vm.ajax = pathProject.getFile_url();
        // Course_service.getFile_url({
        //     params:vm.params
        // })
        //     .then(
        //         function (res) {
        //             console.log(res)
        //             vm.data = res.data.data
        //             angular.forEach(vm.data,function (item,index) {
        //                 vm.count.push(item.count);
        //                 vm.total.push(item.grandTotal);
        //             })
        //             console.log(vm.count)
        //         }
        //     )
    }])