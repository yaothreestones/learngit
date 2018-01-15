angular.module('app')
    .controller('profileCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout,Course_service) {
        $scope.profile=function () {
            var data = {
                name: $scope.name,
                grade: $scope.grade,
                email:$scope.email,
                file:$scope.file

            }
            // if(!$scope.name==''&&!$scope.grade==''&&!$scope.email==''){//&&!$scope.file==''图片
                Course_service.get_Detail({
                    data:data
                })
                    .then(function(res) {
                        if(res.data.code == 0){
                            $scope.modal();
                            $state.go("app.page");
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
            }
        //     else{
        //         $scope.modal();
        //     }
        // }

    });
