angular.module('app').controller('datumManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'pathProject','Press','subject_grade','Course_service',
    function ($scope, $stateParams, $rootScope, $state, pathProject,Press,subject_grade,Course_service){
    var vm = $scope.vm = {};
        vm.data = $stateParams;
        console.log(vm.data);
        vm.title={};
        vm.Press = Press;
        subject_grade.shift();
        console.log(subject_grade);
        vm.Grade = subject_grade;
        vm.isShow = false;
        vm.lock =true;
        vm.class = vm.Grade[0];
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
        Course_service.get_previewViewDatum({
            params:{
                bookId:vm.data.datumId
            }
        }).then(function (res) {
            console.log(res);
            vm.datumView = res.data.data;
            angular.forEach(vm.Press,function (data) {
               if(data.name === vm.datumView.press){
                   vm.press = data
               }
            });
            angular.forEach(vm.Grade,function (data) {
                if(data.id === vm.datumView.grade){
                    vm.class = data
                }
                console.log(vm.class)
            });
            vm.bookIntro = vm.datumView.intro;
            vm.exportSrc = vm.datumView.picture;
        });
        vm.submit = function () {
            vm.params = {
                bookName:vm.datumName,
                press:vm.press.name,
                grade:vm.class.id,
                intro:vm.bookIntro,
                bookUrl:vm.exportSrc
            };
            console.log(vm.params);
            if(vm.data.from === '1'){
                Course_service.get_PreviewAddDatum({
                    data:vm.params
                }).then(function (res) {
                    console.log(res);
                    res.data.code===0?$state.go('backStage.previewManage.datum'):alert(res.message)
                })
            }else if(vm.data.from === '3'){
                Course_service.get_PreviewEditDatum({
                    params:vm.params
                }).then(function (res) {
                    console.log(res);
                    res.data.code===0?$state.go('backStage.previewManage.datum'):alert(res.message)
                })
            }
        }
    }])