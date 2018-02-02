angular.module('app')
    .controller('editCtrl', ['$scope', '$state', '$rootScope', '$http', 'Course_service',
        function ($scope, $state, $rootScope, $http, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.params = {
                id: vm.$stateParams.id,
            };
            Course_service.get_HelpSee(vm.$stateParams.id)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.params.title = res.data.data.title;
                        vm.params.createBy = res.data.data.createBy;
                        vm.params.updateBy = res.data.data.updateBy;
                        vm.params.createAt = res.data.data.createAt;
                        vm.params.updateAt = res.data.data.updateAt;
                        vm.params.text = res.data.data.text;
                    }
                    console.log(res)
                }, function (res) {
                    alert('请求失败')
                });

            vm.send = function () {
                Course_service.get_HelpEdit(vm.params)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            $state.go('backStage.help', {page: 1, size: 10});
                        }
                        console.log(res)
                    }, function (res) {
                        alert('请求失败')
                    });
            };


            function titleCase(str) {
                var temp = str.split(" ");
                // temp.forEach(function(value,key,arr){
                //   arr[key]= value.charAt(0).toUpperCase()+value.substring(1).toLowerCase();
                // });

                // angular.forEach(temp,function(value,key){
                //   temp[key]= value.charAt(0).toUpperCase()+value.substring(1).toLowerCase();
                // });

                temp = temp.map(function (value, key, arr) {
                    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
                });
                return temp.join(" ");
            }

            console.log(titleCase("I'm a little tea pot"));


        }])
