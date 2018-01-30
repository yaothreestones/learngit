angular.module('app').controller('subjectManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service',
    function ($scope, $stateParams, $rootScope, $state,Course_service){
        $scope.title = {};
        $scope.show = false;
        console.log($stateParams);
        if($stateParams.from === '1'){
            $scope.title.name = '新增科目';
        }else if($stateParams.from === '2'){
            $scope.title.name = '查看科目';
            $scope.show = true;
            $scope.subject = angular.fromJson($stateParams.subject);
            $scope.subject_name = $scope.subject.name;
            //input[type=radio]居然value是string，这是个小坑
            $scope.subject_type = String($scope.subject.type);
        }else if($stateParams.from === '3'){
            $scope.title.name = '编辑科目';
            $scope.subject = angular.fromJson($stateParams.subject);
            $scope.subject_name = $scope.subject.name;
            $scope.subject_type = String($scope.subject.type);
            console.log($scope.subject)
        }
        //确定按钮提交
        $scope.subject_operation = function () {
            if($scope.subject_name === undefined){
                alert('资料不完整')
            }else if($stateParams.from === '1'){
                $scope.data = {
                    name:$scope.subject_name,
                    type:Number($scope.subject_type)||0
                };
                Course_service.get_TechAddSubject($scope.data).then(function (res) {
                    console.log($scope.data);
                    if(res.data.code === 0){
                        $state.go("backStage.teachManage.subject",{page:$stateParams.page,type:$stateParams.type,status:$stateParams.status,name:$stateParams.name})
                    }
                })
            }else if($stateParams.from ==='3'){
                $scope.data = {
                    name:$scope.subject_name,
                    type:Number($scope.subject_type)||0,
                    id:$scope.subject.id
                };
                Course_service.get_TechEditSubject($scope.data).then(function (res) {
                    console.log($scope.data);
                    if(res.data.code === 0){
                        $state.go("backStage.teachManage.subject",{page:$stateParams.page,type:$stateParams.type,status:$stateParams.status,name:$stateParams.name})
                    }
                })
            }else {
                $state.go("backStage.teachManage.subject",{page:$stateParams.page,type:$stateParams.type,status:$stateParams.status,name:$stateParams.name})
            }
        };
        $scope.subject_cancel = function () {
            $state.go("backStage.teachManage.subject",{page:$stateParams.page,type:$stateParams.type,status:$stateParams.status,name:$stateParams.name})
        }
    }]);