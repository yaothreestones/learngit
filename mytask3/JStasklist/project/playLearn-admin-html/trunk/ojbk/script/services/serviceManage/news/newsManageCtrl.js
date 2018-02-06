angular.module('app')
    .controller('newsManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service', 'optionsData',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service, optionsData) {
            var vm = this;
            vm.Course_service = Course_service;
            vm.sendpeople = optionsData()['sendpeople'];
            vm.sendStatus = optionsData()['sendStatus'];
            vm.list = {
                id:undefined,
                title: null,
                gradeId: undefined,
                type: undefined,
                sendTime: null,
                text: null,
                thirdPart:undefined,
            };

            vm.minDate = moment().subtract(0, 'day')
            vm.send = function () {
                //确认
                var isConfrim = $rootScope.modalConfrim('是否确认增加消息');
                isConfrim.then(function () {
                    //确认
                    vm.params = {
                        title: vm.list.title,
                        type: vm.list.type,
                        sendTime:function(){
                            var time=new Date(vm.list.sendTime)
                            return time.getTime()
                        }(),
                        gradeId: vm.list.gradeId,
                        text: vm.list.text,
                        thirdPart: vm.list.thirdPart,
                    }
                    Course_service.get_MessageAugment(vm.params)
                        .then(function (res) {
                            if (res.data.code == 0) {
                                $state.go('backStage.news', {page: 1, size: 10});
                            } else {
                                $rootScope.modalAlert('增加失败');
                            }
                        }, function (res) {
                            $rootScope.modalAlert(res);
                        })

                }, function () {
                    //取消
                    $rootScope.modalAlert('已取消');
                })
            }
        }
    ])