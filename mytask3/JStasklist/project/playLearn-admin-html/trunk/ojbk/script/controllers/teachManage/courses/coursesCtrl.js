angular.module('app').controller('coursesCtrl', ['$scope', '$stateParams', '$rootScope', '$state','Course_service','subject_status','subject_grade',
    function ($scope, $stateParams, $rootScope, $state, Course_service,subject_status,subject_grade){
        var vm = $scope.vm = {};
        vm.subject = angular.fromJson($stateParams.subject)||{};
        console.log('科目',vm.subject);
        //factory赋值
        vm.subject_status = subject_status;
        vm.subject_grade = subject_grade;
        vm.subjectName = parseInt($stateParams.subjectId)||undefined;
        vm.grade = parseInt($stateParams.grade)||undefined;
        vm.courseName = $stateParams.courseName;
        if($stateParams.status){
            vm.status = parseInt($stateParams.status);
        }
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
                    page:'',
                    size:''
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
            pageSize:parseInt($stateParams.size)||10,
            subjectId:vm.subject.id||vm.subjectName||'',
            grade:vm.grade||'',
            courseName:vm.courseName||'',
            status:vm.status
        };
        console.log('课程列表参数',vm.params);
        Course_service.get_TechSearchCourse({
            params:vm.params
        }).then(function(res) {
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
            $state.go("backStage.teachManage.coursesManage",{from:1,add:1,subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject})
        };
        //查看按钮
        vm.course_view = function (course) {
            $stateParams.add==='1'?$state.go("backStage.teachManage.coursesManage",{from:2,add:1,course:course.courseId,subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject}):
                $state.go("backStage.teachManage.coursesManage",{from:2,course:course.courseId,subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject})

        };
        //编辑按钮
        vm.course_edit = function (course) {
            console.log(course);
            vm.course_selected = angular.toJson(course);
            $stateParams.add==='1'?$state.go("backStage.teachManage.coursesManage",{from:3,add:1,course:course.courseId,subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject}):
                $state.go("backStage.teachManage.coursesManage",{from:3,course:course.courseId,subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject})
        };
        //删除按钮
        vm.course_delete = function (course) {
            Course_service.get_TechDeleteCourse({
                params:course.id
            }).then(function (res) {
                if(res.data.code === 0){
                    alert('删除成功')
                }
            })
        };
        //按条件查询课程列表
        vm.search = function () {
            $state.go('backStage.teachManage.courses',{page:1,size:$stateParams.size,subjectId:vm.subjectName,grade:vm.grade,courseName:vm.courseName,status:vm.status},{reload:true})
        };
        //跳转到课时
        vm.period_jump = function (course) {
            vm.course_selected = angular.toJson(course);
            $state.go("backStage.teachManage.period",{add:1,course:vm.course_selected})
        }
    }]);