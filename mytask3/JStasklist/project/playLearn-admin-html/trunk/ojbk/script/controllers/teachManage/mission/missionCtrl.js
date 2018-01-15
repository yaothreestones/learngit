angular.module('app').controller('missionCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service',
    function ($scope,$stateParams,$rootScope,$state,Course_service){
        var vm = $scope.vm = {};
    $scope.data = $stateParams;
        console.log($scope.data)
        if($scope.data.add === '1'){
            $scope.isShow = true;
        };
        vm.currentPage = Number($stateParams.page);
        //搜索按钮
        vm.pageGo = function (x) {
            $state.go('backStage.teachManage.mission',{page:x});
        };
        vm.currentPage = $stateParams.page;
        Course_service.get_TechSubject({
            params:{
                page:Number($stateParams.page),
                size:Number($stateParams.size)
            }
        }).then(function(res) {
                if(res.data.code === 0){
                    vm.totalItems = res.data.total;
                    vm.lists = res.data.data;
                    console.log(res);
                }
            }
            , function(res) {
                alert('请求失败')
            });
    }])