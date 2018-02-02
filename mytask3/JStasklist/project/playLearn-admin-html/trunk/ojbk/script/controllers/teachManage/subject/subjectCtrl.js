angular.module('app').controller('subjectCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','subject_type','subject_status',
    function ($scope, $stateParams, $rootScope, $state, Course_service,subject_type,subject_status){
        var vm = $scope.vm = {};
        console.log($stateParams);
        vm.subject_type = subject_type;
        vm.subject_status = subject_status;
        vm.name = $stateParams.name;
        vm.currentPage = parseInt($stateParams.page)||1;
        vm.type = parseInt($stateParams.type)||null;
        if($stateParams.status){
            vm.status = parseInt($stateParams.status)
        }
        //分页按钮
        vm.pageGo = function (x) {
            $state.go('backStage.teachManage.subject',{page:x});
        };

        //查看按钮
        vm.subject_view = function (subject) {
            vm.subject_selected = angular.toJson(subject);
            $state.go("backStage.teachManage.subjectManage",{from:2,page:$stateParams.page,type:$stateParams.type,status:$stateParams.status,name:$stateParams.name,id:subject.id,subject:vm.subject_selected});
            console.log($stateParams)
        };
        //编辑按钮
        vm.subject_edit = function (subject) {
            vm.subject_selected = angular.toJson(subject);
            $state.go("backStage.teachManage.subjectManage",{from:3,page:$stateParams.page,type:$stateParams.type,status:$stateParams.status,name:$stateParams.name,id:subject.id,subject:vm.subject_selected})
        };
        //删除按钮
        vm.subject_delete = function (subject) {
            $rootScope.modalConfrim('是否删除？')
                .then(function () {
                    Course_service.get_TechDeleteSubject(subject.id)
                        .then(function (res) {
                            if(res.data.code===0){
                                $rootScope.modalConfrim('删除成功')
                                    .then(function () {
                                        $state.go("backStage.teachManage.subject",{},{reload:true})
                                    },function () {

                                    })
                            }else {
                                $rootScope.modalConfrim(res.data.message)
                            }
                        });
                },function () {

                });
        };
        //加载列表
        vm.params = {
            type:vm.type||'',
            status:vm.status,
            name:vm.name,
            page:parseInt($stateParams.page)||1,
            size:parseInt($stateParams.size)||10
        };
        console.log('开始渲染',vm.params);
        Course_service.get_TechSearchSubject({
            params:vm.params
        }).then(function (res) {
            if(res.status === 200) {
                if (res.data.code === 0) {
                    console.log('渲染完毕');
                    vm.totalItems = res.data.total;
                    vm.lists = res.data.data;
                    console.log('科目列表',vm.lists);
                    console.log(res);
                }else {
                    alert(res.message)
                }
            }else {
                alert('请求超时')
            }

        });
        //搜索按钮
        vm.subject_search = function () {
            $state.go('backStage.teachManage.subject',{page:1,type:vm.type,status:vm.status,name:vm.name},{reload:true});
        };
        //上下架
        vm.changeStatus = function (subject) {
            if(subject.status === 0){
                vm.confirmFirst = '是否上架该科目';
                vm.confirm = '确认上架？';
                vm.result = '上架成功'
            }else {
                vm.confirmFirst = '是否下架该科目及相关内容？';
                vm.confirm = '确认下架？';
                vm.result = '下架成功'
            }
            $rootScope.modalConfrim(vm.confirmFirst)
                .then(function () {
                    $rootScope.modalConfrim(vm.confirm)
                        .then(function () {
                            Course_service.get_TechStatusSubject({id:subject.id})
                                .then(function (res) {
                                    if(res.data.code===0){
                                        $rootScope.modalConfrim(vm.result)
                                            .then(function () {
                                                $state.go("backStage.teachManage.subject",{},{reload:true})
                                            },function () {

                                            })
                                    }else {
                                        $rootScope.modalConfrim(res.data.message)
                                    }
                                });
                        },function () {

                        });
                },function () {
                    
                })
                
        };
        //新增
        vm.add = function () {
            $state.go("backStage.teachManage.subjectManage",{from:1,page:$stateParams.page,type:$stateParams.type,status:$stateParams.status,name:$stateParams.name})
        };
        //跳转到课程
        vm.course_jump = function (subject) {
            console.log(subject);
            vm.subject_selected = angular.toJson(subject);
            $state.go("backStage.teachManage.courses",{add:1,subject:vm.subject_selected})
        }
    }]);