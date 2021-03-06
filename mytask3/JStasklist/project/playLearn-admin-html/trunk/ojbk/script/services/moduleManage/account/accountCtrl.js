angular.module('app')
    .controller('accountCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.size = vm.$stateParams.size;
            vm.ajax = [];
            vm.pageGo = function (x) {
                $state.go($state.current, {page: x}, {reload: true});
            };

            vm.list = function () {
                Course_service.userAccount({
                    size: 999
                }).then(function (res) {
                    if (res.data.code == 0) {
                        Course_service.AccountEnquiry(res.data.data.ids)
                            .then(function (res) {
                                if (res.data.code == 0) {
                                    vm.ajax = res.data.data.managerList;
                                    console.log(vm.ajax);
                                }
                                console.log(res)
                            }, function (res) {
                                alert('请求失败')
                            })
                    } else {
                        alert(res.message)
                    }
                });
            }
            vm.list();
            vm.roleID=[];
            vm.clickselect=function () {
                Course_service.clickSelect(vm.roleID)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.roleID=res.data.data.ids
                            Course_service.AccountEnquiry(res.data.data.ids)
                                .then(function (res) {
                                    if (res.data.code == 0) {
                                        vm.ajax = res.data.data.managerList;
                                        console.log(vm.ajax);
                                    }
                                    console.log(res)
                                }, function (res) {
                                    alert('请求失败')
                                })
                        } else {
                            $rootScope.modalAlert('获取失败');
                        }
                    }, function (res) {
                        $rootScope.modalAlert(res.data);
                    })
            }

            vm.params = {
                id: vm.$stateParams.id,
            };
            vm.search=function (id) {
                Course_service.roleUser(id)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.roleID=res.data.data.rids;
                        }
                    }, function (res) {
                        alert('请求失败');
                    });
            }

            vm.delete = function (id) {
                var isConfrim = $rootScope.modalConfrim('是否确认删除');
                isConfrim.then(function () {
                    //确认
                    Course_service.AccountDelete(id)
                        .then(function (res) {
                            if (res.data.code == 0) {
                                $rootScope.modalAlert('删除成功');
                                $state.go("backStage.user", {}, {reload: true})
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