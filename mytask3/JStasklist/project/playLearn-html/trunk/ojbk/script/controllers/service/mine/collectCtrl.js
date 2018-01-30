angular.module('app')
    .controller('collectCtrl', ['$scope', '$state', 'Course_service',
        function ($scope, $state, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.belongStatus = {
                "1": async function () {
                    console.log(1);
                    await Course_service.getUserFavLessonList();
                },
                "2": async function () {
                    await Course_service.getUserFavPeriodList();
                }
            };
            vm.belongStatus[vm.$stateParams.belong]();
        }]);