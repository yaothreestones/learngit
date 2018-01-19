angular.module('app').controller('missionCtrlInPreview', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','subject_status','subject_grade','Press',
    function ($scope, $stateParams, $rootScope, $state, Course_service,subject_status,subject_grade,Press){
        var vm = $scope.vm = {};
        vm.data = $stateParams;
        console.log('路由参数',vm.data);
        vm.period = angular.fromJson(vm.data.period)||{};
        console.log('课时',vm.period);
        vm.currentPage = Number($stateParams.page);
        vm.Grade = subject_grade;
        vm.Press = Press;
        vm.grade = vm.Grade[0];
        vm.press = vm.Press[0];
        vm.show = false;
        if(vm.data.add==='1'){
            vm.isShow = true;
            vm.show = true;
            vm.grade = vm.period.grade;
            vm.press = vm.period.press;
            vm.book = vm.period.bookName;
            vm.lessonPeriod = vm.period.lessonPeriodName
        }
        if(vm.data.add === undefined){
        //获取教材列表
        console.log('获取教材列表...');
        Course_service.get_PreviewDatum({
            Grade:'',
            status:'',
            Name:'',
            press:'',
            page:1,
            size:10
        }).then(function (res) {
            console.log('已获取教材列表');
            vm.Books = res.data.data;
            console.log('教材列表',vm.Books);
            vm.totalItems = res.data.total
        });
        }
        //获取任务列表
        console.log('渲染中...');
        Course_service.get_PreviewMission({
            bookId:vm.period.bookId,
            grade:vm.period.grade,
            lessonPeriodId:vm.period.lessonPeriodId,
            press:vm.period.press,
            taskName:null,
            page:1,
            size:10
        }).then(function (res) {
            if(res.data.code === 0){
                console.log('渲染完毕');
                vm.Tasks = res.data.data;
                console.log('任务列表',vm.Tasks);
                vm.totalItems = res.data.total;
            }
        });
        vm.add = function () {
            $state.go('backStage.previewManage.missionManage',{from:1,period:vm.data.period})
        };

        //查询
        vm.search = function () {
            console.log('查询中...');
            Course_service.get_PreviewMission({
                bookId:vm.period.bookId||vm.book,
                grade:vm.period.grade,
                lessonPeriodId:vm.period.lessonPeriodId,
                press:vm.period.press,
                taskName:null,
                page:1,
                size:10
            })
        }

    }])