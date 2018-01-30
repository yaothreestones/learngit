angular.module('app')
    .controller('feedbackStageCtrl', ['$state', 'Course_service',
        function ($state, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            //用户的建议
            vm.$textarea = {
                max: 150,
                min: 1,
                length: 0,
                invalid: true,
                check: function (value) {
                    var l = this.length = value.length;
                    value.replace(/[^\x00-\xff]/g, function (v) {
                        l++;
                    });
                    if (l > 150) {
                        this.invalid = true;
                        return;
                    }
                    if (l > 1) {
                        this.invalid = false;
                    }
                }
            }
            vm.submit = function () {
                Course_service.putSuggetByUser({feedbackStr: vm.suggetByUser});
                $state.go('app.install');
            };
        }]);