angular.module('app').controller('datumManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'pathProject','Press','subject_grade','Course_service',
    function ($scope, $stateParams, $rootScope, $state, pathProject,Press,subject_grade,Course_service){
        var vm = $scope.vm = {};
        vm.data = $stateParams;
        console.log('路由参数',vm.data);
        vm.title={};
        vm.Press = Press;
        vm.Grade = subject_grade;
        vm.isShow = false;
        vm.lock =true;
        vm.class = vm.Grade[0].id;
        vm.press = vm.Press[0];
        vm.ajax = pathProject.getFile_url();
        if(vm.data.from === '1'){
            vm.title.name = '新增教材';
        }else if(vm.data.from === '2'){
            vm.title.name = '查看教材';
            vm.isShow = true;
        }else if(vm.data.from === '3'){
            vm.title.name = '编辑教材';
        }
        //查看
        if(vm.data.from === '2' || vm.data.from === '3'){
            console.log('渲染中...');
            Course_service.get_previewViewDatum({
                    params:{
                        bookId:parseInt(vm.data.datumId)
                    }
            }).then(function (res) {
                console.log(res.data.data);
                console.log('渲染完毕');
                vm.datumView = res.data.data;
                angular.forEach(vm.Press,function (data) {
                    if(data.name === vm.datumView.version){
                        vm.press = data
                    }
                });
                vm.class = vm.datumView.grade;
                vm.datumName = vm.datumView.name;
                vm.exportSrc = vm.datumView.picture;
            });
        }
        vm.submit = function () {
            vm.params = {
                name:vm.datumName,
                version:vm.press.name,
                grade:vm.class,
                picture:vm.exportSrc,
                id:parseInt(vm.data.datumId)||''
            };
            console.log(vm.params);
            if(vm.data.from === '1'){
                console.log('新增提交');
                Course_service.get_PreviewAddDatum(vm.params).then(function (res) {
                    console.log(res);
                    res.data.code===0?$state.go('backStage.previewManage.datum',{add:1,obj:$stateParams.obj}):alert(res.message)
                })
            }else if(vm.data.from === '3'){
                console.log('编辑提交');
                Course_service.get_PreviewEditDatum(vm.params)
                    .then(function (res) {
                    console.log(res);
                    res.data.code===0?$state.go('backStage.previewManage.datum',{obj:$stateParams.obj}):alert(res.message)
                })
            }else{
                $state.go('backStage.previewManage.datum',{obj:$stateParams.obj})
            }
        };
        //取消
        vm.cancel = function () {
            $stateParams.add==='1'?$state.go('backStage.previewManage.datum',{add:1,obj:$stateParams.obj}):
                $state.go('backStage.previewManage.datum',{obj:$stateParams.obj})
        }
    }]);