angular.module('app')
    .controller('moduleCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.size = vm.$stateParams.size;
            vm.ajax = [];
            vm.pageGo = function (x) {
                $state.go($state.current, {page: x}, {reload: true});
                console.log(x);
            };
            vm.list = function () {
                Course_service.moduleUser({
                    page:vm.$stateParams.page
                }).then(function (res) {
                    if (res.data.code == 0) {
                        vm.currentPage = parseInt(vm.$stateParams.page);
                        vm.total = res.data.data.total;
                        console.log(vm.currentPage);
                        console.log(vm.total);
                        Course_service.batchUser(res.data.data.ids)
                            .then(function (res) {
                                if (res.data.code == 0) {
                                    vm.ajax = res.data.data.moduleList;
                                }
                                console.log('模块列表',res)
                            }, function (res) {
                                alert('请求失败')
                            })
                    } else {
                        alert(res.message)
                    }
                });
            }
            vm.list();
            vm.delete = function (id) {
                var isConfrim = $rootScope.modalConfrim('是否确认删除');
                isConfrim.then(function () {
                    //确认
                    Course_service.userDelet(id)
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