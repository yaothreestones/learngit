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
            console.log(vm.Books);
            vm.totalItems = res.data.total
        });
        //新增
        vm.add = function () {
            vm.stateParams = {
                name:vm.bookName,
                grade:vm.class,
                version:vm.press,
                status:vm.status
            };
            vm.obj = angular.toJson(vm.stateParams);
            $state.go('backStage.previewManage.datumManage',{add:1,from:1,obj:vm.obj})
        };
        //查看、编辑
        vm.view = function (book) {
            vm.stateParams = {
                name:vm.bookName,
                grade:vm.class,
                version:vm.press,
                status:vm.status
            };
            vm.obj = angular.toJson(vm.stateParams);
            $state.go('backStage.previewManage.datumManage',{from:2,datumId:book.id,obj:vm.obj})
        };
        vm.edit = function (book) {
            vm.stateParams = {
                name:vm.bookName,
                grade:vm.class,
                version:vm.press,
                status:vm.status
            };
            vm.obj = angular.toJson(vm.stateParams);
            $state.go('backStage.previewManage.datumManage',{from:3,datumId:book.id,obj:vm.obj})
        };
        //上下架
        vm.changeStatus = function (book) {
            if(book.status === 0){
                vm.confirm = '确认上架？';
                vm.result = '上架成功';
                        $rootScope.modalConfrim(vm.confirm)
                            .then(function () {
                                Course_service.get_PreviewUpperDatum({bookId: book.id})
                                    .then(function (res) {
                                        if (res.data.code === 0) {
                                            $rootScope.modalConfrim(vm.result)
                                                .then(function () {
                                                    $state.go("backStage.previewManage.datum", {}, {reload: true})
                                                }, function () {

                                                })
                                        } else {
                                            $rootScope.modalConfrim(res.data.message)
                                        }
                                    });
                            }, function () {

                            });
            }else {
                vm.firstConfirm = '是否下架该教材及相关内容';
                vm.confirm = '确认下架？';
                vm.result = '下架成功';
                $rootScope.modalConfrim(vm.firstConfirm)
                    .then(function () {
                        $rootScope.modalConfrim(vm.confirm)
                            .then(function () {
                                Course_service.get_PreviewUnderDatum({bookId:book.id})
                                    .then(function (res) {
                                        if(res.data.code===0){
                                            $rootScope.modalConfrim(vm.result)
                                                .then(function () {
                                                    $state.go("backStage.previewManage.datum",{},{reload:true})
                                                },function () {

                                                })
                                        }else {
                                            $rootScope.modalConfrim(res.data.message)
                                        }
                                    });
                            },function () {

                            })
                    },function () {

                    });
            }
        };
        //删除
        vm.delete = function (id) {
            $rootScope.modalConfrim('是否删除？')
                .then(function () {
                    Course_service.get_PreviewDeleteDatum({
                        params:{
                            bookId:id
                        }
                    }).then(function (res) {
                        if(res.data.code===1){
                            $rootScope.modalConfrim('删除成功')
                                .then(function () {
                                    $state.go('backStage.previewManage.datum',{},{reload:true});
                                })
                        }else {
                            $rootScope.modalConfrim(res.data.message)
                        }
                    });
                },function () {

                });
        };
        //分页按钮
        vm.pageGo = function (x) {
            $state.go('backStage.previewManage.datum',{page:x});
        };

        //课时跳转
        vm.period_jump = function (book) {
            vm.book = angular.toJson(book);
            $state.go('backStage.previewManage.period',{add:1,book:vm.book,page:1})
        }
    }]);