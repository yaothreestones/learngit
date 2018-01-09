angular.module('app','')
    .controller('retrieveCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout,Course_service) {
        //找回密码
        $scope.retrieve=function () {
            var data = {
                phone: $scope.phone,
                phonecode:$scope.phonecode,
                password: $scope.password
            }
            if(!$scope.phone==''&&!$scope.phonecode==''&&!$scope.password==''&&!$scope.forpwd==''&&$scope.forpwd==$scope.password){
                Course_service.get_Forget({
                    data:data
                })
                    .then(function(res) {
                        if(res.data.code == 0) {
                            $scope.modal();
                            $state.go("app.login");
                        }else{
                            $scope.modal();
                        }
                        $scope.code=res.data.code;
                        console.log($scope.code)
                        $scope.message=res.data.message;
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
            }else{
                $scope.modal();
            }

        }

    });

