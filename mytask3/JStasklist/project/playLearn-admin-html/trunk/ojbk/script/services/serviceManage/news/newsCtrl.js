angular.module('app')
    .controller('newsCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service', 'optionsData',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service, optionsData) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.Course_service = Course_service;
            vm.grades = optionsData()['grade'];
            vm.sendStatus = optionsData()['sendStatus'];
            vm.ajaxData = [];
            vm.size = vm.$stateParams.size;

            vm.pageGo = function (x) {
                $state.go($state.current, {page: x}, {reload: true});
            };

            vm.list = function () {
                var searchObj = Object.create(null);
                angular.forEach(vm.$stateParams, function (v, i, arr) {
                    v && v != 0 ? this[i] = v : this[i] = '';
                }, searchObj);
                console.log(searchObj);
                Course_service.get_Message(searchObj)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.currentPage = parseInt(vm.$stateParams.page);
                            vm.ajaxData = res.data.data;
                            vm.total = res.data.total;
                            console.log(vm.ajaxData)
                        }
                        console.log(res)
                    }, function (res) {
                        alert('请求失败')
                    })
            }

            vm.list()

            Course_service.get_TechSearchSubject({
                params:vm.params
            }).then(function (res) {
                if(res.status === 200) {
                    if (res.data.code === 0) {
                        vm.totalItems = res.data.total;
                        vm.lists = res.data.data;
                        console.log('科目列表',vm.lists);
                        console.log(res);
                    }else {
                        alert(res.message)
                    }
                }else {
                    alert('请求超时')
                }

            });

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