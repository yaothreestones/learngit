angular.module('app')
    .controller('newsCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service', 'optionsData',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service, optionsData) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.type = optionsData()['type'];
            vm.sendStatus = optionsData()['sendStatus'];
            vm.ajaxData = [];
            vm.size = vm.$stateParams.size;

            vm.pageGo = function (x) {
                $state.go($state.current, {page: x}, {reload: true});
            };

            vm.list = function () {
                Course_service.search($rootScope.clearEmpty(vm.$stateParams))
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.currentPage = parseInt(vm.$stateParams.page);
                            vm.ajaxData = res.data.data;
                            vm.total = res.data.total;
                        }
                        console.log(res)
                    })
            }
            vm.list();
            vm.search = function () {
                vm.$stateParams['page'] = 1;
                $state.reload();
            }

            vm.clear = function () {
                vm.$stateParams.id = '',
                    vm.$stateParams.title = '',
                    vm.$stateParams.type = '',
                    vm.$stateParams.status = '',
                    vm.$stateParams.text = '',
                    vm.$stateParams.gradeId = '',
                    vm.$stateParams.sendTime = '',
                    vm.$stateParams.thirdPart = '',
                    $state.reload();
            }

            vm.publish = function () {
                var publish = $rootScope.modalConfrim('确认发布？');
                publish.then(function () {
                    console.log(11)
                })
            }
            vm.delete = function (id) {
                var isConfrim = $rootScope.modalConfrim('是否确认删除');
                isConfrim.then(function () {
                    //确认
                    Course_service.get_MessageDelete(id)
                        .then(function (res) {
                            if (res.data.code == 0) {
                                $rootScope.modalAlert('删除成功');
                                $state.go("backStage.news", {}, {reload: true})
                                vm.list();
                            } else {
                                $rootScope.modalAlert('删除失败');
                            }
                        }, function (res) {
                            $rootScope.modalAlert(res.data);
                        })
                }, function () {
                    //取消
                    $rootScope.modalAlert('已取消');
                })
            }
        }
    ])