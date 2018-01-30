angular.module('app')
    .controller('newsManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service', 'optionsData',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service, optionsData) {
            var vm = this;
            vm.Course_service = Course_service;
            vm.year = optionsData()['year'];
            vm.sendStatus = optionsData()['sendStatus'];
            vm.list = {
                title: null,
                grade: undefined,
                type: undefined,
                sendtime: null,
                text: null
            };

            vm.minDate = moment().subtract(0, 'day')
            vm.send = function () {
                //确认
                var isConfrim = $rootScope.modalConfrim('是否确认增加消息');
                isConfrim.then(function () {
                    //确认
                    Course_service.get_MessageAugment(vm.params)
                        .then(function (res) {
                            if (res.data.code === 0) {
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