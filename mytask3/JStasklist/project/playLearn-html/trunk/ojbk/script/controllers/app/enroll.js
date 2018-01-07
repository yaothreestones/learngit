angular.module('app','')
    .controller('enrollCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout,Course_service) {
        //注册
        $scope.enroll=function () {
            var data = {
                phone: $scope.phone,
                phonecode:$scope.phonecode,
                password: $scope.password
            }
            Course_service.get_Enroll({
                data:data
            })
                .then(function(res) {
                    if(res.data.code == 0) {
                        $scope.modal();
                        $state.go("app.login");
                    }
                    $scope.code=res.data.code;
                    console.log($scope.code)
                    $scope.message=res.data.message;
                    console.log(res)
                    alert(1)
                }, function(res) {
                    alert('请求失败')
                })
        }
        //短信验证
        $scope.send=function () {
            $scope.getTestCode();
            var data = {
                phone: $scope.phone,
            }
            Course_service.get_Send({
                data:data
            })
                .then(function(res) {
                    $scope.modal();
                    $scope.code=res.data.code;
                    console.log($scope.code)
                    $scope.message=res.data.message;
                    console.log(res)
                    alert(1)
                }, function(res) {
                    alert('请求失败')
                })
        }

    });

