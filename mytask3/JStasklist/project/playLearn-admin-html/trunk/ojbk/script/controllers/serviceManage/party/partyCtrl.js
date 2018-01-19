angular.module('app')
    .controller('partyCtrl', ['$scope', '$stateParams', '$state', '$rootScope', '$http','Course_service','optionsData',
        function ($scope, $stateParams, $state, $rootScope, $http,Course_service,optionsData) {
            var vm = this;
            vm.Course_service = Course_service;
            vm.ajaxData=[];
            vm.status =optionsData()['status'];
            vm.grade = optionsData()['grade'];
            Course_service.get_Party({
                params:vm.params
            })
                .then(function(res) {
                    if(res.data.code == 0){
                        vm.code=res.data.code;
                        console.log(vm.code)
                        vm.ajaxData=vm.code=res.data.data;
                        console.log(vm.ajaxData)
                        vm.message=res.data.message;

                    }
                    console.log(res)
                }, function(res) {
                    alert('请求失败')
                })

            vm.thaw = function (id,status) {
                var isConfrim = undefined,
                    ajaxPromise = undefined;
                if (status ==1) {
                    //现在是正常，需要解冻
                    status = 2;
                    isConfrim = $rootScope.modalConfrim('冻结后将无法登陆', '是否冻结该用户？');
                } else if (status == 2) {
                    //现在是解冻，需要冻结
                    isConfrim = $rootScope.modalConfrim('解冻后正常显示', '是否执行解冻操作？');
                    status = 1;
                } else {
                    return;
                }
                isConfrim.then(function () {
                    //确认
                    Course_service.get_Unfreeze({
                        params:vm.params
                    })
                    .then(function (res) {
                        if (res.data.code == 0) {
                            $rootScope.modalAlert((status == 1 ? '解冻' : '冻结') + '成功');
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