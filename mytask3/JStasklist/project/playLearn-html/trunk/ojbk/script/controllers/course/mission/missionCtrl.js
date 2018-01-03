angular.module('app')
    .controller('missionCtrl',['$state','$stateParams','steps',
        function ($state,$stateParams,steps) {
            var vm = this;
            vm.steps = steps;
            vm.a = [vm.steps[0]];
            vm.i = 0;
            vm.isLast = function (x) {
                if(x === vm.a.length){
                    return false
                }else {
                    return true
                }
            };
            vm.reduce = function () {
                vm.a.pop();
            };
            vm.add = function () {
                vm.i = vm.a.length;
                vm.step1 = vm.steps[vm.i];
                vm.a.push(vm.step1);
                vm.i ++;
            };
            vm.playAudio = function (x) {
                vm.audio = document.getElementById('audio'+x);
                vm.audio.play()
            };
            vm.stopAudio = function (x) {
                vm.audio = document.getElementById('audio'+x);
                vm.audio.pause()
            };
            vm.next = function () {
                //下一个任务
            };
            vm.last = function () {
                //上一个任务
            }

        }])
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

