angular.module('app')
    .controller('helpCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http','Course_service',
        function ($scope, $stateParams, $rootScope, $state, $http,Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.ajax = [];
            vm.size = vm.$stateParams.size;

            vm.pageGo = function (x) {
                $state.go($state.current, {page: x}, {reload: true});
            };

            vm.list = function () {
                var searchObj = Object.create(null);
                angular.forEach(vm.$stateParams, function (v, i, arr) {
                    v || v != 0 ? this[i] = v : this[i] = '';
                }, searchObj);
                delete searchObj['#'];
                Course_service.get_Help(searchObj)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.currentPage = parseInt(vm.$stateParams.page);
                            vm.ajax = res.data.data;
                            vm.total = res.data.total;
                        }
                        console.log(res)
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
                vm.$stateParams.userId = '',
                    vm.$stateParams.name = '',
                    vm.$stateParams.status = '',
                    vm.$stateParams.grade = '',
                    vm.$stateParams.email = '',
                    vm.$stateParams.starBegin = '',
                    vm.$stateParams.starEnd = '',
                    vm.$stateParams.studyLessonBegin = '',
                    vm.$stateParams.studyLessonEnd = ''
                $state.reload();
            }

            vm.delete = function (id) {
                var isConfrim = $rootScope.modalConfrim('是否确认删除');
                isConfrim.then(function () {
                    //确认
                    Course_service.get_HelpDelet(id)
                        .then(function (res) {
                            if (res.data.code == 0) {
                                $rootScope.modalAlert('删除成功');
                                $state.go("backStage.help", {}, {reload: true})
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