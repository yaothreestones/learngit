angular.module('app')
    .controller('teachingCtrl', function ($scope,$timeout,$state,$stateParams,pathProject,Course_service) {
            // $scope.data = function(x){
            //     if(x===1){
            //         $state.go('app.data',{choose:1,preview:1})
            //     }
            // };
            $scope.info=$stateParams;
            console.log($scope.info);
            //查看教材详情
            Course_service.get_Books($scope.info.bookId)
                .then(function(res) {
                    $scope.info=res.data.data;
                    console.log('查看教材详情',$scope.info)
                }, function(res) {
                    alert('请求失败')
                });
            //获取课时列表
            $scope.params={
                bookId:$scope.info.bookId,
                page:1,
                size:999,
            };
            Course_service.get_BookLessonPeriod($scope.params)
                .then(function(res) {
                    $scope.log=[];
                    $scope.hour=res.data.data;
                    console.log('课时list',$scope.hour);
                }, function(res) {
                    alert('请求失败')
                });
        });



