angular.module('app')
    .controller('rangeCtrl',function ($scope,classes,subjects,range,$rootScope,$stateParams,$state,Course_service) {
        //为1时是课程 为2 是 课时
        //隐藏课程
        $scope.course=false;
        //隐藏课时
        $scope.hour=false;
        //隐藏无搜索
        $scope.void=false;
        //隐藏模糊搜索
        $scope.iSFuzzy=false;
        //是否购买
        //是否推荐
        $scope.iSrecommend=true;
        $scope.range=$stateParams.range;
        $scope.subject=$stateParams.subject;
        $scope.grade=$stateParams.grade;
        console.log($stateParams);
        console.log($stateParams.indistinct)
        $scope.params={
            subject:$scope.subject,
            grade:$scope.grade,
        }
        //模糊搜索
        if($stateParams.id==1){
            $scope.data={
                status:1,
                name:$stateParams.indistinct,
                page:1,
                size:999
            }
            Course_service.get_Course({
                params:$scope.data,
            })
                .then(function(res) {
                    if(res.data.code == 0){
                        $scope.iSFuzzy=true;
                        $scope.subjects=res.data.data;
                        console.log($scope.data)
                    }else{
                        $scope.void=true;
                        $scope.iSFuzzy=false;
                    }
                    console.log(res)
                }, function(res) {
                    alert('请求失败')
                })
        }

        //课程
        if($scope.range==1){
            $scope.course=true;
            Course_service.get_Course({
                params:$scope.params,
            })
                .then(function(res) {
                    if(res.data.code ==0){
                        $scope.subjects=res.data.data;
                        console.log($scope.data)
                        $scope.course=true;
                        $scope.hour=true;
                    }else{
                        $scope.void=true;
                        $scope.iSFuzzy=false;
                    }
                    console.log(res)
                }, function(res) {
                    alert('请求失败')
                })
        }
        //课时
        if($scope.range==2){
            $scope.hour=true;
            Course_service.get_lessonPeriod({
                params:$scope.params,
            })
                .then(function(res) {
                    if(res.data.code == 0){
                        $scope.data=res.data.data;
                        $scope.hour=true;
                      }else{
                        $scope.void=true;
                        $scope.hour=false;
                     }
                    console.log(res)
                }, function(res) {
                    alert('请求失败')
                })
        }


    });