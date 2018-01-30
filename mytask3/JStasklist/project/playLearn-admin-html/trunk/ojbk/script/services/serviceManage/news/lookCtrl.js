angular.module('app')
    .controller('lookCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http','Course_service','optionsData',
        function ($scope, $stateParams, $rootScope, $state, $http,Course_service,optionsData) {
            var vm = this;
            vm.Course_service=Course_service;
            vm.type =optionsData()['type'];
            vm.sendStatus = optionsData()['sendStatus'];
            vm.list = {
                title: '',
                grade:undefined,
                type: undefined,
                sendtime: undefined,
            };
            vm.send=function () {
                //确认
                Course_service.get_MessageSee({
                    params:vm.params
                })
                    .then(function (res) {
                        if (res.data.code == 0) {
                            $rootScope.modalAlert('增加成功');
                            $state.go('backStage.serviceManage.news')
                        }
                    }, function (res) {
                        $rootScope.modalAlert(res);
                    })

            }
        }
    ])