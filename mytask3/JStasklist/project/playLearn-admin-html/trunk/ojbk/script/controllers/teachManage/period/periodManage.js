angular.module('app').controller('periodManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state','Course_service',
    function ($scope, $stateParams, $rootScope, $state,Course_service){
        var vm = $scope.vm = {};
        vm.data = $stateParams;
        console.log('路由参数',vm.data);
        vm.course = angular.fromJson(vm.data.course)||{};
        console.log('父级课程',vm.course);
        vm.show = false;
        vm.lock =0;
        vm.subjectName = vm.course.subjectName;
        vm.courseName = vm.course.name;
        if(vm.data.from === '1'){
            vm.title = '新增课时';
        }else if(vm.data.from === '2'){
            vm.title = '查看课时';
            vm.show = true;
        }else if(vm.data.from === '3'){
            vm.title = '编辑课时';
        }
        //获得课时列表
        if($stateParams.from === '2'||$stateParams.from==='3'){
            vm.period = angular.fromJson($stateParams.period)||{};
            console.log(vm.period);
            Course_service.get_TechViewPeriod(
                vm.period.id
            ).then(function (res) {
                console.log(res.data.data);
                vm.lessonPeriod = res.data.data;
                vm.subjectName = vm.course.subjectName||vm.period.subjectName;
                vm.courseName = vm.course.name||vm.period.courseName;
                vm.periodName = vm.lessonPeriod.name||vm.period.name;
                vm.periodIntro = vm.lessonPeriod.information;
                vm.awardStar = vm.lessonPeriod.awardStar;
                vm.lock = vm.lessonPeriod.needPay;
                vm.needStar = vm.lessonPeriod.needStar;
                vm.needMoney = vm.lessonPeriod.needMoney;

            });
        }
        //确定按钮
        vm.operation = function () {
            if(vm.lock===0){
                vm.needMoney = 0;
                vm.needStar = 0;
            }
            if(vm.data.from === '1'){
                console.log('新增接口');
                console.log('新增参数',vm.params);
                Course_service.get_TechAddPeriod({
                    name:vm.periodName,
                    information:vm.periodIntro,
                    awardStar:vm.awardStar,
                    needPay:vm.lock,
                    needMoney:vm.needMoney,
                    needStar:vm.needStar,
                    subjectId:vm.course.subjectId,
                    courseId:vm.course.id
                }).then(function (res) {
                    if(res.data.code===0){
                        console.log('新增成功');
                        console.log(res);
                        if(res.data.code===0){
                            $state.go('backStage.teachManage.period',{add:1,course:$stateParams.course,obj:$stateParams.obj})
                        }
                    }
                })
            }
            else if(vm.data.from === '3'){
                vm.params = {
                    id:vm.lessonPeriod.id,
                    subjectId:vm.lessonPeriod.subjectId,
                    courseId:vm.lessonPeriod.courseId,
                    name:vm.periodName,
                    awardStar:vm.awardStar,
                    needPay:vm.lock,
                    information:vm.periodIntro,
                    needMoney:vm.needMoney,
                    needStar:vm.needStar
                };
                console.log('编辑接口');
                console.log('编辑参数',vm.params);
                Course_service.get_TechEditPeriod(vm.params)
                    .then(function (res) {
                        if(res.data.code===0){
                            console.log('编辑成功');
                            console.log(res);
                            $stateParams.add==='1'?$state.go('backStage.teachManage.period',{add:1,course:$stateParams.course,obj:$stateParams.obj}):
                                $state.go('backStage.teachManage.period',{obj:$stateParams.obj,course:$stateParams.course})
                        }
                    })
            }else {
                $stateParams.add==='1'?$state.go('backStage.teachManage.period',{add:1,course:$stateParams.course,obj:$stateParams.obj}):
                    $state.go('backStage.teachManage.period',{course:$stateParams.course,obj:$stateParams.obj})
            }
        };
        //取消
        vm.cancel = function () {
            $stateParams.add==='1'?$state.go('backStage.teachManage.period',{add:1,course:$stateParams.course,obj:$stateParams.obj}):
                $state.go('backStage.teachManage.period',{course:$stateParams.course,obj:$stateParams.obj})
        }
    }]);