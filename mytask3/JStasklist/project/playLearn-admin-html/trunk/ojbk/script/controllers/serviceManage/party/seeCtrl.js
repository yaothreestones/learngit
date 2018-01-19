angular.module('app')
    .controller('seeCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service','optionsData',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service,optionsData) {
            var vm = this;
            vm.Course_service = Course_service;
            vm.ajax = [];
            vm.subject=[];
            vm.means=[];
            vm.grade = optionsData()['grade'];
            console.log(vm.grade);
            Course_service.get_See({
                params: vm.params

            })
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.code = res.data.code;
                        console.log(vm.code)
                        vm.ajax = vm.code = res.data.data;
                        console.log(vm.ajax)
                        vm.message = res.data.message;

                    }
                    console.log(res)
                }, function (res) {
                    alert('请求失败')
                })

            Course_service.get_Subject({
                params: vm.params

            })
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.code = res.data.code;
                        console.log(vm.code)
                        vm.subject = vm.code = res.data.data;
                        console.log(vm.subject)
                        vm.message = res.data.message;
                    }
                    console.log(res)
                }, function (res) {
                    alert('请求失败')
                })
            Course_service.get_Means({
                params: vm.params

            })
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.code = res.data.code;
                        console.log(vm.code)
                        vm.means = vm.code = res.data.data;
                        console.log(vm.means)
                        vm.message = res.data.message;
                    }
                    console.log(res)
                }, function (res) {
                    alert('请求失败')
                })


        }
    ])