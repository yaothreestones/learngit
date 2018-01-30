angular.module('app')
    .controller('stateCtrl', ['$scope', '$state', '$rootScope', '$http', 'Course_service', 'pathProject', 'optionsData',
        function ($scope, $state, $rootScope, $http, Course_service, pathProject, optionsData) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.ajax = pathProject.getFile_url();
            vm.classify = optionsData()['classify'];
            Course_service.get_InformationSee(vm.$stateParams.id)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.title = res.data.data.title;
                        vm.type = res.data.data.type;
                        vm.homePicture = res.data.data.homePicture;
                        vm.intro = res.data.data.intro;
                        vm.text = res.data.data.text;
                        console.log(vm.type);
                    }
                    console.log(res)
                }, function (res) {
                    alert('请求失败')
                });


        }])
