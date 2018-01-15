angular.module('app').controller('subjectCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','subject_type','subject_status',
    function ($scope, $stateParams, $rootScope, $state, Course_service,subject_type,subject_status){
        var vm = $scope.vm = {};
        vm.subject_type = subject_type;
        vm.subject_status = subject_status;
        vm.type = vm.subject_type[0];
        vm.status = vm.subject_status[0];
        vm.currentPage = Number($stateParams.page);
        //分页按钮
        vm.pageGo = function (x) {
            $state.go('backStage.teachManage.subject',{page:x});
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
        //查看按钮
        vm.subject_view = function (subject) {
            vm.subject_selected = angular.toJson(subject);
            $state.go("backStage.teachManage.subjectManage",{from:2,id:subject.id,subject:vm.subject_selected})
        };
        //编辑按钮
        vm.subject_edit = function (subject) {
            vm.subject_selected = angular.toJson(subject);
            $state.go("backStage.teachManage.subjectManage",{from:3,id:subject.id,subject:vm.subject_selected})
        };
        //删除按钮
        vm.subject_delete = function (subject) {
            Course_service.get_TechDeleteSubject({
                params:subject.id
            }).then(function (res) {
                if(res.data.code === 0){
                    alert('删除成功')
                }
            })
        };
        //搜索按钮
        vm.subject_search = function () {
            Course_service.get_TechSearchSubject({
                params:{
                    type:vm.type.id,
                    status:vm.status.id,
                    name:vm.name
                }
            }).then(function (res) {
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
            })
        }
        //跳转到课程
        vm.course_jump = function (subject) {
            console.log(subject);
            vm.subject_selected = angular.toJson(subject);
            $state.go("backStage.teachManage.courses",{add:1,subject:vm.subject_selected})
        }
    }]);