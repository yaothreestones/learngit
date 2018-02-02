angular.module('app')
    .controller('increasedCtrl', ['$scope','$state', '$stateParams', '$rootScope', 'pathProject', 'Course_service', 'optionsData',
        function ($scope, $state,$stateParams, $rootScope, pathProject, Course_service, optionsData) {
            var vm = this;
            vm.Course_service = Course_service;
            vm.$stateParams = $state.params;
            vm.ajax = pathProject.getFile_url();

            vm.params={
                id:null,
                title:null,
                type:undefined,
                homePicture:null,
                intro:null,
                text:null
            }

            vm.sendType = optionsData()['sendType'];
            vm.indormationAdd = function () {
                var isConfrim = $rootScope.modalConfrim('是否确认增加资讯');
                isConfrim.then(function () {
                    //确认
                    Course_service.get_InformationAdd(vm.params)
                        .then(function (res) {
                            if (res.data.code === 0) {
                                $state.go('backStage.information', {page: 1, size: 10});
                            } else {
                                $rootScope.modalAlert('增加失败');
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