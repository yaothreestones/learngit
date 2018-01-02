angular.module('app')
    .controller('missionCtrl',['$state','$stateParams',
        function ($state,$stateParams) {
            var vm = this;
            vm.steps = [
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
            ];
            vm.step = vm.steps.shift();
            vm.hide = [];
            vm.a = [];
            vm.i = 0;
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
                console.log(x);
                vm.audio = document.getElementById('audio'+x);
                vm.audio.play()
            };
            vm.stopAudio = function (x) {
                console.log(x);
                vm.audio = document.getElementById('audio'+x);
                vm.audio.pause()
            }



    }]);
var b =[];
var c = '<div>123</div>';
b.push(c)
console.log(b)