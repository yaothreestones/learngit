angular.module("app")
    .controller("mineCtrl", ["mineConstant", '$scope', '$state', '$rootScope', '$uibModal', 'Course_service',
        function (mineConstant, $scope, $state, $rootScope, $uibModal, Course_service) {
            var vm = this;
            vm.data = mineConstant();
            vm.$stateParams = $state.params;
            vm.user = {
                profilePicture: null,
                name: null,
                grade: null,
                email: null,
            };

            Course_service.userinfo()
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.user = res.data.data;
                    } else {
                        alert('请求失败')
                    }
                }, function (res) {
                    alert('请求失败')
                })

            vm.sign = function (userId) {
                Course_service.getSign({userId: userId})
                    .then(function (res) {
                        if (res.data.code == 3659) {
                            vm.$signModal.pop();
                        }
                        ;
                        if (res.data.code == -3660) {
                            vm.message = res.data.message;
                            $scope.modal();
                        }
                    });
            }


            vm.$signModal = {
                popTemplate: '<div style="position: relative"><img src="image/mine/registerOn.png"  style="width: 100%">' +
                '<img src="image/mine/close.png"  style="width: 5vw;height: 5vw;position: absolute;top: 2vw;right: 2vw" ng-click="$close()">' +
                '<p style="font-size: 4.3vw;text-align: center;padding-top: 5vw">签到成功</p>' +
                '<p style="font-size: 4.3vw;text-align: center;padding-bottom: 3vw">获得' +
                '<span style="font-size:4.3vw;color: #fab735">3</span>个学习星</p></div>',
                pop: function () {
                    $uibModal.open({
                        animation: true,
                        template: this.popTemplate,
                        size: 'signPop'
                    });
                }
            }
        }])