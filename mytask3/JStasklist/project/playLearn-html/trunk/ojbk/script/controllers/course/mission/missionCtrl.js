angular.module('app')
    .controller('missionCtrl',['$state','$stateParams','steps','taskCount',
        function ($state,$stateParams,steps,taskCount) {
            var vm = this;
            //接收参数
            vm.steps = steps;
            vm.taskCount = taskCount;
            vm.mission_isShow = false;
            vm.mission_isLast = '下个任务';
            angular.forEach(vm.taskCount,function (data) {
                if(data.status === 1){
                    vm.mission_selected = data.title
                }
            });
            vm.mission_search = function () {
                vm.mission_isShow = !vm.mission_isShow;
            };
            vm.mission_select = function (x) {
                vm.mission_selected = x.title;
                vm.mission_isShow = false;
            };
            if(vm.mission_selected === vm.taskCount[vm.taskCount.length-1].title){
                vm.mission_isLast = "课时完成"
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
            };
            //播放器控制
            vm.playAudio = function (x) {
                //这个和document.getElementById有什么区别？
                vm.audio = angular.element('#audio'+x)[0];
                if(vm.audioPlay[x] === 1){
                    vm.audio.play();
                    vm.audioPlay[x] = 0;

                }else{
                    vm.audio.pause();
                    vm.audioPlay[x] = 1;
                }
            };
            vm.next = function () {
                //下一个任务
                alert(111);
                $state.go('app.periodFinish')
            };
            vm.last = function () {
                //上一个任务

            }


        }])
    //步骤一，步骤二...
    .filter('change',function () {
        return function (param) {
            if(param === 1){
                return '一'
            }else if(param === 2){
                return '二'
            }else if(param === 3){
                return '三'
            }else if(param === 4){
                return '四'
            }else if(param === 5){
                return '五'
            }else if(param === 6){
                return '六'
            }
        }
    })
    //判断播放按钮的数字过滤成文字
    .filter('playMusic',function () {
        return function (param) {
            if(param === 1){
                return '播放'
            }else if(param === 0){
                return '暂停'
            }
        }
    })
    //模拟参数
    .factory('steps',function () {
        return [
            {
                id: 1,
                content: '老张开车去东北',
                audio: 'http://118.31.21.185/JStasklist/videoPlayer/%E8%A5%BF%E5%9F%8E%E7%94%B7%E5%AD%A9%20-%20my%20love.mp3'
            },
            {
                id: 2,
                content: '老李开车去东北'
            },
            {
                id: 3,
                content: '老王开车去东北',
                img: 'http://carrots.ks3-cn-beijing.ksyun.com/task/ed28b438-676b-49c3-acbe-39545d4a260e.jpg'
            },
            {
                id: 4,
                content: '老赵开车去东北',
                audio: 'http://118.31.21.185/JStasklist/videoPlayer/%E8%A5%BF%E5%9F%8E%E7%94%B7%E5%AD%A9%20-%20my%20love.mp3'
            },
            {
                id: 5,
                content: '老钱开车去东北',
                img: 'http://carrots.ks3-cn-beijing.ksyun.com/3/870df837-bb8f-4c04-8e85-c22c3633c841.png'
            },
            {
                id: 6,
                content: '老孙开车去东北'
            }
        ]
    })
    .factory('taskCount',function () {
        return [
            {title:'任务1',status:0},
            {title:'任务2',status:0},
            {title:'任务3',status:0},
            {title:'任务4',status:0},
            {title:'任务5',status:1}
            ]
    })
    .filter('task_status',function () {
        return function (param) {
            if(param === 0){
                return "已完成"
            } else if(param === 1){
                return "进行中"
            } else if(param === 2){
                return "未开始"
            }
        }
    })
