angular.module('app').controller('missionManageCtrl', ['$scope', '$stateParams', '$rootScope','Course_service', '$state', 'steps','pathProject',
    function ($scope,$stateParams,$rootScope,Course_service,$state,steps,pathProject){
        var vm = $scope.vm = {};
        vm.steps = steps;
        vm.i = 0;
        vm.period = angular.fromJson($stateParams.period)||{};
        vm.task = angular.fromJson($stateParams.task)||{};
        console.log('路由参数',$stateParams);
        console.log('vm.task',vm.task);
        vm.subjectName = vm.period.subjectName;
        vm.courseName = vm.period.courseName||vm.task.courseName;
        vm.periodName = vm.period.lessonPeriodName;
        vm.ajax = pathProject.getFile_url();
        $scope.title={};
        $scope.show = false;
        $scope.lock =true;
        //设置下拉菜单初始值
        $scope.select = vm.steps[0];
        console.log($scope.select);
        //获取路由参数来判断操作
        vm.data = $stateParams;
        if($stateParams.from === '1'){
            $scope.title.name = '新增任务';
        }else if($stateParams.from === '2'){
            $scope.title.name = '查看任务';
            $scope.show = true;
        }else if($stateParams.from === '3'){
            $scope.title.name = '编辑任务';
        }

        //查看、编辑
        if($stateParams.from ==='2'||$stateParams.from === '3'){
            Course_service.get_TechViewMission({
                taskId:$stateParams.taskId
            }).then(function (res) {
                vm.Mission = res.data.data;
                console.log('任务详情',vm.Mission);
                vm.subjectName = vm.Mission.subjectName;
                vm.periodName = vm.Mission.lessonPeriodName;
                vm.missionName = vm.Mission.taskName
            });
            // Course_service.
        }

        //初始化ng-repeat模板
        $scope.mission_steps = [1];
        //添加模板数组
        vm.index = [true];
        $scope.add_step = function () {
            vm.i += 1;
            $scope.mission_steps.push(vm.i+1);
            vm.index.push(true);
            console.log($scope.mission_steps);
            console.log(vm.index)
        };
        //初始化空数组来存储type
        $scope.type = [];
        $scope.count = [];
        $scope.urls = [];
        var a = null;
        //获取选择类型
        $scope.selected = function (x,y) {
            if(a !== y){
                $scope.type[y] = x.id;
                $scope.count[y] = y;
                a = y
            }else {
                $scope.type[y] = x.id
            }
        };
        //初始化空数组来存储富文本框内容
        $scope.text_content = [];
        $scope.count2 = [];
        //获得文本框的内容
        $scope.text = function (x,y) {
            if(a !== y){
                $scope.text_content[y] = x;
                $scope.count2[y] = y;
                a = y;
            }else {
                $scope.text_content[y] = x
            }
        };
        $scope.send_data = [];
        $scope.urls = [];
        //初始化数组存储url
        vm.img = [];
        vm.videoList = [];
        vm.count3 = [];
        vm.video = function (x,y) {
            if(a !== y){
                vm.videoList[y] = x;
                vm.count3[y] = y;
                a = y;
            }else {
                vm.videoList[y] = x
            }
        };
        vm.delete = function (index) {
            console.log(index);
            vm.index.splice(index,1);
            console.log(vm.index);
            $scope.mission_steps.splice(index,1);
            $scope.type.splice(index,1);
            $scope.text_content.splice(index,1);
            vm.img.splice(index,1);
            console.log($scope.mission_steps,$scope.type,$scope.text_content,vm.img);
        };
        //点击确定后forEach将几个数组的内容装配到将要发送的参数数组内
        vm.newArray = [];
        $scope.sure = function () {
            //步骤
            $scope.send_data.length = $scope.mission_steps.length ;
            $scope.send_data.fill({});
            angular.forEach($scope.send_data,function (data,index,array) {
                if($scope.type[index] === 4){
                    vm.img[index] = '';
                    vm.videoList[index] = ''
                }
                array[index] = {
                    type: $scope.type[index]||1,
                    Text: $scope.text_content[index]||'',
                    url:  vm.img[index]||vm.videoList[index]||''
                }
            });
            console.log($scope.type,$scope.text_content);
            console.log(angular.toJson($scope.send_data));

            //任务
            if($stateParams.from === '1'){
                Course_service.get_TechAddMission({
                    subjectId:vm.period.subjectId,
                    courseId:vm.period.courseId,
                    lessonPeriodId:vm.period.lessonPeriodId,
                    name:vm.missionName,
                    prompt:vm.tips||0,
                    type:vm.tipsType||0,
                    promptTime:vm.promptTime||0,
                    promptInformation:vm.promptInformation
                }).then(function (res) {
                    if(res.data.code === 0){
                        $state.go('backStage.teachManage.mission',{add:1,period:$stateParams.period,obj:$stateParams.obj})
                    }
                });
            }else if($stateParams.from === '3'){
                Course_service.get_TechEditMission({
                    taskId:$stateParams.taskId,
                    name:vm.missionName,
                    prompt:vm.tips||0,
                    type:vm.tipsType||0,
                    promptTime:vm.promptTime||0,
                    promptInformation:vm.promptInformation
                }).then(function (res) {
                    if(res.data.code===0){
                        $stateParams.add==='1'?$state.go('backStage.teachManage.mission',{add:1,period:$stateParams.period,obj:$stateParams.obj}):
                            $state.go('backStage.teachManage.mission',{period:$stateParams.period,obj:$stateParams.obj})
                    }
                })
            }
        };
        //取消
        $scope.cancel = function () {
            $stateParams.add==='1'?$state.go('backStage.teachManage.mission',{add:1,period:$stateParams.period,obj:$stateParams.obj}):
                $state.go('backStage.teachManage.mission',{period:$stateParams.period,obj:$stateParams.obj})
        }
    }]);
