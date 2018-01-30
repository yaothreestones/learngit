angular.module('app')
    .controller('objectionManageCtrl', ['$scope', '$state', 'Course_service', '$q', '$stateParams', '$rootScope',
        function ($scope, $state, Course_service, $q, $stateParams, $rootScope) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.suggestDetail = {};
            vm.requestSuggetDetail = function (id) {
                Course_service.getSuggestDetail(id).then(function (res) {
                    if (res.data.code == 0) {
                        vm.suggestDetail = res.data.data;
                    }
                });
            };
            vm.delete = async function (id) {
                await $rootScope.modalConfrim('是否删除该意见反馈？');
                await Course_service.deleteSuggest(id).then(function (res) {
                    if (res.data.code == 0) {
                        $rootScope.modalAlert2('删除成功').then(function () {
                            history.back();
                        });
                    }
                });
            };
            //初始化
            vm.requestSuggetDetail(vm.$stateParams.id);
        }
    ])