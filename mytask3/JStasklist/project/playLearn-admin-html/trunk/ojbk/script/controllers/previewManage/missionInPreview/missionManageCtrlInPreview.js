angular.module('app').controller('missionManageCtrlInPreview', ['$scope', '$stateParams', '$rootScope','Course_service', '$state', 'steps','pathProject',
    function ($scope,$stateParams,$rootScope,Course_service,$state,steps,pathProject){
        var vm = $scope.vm = {};
        vm.steps = steps;
        vm.i = 0;
        vm.period = angular.fromJson($stateParams.period)||{};
        console.log('路由参数',$stateParams);
        console.log('父级课时',vm.period);
        vm.bookName = vm.period.bookName;
        vm.periodName = vm.period.lessonPeriodName;
        vm.ajax = pathProject.getFile_url();
        $scope.title={};
        $scope.show = false;
        $scope.lock =true;
        vm.send_data = [];
        vm.img = [];
        vm.follow_task = [];
        vm.videoList = [];
        vm.count3 = [];
        vm.editorContent = [];
        vm.videoUrl = [];
        //设置下拉菜单初始值
        vm.select = [];
        vm.select[0] = vm.steps[0].id;
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
        vm.collectId = [];
        //初始化ng-repeat模板
        vm.mission_steps = [1];
        //添加模板数组
        vm.index = [true];
        $scope.add_step = function () {
            vm.i = vm.mission_steps[vm.mission_steps.length-1]; //避免重复
            vm.mission_steps.push(vm.i+1);
            vm.index.push(true);
            vm.select.push(vm.steps[0].id);
            if($stateParams.from === '3'){
                vm.collectId.push(null);
                console.log(vm.collectId)
            }
            console.log(vm.mission_steps);
            console.log(vm.index)
        };
        //初始化空数组来存储type
        $scope.type  = [];
        $scope.count = [];
        $scope.urls  = [];
        //被删除的步骤id
        vm.delete_id = [];
        vm.delete = function (index) {
            vm.index.splice(index,1);
            vm.mission_steps.splice(index,1);
            vm.editorContent.splice(index,1);
            vm.img.splice(index,1);
            vm.videoUrl.splice(index,1);
            vm.select.splice(index,1);
            if($stateParams.from === '3'){
                vm.delete_id.push(vm.collectId[index]);
                vm.collectId.splice(index,1);
                vm.Task.splice(index,1);
                console.log(vm.collectId,vm.delete_id)
            }
            console.log(vm.index,vm.mission_steps,vm.Task,vm.editorContent)
        };
        //点击确定后forEach将几个数组的内容装配到将要发送的参数数组内
        vm.newArray = [];





        $scope.sure = function () {
            //任务
            if($stateParams.from === '1'){
                Course_service.get_PreviewAddMission({
                    bookId:vm.period.bookId,
                    lessonPeriodId:vm.period.lessonPeriodId,
                    name:vm.missionName,
                    prompt:vm.tips||0,
                    type:vm.tipsType||0,
                    promptTime:vm.promptTime||0,
                    promptInformation:vm.promptInformation
                }).then(function (res) {
                    if(res.data.code === 0){
                        //步骤
                        vm.send_data.length = vm.mission_steps.length||1 ;
                        vm.send_data.fill({});
                        angular.forEach(vm.send_data,function (data,index,array) {
                            array[index] = {
                                taskId:res.data.data.id,
                                bookId:vm.period.bookId,
                                lessonPeriodId:vm.period.lessonPeriodId,
                                type: vm.select[index]||1,
                                text: vm.editorContent[index]||undefined,
                                url : vm.img[index]||vm.videoUrl[index]||undefined,
                                followTask:vm.follow_task[index]||0,
                                sequence:index
                            }
                        });
                        console.log(vm.send_data);
                        Course_service.get_PreviewAddTask(
                            vm.send_data
                        ).then(function (res) {
                            if(res.data.code === 0){
                                $state.go('backStage.previewManage.mission',{add:1,period:$stateParams.period,obj:$stateParams.obj})
                            }
                        })
                    }

                });
            }else if($stateParams.from === '3'){
                Course_service.get_PreviewEditMission({
                    id:vm.Mission.taskId,
                    bookId:vm.Mission.bookId,
                    lessonPeriodId:vm.Mission.lessonPeriodId,
                    name:vm.missionName,
                    prompt:vm.tips||0,
                    type:vm.tipsType||0,
                    promptTime:vm.promptTime||0,
                    promptInformation:vm.promptInformation
                }).then(function (res) {
                    if(res.data.code===0){
                        //步骤
                        //1 调用删除接口提交被删除的步骤id
                        if(vm.delete_id.length > 0){
                            Course_service.get_PreviewDeleteTask(
                                vm.delete_id
                            ).then(function (res) {
                                if(res.data.code === 0){
                                    vm.send_data.length = vm.mission_steps.length||1 ;
                                    vm.send_data.fill({});
                                    angular.forEach(vm.send_data,function (data,index,array) {
                                        array[index] = {
                                            id:vm.collectId[index],
                                            taskId:parseInt($stateParams.task),
                                            bookId:vm.period.bookId,
                                            lessonPeriodId:vm.period.lessonPeriodId,
                                            type: vm.select[index]||1,
                                            text: vm.editorContent[index]||undefined,
                                            url : vm.img[index]||vm.videoUrl[index]||undefined,
                                            followTask:vm.follow_task[index]||0,
                                            sequence:index
                                        }
                                    });
                                    console.log(vm.send_data);
                                    vm.newAdd = [];
                                    angular.forEach(vm.send_data,function (data) {
                                        if(data.id === null){
                                            vm.newAdd.push(data)
                                        }
                                    });
                                    if(vm.newAdd.length > 0){
                                        Course_service.get_PreviewAddTask(vm.newAdd)
                                            .then(function (res) {
                                                if(res.data.code === 0){
                                                    vm.receivedId = [];
                                                    angular.forEach(res.data.data,function (data,index,array) {
                                                        vm.receivedId[index] = array[index].id
                                                    });
                                                    console.log(vm.receivedId);
                                                    angular.forEach(vm.collectId,function (data,index,array) {
                                                        if(array[index] === null){
                                                            vm.collectId.splice(index,1)
                                                        }
                                                    });
                                                    angular.forEach(vm.receivedId,function (data) {
                                                        vm.collectId.push(data)
                                                    });
                                                    angular.forEach(vm.send_data,function (data,index,array) {
                                                        array[index] = {
                                                            id:vm.collectId[index],
                                                            taskId:parseInt($stateParams.task),
                                                            bookId:vm.period.bookId,
                                                            lessonPeriodId:vm.period.lessonPeriodId,
                                                            type: vm.select[index]||1,
                                                            text: vm.editorContent[index]||undefined,
                                                            url : vm.img[index]||vm.videoUrl[index]||undefined,
                                                            followTask:vm.follow_task[index]||0,
                                                            sequence:index
                                                        }
                                                    });
                                                    console.log(vm.send_data);
                                                    Course_service.get_PreviewEditTask(
                                                        vm.send_data
                                                    ).then(function (res) {
                                                        if(res.data.code===0){
                                                            $stateParams.add==='1'?$state.go('backStage.previewManage.mission',{add:1,period:$stateParams.period,obj:$stateParams.obj}):
                                                                $state.go('backStage.previewManage.mission',{period:$stateParams.period,obj:$stateParams.obj})
                                                        }
                                                    })
                                                }
                                            })
                                    }else {
                                        Course_service.get_PreviewEditTask(
                                            vm.send_data
                                        ).then(function (res) {
                                            if(res.data.code===0){
                                                $stateParams.add==='1'?$state.go('backStage.previewManage.mission',{add:1,period:$stateParams.period,obj:$stateParams.obj}):
                                                    $state.go('backStage.previewManage.mission',{period:$stateParams.period,obj:$stateParams.obj})
                                            }
                                        })
                                    }
                                }
                            })
                        }else {//delete_id.length = 0
                            vm.send_data.length = vm.mission_steps.length||1 ;
                            vm.send_data.fill({});
                            angular.forEach(vm.send_data,function (data,index,array) {
                                array[index] = {
                                    id:vm.collectId[index],
                                    taskId:parseInt($stateParams.task),
                                    bookId:vm.period.bookId,
                                    lessonPeriodId:vm.period.lessonPeriodId,
                                    type: vm.select[index]||1,
                                    text: vm.editorContent[index]||undefined,
                                    url : vm.img[index]||vm.videoUrl[index]||undefined,
                                    followTask:vm.follow_task[index]||0,
                                    sequence:index
                                }
                            });
                            console.log(vm.send_data);
                            vm.newAdd = [];
                            angular.forEach(vm.send_data,function (data) {
                                if(data.id === null){
                                    vm.newAdd.push(data)
                                }
                            });
                            if(vm.newAdd.length > 0) {
                                Course_service.get_PreviewAddTask(vm.newAdd)
                                    .then(function (res) {
                                        if (res.data.code === 0) {
                                            vm.receivedId = [];
                                            angular.forEach(res.data.data, function (data, index, array) {
                                                vm.receivedId[index] = array[index].id
                                            });
                                            console.log(vm.receivedId);
                                            angular.forEach(vm.collectId,function (data,index,array) {
                                                if(array[index] === null){
                                                    vm.collectId.splice(index,1)
                                                }
                                            });
                                            angular.forEach(vm.receivedId,function (data) {
                                                vm.collectId.push(data)
                                            });
                                            angular.forEach(vm.send_data,function (data,index,array) {
                                                array[index] = {
                                                    id:vm.collectId[index],
                                                    taskId:parseInt($stateParams.task),
                                                    bookId:vm.period.bookId||vm.Mission.bookId,
                                                    lessonPeriodId:vm.period.lessonPeriodId||vm.Mission.lessonPeriodId,
                                                    type: vm.select[index]||1,
                                                    text: vm.editorContent[index]||undefined,
                                                    url : vm.img[index]||vm.videoUrl[index]||undefined,
                                                    followTask:vm.follow_task[index]||0,
                                                    sequence:index
                                                }
                                            });
                                            console.log(vm.send_data);
                                            Course_service.get_PreviewEditTask(
                                                vm.send_data
                                            ).then(function (res) {
                                                if (res.data.code === 0) {
                                                    $stateParams.add === '1' ? $state.go('backStage.previewManage.mission', {
                                                            add: 1,
                                                            period: $stateParams.period,
                                                            obj: $stateParams.obj
                                                        }) :
                                                        $state.go('backStage.previewManage.mission', {
                                                            period: $stateParams.period,
                                                            obj: $stateParams.obj
                                                        })
                                                }
                                            })
                                        }
                                    })
                            }else {
                                Course_service.get_PreviewEditTask(
                                    vm.send_data
                                ).then(function (res) {
                                    if (res.data.code === 0) {
                                        $stateParams.add === '1' ? $state.go('backStage.previewManage.mission', {
                                                add: 1,
                                                period: $stateParams.period,
                                                obj: $stateParams.obj
                                            }) :
                                            $state.go('backStage.previewManage.mission', {
                                                period: $stateParams.period,
                                                obj: $stateParams.obj
                                            })
                                    }
                                })}
                        }
                    }
                })
            }else {
                $stateParams.add==='1'?$state.go('backStage.previewManage.mission',{add:1,period:$stateParams.period,obj:$stateParams.obj}):
                    $state.go('backStage.previewManage.mission',{period:$stateParams.period,obj:$stateParams.obj})
            }
        };
        //查看、编辑
        if($stateParams.from ==='2'||$stateParams.from === '3'){
            Course_service.get_PreviewViewMission({
                params:{taskId:parseInt($stateParams.task)}
            }).then(function (res) {
                vm.Mission = res.data.data;
                console.log('任务详情',vm.Mission);
                vm.bookName = vm.Mission.bookName;
                vm.periodName = vm.Mission.lessonPeriodName;
                vm.missionName = vm.Mission.taskName;
                vm.tips = vm.Mission.prompt;
                vm.tipsType = String(vm.Mission.type);
                vm.promptTime = String(vm.Mission.promptTime);
                vm.promptInformation = vm.Mission.promptInformation;

            });
            Course_service.get_PreviewTask({
                params:{
                    taskId:$stateParams.task,
                    size:999
                }
            }).then(function (res) {
                vm.Task = res.data.data;
                console.log('步骤详情',vm.Task);
                vm.index.length = vm.Task.length;
                vm.index.fill(true);
                vm.mission_steps = [];
                vm.collectId = [];
                angular.forEach(vm.Task,function (data,index,array) {
                    vm.mission_steps.push(index+1);
                    vm.select[index] = array[index].type;
                    vm.editorContent[index] = array[index].text;
                    vm.follow_task[index] = array[index].followTask;
                    vm.collectId[index] = array[index].id;

                    if(array[index].type===3){
                        vm.videoUrl[index] = array[index].url;
                        vm.img[index] = ''
                    }else {
                        vm.img[index] = array[index].url;
                        vm.videoUrl[index] = '';
                    }
                });
                console.log(vm.collectId);
                console.log(vm.mission_steps,vm.index)
                //console.log(vm.mission_steps,vm.select,vm.editorContent,vm.follow_task,vm.videoUrl,vm.img)
            })
        }
        //取消
        $scope.cancel = function () {
            $stateParams.add==='1'?$state.go('backStage.previewManage.mission',{add:1,period:$stateParams.period,obj:$stateParams.obj}):
                $state.go('backStage.previewManage.mission',{period:$stateParams.period,obj:$stateParams.obj})
        }
    }]);
