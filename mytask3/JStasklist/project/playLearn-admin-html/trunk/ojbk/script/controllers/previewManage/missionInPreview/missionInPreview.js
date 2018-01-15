angular.module('app').controller('missionCtrlInPreview', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service',
    function ($scope, $stateParams, $rootScope, $state, Course_service){
        var vm = $scope.vm = {};
        console.log($scope.data);
        vm.currentPage = Number($stateParams.page);
        //搜索按钮
        vm.pageGo = function (x) {
            $state.go('backStage.previewManage.mission',{page:x});
        };
        Course_service.get_TechSubject({
            params:{
                page:Number($stateParams.page),
                size:Number($stateParams.size)
            }
        }).then(function(res) {
            if(res.status === 200) {
                if (res.data.code === 0) {
                    vm.totalItems = res.data.total;
                    vm.lists = res.data.data;
                    console.log(res);
                }else {
                    alert(res.message)
                }
            }else {
                alert('请求超时')
            }
        });
        if($stateParams.add === '1'){
            $scope.isShow = true;
        }
    }])