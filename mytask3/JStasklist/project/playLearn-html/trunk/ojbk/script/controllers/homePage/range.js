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
        $scope.iSlock=false;
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
            page:1,
            size:999
        }
        //模糊搜索
        if($stateParams.id==1){
            $scope.data={
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
                    if(res.data.code == 0){
                        $scope.subjects=res.data.data;
                        console.log($scope.data)
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
                        $scope.lockStatus=$scope.data[0].lockStatus;
                        console.log($scope.lockStatus)
                        if($scope.lockStatus==1){
                            $scope.iSlock=true;
                        }
                    }else{
                        $scope.void=true;
                    }
                    console.log(res)
                }, function(res) {
                    alert('请求失败')
                })
        }
    });