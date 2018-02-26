angular.module('app')
    .controller('searchCtrl',function ($scope,classes,pathProject,$stateParams,Course_service,$rootScope) {
        $scope.classes=classes;
        console.log($stateParams);
        //个人资料年级
        $scope.grade=Number($stateParams.grade);
        console.log($scope.grade)
        $scope.void=false;
        $scope.searchs=true;
        //搜索
        //默认
        $scope.selecteds=null;
        $scope.ngclicks = function(index){
            $scope.selecteds = index;
            console.log($scope.selecteds)
        }
        //清空
        $scope.empty=function (index) {
            $scope.selecteds = index;
        }
        //搜索按钮
        $scope.search=function (index) {
            $rootScope.config.headNav.screenList.isShow=false
            $scope.data={
                grade:$scope.selecteds,
            }
            $scope.params={
                grade:$scope.data.grade,
            };
            $scope.list();
        };
        $scope.params={
            grade:$scope.grade,
            page:1,
            size:999
        };
        $scope.list=function () {
            Course_service.get_BookList({
                params:$scope.params,
            })
                .then(function(res) {
                    if(res.data.code == 0){
                        $scope.currentPage = parseInt($stateParams.page);
                        $scope.code=res.data.code;
                        $scope.demoLists=res.data.data;
                        $scope.total= res.data.total;
                        console.log('教材list',$scope.demoLists)
                    }else if(res.data.code==2){
                        $scope.void=true;
                        $scope.searchs=false;
                    }


                }, function(res) {
                    alert('请求失败')
                })
        };
        $scope.list();
    });