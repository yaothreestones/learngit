angular.module('app')
    .controller('seeCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service', 'optionsData',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service, optionsData) {
            var vm = this;
            vm.Course_service = Course_service;
            vm.year = optionsData()['year'];
            vm.$stateParams = $state.params;
            console.log(sessionStorage.isOnCard);
            if (!sessionStorage.isOnCard) {
                $state.go('backStage.party.see.tab1', {
                    userId: vm.$stateParams.id
                });
            } else {
                $state.go('backStage.party', {
                    page: 1,
                    size: 10,
                    userId: null,
                    name: null,
                    status: null,
                    grade: null,
                    email: null,
                    starBegin: null,
                    starEnd: null,
                    studyLessonBegin: null,
                    studyLessonEnd: null,
                });
                sessionStorage.removeItem('isOnCard');
            }
            Course_service.get_UserDetail(vm.$stateParams.id)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.name = res.data.data.name
                        vm.email = res.data.data.email;
                        vm.grade = res.data.data.grade;
                        vm.profilePicture = res.data.data.profilePicture
                    }
                    console.log('用户管理详情', res)
                }, function () {
                    alert('请求失败')
                })

        }
    ])