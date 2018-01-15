angular.module('app').controller('groomManageCtrl',
    function ($scope, $stateParams, $rootScope, $state, $http,Course_service){
        $scope.title = {};
        $scope.data = $stateParams;
        $scope.show = true;
        $scope.disabled = false;
        $scope.isShow = false;
        $scope.check=function () {
            Course_service.get_RecommendLook({
                params:$scope.id
            })
                .then(function(res) {
                    if(res.data.code == 0){
                        $scope.code=res.data.code;
                        console.log($scope.code)
                        $scope.grade=res.data.data.grade;
                        $scope.subjectName=res.data.data.subjectName;
                        $scope.homePicture=res.data.data.homePicture;
                        $scope.courseName=res.data.data.courseName;
                        console.log($scope.subjectName)
                        console.log($scope.homePicture)
                    }
                    console.log(res)
                }, function(res) {
                    alert('请求失败')
                })
        }
        if($scope.data.from === '1'){
            $scope.title.name = '查看课程';
            $scope.disabled = true;
            $scope.show = false;
            $scope.isShow = true;
            $scope.check();

        }else if($scope.data.from === '2'){
            $scope.title.name = '编辑课程';
            $scope.check();
        }
    });