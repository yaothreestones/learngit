angular.module('app').controller('subjectManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service',
    function ($scope, $stateParams, $rootScope, $state,Course_service){
        $scope.title = {};
        $scope.show = false;
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
                    token:'',
                    name:$scope.subject_name,
                    type:Number($scope.subject_type)||0
                };
                Course_service.get_TechAddSubject({ //新增
                    data:$scope.data
                    // header:{'Content-Type':'application/x-www-form-urlencoded'}
                }).then(function (res) {
                    console.log($scope.data);
                    if(res.data.code === 0){
                        $state.go("backStage.teachManage.subject")
                    }
                })
            }else if($stateParams.from ==='3'){
                $scope.data = {
                    name:$scope.subject_name,
                    type:Number($scope.subject_type)||0,
                    id:$scope.subject.id
                };
                Course_service.get_TechEditSubject({ //编辑
                    params:$scope.data
                }).then(function (res) {
                    console.log($scope.data);
                    if(res.data.code === 0){
                        $state.go("backStage.teachManage.subject")
                    }
                })
            }else {
                $state.go("backStage.teachManage.subject")
            }
        }
    }]);