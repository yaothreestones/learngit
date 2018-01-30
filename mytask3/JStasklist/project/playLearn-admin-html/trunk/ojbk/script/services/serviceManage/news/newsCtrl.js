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
            vm.search = function () {
                $state.reload();
            }

            vm.publish = function () {
                var publish = $rootScope.modalConfrim('确认发布？');
                publish.then(function () {
                    console.log(11)
                })
            }
            vm.delete = function () {
                var out = $rootScope.modalConfrim('是否删除该消息模板？');
                out.then(function () {
                    console.log(11)
                })
            }
        }
    ])