angular.module('app')
    .controller('newsCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http','Course_service','optionsData',
        function ($scope, $stateParams, $rootScope, $state, $http,Course_service,optionsData) {
            var vm = this;
            vm.type =optionsData()['type'];
            vm.sendStatus = optionsData()['sendStatus'];
            $scope.publish=function () {
                var publish = $rootScope.modalConfrim('确认发布？');
                publish.then(function () {
                    console.log(11)
                })
            }
            $scope.delete=function () {
                var out = $rootScope.modalConfrim('是否删除该消息模板？');
                out.then(function () {
                    console.log(11)
                })
            }
            $scope.time = [
                "2017-12-20-14:45",
            ]
        }
    ])