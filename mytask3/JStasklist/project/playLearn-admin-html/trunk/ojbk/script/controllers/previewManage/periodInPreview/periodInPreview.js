angular.module('app').controller('periodCtrlInPreview', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','subject_grade','subject_status','Press','$q',
    function ($scope, $stateParams, $rootScope, $state, Course_service,subject_grade,subject_status,Press,$q){
        var vm = $scope.vm = {};
        vm.book = angular.fromJson($stateParams.book)||{};
        console.log('教材',vm.book);
        vm.currentPage = Number($stateParams.page);
        vm.isShow = false;
        vm.Grade  = subject_grade;
        vm.Status = subject_status;
        vm.Press  = Press;
        //教材列表
        Course_service.get_PreviewDatum({
            Grade :vm.book.grade||'',
            status:'',
            Name  :vm.book.bookName||'',
            press :vm.book.press||'',
            page  :1,
            size  :10
        }).then(function (res) {
            vm.Books = res.data.data;
            console.log('教材',vm.Books);
        });
        //课时列表
        vm.params1 = {
            press :vm.book.press || '',
            status:vm.status,
            bookid:vm.book.bookId || '',
            grade :vm.book.grade || '',
            lessonPeriodName: '',
            page  :1,
            size  :10
        };
        console.log('课时列表参数',vm.params1);
        console.log('渲染中...');
        Course_service.get_PreviewPeriod(vm.params1)
            .then(function (res) {
            console.log('课时列表',res.data.data);
            vm.Periods = res.data.data;
            vm.totalItems = res.data.total;
            console.log('渲染完毕');
            if($stateParams.add === '1'){
                console.log('从教材跳转');
                vm.isShow = true;
            }
        });
        //查询
        vm.search = function () {
            vm.params = {
                press :vm.book.press||vm.press||'',
                status:vm.status,
                bookid:vm.book.bookId||vm.datum||'',
                grade :vm.book.grade||vm.grade||'',
                lessonPeriodName: vm.lessonPeriodName||'',
                page  :1,
                size  :10
            };
            console.log('查询参数',vm.params);
            console.log('查询中...');
            Course_service.get_PreviewPeriod(vm.params)
                .then(function (res) {
                console.log('查询完毕');
                vm.Periods = res.data.data;
                vm.totalItems = res.data.total;
            })
        };
        //分页按钮
        vm.pageGo = function (x) {
            $state.go('backStage.previewManage.period',{page:x});
        };
        //新增
        vm.add = function () {
            console.log('新增跳转');
            $state.go('backStage.previewManage.periodManage',{from:1,book:$stateParams.book})
        };
        //查看
        vm.view = function (period) {
            $state.go('backStage.previewManage.periodManage',{from:2,period:period.lessonPeriodId})
        };
        //编辑
        vm.edit = function (period) {
            $state.go('backStage.previewManage.periodManage',{from:3,period:period.lessonPeriodId})
        }
        //跳转到任务
        vm.missionJump = function (period) {
            $state.go('backStage.previewManage.mission',{add:1,period:angular.toJson(period)})
        }
    }])