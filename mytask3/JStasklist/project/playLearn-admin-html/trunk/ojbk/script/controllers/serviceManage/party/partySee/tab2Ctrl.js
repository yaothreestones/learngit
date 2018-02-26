angular.module('app').controller('tab2Ctrl',
    function ($scope, $stateParams, $rootScope, $state, $http, Course_service) {
        var vm = this;
        vm.subject = [];
        vm.$stateParams = $state.params;
        vm.ManageSearch= function (data) {
            console.log(data);
            $state.go('backStage.teachManage.periodManage',{
                from:2,
                obj:{"courses":null,"grade":null,"subject":null},
                period:JSON.stringify(data)
            });
        };
        Course_service.get_Subject({
            userId: vm.$stateParams.userId

        })
            .then(function (res) {
                if (res.data.code == 0) {
                    vm.subject = res.data.data;
                    vm.message = res.data.message;
                }
                console.log('用户收藏课时列表',res)
            }, function (res) {
                alert('请求失败')
            })
    })
