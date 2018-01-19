angular.module('app').controller('missionCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','subject_grade',
    function ($scope,$stateParams,$rootScope,$state,Course_service,subject_grade){
        var vm = $scope.vm = {};
        vm.data = $stateParams;
        vm.Grade = subject_grade;
        //父级课时信息
        vm.period_selected = angular.fromJson($stateParams.period)||{};
        //查询上传的参数
        vm.Data = angular.fromJson($stateParams.obj)||{};
        console.log('路由参数',vm.data);
        console.log('父级课时',vm.period_selected);
        //父级科目课程课时名称，由父级课时带过来
        vm.subjectName = vm.period_selected.subjectName||undefined;
        vm.courseName = vm.period_selected.courseName||undefined;
        vm.periodName = vm.period_selected.lessonPeriodName||undefined;
        //非跳转时
        vm.subject = vm.Data.subjectId;
        vm.course = vm.Data.courseId;
        vm.period = vm.Data.periodId;
        vm.grade = parseInt(vm.Data.grade)||undefined;
        vm.mission = vm.Data.missionName;
        if(vm.data.add === '1'){
            vm.isShow = true;
        }
        vm.currentPage = Number($stateParams.page);
        //分页按钮
        vm.pageGo = function (x) {
            $state.go('backStage.teachManage.mission',{page:x});
        };
        //如果是跳转过来则带add参数，科目课程课时名字由父级课时带来且固定，不需要调用科目课程课时接口
        if(!$stateParams.add){
        //科目列表
        Course_service.get_TechSearchSubject({
            page:'',
            size:''
        }).then(function (res) {
            if (res.data.code === 0) {
                console.log('渲染完毕');
                vm.Subjects = res.data.data;
                console.log('科目列表', vm.Subjects);
                console.log(res);
            } else {
                alert(res.message)
            }
        });
        //课程列表
        //获取课程列表
        vm.params = {
            page:'',
            pageSize:''
        };
        console.log('课程列表参数',vm.params);
        Course_service.get_TechSearchCourse({
            params:vm.params
        }).then(function(res) {
                console.log(res);
                if(res.data.code === 0){
                    vm.Course = res.data.data;
                    console.log('课程列表',vm.Course)
                }
            }
            , function(res) {
                alert('请求失败')
            });
        //课时列表
        Course_service.get_TechPeriod({
            params:{
                page:'',
                size:''
            }
        }).then(function(res) {
                console.log(res);
                if(res.data.code === 0){
                    vm.Period = res.data.data;
                    console.log('课时列表',vm.Period)
                }
            }
            , function(res) {
                alert('请求失败')
            });
        }
        //获取任务列表
        console.log('获取任务列表');
        Course_service.get_TechMission({
            subjectId:vm.subject,
            grade:vm.grade,
            courseId:vm.course,
            lessonPeriodId:vm.period,
            taskName:vm.mission,
            page:1,
            size:10
        }).then(function (res) {
            console.log('列表获取完毕',res.data.data);
            vm.Mission = res.data.data;
            vm.totalItems = res.data.total;
        });
        //查询
        vm.search = function () {
            vm.stateParams = {
                subjectId:vm.subject,
                grade:vm.grade,
                courseId:vm.course,
                periodId:vm.period,
                missionName:vm.mission
            };
            console.log(vm.stateParams);
            vm.obj = angular.toJson(vm.stateParams);
            $state.go('backStage.teachManage.mission',{page:1,size:10,period:$stateParams.period,obj:vm.obj},{reload:true})
        };
        //新增
        vm.add = function () {
            vm.stateParams = {
                subjectId:vm.subject,
                grade:vm.grade,
                courseId:vm.course,
                periodId:vm.period,
                missionName:vm.mission
            };
            console.log(vm.stateParams);
            vm.obj = angular.toJson(vm.stateParams);
            $state.go("backStage.teachManage.missionManage",{add:1,from:1,page:1,size:10,period:$stateParams.period,obj:vm.obj})
        };
        //查看、编辑
        vm.view = function (mission) {
            vm.stateParams = {
                subjectId:vm.subject,
                grade:vm.grade,
                courseId:vm.course,
                periodId:vm.period,
                missionName:vm.mission
            };
            console.log(vm.stateParams);
            vm.obj = angular.toJson(vm.stateParams);
            vm.mission = {
                courseId:mission.courseID,
                courseName:mission.courseName
            };
            vm.task = angular.toJson(vm.mission);
            $stateParams.add === '1'?$state.go("backStage.teachManage.missionManage",{add:1,from:2,period:$stateParams.period,obj:vm.obj,task:vm.task}):
                $state.go("backStage.teachManage.missionManage",{from:2,period:$stateParams.period,obj:vm.obj,task:vm.task})
        };
        vm.edit = function(mission) {
            vm.stateParams = {
                subjectId:vm.subject,
                grade:vm.grade,
                courseId:vm.course,
                periodId:vm.period,
                missionName:vm.mission
            };
            console.log(vm.stateParams);
            vm.obj = angular.toJson(vm.stateParams);
            vm.obj = angular.toJson(vm.stateParams);
            vm.mission = {
                courseId:mission.courseID,
                courseName:mission.courseName
            };
            vm.task = angular.toJson(vm.mission);
            $stateParams.add === '1'?$state.go("backStage.teachManage.missionManage",{add:1,from:3,period:$stateParams.period,obj:vm.obj,task:vm.task}):
                $state.go("backStage.teachManage.missionManage",{from:3,period:$stateParams.period,obj:vm.obj,task:vm.task})
        }
    }]);