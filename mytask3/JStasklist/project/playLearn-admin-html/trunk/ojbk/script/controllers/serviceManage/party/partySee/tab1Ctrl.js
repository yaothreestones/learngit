angular.module('app').controller('tab1Ctrl',
    function ($scope,$stateParams,$rootScope,$state,$http,Course_service){
        var vm = this;
        vm.ajax = [];
        sessionStorage.isOnCard=1;
        vm.size = $stateParams.size;
        vm.pageGo = function (x) {
            $state.go($state.current, {page: x}, {reload: true});
        };
        vm.$stateParams = $state.params;
        vm.checkDetail= function (data) {
            $state.go('backStage.teachManage.coursesManage',{
                from:2,
                course:data.id,
                subject:data.subjectId,
                obj:JSON.stringify({
                    status:data.status,
                    grade:data.grade,
                    subjectName:data.subjectName,
                    courseName:data.name,
                })
            });
        };
        Course_service.get_See($rootScope.clearEmpty($stateParams))
            .then(function (res) {
                if (res.data.code == 0) {
                    vm.ajax = res.data.data;
                    vm.currentPage = parseInt($stateParams.page);
                    vm.total = res.data.total;
                }
                console.log('用户收藏课程列表',res)
            }, function (res) {
                alert('请求失败')
            })

    })
