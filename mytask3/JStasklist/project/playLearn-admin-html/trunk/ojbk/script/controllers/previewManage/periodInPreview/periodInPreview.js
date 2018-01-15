angular.module('app').controller('periodCtrlInPreview', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','subject_grade','subject_status','Press','$q',
    function ($scope, $stateParams, $rootScope, $state, Course_service,subject_grade,subject_status,Press,$q){
        var vm = $scope.vm = {};
        vm.book = angular.fromJson($stateParams.book)||{};
        console.log(vm.book);
        vm.currentPage = Number($stateParams.page);
        vm.isShow = false;
        vm.Grade = subject_grade;
        vm.Status = subject_status;
        vm.Press = Press;
        vm.grade = vm.Grade[0];
        vm.status = vm.Status[0];
        vm.press = vm.Press[0];
        console.log(vm.Grade,vm.Status,vm.Press);
        Course_service.get_PreviewDatum({
            Grade:vm.book.grade||null,
            status:null,
            Name:vm.book.bookName||null,
            press:vm.book.press||null,
            page:1,
            size:10
        }).then(function (res) {
            vm.Books = res.data.data;
            vm.totalItems = res.data.total;
            vm.datum = vm.Books[0];
            if($stateParams.add === '1'){
                vm.isShow = true;
                angular.forEach(vm.Grade,function (data) {
                    if(vm.book.grade === data.id){
                        vm.grade = data
                    }
                });
                angular.forEach(vm.Books,function (data) {
                    if(vm.book.bookName === data.id){
                        vm.datum = data
                    }
                });
                angular.forEach(vm.Press,function (data) {
                    if(vm.book.press === data.name){
                        vm.press = data
                    }
                });
               console.log(vm.press)
            }
        });

        //分页按钮
        vm.pageGo = function (x) {
            $state.go('backStage.previewManage.period',{page:x});
        };

    }])