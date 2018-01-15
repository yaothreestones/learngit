angular.module('app').controller('datumCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','Press','subject_grade','subject_status',
    function ($scope, $stateParams, $rootScope, $state, Course_service,Press,subject_grade,subject_status){
        var vm = $scope.vm = {};
        vm.currentPage = Number($stateParams.page);
        vm.Press = Press;
        vm.Grade = subject_grade;
        vm.Status = subject_status;
        vm.class = vm.Grade[0];
        vm.status = vm.Status[0];
        vm.press = vm.Press[0];
        //查询
        vm.search = function () {
            vm.params = {
                Grade:null,
                status:vm.status.id,
                Name:vm.bookName,
                press:vm.press.name,
                page:1,
                size:10
            };
            console.log(vm.params);
            Course_service.get_PreviewDatum({
                params:vm.params
            }).then(function (res) {
                console.log(res);
                vm.Books = res.data.data
            });
        };

        //获取列表
        Course_service.get_PreviewDatum({
            Grade:null,
            status:null,
            Name:null,
            press:null,
            page:1,
            size:10
        }).then(function (res) {
            vm.Books = res.data.data;
            vm.totalItems = res.data.total
        });

        //查看、编辑
        vm.view = function (book) {
            $state.go('backStage.previewManage.datumManage',{from:2,datumId:book.bookId})
        };
        vm.edit = function (book) {
            $state.go('backStage.previewManage.datumManage',{from:3,datumId:book.bookId})
        };

        //分页按钮
        vm.pageGo = function (x) {
            $state.go('backStage.previewManage.datum',{page:x});
        };

        //课时跳转
        vm.period_jump = function (book) {
            vm.book = angular.toJson(book);
            $state.go('backStage.previewManage.period',{add:1,book:vm.book})
        }
    }])