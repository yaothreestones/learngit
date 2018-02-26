angular.module('app')
    .controller('dataManageCtrl', function ($scope, $state, $http, Course_service, CourseMaterials, $stateParams, optionsData, pathProject) {
        $scope.parameter=$state.params;
        console.log($scope.params);
        console.log('路由参数',$scope.parameter)
        for (var i in $scope.parameter) {
            if (/^\d+$/.test($scope.parameter[i])) {
                $scope.parameter[i]*=1;
            }
        }
        //判断显示隐藏科目
        $scope.iSubject=false;
        //文件上传接口
        $scope.ajax = pathProject.getFile_url();
        //判断 上传按钮
        $scope.upload=true;
        $scope.iSupload=true;
        //判断 确定 和编辑 按钮
        $scope.edit = '确定';
        //判断fund框禁止
        $scope.disabled=false;
        //查看 编辑
        //编辑  查看 接口
        $scope.materials = function () {
            Course_service.get_MaterialsId($scope.parameter.datumId)
                .then(function (res) {
                    if (res.data.code == 0) {
                        $scope.data = res.data.materia;
                        console.log('查看，编辑', $scope.data,res)
                        $scope.needMoney=$scope.data.needMoney;
                        $scope.name=$scope.data.name;
                        $scope.url=$scope.data.url;
                    }
                }, function (res) {
                    alert('请求失败')
                })
        };

        //同步预习模块
        $scope.synchro=function () {
            $state.go("backStage.dataManage.data",{
                add:$scope.parameter.add,
                page:1,size:10,
                type:$scope.parameter.type,
                grade:$scope.parameter.grade,
                courseId:$scope.parameter.bookId,
                lessonPeriodId:$scope.parameter.lessonPeriodId,
                courseName:$scope.parameter.bookName,
                lessonPeriodName:$scope.parameter.lessonPeriodName
            }, {reload: true});
        };
        //侧栏
        $scope.sidebar=function () {
            $state.go("backStage.dataManage.data",{
                add:$scope.parameter.add,
                page:1,size:10,
                type:$scope.parameter.type,
            }, {reload: true});
        };
        //教学模块
        $scope.teach=function () {
            $state.go("backStage.dataManage.data",{
                add:$scope.parameter.add,
                page:1,size:10,
                type:$scope.parameter.type,
                grade:$scope.parameter.grade,
                courseId:$scope.parameter.bookId||$scope.parameter.courseId,
                lessonPeriodId:$scope.parameter.lessonPeriodId,
                courseName:$scope.parameter.bookName||$scope.parameter.courseName,
                lessonPeriodName:$scope.parameter.lessonPeriodName,
                subjectId:$scope.parameter.subjectId,
                subjectName:$scope.parameter.subjectName,
            }, {reload: true});
        }
        if($scope.parameter.add==1){
            //同步预习返回
            $scope.remove = function () {
                $scope.synchro();
            };
        }else if ($scope.parameter.add==2){
            //侧栏返回
            $scope.remove = function () {
                $scope.sidebar();
            }
        }else if($scope.parameter.add==3){
            //教学返回
            $scope.iSubject=true;
            $scope.remove = function () {
                $scope.teach();
            };
        }
        console.log($scope.parameter)
        //判断查看 新增 编辑
        if($scope.parameter.from==1){
            console.log('资料查看')
            $scope.disabled=true;
            $scope.names='查看资料';
            $scope.edit = '编辑';
            $scope.upload=true;
            $scope.iSupload=false;
            $scope.materials();
                $scope.some = function () {
                    $state.go("backStage.dataManage.dataManage", {from:2}, {reload: true});
                } ;
        }
        if($scope.parameter.from==2){
            console.log('资料编辑')
            $scope.names='编辑资料';
            $scope.upload=false;
            $scope.iSupload=true;
            $scope.materials();
            //编辑
            $scope.some = function () {
                $scope.params = {
                    id: $scope.parameter.datumId,
                    needMoney: $scope.needMoney,
                    url: $scope.url,
                    name: $scope.name,
                }
                console.log($scope.params)
                Course_service.get_MaterialsPut($scope.params)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            console.log('查看，编辑', res);
                            if($scope.parameter.add==1){
                                $scope.synchro();
                            }else if($scope.parameter.add==2){
                                $scope.sidebar();
                            }else if($scope.parameter.add==3){
                                $scope.teach();
                            }

                        }
                    }, function (res) {
                        alert('请求失败')
                    })
            };

            $scope.some();
        }
        if($scope.parameter.from==3){
            console.log('资料新增')
            $scope.names='新增资料';
            $scope.upload=false;
            $scope.iSupload=true;
            //新增按钮
            $scope.some = function () {
                if($scope.parameter.type==2){
                    $scope.data = {
                        bookId: $scope.parameter.courseId,
                        lessonPeriodId:$scope.parameter.lessonPeriodId,
                        name: $scope.fileNanes,
                        needMoney: $scope.needMoney,
                        url: $scope.url
                    }
                }else if($scope.parameter.type==1){
                    $scope.data = {
                        subjectId: $scope.parameter.subjectId,
                        lessonPeriodId:$scope.parameter.lessonPeriodId,
                        courseId:$scope.parameter.courseId,
                        name: $scope.fileNanes,
                        needMoney: $scope.needMoney,
                        url: $scope.url
                    }
                }
                console.log($scope.data)
                Course_service.get_MaterialsNew($scope.data)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            if($scope.parameter.add==1){
                                $scope.synchro();
                            }else if($scope.parameter.add==2){
                                $scope.synchro();
                            }
                            else if($scope.parameter.add==3){
                                $scope.teach();
                            }
                        }
                        console.log(res)
                    }, function (res) {
                        alert('请求失败')
                    })
            };
            $scope.some();
        }

    });



