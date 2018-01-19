angular.module('app').controller('coursesManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','subject_grade','pathProject','$q',
    function ($scope, $stateParams, $rootScope, $state, Course_service,subject_grade,pathProject,$q){
        var vm = $scope.vm = {};
        vm.data = $stateParams;
        console.log('路由参数',vm.data);
        vm.subject = angular.fromJson($stateParams.subject)||{};
        console.log('科目',vm.subject);
        vm.subjectName = vm.subject.name;
        vm.Grade = subject_grade;
        vm.ajax = pathProject.getFile_url();
        vm.show = false;
        vm.exportSrc = {
            home:'',
            list:''
        };
        if($stateParams.from === '1'){
            vm.title = '新增课程';
        }
        else if($stateParams.from === '2'){
            vm.title = '查看课程';
            vm.show = true;
            console.log($stateParams.id);
        }
        else if($stateParams.from === '3'){
            vm.title = '编辑课程';
        }


        //相关科目关联
        Course_service.get_TechSubject({
            params:{
                page:1,
                size:10
            }
        }).then(function (res) {
            vm.lists = res.data.data;
            console.log('科目列表',vm.lists);
            vm.subject1 = vm.lists[0].id;
            vm.subject2 = vm.lists[0].id;
            vm.subject3 = vm.lists[0].id;
            vm.grade1 = vm.Grade[0].id;
            vm.grade2 = vm.Grade[0].id;
            vm.grade3 = vm.Grade[0].id;
            vm.params1 = {
                subjectId:vm.subject1,
                grade:vm.grade1
            };
            vm.params2 = {
                subjectId:vm.subject2,
                grade:vm.grade2
            };
            vm.params3 = {
                subjectId:vm.subject3,
                grade:vm.grade3
            };

            $q.all([
                Course_service.get_TechSearchCourse({params:vm.params1}),
                Course_service.get_TechSearchCourse({params:vm.params2}),
                Course_service.get_TechSearchCourse({params:vm.params3})
            ])
                .then(function(res){
                    vm.course_lists1 = res[0].data.data;
                    vm.course1 = vm.course_lists1[0].courseId;
                    vm.course_lists2 = res[1].data.data;
                    vm.course2 = vm.course_lists2[0].courseId;
                    vm.course_lists3 = res[2].data.data;
                    vm.course3 = vm.course_lists3[0].courseId;
                })
        });
        //获取合作机构列表
        Course_service.get_Company({
            params:{
                page:1,
                size:10
            }
        }).then(function (res) {
            console.log(res);
            vm.companies = res.data.data;
            console.log('合作机构列表',vm.companies);
        });

        //1号栏位
        vm.course_No1 = function () {
            vm.params1 = {
                subjectId:vm.subject1,
                grade:vm.grade1
            };
            Course_service.get_TechSearchCourse({
                params:vm.params1
            }).then(function (res) {
                vm.course_lists1 = res.data.data;
                vm.course1 = vm.course_lists1[0].courseId;
            });
        };
        //2号栏位
        vm.course_No2 = function () {
            vm.params2 = {
                subjectId:vm.subject2,
                grade:vm.grade2
            };
            Course_service.get_TechSearchCourse({
                params:vm.params2
            }).then(function (res) {
                vm.course_lists2 = res.data.data;
                vm.course2 = vm.course_lists2[0].courseId;
            });
        };
        //3号栏位
        vm.course_No3 = function () {
            vm.params3 = {
                subjectId:vm.subject3,
                grade:vm.grade3
            };
            Course_service.get_TechSearchCourse({
                params:vm.params3
            }).then(function (res) {
                vm.course_lists3 = res.data.data;
                vm.course3 = vm.course_lists3[0].courseId;
            });
        };

        //查看/编辑页面
        if($stateParams.from==='2'||$stateParams.from==='3'){
            Course_service.get_TechViewCourse({
                params:{
                    courseId:Number(vm.data.id)
                }
            }).then(function (res) {
                vm.course = res.data.data;
                console.log('课时详情',vm.course);
                vm.subjectName = vm.course.subjectName;
                vm.course_name = vm.course.courseName;
                vm.course_grade = String(vm.course.grade);
                vm.top_img = vm.course.homePictureUrl;
                vm.list_img = vm.course.listPictureUrl;
                vm.intro = vm.course.intro;
                vm.exportSrc.home = vm.course.homePictureUrl;
                vm.exportSrc.list = vm.course.listPictureUrl;
                vm.couseOneId = vm.course.courseOneId;
                vm.couseTwoId = vm.course.courseTwoId;
                vm.couseThreeId = vm.course.courseThreeId;
                //合作机构
                Course_service.get_Company({
                    params:{
                        page:1,
                        size:10
                    }
                }).then(function (res) {
                    console.log(res);
                    vm.companies = res.data.data;
                    console.log('合作机构列表',vm.companies);
                    angular.forEach(vm.companies,function (data) {
                        if(data.id === vm.course.companyId){
                            vm.company = data.id
                        }
                    })
                });
                $q.all([
                    Course_service.get_TechViewCourse({
                        courseId:vm.couseOneId
                    }),
                    Course_service.get_TechViewCourse({
                        courseId:vm.couseTwoId
                    }),
                    Course_service.get_TechViewCourse({
                        courseId:vm.couseThreeId
                    })
                ]).then(function (res){
                    vm.linkCourse1 = res[0].data.data;
                    vm.linkCourse2 = res[1].data.data;
                    vm.linkCourse3 = res[2].data.data;
                    console.log('关联课程1',vm.linkCourse1);
                    console.log('关联课程2',vm.linkCourse2);
                    console.log('关联课程3',vm.linkCourse3);
                    Course_service.get_TechSubject({
                        page:1,
                        size:10
                    }).then(function (res) {
                        vm.lists = res.data.data;
                        console.log('科目列表',vm.lists);
                        vm.subject1 = vm.linkCourse1.subjectId;
                        vm.subject2 = vm.linkCourse2.subjectId;
                        vm.subject3 = vm.linkCourse3.subjectId;
                        vm.grade1 = vm.linkCourse1.grade;
                        vm.grade2 = vm.linkCourse2.grade;
                        vm.grade3 = vm.linkCourse3.grade;
                        $q.all([
                            Course_service.get_TechSearchCourse({
                                params:{
                                    subjectId:vm.subject1,
                                    grade:vm.grade1
                                }
                            }),
                            Course_service.get_TechSearchCourse({
                                params: {
                                    subjectId: vm.subject2,
                                    grade: vm.grade2
                                }
                            }),
                            Course_service.get_TechSearchCourse({
                                params:{
                                    subjectId:vm.subject3,
                                    grade:vm.grade3
                                }
                            })
                        ])
                            .then(function(res){
                                vm.course_lists1 = res[0].data.data;
                                vm.course_lists2 = res[1].data.data;
                                vm.course_lists3 = res[2].data.data;
                                console.log(vm.course_lists1,vm.course_lists2,vm.course_lists3);
                                vm.course1 = vm.course.courseOneId;
                                vm.course2 = vm.course.courseTwoId;
                                vm.course3 = vm.course.courseThreeId;
                            })
                    });
                } )
            })
        }




        //确定按钮操作
        vm.course_operation = function () {
            vm.params = {
                subjectId:vm.subject.id||vm.course.subjectId,
                courseName:vm.course_name,
                grade:Number(vm.course_grade)||'1',
                intro:vm.intro,
                homePictureUrl:vm.exportSrc.home,
                listPictureUrl:vm.exportSrc.list,
                companyId:vm.company,
                courseOneId:vm.course1,
                courseTwoId:vm.course2,
                courseThreeId:vm.course3
            };
            console.log(vm.data);
            if(vm.data.from === '1'){
                console.log('新增提交...');
                Course_service.get_TechAddCourse({
                    params:vm.params
                }).then(function (res) {
                    console.log(res);
                    // if(res.data.code === 0){
                        console.log('新增完成');
                        $state.go('backStage.teachManage.courses',{add:1,subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject})
                    // }
                })
            }else if(vm.data.from === '3'){
                console.log('编辑提交...');
                Course_service.get_TechEditCourse({
                    params:vm.params
                }).then(function (res) {
                    // if(res.data.code === 0){
                        console.log('编辑完成');
                        $stateParams.add==='1'?$state.go('backStage.teachManage.courses',{add:1,subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject}):
                            $state.go('backStage.teachManage.courses',{subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject})
                    // }
                })
            }else {
                $stateParams.add==='1'?$state.go('backStage.teachManage.courses',{add:1,subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject}):
                    $state.go('backStage.teachManage.courses',{subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject})
            }
        };
        vm.course_cancel = function () {
            $stateParams.add==='1'?$state.go('backStage.teachManage.courses',{add:1,subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject}):
                $state.go('backStage.teachManage.courses',{subjectId:$stateParams.subjectId,grade:$stateParams.grade,courseName:$stateParams.courseName,status:$stateParams.status,subject:$stateParams.subject})
        }
    }]);