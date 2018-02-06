angular.module('app')
    .controller('missionCtrl',['$state','$stateParams','Course_service',
        function ($state,$stateParams,Course_service) {
            var vm = this;
            vm.tip = false;
            vm.Period = parseInt($stateParams.lessonPeriodId)||parseInt($stateParams.periodId);
            Course_service.get_mission_list(
                vm.Period
            ).then(function (res) {
                if (res.data.code === 0) {
                    console.log(res.data.data);
                    vm.taskLists = res.data.data;
                    angular.forEach(vm.taskLists,function (data) {
                        if(data.id === parseInt($stateParams.taskId) && data.studyStatus === 0){
                            Course_service.get_task_start_study(
                                parseInt($stateParams.taskId)
                            )
                        }
                        if(data.id === parseInt($stateParams.taskId)){
                            vm.prompt = data.prompt;
                            vm.promptTime = data.promptTime;
                            vm.type = data.type;
                            vm.promptInformation = data.promptInformation;
                            if(vm.prompt === 1){
                                if(vm.promptTime === 1){
                                    vm.tip = true;
                                }
                            }
                        }
                    });
                    //接收参数
                    Course_service.get_task_list(
                        parseInt($stateParams.taskId)
                    ).then(function (res) {
                        vm.steps = res.data.data;
                        console.log("任务步骤",vm.steps);
                        if(vm.steps[0].bookId){
                            sessionStorage.setItem('bookId',vm.steps[0].bookId);
                        }
                        if(vm.steps.length === 1 && vm.promptTime === 2){
                            vm.tip = true;
                        }
                        vm.taskCount = vm.taskLists;
                        vm.mission_isShow = false;
                        vm.mission_isLast = '下个任务';
                        //顶部任务列表选择
                        angular.forEach(vm.taskCount,function (data) {
                            if(data.id === parseInt($stateParams.taskId)){
                                vm.mission_selected = data.name
                            }
                        });
                        vm.mission_search = function () {
                            vm.mission_isShow = !vm.mission_isShow;
                        };
                        vm.mission_select = function (x) {
                           console.log(x);
                               vm.mission_selected = x.name;
                               vm.mission_isShow = false;
                               $state.go('app.mission',{taskId:x.id});
                        };

                        if(vm.mission_selected === vm.taskCount[vm.taskCount.length-1].name){
                            vm.mission_isLast = "课时完成"
                        }
                        if(parseInt($stateParams.taskId) === vm.taskCount[0].id){
                            vm.lastMission = true;
                        }
                        //默认展示步骤1
                        vm.a = [vm.steps[0]];
                        vm.i = 0;
                        //填充数组存放不同播放器之间的按钮状态显示('播放','暂停')
                        vm.audioPlay = new Array(vm.steps.length);
                        vm.audioPlay.fill(1);
                        //判断为已展示的最后一个步骤时隐藏左边框，ng-class
                        vm.isLast = function (x) {
                            if(x === vm.a.length){
                                return false
                            }else {
                                return true
                            }
                        };
                        //隐藏任务步骤
                        vm.reduce = function () {
                            vm.a.pop();
                        };
                        //显示任务步骤
                        vm.add = function () {
                            vm.i = vm.a.length;
                            vm.step1 = vm.steps[vm.i];
                            vm.a.push(vm.step1);
                            vm.i ++;
                            console.log(vm.a.length,vm.steps.length);
                            if(vm.promptTime === 2){
                                if(vm.a.length === vm.steps.length){
                                    vm.tip = true;
                                }
                            }
                        };
                        //播放器控制
                        vm.playAudio = function (x) {
                            //这个和document.getElementById有什么区别？
                            vm.audio = angular.element('#audio'+x)[0];
                            if(vm.audioPlay[x-1] === 1){
                                vm.audio.play();
                                vm.audioPlay[x-1] = 0;
                                console.log(vm.audioPlay)
                            }else{
                                vm.audio.pause();
                                vm.audioPlay[x-1] = 1;
                                console.log(vm.audioPlay)
                            }
                        };
                        vm.next = function () {
                            if(vm.mission_isLast === "课时完成"){
                                if(vm.taskCount[vm.taskCount.length-1].studyStatus === 2){
                                    Course_service.get_period_detail(
                                        vm.Period
                                    ).then(function (res) {
                                        if(res.data.code===0){
                                            $state.go('app.periodFinish',{lessonPeriodId:$stateParams.lessonPeriodId,periodId:$stateParams.periodId,gotStar:res.data.data.awardStar})
                                        }
                                    })
                                }else {
                                    Course_service.get_task_end_study(
                                        parseInt($stateParams.taskId)
                                    ).then(function (res) {
                                        if (res.data.code === 0) {//如果课时完成，调用课时完成接口
                                            Course_service.get_period_end_study(
                                                vm.Period
                                            ).then(function (res) {
                                                if (res.data.code === 0) {
                                                    $state.go('app.periodFinish',{lessonPeriodId:$stateParams.lessonPeriodId,periodId:$stateParams.periodId,getStar:res.data.data.awardStar})
                                                }
                                            });
                                        }else {
                                            if(res.data.code === -3006){
                                                $state.go('app.periodFinish',{lessonPeriodId:$stateParams.lessonPeriodId,periodId:$stateParams.periodId,getStar:res.data.data.awardStar})
                                            }
                                        }
                                    })
                                }

                            }else {
                                angular.forEach(vm.taskCount,function (data,index,array) {
                                    if(array[index].id === parseInt($stateParams.taskId) &&
                                        parseInt($stateParams.taskId) !== vm.taskCount[vm.taskCount.length-1].id
                                    ){
                                        vm.taskId = array[index+1].id;
                                        vm.nextTask = array[index]
                                    }
                                });
                                if(vm.nextTask.studyStatus === 2){
                                    $state.go('app.mission',{taskId:vm.taskId});
                                }else {
                                    Course_service.get_task_end_study(
                                        parseInt($stateParams.taskId)
                                    ).then(function (res) {
                                        if(res.data.code === 0){
                                            $state.go('app.mission',{taskId:vm.taskId});
                                        }
                                    });
                                }

                            }
                        };
                        vm.last = function () {
                            //上一个任务
                            angular.forEach(vm.taskCount,function (data,index,array) {
                                if(array[index].id === parseInt($stateParams.taskId) &&
                                    parseInt($stateParams.taskId) !== vm.taskCount[0].id
                                ){
                                    vm.taskId = array[index-1].id
                                }
                            });
                            $state.go('app.mission',{taskId:vm.taskId});
                        }
                    });
                }
            });
            vm.close = function () {
                vm.tip = false;
            };
            vm.goPay = function(){
                vm.period = $stateParams.lessonPeriodId||$stateParams.periodId;
                //if(vm.dataBuy === 0){
                    angular.element('body').removeClass('overflow');
                    sessionStorage.setItem('dataFromPeriod',vm.period);
                    sessionStorage.setItem('dataFromCourse','');
                    sessionStorage.setItem('dataFromBook','');
                    sessionStorage.setItem('dataFromBookPeriod','');
                    $state.go('app.data',{choose:0,dataFromPeriod:vm.period})
                //}
            };
        }])


