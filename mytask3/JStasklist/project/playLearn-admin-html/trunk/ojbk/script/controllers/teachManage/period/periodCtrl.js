angular.module('app').controller('periodCtrl', ['$scope', '$stateParams', '$rootScope', '$state','Course_service','subject_grade','subject_status',
    function ($scope, $stateParams, $rootScope, $state,Course_service,subject_grade,subject_status){
        var vm = $scope.vm = {};
        console.log(angular.fromJson($stateParams.course));
        vm.course = angular.fromJson($stateParams.course)||{};
        vm.Data = angular.fromJson($stateParams.obj)||{};
        console.log('路由参数',vm.Data);
        vm.Grade = subject_grade;
        vm.Status = subject_status;
        vm.subjectName = vm.course.subjectName||vm.Data.subjectName;
        vm.courseName  = vm.course.name||vm.Data.courseName;
        vm.courses = parseInt(vm.Data.courses)||undefined;
        vm.subject = parseInt(vm.Data.subject)||undefined;
        vm.period = vm.Data.period;
        vm.currentPage = parseInt($stateParams.page);
        vm.grade = parseInt(vm.Data.grade)||undefined;
        if(vm.Data.status !== undefined){
            vm.status = parseInt(vm.Data.status)
        }
        $stateParams.add === '1'?$scope.isShow = true:$scope.isShow =false;
        //分页按钮
        vm.pageGo = function (page) {
            $state.go('backStage.teachManage.period',{page:page});
        };
        if(!$stateParams.add){
            console.log('获取科目列表');
            Course_service.get_TechSearchSubject({
                params:{
                    page:1,
                    size:999
                }
            }).then(function (res) {
                if (res.data.code === 0) {
                    console.log('渲染完毕');
                    vm.SubjectStorage = res.data.data;
                    console.log('科目列表',vm.Subjects);
                    console.log(res);
                }else {
                    alert(res.message)
                }

            });
            console.log('获取课程列表');
            Course_service.get_TechSearchCourse({
                page:1,
                pageSize:999
            }).then(function (res) {
                    console.log(res);
                    if(res.data.code === 0){
                        vm.courseStorage = res.data.data;
                        console.log('渲染完毕',vm.Courses)
                    }
                    if(vm.courses){
                        vm.Courses = [];
                        angular.forEach(vm.courseStorage,function (data) {
                            if(data.id === vm.courses){
                                vm.subject = data.subjectId;
                                vm.grade = data.grade;
                                vm.Courses = vm.courseStorage;
                            }
                        });
                        vm.Subjects = [];
                        vm.Grade = [];
                        angular.forEach(vm.SubjectStorage,function (data) {
                            if(vm.subject === data.id){
                                vm.Subjects = [data]
                            }
                        });
                        angular.forEach(subject_grade,function (data) {
                            if(vm.grade === data.id){
                                vm.Grade = [data]
                            }
                        })
                    }else {
                        if(vm.subject && !vm.grade){
                            vm.Subjects = vm.SubjectStorage;
                            vm.Courses = [];
                            angular.forEach(vm.courseStorage,function (data) {
                                if(data.subjectId === vm.subject){
                                    vm.Courses.push(data)
                                }
                            })
                        }else if(!vm.subject && vm.grade){
                            vm.Courses = [];
                            vm.Subjects = vm.SubjectStorage;
                            angular.forEach(vm.courseStorage,function (data) {
                                if(data.grade === vm.grade){
                                    vm.Courses.push(data)
                                }
                            })
                        }else if(vm.subject && vm.grade){
                            vm.Courses = [];
                            vm.Subjects = vm.SubjectStorage;
                            angular.forEach(vm.courseStorage,function (data) {
                                if(data.grade === vm.grade && vm.subject === data.subjectId){
                                    vm.Courses.push(data)
                                }
                            })
                        }else {
                            vm.Courses = vm.courseStorage;
                            vm.Subjects = vm.SubjectStorage;
                        }
                    }
                }
                , function(res) {
                    alert('请求失败')
                });
        }
        //课时列表，查询接口二合一
        Course_service.get_TechPeriod({
            grade:vm.grade||vm.course.grade,
            status:vm.status,
            courseId:vm.courses||vm.course.id,
            subjectId:vm.course.subjectId||vm.subject,
            lessonPeriodName:vm.period,
            page:parseInt($stateParams.page)||1,
            size:parseInt($stateParams.size)||10
        }).then(function(res) {
                console.log(res);
                if(res.data.code === 0){
                    vm.totalItems = res.data.total;
                    vm.periodlists = res.data.data;
                    console.log('课时列表',vm.periodlists);
                }
            }
            , function(res) {
                alert('请求失败')
            });


        //科目选择
        vm.subject_select = function (subject) {
            if(subject === null){
                if(!vm.courses){
                    if(vm.grade){
                        vm.Courses = [];
                        angular.forEach(vm.courseStorage,function (data) {
                            if(vm.grade === data.grade){
                                vm.Courses.push(data)
                            }
                        })
                    }else{
                        vm.courses = null;
                        vm.grade = null;
                        vm.Courses = vm.courseStorage;
                        vm.Subjects = vm.SubjectStorage;
                        vm.Grade = subject_grade
                    }
                }else {
                    vm.grade = null;
                    vm.courses = null;
                    vm.Courses = vm.courseStorage;
                    vm.Subjects = vm.SubjectStorage;
                    vm.Grade = subject_grade
                }
            }else {
                if(vm.grade){
                    vm.Courses = [];
                    angular.forEach(vm.courseStorage,function (data) {
                        if(data.grade === vm.data && data.subjectId === subject){
                            vm.Courses.push(data)
                        }
                    })
                }else {
                    vm.Courses = [];
                    angular.forEach(vm.courseStorage,function (data) {
                        if(data.subjectId === subject){
                            vm.Courses.push(data)
                        }
                    });
                }
            }
        };
        //年级选择
        vm.class_select = function(grade){
            if(grade === null){
                if(!vm.courses){
                    if(vm.subject){
                        vm.Courses = [];
                        angular.forEach(vm.courseStorage,function (data) {
                            if(vm.subject ===data.subjectId){
                                vm.Courses.push(data)
                            }
                        })
                    }
                }else {
                    vm.grade = null;
                    vm.courses = null;
                    vm.subject = null;
                    vm.Courses = vm.courseStorage;
                    vm.Subjects = vm.SubjectStorage;
                    vm.Grade = subject_grade
                }
            }else {
                if(vm.subject){
                    vm.Courses = [];
                    angular.forEach(vm.courseStorage,function (data) {
                        if(data.grade === grade && data.subjectId === vm.subject){
                            vm.Courses.push(data)
                        }
                    })
                }else {
                    vm.Courses = [];
                    angular.forEach(vm.courseStorage,function (data) {
                        if(data.grade === grade){
                            vm.Courses.push(data)
                        }
                    })
                }

            }
        };



        //课程变更搜索
        vm.course_select = function (course) {
            console.log(course);
            if(course === null){
                vm.subject = null;
                vm.grade = null;
                vm.Grade = subject_grade;
                vm.Courses = vm.courseStorage;
                vm.Subjects = vm.SubjectStorage
            }else {
                angular.forEach(vm.courseStorage,function (data) {
                    if(course === data.id){
                        vm.subject = data.subjectId;
                        vm.grade = data.grade;
                    }
                });
                angular.forEach(subject_grade,function (data) {
                    if(data.id === vm.grade){
                        vm.Grade = [data]
                    }
                });
                angular.forEach(vm.Subjects,function (data) {
                    if(vm.subject === data.id){
                        vm.Subjects = [data]
                    }
                });
                console.log(vm.Subjects);
            }
        };


        //上下架
        vm.changeStatus = function (period) {
            if(period.status === 0){
                vm.confirm = '确认上架？';
                vm.result = '上架成功'
            }else {
                vm.confirm = '确认下架？';
                vm.result = '下架成功'
            }
            $rootScope.modalConfrim(vm.confirm)
                .then(function () {
                    Course_service.get_TechStatusPeriod({id:period.id,status:period.status})
                        .then(function (res) {
                            if(res.data.code===0){
                                $rootScope.modalConfrim(vm.result)
                                    .then(function () {
                                        $state.go("backStage.teachManage.period",{},{reload:true})
                                    },function () {

                                    })
                            }else {
                                $rootScope.modalConfrim(res.data.message)
                            }
                        });
                },function () {

                });
        };

        //查询按钮
        vm.search = function () {
            vm.stateParams = {
                courses:vm.courses,
                grade:vm.grade,
                status:vm.status,
                subject:vm.subject,
                period:vm.period,
                subjectName:vm.subjectName,
                courseName:vm.courseName
            };
            console.log(vm.stateParams);
            vm.obj = angular.toJson(vm.stateParams);
            $state.go('backStage.teachManage.period',{page:1,size:10,course:$stateParams.course,obj:vm.obj},{reload:true})
        };
        //新增
        vm.add = function () {
            vm.stateParams = {
                courses:vm.courses,
                grade:vm.grade,
                status:vm.status,
                subject:vm.subject,
                period:vm.period,
                subjectName:vm.subjectName,
                courseName:vm.courseName
            };
            vm.obj = angular.toJson(vm.stateParams);
            $state.go('backStage.teachManage.periodManage',{add:1,from:1,course:$stateParams.course,obj:vm.obj})
        };
        vm.edit = function (period) {
            vm.stateParams = {
                courses:vm.courses,
                grade:vm.grade,
                status:vm.status,
                subject:vm.subject,
                period:vm.period,
                subjectName:vm.subjectName,
                courseName:vm.courseName
            };
            vm.obj = angular.toJson(vm.stateParams);
            $stateParams.add==='1'?$state.go('backStage.teachManage.periodManage',{add:1,from:3,course:$stateParams.course,obj:vm.obj,period:angular.toJson(period)}):
                $state.go('backStage.teachManage.periodManage',{from:3,course:$stateParams.course,obj:vm.obj,period:angular.toJson(period)})
        };
        //查看
        vm.view = function (period) {
            vm.stateParams = {
                courses:vm.courses,
                grade:vm.grade,
                status:vm.status,
                subject:vm.subject,
                period:vm.period,
                subjectName:vm.subjectName,
                courseName:vm.courseName
            };
            vm.obj = angular.toJson(vm.stateParams);
            $stateParams.add==='1'?$state.go('backStage.teachManage.periodManage',{add:1,from:2,course:$stateParams.course,obj:vm.obj,period:angular.toJson(period)}):
                $state.go('backStage.teachManage.periodManage',{from:2,course:$stateParams.course,obj:vm.obj,period:angular.toJson(period)})
        };
        //跳转到任务
        vm.missionJump = function (period) {
            vm.period_selected = angular.toJson(period);
            $state.go('backStage.teachManage.mission',{add:1,period:vm.period_selected})
        };
        //删除
        vm.delete = function (period) {
            $rootScope.modalConfrim('是否删除？')
                .then(function () {
                    Course_service.get_TechDeletePeriod(period.id)
                        .then(function (res) {
                            if(res.data.code===0){
                                $rootScope.modalConfrim('删除成功')
                                    .then(function () {
                                        $state.go("backStage.teachManage.period",{},{reload:true})
                                    },function () {

                                    })
                            }else {
                                $rootScope.modalConfrim(res.data.message)
                            }
                        });
                },function () {

                });
        }
    }]);