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
        vm.courseName  = vm.course.courseName||vm.Data.courseName;
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
                    page:'',
                    size:''
                }
            }).then(function (res) {
                if(res.status === 200) {
                    if (res.data.code === 0) {
                        console.log('渲染完毕');
                        vm.Subjects = res.data.data;
                        console.log('科目列表',vm.Subjects);
                        console.log(res);
                    }else {
                        alert(res.message)
                    }
                }else {
                    alert('请求超时')
                }
            });
            console.log('获取课程列表');
            Course_service.get_TechSearchCourse({
                params:{
                    page:'',
                    pageSize:''
                }
            }).then(function (res) {
                    console.log(res);
                    if(res.data.code === 0){
                        vm.Courses = res.data.data;
                        console.log('渲染完毕',vm.Courses)
                    }
                }
                , function(res) {
                    alert('请求失败')
                })
        }
        //课时列表，查询接口二合一
        Course_service.get_TechPeriod({
            params:{
                grade:vm.grade,
                status:vm.status,
                courseId:vm.courses,
                subjectId:vm.subject,
                lessonPeriodName:vm.period,
                page:$stateParams.page||1,
                size:$stateParams.size||10

            }
        }).then(function(res) {
                console.log(res);
                if(res.data.code === 0){
                    vm.totalItems = res.data.total;
                    vm.periodlists = res.data.data;
                }
            }
            , function(res) {
                alert('请求失败')
            });


        //

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
            $stateParams.add==='1'?$state.go('backStage.teachManage.periodManage',{add:1,from:3,course:$stateParams.course,obj:vm.obj,period:period.lessonPeriodId}):
                $state.go('backStage.teachManage.periodManage',{from:3,course:$stateParams.course,obj:vm.obj,period:period.lessonPeriodId})
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
            $stateParams.add==='1'?$state.go('backStage.teachManage.periodManage',{add:1,from:2,course:$stateParams.course,obj:vm.obj,period:period.lessonPeriodId}):
                $state.go('backStage.teachManage.periodManage',{from:2,course:$stateParams.course,obj:vm.obj,period:period.lessonPeriodId})
        };
        //跳转到任务
        vm.missionJump = function (period) {
            vm.period_selected = angular.toJson(period);
            $state.go('backStage.teachManage.mission',{add:1,period:vm.period_selected})
        }



    }])