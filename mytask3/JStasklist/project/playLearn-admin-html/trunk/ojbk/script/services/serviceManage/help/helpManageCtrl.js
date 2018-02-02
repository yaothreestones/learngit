angular.module('app')
    .controller('helpManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http','Course_service',
        function ($scope, $stateParams, $rootScope, $state, $http,Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;

            vm.params={
                title:null,
                text:null,
                createBy:null,
                updateBy:null,
                createAt:null,
                updateAt:null,
            }

            vm.sendHelp = function () {
                var isConfrim = $rootScope.modalConfrim('是否确认增加帮助');
                isConfrim.then(function () {
                    //确认
                    Course_service.get_HelpAugment(vm.params)
                        .then(function (res) {
                            if (res.data.code === 0) {
                                $state.go('backStage.help', {page: 1, size: 10});
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
            };


        }
    ])