angular.module('app')
    .controller('objectionCtrl', ['$scope', '$state', 'Course_service', '$q', '$stateParams', '$rootScope',
        function ($scope, $state, Course_service, $q, $stateParams, $rootScope) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.suggestList = [];
            //request...
            vm.$stateParams.beginTime && (vm.$stateParams.beginTime *= 1);
            vm.$stateParams.endTime && (vm.$stateParams.endTime *= 1);
            vm.requestSuggestList = function () {
                return $q((resolve, reject) => {
                    var searchObj = Object.create(null);
                    angular.forEach(vm.$stateParams, function (v, i, arr) {
                        v || v != 0 ? this[i] = v : this[i] = '';
                    }, searchObj);
                    delete searchObj['#'];
                    Course_service.getSuggestList(searchObj)
                        .then(function (res) {
                            if (res.data.code == 0) {
                                vm.suggestList = res.data.data;
                                vm.$page.total = res.data.total;
                                console.log(vm.$page);
                                //恢复
                                vm.$stateParams.page = $stateParams.page;
                            }else{
                                vm.$page.total = 0;
                            }
                            resolve();
                        }).catch(function (e) {
                        console.log(e);
                        reject();
                    })
                })
            };
            $scope.$watch('vm.$stateParams.page', function (n) {
                console.log(n);
            });
            vm.search = function () {
                vm.$stateParams.page = 1;
                vm.$stateParams.beginTime && (/^\d+$/.test(vm.$stateParams.beginTime) || (vm.$stateParams.beginTime = vm.$stateParams.beginTime.setHours(0, 0)));
                vm.$stateParams.endTime && (/^\d+$/.test(vm.$stateParams.endTime) || (vm.$stateParams.endTime = vm.$stateParams.endTime.setHours(23, 59, 59)));
                $state.reload();
            };
            vm.clear = function () {
                angular.forEach(vm.$stateParams, function (value, key, obj) {
                    obj[key] = undefined;
                });
                vm.$stateParams.page = 1;
                vm.$stateParams.size = 10;
                $state.reload();
            };
            vm.$picker = {
                conf: {
                    maxDate: new Date,
                }
            };
            vm.$page = {
                total: 999,
                pageGo: function () {
                    $state.reload();
                }
            };
            vm.delete = async function (id) {
                await $rootScope.modalConfrim('是否删除该意见反馈？');
                await Course_service.deleteSuggest(id).then(function (res) {
                    if (res.data.code == 0) {
                        $rootScope.modalAlert2('删除成功').then(function () {
                            $state.reload();
                        });
                    }
                });
            };
            //初始化
            vm.requestSuggestList();
        }
    ])