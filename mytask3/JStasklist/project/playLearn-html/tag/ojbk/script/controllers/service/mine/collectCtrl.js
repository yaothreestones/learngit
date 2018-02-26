angular.module('app')
    .controller('collectCtrl', ['$scope', '$state', 'Course_service',
        function ($scope, $state, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.itemList = [];

            function requireLessonList() {
                Course_service.courseCollect()
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.itemList = res.data.data;
                        } else {
                            alert('请求失败')
                        }
                    }, function (res) {
                        alert('请求失败')
                    })
            }

            vm.lessonList = [];

            function requirePeriodList() {
                Course_service.lessonCollect()
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.lessonList = res.data.data;
                        } else {
                            alert('请求失败')
                        }
                    }, function (res) {
                        alert('请求失败')
                    })
            }

            //初始化
            switch (vm.$stateParams.belong) {
                case '1':
                    requireLessonList();
                    console.log('课程');
                    break;
                case '2':
                    requirePeriodList();
                    console.log('课时');
                    break;
            }
        }]);