angular.module('app')
    .controller('accountManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service) {
            var vm = this;
            vm.addUserParams = {
                name: '',
                pwd: '',
                roleID: '',
            }
            vm.addUser = function () {
                Course_service.addUser(vm.addUserParams)
                    .then(function (res) {
                        $rootScope.modalAlert2(res.data.code == 0 ? "新增成功" : "新增失败")
                            .then(function () {
                                $state.go('backStage.account', {page: 1, size: 10});
                            });
                    })
                    .catch(function (e) {
                        $rootScope.modalAlert2(e)
                            .then(function () {
                                $state.go('backStage.account');
                            });
                    })
            }

        }
    ])