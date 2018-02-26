angular.module('app')
    .controller('rakeThroughCtrl',function ($scope,isgrade,subjects,range,$rootScope,$stateParams,$state,Course_service) {
        $scope.isgrade=isgrade;
        $scope.range=range;
        //科目
        Course_service.get_SubjectList({
            params:$scope.params,
        })
            .then(function(res) {
                if(res.data.code == 0){
                    $scope.subjects=res.data.data;
                }
                console.log(res)
            }, function(res) {
                alert('请求失败')
            });
        //模糊搜索
        $scope.indistinct;
        $scope.selecteds=0;
        $scope.vague=function () {
            $state.go("app.range",{indistinct:$scope.indistinct,id:1}, {reload: true});
        }
        $scope.ngclick = function(index){
            $scope.selected = index;
            console.log($scope.selected)
        }
        $scope.ngclicks = function(index){
            $scope.selecteds = index;
            console.log($scope.selecteds)
        }
        $scope.ngclickClass = function(index){
            $scope.selectedClass = index;
            console.log($scope.selectedClass)
        };
        //清空
        $scope.empty=function (index) {
            $scope.selected = 0;
            $scope.selecteds = 0;
            $scope.selectedClass = 0;
        }
        //搜索   为1时是课程 为2 是 课时
        $scope.search=function (index) {
            $scope.data={
                subject:$scope.selected,
                grade:$scope.selecteds,
                ranges:$scope.selectedClass
            }
            if($scope.selecteds === 0){
                $scope.selecteds = null
            }
            console.log($scope.data)
            if($scope.data.ranges==1){
                $state.go("app.range",{range:$scope.selectedClass,subject:$scope.selected,grade:$scope.selecteds}, {reload: true});
            }else if($scope.data.ranges==2){
                $state.go("app.range",{range:$scope.selectedClass,subject:$scope.selected,grade:$scope.selecteds}, {reload: true});
            }
        }

    });