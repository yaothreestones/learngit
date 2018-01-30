angular.module('app').controller('periodManageCtrlInPreview', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service',
    function ($scope, $stateParams, $rootScope, $state, Course_service){
        var vm = $scope.vm = {};
        vm.data = $stateParams;
        console.log('路由参数',vm.data);
        vm.Book = angular.fromJson($stateParams.book)||{};
        console.log('父级教材',vm.Book);
        vm.period = {};
        vm.show=false;
        vm.lock= 0;
        vm.bookName = vm.Book.name;

        if(vm.data.from === '1'){
            vm.title = '新增课时';
        }else if(vm.data.from === '2'){
            vm.title = '查看课时';
            vm.show = true;
        }else if(vm.data.from === '3'){
            vm.title = '编辑课时';
        };
        //获得课时详情
        if(vm.data.from==='2'||vm.data.from==='3'){
            console.log('获取课时详情...');
            Course_service.get_PreviewViewPeriod({
                params:{lessonPeriodId:vm.data.period}
            }).then(function (res) {
                if(res.data.code===0){
                    console.log('成功获取课时详情');
                    vm.period = res.data.data;
                    console.log('课时详情',vm.period);
                        vm.periodName    = vm.period.lessonPeriodName,
                        vm.bookName      = vm.period.bookName,
                        vm.bookId        = vm.period.bookId,
                        vm.information   = vm.period.information,
                        vm.awardStar     = vm.period.awardStar,
                        vm.lock          = vm.period.needPay,
                        vm.needMoney     = vm.period.needMoney,
                        vm.needStar      = vm.period.needStar
                }
            })
        }
        //确定
        vm.sure = function () {
            if(vm.lock===0){
                vm.needMoney = 0;
                vm.needStar = 0;
            }
            vm.params = {
                id:vm.period.lessonPeriodId,
                name:vm.periodName,
                information:vm.information,
                awardStar:vm.awardStar,
                needPay:vm.lock,
                needMoney:vm.needMoney,
                needStar:vm.needStar
            };
            if($stateParams.from==='1'){
                console.log('新增接口');
                console.log('新增参数',vm.params);
                Course_service.get_PreviewAddPeriod({
                    name:vm.periodName,
                    bookId:vm.Book.id,
                    information:vm.information,
                    awardStar:vm.awardStar,
                    needPay:vm.lock,
                    needMoney:vm.needMoney,
                    needStar:vm.needStar
                }).then(function (res) {
                    if(res.data.code===0){
                        console.log('新增成功');
                        console.log(res);
                        $state.go('backStage.previewManage.period',{add:1,obj:$stateParams.obj,book:$stateParams.book})
                    }
                })
            }else if($stateParams.from === '3'){
                console.log('编辑接口');
                console.log('编辑参数',vm.params);
                Course_service.get_PreviewEditPeriod(vm.params)
                    .then(function (res) {
                    if(res.data.code===0){
                        console.log('编辑成功');
                        console.log(res);
                        $stateParams.add==='1'?$state.go('backStage.previewManage.period',{add:1,obj:$stateParams.obj,book:$stateParams.book}):
                            $state.go('backStage.previewManage.period',{obj:$stateParams.obj,book:$stateParams.book})
                    }
                })
            }else {
                $stateParams.add==='1'?$state.go('backStage.previewManage.period',{add:1,obj:$stateParams.obj,book:$stateParams.book}):
                    $state.go('backStage.previewManage.period',{obj:$stateParams.obj,book:$stateParams.book})
            }

        }

        //取消
        vm.cancel = function () {
            $stateParams.add==='1'?$state.go('backStage.previewManage.period',{add:1,obj:$stateParams.obj,book:$stateParams.book}):
                $state.go('backStage.previewManage.period',{obj:$stateParams.obj,book:$stateParams.book,page:1})
        }






    }])