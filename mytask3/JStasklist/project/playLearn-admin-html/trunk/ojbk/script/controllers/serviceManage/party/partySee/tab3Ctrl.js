angular.module('app').controller('tab3Ctrl',
    function ($scope, $stateParams, $rootScope, $state, $http, Course_service) {
        var vm = this;
        vm.period = [];
        vm.$stateParams = $state.params;
        vm.dataSearch = function (data) {
            $state.go('backStage.dataManage.dataManage', {
                from: 1,
                datumId: data.id,
                type: data.bookName,
                subjectName: data.subjectName,
                subjectId: data.subjectId,
                courseName: data.courseName,
                courseId: data.courseId,
                lessonPeriodName: data.lessonPeriodName,
                lessonPeriodId: data.lessonPeriodId,
                grade: data.grade,


            });
        };
        Course_service.get_Means({
            userId: vm.$stateParams.userId,
        })
            .then(function (res) {
                if (res.data.code == 0) {
                    vm.period = res.data.data;
                    console.log(vm.period)
                    vm.message = res.data.message;
                }
                console.log(res)
            }, function (res) {
                alert('请求失败')
            })
    })
