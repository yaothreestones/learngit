angular.module("app")
    .controller("userDataCtrl", ['$state', '$rootScope', '$uibModal', 'Course_service', function ($state, $rootScope, $uibModal, Course_service) {
        var vm = this;
        vm.$stateParams = $state.params;
            Course_service.userinfo()
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.data = res.data.data;
                    } else {
                        alert('请求失败')
                    }
                }, function (res) {
                    alert('请求失败')
                })

            vm.$textarea = function () {
                    Course_service.get_Detail(vm.data)
                        .then(function (res) {
                            if (res.data.code == 0) {
                                vm.data = res.data.data;
                                $state.go("app.personal");
                            }
                        }, function (res) {
                            alert('请求失败')
                        })
                    return true;
                }
    }])