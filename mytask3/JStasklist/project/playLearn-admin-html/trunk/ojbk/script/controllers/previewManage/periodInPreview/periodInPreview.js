angular.module('app').controller('periodCtrlInPreview', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','subject_grade','subject_status','Press',
    function ($scope, $stateParams, $rootScope, $state, Course_service,subject_grade,subject_status,Press){
        var vm = $scope.vm = {};
        vm.Grade  = subject_grade;
        vm.Status = subject_status;
        vm.Press  = Press;
        vm.book = angular.fromJson($stateParams.book)||{};
        vm.periodStatus = angular.fromJson($stateParams.obj)||{};
        console.log('状态',vm.periodStatus);
        console.log('教材',vm.book);
        console.log('路由参数',$stateParams);
        vm.currentPage = Number($stateParams.page);
        vm.isShow = false;
        vm.datumName = vm.book.name||vm.periodStatus.bookName;
        vm.grade = vm.book.grade||vm.periodStatus.grade;
        vm.press = vm.book.version||vm.periodStatus.press;
        vm.lessonPeriodName = vm.periodStatus.lessonPeriodName;
        vm.datum = vm.periodStatus.bookid;
        vm.status = vm.periodStatus.status;
        vm.id = [];
        //教材列表
        Course_service.get_PreviewDatum({
            params:{
                page  :1,
                size  :999
            }
        }).then(function (res) {
            vm.bookStorage = res.data.data;
            vm.Books = vm.bookStorage;//获取所有教材
            console.log('教材',vm.Books);

            if(vm.datum){//如果教材选中
                angular.forEach(vm.bookStorage,function (data) {
                    if(vm.datum === data.id){
                        vm.press = data.version;
                        vm.grade = data.grade;
                    }
                });
                angular.forEach(subject_grade,function (data) {
                    if(vm.grade === data.id){
                        vm.Grade = [data]
                    }
                });
                angular.forEach(Press,function (data) {
                    if(vm.press === data.name){
                        vm.Press = [data]
                    }
                })
            }else {//教材未选中
                if(vm.grade && !vm.press){
                    vm.Books = [];
                    angular.forEach(vm.bookStorage,function (data) {
                        if(data.grade === vm.grade){
                            vm.Books.push(data)
                        }
                    })
                }else if(!vm.grade && vm.press){
                    vm.Books = [];
                    angular.forEach(vm.bookStorage,function (data) {
                        if(data.version === vm.press){
                            vm.Books.push(data)
                        }
                    })
                }else if(vm.grade && vm.press){
                    vm.Books = [];
                    angular.forEach(vm.bookStorage,function (data) {
                        if(data.grade === vm.grade && data.version === vm.press){
                            vm.Books.push(data)
                        }
                    })
                }else {
                    vm.Books = vm.bookStorage
                }
            }
            // //课时列表
            vm.params1 = {
                grade:vm.grade||vm.periodStatus.grade,
                bookId:vm.datum||vm.periodStatus.bookid||vm.book.id,
                status:vm.status||vm.periodStatus.status,
                version:vm.press||vm.periodStatus.press,
                lessonPeriodName:vm.lessonPeriodName||vm.periodStatus.lessonPeriodName,
                size  :10,
                page:parseInt($stateParams.page)||1
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
        });
        //年级变化调用教材列表接口
        vm.class = function (grade) {
            console.log('按年级获取教材列表');
            if(vm.press){
                if(grade === null){
                    vm.Books = [];
                    angular.forEach(vm.bookStorage,function (data) {
                        if(data.version === vm.press){
                            vm.Books.push(data)
                        }
                    })
                }else {
                    vm.Books = [];
                    angular.forEach(vm.bookStorage,function (data) {
                        if(data.grade === grade && data.version === vm.press){
                            vm.Books.push(data)
                        }
                    })
                }
            }else {
                if(grade === null){
                    vm.Books = vm.bookStorage
                }else{
                    vm.Books = [];
                    angular.forEach(vm.bookStorage,function (data) {
                        if(data.grade === grade){
                            vm.Books.push(data)
                        }
                    })
                }

            }
        };
        //版本变化调用教学列表接口
        vm.version = function (press) {
            console.log(press);
            if(vm.grade) {
                if(press === null){
                    angular.forEach(vm.bookStorage,function (data) {
                        if(data.grade === vm.grade){
                            vm.Books.push(data)
                        }
                    })
                }else {
                    vm.Books = [];
                    angular.forEach(vm.bookStorage, function (data) {
                        if (data.grade === vm.grade && data.version === press) {
                            vm.Books.push(data)
                        }
                    })
                }
            }else {
                if(press === null){
                    vm.Books = vm.bookStorage
                }else {
                    vm.Books = [];
                    angular.forEach(vm.bookStorage,function (data) {
                        if(data.version === press){
                            vm.Books.push(data)
                        }
                    })
                }
            }
        };
        //教材变化调用教材详情接口
        vm.Datum = function (datum) {
            console.log(datum);
            if(datum === null){
                //vm.grade = null;
                //vm.press = null;
                vm.Grade = subject_grade;
                vm.Press = Press;
            }else {
                angular.forEach(vm.bookStorage,function (data) {
                    if(datum === data.id){
                        vm.press = data.version;
                        vm.grade = data.grade;
                    }
                });
                angular.forEach(subject_grade,function (data) {
                    if(vm.grade === data.id){
                        vm.Grade = [data]
                    }
                });
                angular.forEach(Press,function (data) {
                    if(vm.press === data.name){
                        vm.Press = [data]
                    }
                })
            }
        };
        //查询
        vm.search = function () {
            console.log(vm.Books);
            console.log(vm.datum);
            if(vm.datum !==null){
            angular.forEach(vm.Books,function (data) {
                if(vm.datum === data.id){
                    vm.datumName = data.name
                }
            });
            }else {
                vm.datumName = null
            }
            vm.stateParams = {
                grade:vm.grade,
                press:vm.press,
                bookid:vm.datum,
                lessonPeriodName:vm.lessonPeriodName,
                status:vm.status,
                bookName:vm.datumName
            };
            console.log(vm.stateParams);
            vm.obj = angular.toJson(vm.stateParams);
            $state.go('backStage.previewManage.period',{page:1,obj:vm.obj})
        };
        //分页按钮
        vm.pageGo = function (x) {
            $state.go('backStage.previewManage.period',{page:x});
        };
        //新增
        vm.add = function () {
            vm.stateParams = {
                grade:vm.grade,
                press:vm.press,
                bookid:vm.datum,
                lessonPeriodName:vm.lessonPeriodName,
                status:vm.status,
                bookName:vm.book.name
            };
            vm.obj = angular.toJson(vm.stateParams);
            console.log('新增跳转');
            $state.go('backStage.previewManage.periodManage',{add:1,from:1,book:$stateParams.book,obj:vm.obj})
        };
        //查看
        vm.view = function (period) {

            vm.stateParams = {
                grade:vm.grade,
                press:vm.press,
                bookid:vm.datum,
                lessonPeriodName:vm.lessonPeriodName,
                status:vm.status,
                bookName:vm.datumName
            };
            vm.obj = angular.toJson(vm.stateParams);
            $stateParams.add==='1'?$state.go('backStage.previewManage.periodManage',{add:1,from:2,obj:vm.obj,period:period.lessonPeriodId}):
                $state.go('backStage.previewManage.periodManage',{from:2,obj:vm.obj,period:period.lessonPeriodId})
        };
        //编辑
        vm.edit = function (period) {

            vm.stateParams = {
                grade:vm.grade,
                press:vm.press,
                bookid:vm.datum,
                lessonPeriodName:vm.lessonPeriodName,
                status:vm.status,
                bookName:vm.datumName
            };
            vm.obj = angular.toJson(vm.stateParams);
            $stateParams.add==='1'?$state.go('backStage.previewManage.periodManage',{add:1,from:3,obj:vm.obj,period:period.lessonPeriodId}):
                $state.go('backStage.previewManage.periodManage',{from:3,obj:vm.obj,period:period.lessonPeriodId})
        };
        //上下架
        vm.changeStatus = function (period) {
            if(period.status === 0){
                vm.confirm = '确认上架？';
                vm.result = '上架成功';
                $rootScope.modalConfrim(vm.confirm)
                    .then(function () {
                        Course_service.get_PreviewUpperPeriod({lessonPeriodId:period.lessonPeriodId})
                            .then(function (res) {
                                if(res.data.code===0){
                                    $rootScope.modalConfrim(vm.result)
                                        .then(function () {
                                            $state.go("backStage.previewManage.period",{},{reload:true})
                                        },function () {

                                        })
                                }else {
                                    $rootScope.modalConfrim(res.data.message)
                                }
                            });
                    },function () {

                    });
            }else {
                vm.confirm = '确认下架？';
                vm.result = '下架成功';
                $rootScope.modalConfrim(vm.confirm)
                    .then(function () {
                        Course_service.get_PreviewUnderPeriod({lessonPeriodId:period.lessonPeriodId})
                            .then(function (res) {
                                if(res.data.code===0){
                                    $rootScope.modalConfrim(vm.result)
                                        .then(function () {
                                            $state.go("backStage.previewManage.period",{},{reload:true})
                                        },function () {

                                        })
                                }else {
                                    $rootScope.modalConfrim(res.data.message)
                                }
                            });
                    },function () {

                    });
            }
        };
        //删除
        vm.delete = function (id) {
            $rootScope.modalConfrim('是否删除？')
                .then(function () {
                    Course_service.get_PreviewDeletePeriod({
                        params:{
                            lessonPeriodId:id
                        }
                    }).then(function (res) {
                        if(res.data.code===1){
                            $rootScope.modalConfrim('删除成功')
                                .then(function () {
                                    $state.go('backStage.previewManage.period',{},{reload:true});
                                })
                        }else {
                            $rootScope.modalConfrim(res.data.message)
                        }
                    });
                },function () {

                });
        };
        //跳转到任务
        vm.missionJump = function (period) {
            $state.go('backStage.previewManage.mission',{add:1,period:angular.toJson(period)})
        }
    }]);
