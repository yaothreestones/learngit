angular.module('app')
    .controller('partyCtrl', ['$scope', '$stateParams', '$state', '$rootScope', '$http','Course_service',
        function ($scope, $stateParams, $state, $rootScope, $http,Course_service) {
            var vm = this;
            vm.ajaxData=[];
            var params = {
                id: vm.id,
                name: vm.name,
                status: vm.status,
                grade: vm.grade,
                email: vm.email,
                studyStar: vm.studyStar,
                studyEnd: vm.studyEnd,
                courseTime: vm.courseTime,
                courseHour: vm.courseHour,
                page: vm.currentPage - 1,
                size: '10'
            };
            Course_service.get_Party({
                params:vm.params

            })
                .then(function(res) {
                    if(res.data.code == 0){
                        vm.code=res.data.code;
                        console.log(vm.code)
                        vm.demoLists=vm.code=res.data.data;
                        console.log(vm.demoLists)
                        vm.message=res.data.message;

                    }
                    console.log(res)
                }, function(res) {
                    alert('请求失败')
                })

            vm.thaw = function () {
                var aa = $rootScope.modalConfrim('解冻后将无法登陆，是否冻结该账户？');
                aa.then(function () {
                    console.log(11)
                })
            }

            vm.names = [
                "全部",
                "一年級",
                "二年級",
                "三年級",
                "四年級",
                "五年級",
                "六年級",
            ]
            vm.state = [
                "全部",
                "正常",
                "凍結",
            ]
        }])