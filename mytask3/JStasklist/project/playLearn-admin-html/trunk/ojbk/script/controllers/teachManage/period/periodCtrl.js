angular.module('app').controller('periodCtrl', ['$scope', '$stateParams', '$rootScope', '$state','Course_service',
    function ($scope, $stateParams, $rootScope, $state,Course_service){
        var vm = $scope.vm = {};
        console.log(angular.fromJson($stateParams.course));
        vm.course = angular.fromJson($stateParams.course);
        vm.currentPage = Number($stateParams.page);
        //搜索按钮
        vm.pageGo = function (page) {
            $state.go('backStage.teachManage.period',{page:page});
        };
        Course_service.get_TechPeriod({
            params:{
                page:1,
                size:10,
                grade:null,
                status:null,
                press:null,
                bookid:null,
                lessonPeriodName:null
            }
        }).then(function(res) {
                if(res.data.code === 0){
                    vm.totalItems = res.data.total;
                    vm.periodlists = res.data.data;
                    console.log(res);
                }
            }
            , function(res) {
                alert('请求失败')
            });
        vm.currentPage = $stateParams.page;
        if($stateParams.add === '1'){
            $scope.isShow = true;
        }





    }])