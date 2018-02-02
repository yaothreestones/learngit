angular.module('app')
    .controller('increasedCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;

            vm.addUserParams = {
                url: '',
                type: '',
                menuID: '',
                level: '',
                name: '',
                parentID: ''
            }
            vm.send = function () {
                vm.params = {
                    url: vm.addUserParams.url,
                    type: vm.addUserParams.type,
                    menuID: vm.addUserParams.menuID,
                    level: vm.addUserParams.level,
                    name: vm.addUserParams.name,
                    parentID: vm.addUserParams.parentID,
                }
                Course_service.AddUser(vm.params)
                    .then(function (res) {
                        $rootScope.modalAlert2(res.data.code == 0 ? "新增成功" : "新增失败")
                            .then(function () {
                                $state.go('backStage.account', {page: 1, size: 10});
                            });
                    })
            }
        }
    ])