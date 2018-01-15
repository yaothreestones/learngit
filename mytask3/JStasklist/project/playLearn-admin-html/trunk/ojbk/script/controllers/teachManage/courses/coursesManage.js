angular.module('app').controller('coursesManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','subject_grade','pathProject','$q',
    function ($scope, $stateParams, $rootScope, $state, Course_service,subject_grade,pathProject,$q){
        var vm = $scope.vm = {};
        if($stateParams.add==='1'){
            $scope.subject = angular.fromJson($stateParams.subject);
            console.log($scope.subject,$stateParams);
            $scope.subjectName = $scope.subject.name;
        }
        vm.ajax = pathProject.getFile_url();
        $scope.title={};
        $scope.show = false;
        $scope.exportSrc = {
            home:'',
            list:''
        };
        vm.subject_grade = subject_grade.slice(1);
        if($stateParams.from === '1'){
            $scope.title.name = '新增课程';
        }
        else if($stateParams.from === '2'){
            $scope.title.name = '查看课程';
            $scope.show = true;
            console.log($stateParams.id);
        }
        else if($stateParams.from === '3'){
            $scope.title.name = '编辑课程';
        }


        //相关科目关联
        Course_service.get_TechSubject({
            params:{
                page:1,
                size:10
            }
        }).then(function (res) {
            vm.lists = res.data.data;
            console.log(vm.lists);
            vm.subject1 = vm.lists[0];
            vm.subject2 = vm.lists[0];
            vm.subject3 = vm.lists[0];
            //年级
            vm.grade1 = vm.subject_grade[0];
            vm.grade2 = vm.subject_grade[0];
            vm.grade3 = vm.subject_grade[0];
            //搜索课程列表1
            vm.params1 = {
                subjectId:vm.subject1.id,
                grade:vm.grade1.id
            };
            //搜索课程列表2
            vm.params2 = {
                subjectId:vm.subject2.id,
                grade:vm.grade2.id
            };
            //搜索课程列表3
            vm.params3 = {
                subjectId:vm.subject3.id,
                grade:vm.grade3.id
            };
            $q.all([
                Course_service.get_TechSearchCourse({params:vm.params1}),
                Course_service.get_TechSearchCourse({params:vm.params2}),
                Course_service.get_TechSearchCourse({params:vm.params3})
            ])
                .then(function(res){
                    vm.course_lists1 = res[0].data.data;
                    vm.course1 = vm.course_lists1[0];
                    vm.course_lists2 = res[1].data.data;
                    vm.course2 = vm.course_lists2[0];
                    vm.course_lists3 = res[2].data.data;
                    vm.course3 = vm.course_lists3[0];
                })
        });


        //跳转到查看/编辑页面
        if($stateParams.from==='2'||$stateParams.from==='3'){
            Course_service.get_TechViewCourse({
                params:{
                    courseId:$stateParams.id
                }
            }).then(function (res) {
                console.log(res.data.data);
                $scope.course = res.data.data;
                $scope.subjectName = $scope.course.subjectName;
                $scope.course_name = $scope.course.courseName;
                $scope.course_grade = String($scope.course.grade);
                $scope.top_img = $scope.course.homePictureUrl;
                $scope.list_img = $scope.course.listPictureUrl;
                $scope.intro = $scope.course.intro;
                $scope.exportSrc.home = $scope.course.homePictureUrl;
                $scope.exportSrc.list = $scope.course.listPictureUrl;
                $scope.couseOneId = $scope.course.courseOneId;
                $scope.couseTwoId = $scope.course.courseTwoId;
                $scope.couseThreeId = $scope.course.courseThreeId;


            })
        }


        //获取合作机构列表
        Course_service.get_Company({
            params:{
                page:1,
                size:10
            }
        }).then(function (res) {
            //将一个元素插入数组头部，unshift返回的是数组长度
            res.data.data.unshift({name:'无'});
            vm.companies = res.data.data;
            console.log(vm.companies);
            vm.company = vm.companies[0];
        });

        //1号栏位
        vm.course_No1 = function () {
            vm.params1 = {
                subjectId:vm.subject1.id,
                grade:vm.grade1.id
            };
            Course_service.get_TechSearchCourse({
                params:vm.params1
            }).then(function (res) {
                vm.course_lists1 = res.data.data;
                vm.course1 = vm.course_lists1[0];
            });
        };
        //2号栏位
        vm.course_No2 = function () {
            vm.params2 = {
                subjectId:vm.subject2.id,
                grade:vm.grade2.id
            };
            Course_service.get_TechSearchCourse({
                params:vm.params2
            }).then(function (res) {
                vm.course_lists2 = res.data.data;
                vm.course2 = vm.course_lists2[0];
            });
        };
        //3号栏位
        vm.course_No3 = function () {
            vm.params3 = {
                subjectId:vm.subject3.id,
                grade:vm.grade3.id
            };
            Course_service.get_TechSearchCourse({
                params:vm.params3
            }).then(function (res) {
                vm.course_lists3 = res.data.data;
                vm.course3 = vm.course_lists3[0];
            });
        };

        //确定按钮操作
        $scope.course_operation = function () {
            if($stateParams.from === '1'||$stateParams.from === '3'){
                $scope.releate = {
                    subjectOne:vm.subject1,
                    subjectTwo:vm.subject2,
                    subjectThree:vm.subject3,
                    GradeOne:vm.grade1,
                    GradeTwo:vm.grade2,
                    GradeThree:vm.grade3,
                    courseOne:vm.course1,
                    courseTwo:vm.course2,
                    courseThree:vm.course3
                };
                $scope.b = angular.toJson($scope.releate);
                $scope.data = {
                    subjectId:$scope.subject.id,
                    courseName:$scope.course_name,
                    grade:Number($scope.course_grade)|'1',
                    intro:$scope.intro,
                    homePictureUrl:$scope.exportSrc.home,
                    listPictureUrl:$scope.exportSrc.list,
                    companyId:vm.company.id||null,
                    courseRelative:$scope.b

                };
                console.log($scope.data);
                Course_service.get_TechAddCourse({
                    data:$scope.data
                }).then(function (res) {

                })
            }
        };
        $scope.course_cancel = function () {
            $stateParams.add==='1'?$state.go('backStage.teachManage.courses',{add:1,subject:$stateParams.subject}):
                $state.go('backStage.teachManage.courses')
        }
    }]);