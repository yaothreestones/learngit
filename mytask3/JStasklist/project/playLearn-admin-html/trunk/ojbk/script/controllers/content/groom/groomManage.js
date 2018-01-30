angular.module('app').controller('groomManageCtrl',
    function ($scope, $stateParams, $rootScope, $state, $http,Course_service,pathProject,optionsData){
        $scope.title = {};
        $scope.data = $stateParams;
        console.log($scope.data)
        $scope.name=$stateParams.name;
        console.log($scope.name)
        $scope.id=$scope.data.id;
        console.log($scope.id)
        //年级
        $scope.grade=Number($stateParams.grade);
        $scope.subjectId=Number($stateParams.subjectId);
        //课程id
        $scope.hourId=Number($stateParams.id);
        $scope.show = true;
        $scope.disabled = false;
        $scope.disableds=true;
        $scope.isShow = false;
        $scope.file=false;
        $scope.ajax=pathProject.getFile_url();
        $scope.title.edit = '确定';
        //下拉科目
        $scope.subject=[];
        $scope.params={
            size:999
        }
        Course_service.get_TechSubject({
            params:$scope.params
        })
            .then(function(res) {
                if(res.data.code == 0){
                    $scope.subject=res.data.data;
                    console.log('下拉科目',$scope.subject)
                }
            }, function(res) {
                alert('请求失败')
            })
        //科目下拉id
        $scope.Subject=function () {
            console.log('科目',$scope.subjectId)
        }
        //下拉课程
        $scope.params= {
            subjectId: $scope.subjectId,
            grade: $scope.grade,
        };
        console.log($scope.params)
        Course_service.get_RNewlysName($scope.params)
            .then(function(res) {
                if(res.data.code == 0){
                    $scope.code=res.data.code;
                    $scope.list=res.data.data;
                    $scope.name=res.data.data.name;
                    $scope.id=res.data.data.id;
                    console.log('下拉课程',$scope.list)
                }
            }, function(res) {
                alert('请求失败')
            })
        //返回
        $scope.remove=function () {
            $state.go("backStage.contentManage.groom",{id:$scope.grade,size:8} ,{reload: true});
        }
        //查看编辑
        $scope.checks=function () {
            Course_service.get_RecommendLook($scope.id)
                .then(function(res) {
                    if(res.data.code == 0){
                        $scope.code=res.data.code;
                        $scope.name=res.data.data.name;
                        $scope.homePicture=res.data.data.homePicture;
                        console.log($scope.homePicture)
                    }
                    console.log(res)
                }, function(res) {
                    alert('请求失败')
                })
        };
        //查看
        if($scope.data.from === '1'){
            $scope.title.name = '查看课程';
            $scope.title.edit = '编辑';
            $scope.disabled = true;
            $scope.show = false;
            $scope.isShow = true;
            $scope.checks();
            $scope.some=function () {
                $state.go("backStage.contentManage.groomManage",{'from':2,id:$scope.hourId,'subjectId':$scope.subjectId}, {reload: true});
            }
        }
        //编辑
        if($scope.data.from === '2'){
            $scope.title.name = '编辑课程';
            $scope.file=true;
            $scope.checks();
            //编辑
            $scope.some=function () {
                $scope.params= {
                    id: $scope.hourId,
                    listPicture: $scope.homePicture,
                };
                console.log($scope.params)
                Course_service.get_RecommendNewly($scope.params)
                    .then(function(res) {
                        if(res.data.code == 0){
                            $scope.code=res.data.code;
                            $state.go("backStage.contentManage.groom",{id:$scope.grade,size:8} ,{reload: true});
                        }
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
              }
            }
    });