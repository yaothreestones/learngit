angular.module('app').controller('coursesCtrl', ['$scope', '$stateParams', '$rootScope', '$state','Course_service','subject_status','subject_grade',
    function ($scope, $stateParams, $rootScope, $state, Course_service,subject_status,subject_grade){
        var vm = $scope.vm = {};
        vm.subject = angular.fromJson($stateParams.subject)||{};
        vm.Obj = angular.fromJson($stateParams.obj)||{};
        console.log('科目',vm.subject);
        console.log($stateParams);
        //factory赋值
        vm.subject_status = subject_status;
        vm.subject_grade = subject_grade;
        vm.subjectName = vm.Obj.subjectName||null;
        vm.grade = vm.Obj.grade||null;
        vm.courseName = vm.Obj.courseName;
        vm.status = vm.Obj.status;
        //判断新增按钮的显示
        $stateParams.add === '1'?$scope.isShow = true:$scope.isShow =false;
        //路由刷新后后重载JS文件，优先获取page数据
        vm.currentPage = Number($stateParams.page)||1;
        //分页按钮
        vm.pageGo = function (x) {
            $state.go('backStage.teachManage.courses',{page:x});
        };
        //获取科目列表
        if(!$stateParams.add){
            console.log('获取科目列表');
            Course_service.get_TechSearchSubject({
                params:{
                    page:1,
                    size:999
                }
            }).then(function (res) {
                if(res.status === 200) {
                    if (res.data.code === 0) {
                        console.log('渲染完毕');
                        vm.sublists = res.data.data;
                        console.log('科目列表',vm.lists);
                        console.log(res);
                    }else {
                        alert(res.message)
                    }
                }else {
                    alert('请求超时')
                }
            });
        }
        //获取课程列表
        vm.params = {
            page:parseInt($stateParams.page)||1,
            size:parseInt($stateParams.size)||10,
            subjectId:vm.subject.id||vm.subjectName||'',
            grade:vm.grade||'',
            name:vm.courseName||'',
            status:vm.status
        };
        console.log('课程列表参数',vm.params);
        Course_service.get_TechSearchCourse(
            vm.params
        ).then(function(res) {
                console.log(res);
                if(res.data.code === 0){
                    vm.totalItems = res.data.total;
                    vm.lists = res.data.data;
                    console.log('渲染完毕',vm.lists)
                }
            }
            , function(res) {
                alert('请求失败')
            });

        //新增按钮
        vm.course_add = function () {
            vm.stateParams = {
                status:vm.status,
                grade:vm.grade,
                subjectName:vm.subjectName,
                courseName:vm.courseName
            };
            vm.obj = angular.toJson(vm.stateParams);
            $state.go("backStage.teachManage.coursesManage",{from:1,add:1,obj:vm.obj,subject:$stateParams.subject})
        };
        //查看按钮
        vm.course_view = function (course) {
            vm.stateParams = {
                status:vm.status,
                grade:vm.grade,
                subjectName:vm.subjectName,
                courseName:vm.courseName,
                subject:course.subjectName
            };
            vm.obj = angular.toJson(vm.stateParams);
            $stateParams.add==='1'?$state.go("backStage.teachManage.coursesManage",{from:2,add:1,course:course.id,obj:vm.obj,subject:$stateParams.subject}):
                $state.go("backStage.teachManage.coursesManage",{from:2,course:course.id,obj:vm.obj,subject:$stateParams.subject})

        };
        //编辑按钮
        vm.course_edit = function (course) {
            vm.stateParams = {
                status:vm.status,
                grade:vm.grade,
                subjectName:vm.subjectName,
                courseName:vm.courseName,
                subject:course.subjectName
            };
            vm.obj = angular.toJson(vm.stateParams);
            console.log(course);
            vm.course_selected = angular.toJson(course);
            $stateParams.add==='1'?$state.go("backStage.teachManage.coursesManage",{from:3,add:1,course:course.id,obj:vm.obj,subject:$stateParams.subject}):
                $state.go("backStage.teachManage.coursesManage",{from:3,course:course.id,obj:vm.obj,subject:$stateParams.subject})
        };
        //上下架
        vm.changeStatus = function (course) {
            if(course.status === 0){
                vm.confirm = '确认上架？';
                vm.result = '上架成功';
            }else {
                vm.confirm = '确认下架？';
                vm.result = '下架成功';
            }
            $rootScope.modalConfrim(vm.confirm)
                .then(function () {
                    Course_service.get_TechStatusCourse({
                        courseId:course.id,
                        status:course.status
                    })
                        .then(function (res) {
                            if(res.data.code===0){
                                $rootScope.modalConfrim(vm.result)
                                    .then(function () {
                                        $state.go("backStage.teachManage.courses",{},{reload:true})
                                    },function () {

                                    })
                            }else {
                                $rootScope.modalConfrim(res.data.message)
                            }
                        });
                },function () {

                });
        };
        //删除按钮
        vm.course_delete = function (course) {
            $rootScope.modalConfrim('是否删除？')
                .then(function () {
                    Course_service.get_TechDeleteCourse(course.id)
                        .then(function (res) {
                            if(res.data.code===0){
                                $rootScope.modalConfrim('删除成功')
                                    .then(function () {
                                        $state.go("backStage.teachManage.courses",{},{reload:true})
                                    },function () {

                                    })
                            }else {
                                $rootScope.modalConfrim(res.data.message)
                            }
                        });
                },function () {

                });

        };
        //按条件查询课程列表
        vm.search = function () {
            vm.stateParams = {
                status:vm.status,
                grade:vm.grade,
                subjectName:vm.subjectName,
                courseName:vm.courseName
            };
            vm.obj = angular.toJson(vm.stateParams);
            $state.go('backStage.teachManage.courses',{page:1,obj:vm.obj},{reload:true})
        };
        //跳转到课时
        vm.period_jump = function (course) {
            vm.course_selected = angular.toJson(course);
            $state.go("backStage.teachManage.period",{add:1,course:vm.course_selected})
        }
    }]);