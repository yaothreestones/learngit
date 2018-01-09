angular.module('app','')
    .controller('enrollCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout,Course_service) {
        //注册
        $scope.pwd=$scope.password;
        $scope.enroll=function () {
            var data = {
                phone: $scope.phone,
                phonecode:$scope.phonecode,
                password: $scope.password
            };
            if(!$scope.phone==''&&!$scope.phonecode==''&&!$scope.pwd==''){
                Course_service.get_Enroll({
                    data:data
                })
                    .then(function(res) {
                        if(res.data.code == 0) {
                            $scope.modal();
                            $state.go("app.profile");
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

