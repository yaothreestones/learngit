angular.module('app')
    .controller('checkCtrl', ['$scope', '$state', '$rootScope', '$http', 'Course_service', 'pathProject', 'optionsData',
        function ($scope, $state, $rootScope, $http, Course_service, pathProject, optionsData) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.ajax = pathProject.getFile_url();
            vm.sendType = optionsData()['sendType'];
            vm.params = {
                id: vm.$stateParams.id
            };
            //渲染参数
            Course_service.get_InformationSee(vm.$stateParams.id)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.params.title = res.data.data.title;
                        vm.params.type = res.data.data.type + '';
                        vm.params.homePicture = res.data.data.homePicture;
                        vm.params.intro = res.data.data.intro;
                        vm.params.text = res.data.data.text;
                        console.log(vm.type);
                    }
                }, function (res) {
                    alert('请求失败');
                });
            vm.submit = function () {
                Course_service.get_InformationEdit(vm.params)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.title = res.data.title;
                            vm.type = res.data.type;
                            vm.homePicture = res.data.homePicture;
                            vm.intro = res.data.intro;
                            vm.text = res.data.text;
                            // $state.go('backStage.information', {page: 1, size: 10});
                        }
                        console.log(res)
                    }, function (res) {
                        alert('请求失败')
                    });
            };


        }])
