angular.module('app')
    .controller('informationCtrl', ['$scope', '$rootScope', '$state', '$http', 'Course_service', 'optionsData',
        function ($scope, $rootScope, $state, $http, Course_service, optionsData) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.Course_service = Course_service;
            vm.upperOrLower = optionsData()['upperOrLower'];
            vm.sendType = optionsData()['sendType'];
            vm.ajaxData = [];
            vm.size = vm.$stateParams.size;

            vm.pageGo = function (x) {
                $state.go($state.current, {page: x}, {reload: true});
            };

            vm.list = function () {
                var searchObj = Object.create(null);
                angular.forEach(vm.$stateParams, function (v, i, arr) {
                    v || v != 0 ? this[i] = v : this[i] = '';
                }, searchObj);
                Course_service.get_Information(searchObj)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.currentPage = parseInt(vm.$stateParams.page);
                            vm.ajaxData = res.data.data;
                            vm.total = res.data.total;
                        }
                        console.log('资讯管理列表',res)
                    }, function (res) {
                        alert('请求失败')
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
                    vm.$stateParams.homePicture = '',
                    vm.$stateParams.intro = '',
                    vm.$stateParams.text = '',
                    $state.reload();
            }
            vm.grounding = function (informationId, status) {
                var isConfrim = undefined,
                    ajaxPromise = undefined;
                if (status == 1) {
                    //现在是上架，需要下架
                    status = 0;
                    isConfrim = $rootScope.modalConfrim('是否下架该资讯内容？');
                } else if (status == 0) {
                    //现在是下架，需要上架
                    isConfrim = $rootScope.modalConfrim('是否上架该资讯内容');
                    status = 1;
                } else {
                    return;
                }
                isConfrim.then(function () {
                    //确认
                    Course_service.get_InformationStatus({
                        informationId: informationId,
                        status: status
                    })
                        .then(function (res) {
                            if (res.data.code === 0) {
                                $rootScope.modalAlert((status == 1 ? '上架' : '下架') + '成功');
                                vm.list();
                            } else {
                                $rootScope.modalAlert((status == 1 ? '上架' : '下架') + '失败')
                            }
                        }, function (res) {
                            $rootScope.modalAlert(res);
                        });
                }, function () {
                    //取消
                    $rootScope.modalAlert('已取消');
                })
            }

            vm.delete = function (id) {
                var isConfrim = $rootScope.modalConfrim('是否确认删除');
                isConfrim.then(function () {
                    //确认
                    Course_service.get_InformationDelet(id)
                        .then(function (res) {
                            if (res.data.code === 0) {
                                $rootScope.modalAlert('删除成功');
                                $state.go("backStage.information", {}, {reload: true})
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