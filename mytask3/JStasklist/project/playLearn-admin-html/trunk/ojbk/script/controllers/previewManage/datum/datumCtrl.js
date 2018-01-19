angular.module('app').controller('datumCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','Press','subject_grade','subject_status',
    function ($scope, $stateParams, $rootScope, $state, Course_service,Press,subject_grade,subject_status){
        var vm = $scope.vm = {};
        vm.currentPage = Number($stateParams.page);
        vm.datumStatus = angular.fromJson($stateParams.obj)||{};
        vm.Press = Press;
        vm.Grade = subject_grade;
        vm.Status = subject_status;
        vm.bookName = vm.datumStatus.name;
        vm.class = vm.datumStatus.grade;
        vm.press = vm.datumStatus.version;
        vm.status = vm.datumStatus.status;
        vm.currentPage = $stateParams.page||1;
        //查询
        vm.search = function () {
            vm.stateParams = {
                name:vm.bookName,
                grade:vm.class,
                version:vm.press,
                status:vm.status
            };
            vm.obj = angular.toJson(vm.stateParams);
            $state.go('backStage.previewManage.datum',{page:1,size:10,obj:vm.obj},{reload:true})
        };

        //获取列表
        console.log('渲染中...');
        Course_service.get_PreviewDatum({
            params:{
            grade:vm.class||'',
            status:vm.status,
            bookName:vm.bookName||'',
            version:vm.press||'',
            page:parseInt($stateParams.page)||1,
            size:10
            }
        }).then(function (res) {
            console.log('渲染完毕');
            vm.Books = res.data.data;
            vm.totalItems = res.data.total
        });

        //查看、编辑
        vm.view = function (book) {
            $state.go('backStage.previewManage.datumManage',{from:2,datumId:book.id})
        };
        vm.edit = function (book) {
            $state.go('backStage.previewManage.datumManage',{from:3,datumId:book.id})
        };
        //删除
        vm.delete = function (id) {
            Course_service.get_PreviewDeleteDatum({
                params:{
                    bookId:id
                }
            }).then(function (res) {
                    console.log(res);
                $state.go('backStage.previewManage.datum',{},{reload:true})
                })

        }
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