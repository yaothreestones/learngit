angular.module('app')
    .controller('partyCtrl', ['$scope', '$state', '$rootScope', '$http', 'Course_service', 'optionsData',
        function ($scope, $state, $rootScope, $http, Course_service, optionsData) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.ajaxData = [];
            vm.status = optionsData()['status'];
            vm.grade = optionsData()['grade'];
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
                Course_service.get_seerch(searchObj)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.currentPage = parseInt(vm.$stateParams.page);
                            vm.ajaxData = res.data.data;
                            vm.total = res.data.total;
                        }
                        console.log('用户管理', res)
                    }, function (res) {
                        alert('请求失败')
                    })
            };
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
            vm.thaw = function (userId, status) {
                var isConfrim = undefined
                if (status == 0) {
                    isConfrim = $rootScope.modalConfrim('解冻后正常显示', '是否执行解冻操作？');
                } else if (status == 1) {
                    isConfrim = $rootScope.modalConfrim('冻结后将无法登陆', '是否冻结该用户？');
                }
                isConfrim.then(function () {
                    Course_service.get_Unfreeze({
                        userId: userId,
                        status: status,
                    })
                        .then(function (res) {
                            if (res.data.code == 0) {
                                vm.list();
                                $rootScope.modalAlert((status ? '冻结' : '解冻') + '成功');
                            }
                        }, function (res) {
                            $rootScope.modalAlert(res);
                        })
                }, function () {
                    //取消
                    $rootScope.modalAlert('已取消');
                })
            }

        }])