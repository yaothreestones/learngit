angular.module('app').controller('missionCtrlInPreview', ['$scope', '$stateParams', '$rootScope', '$state', 'Course_service','subject_status','subject_grade','Press',
    function ($scope, $stateParams, $rootScope, $state, Course_service,subject_status,subject_grade,Press){
        var vm = $scope.vm = {};
        vm.data = $stateParams;
        vm.period = angular.fromJson(vm.data.period)||{};
        console.log('路由参数',vm.period);
        vm.missionStatus = angular.fromJson(vm.data.obj)||{};
        // console.log('课时',vm.missionStatus);
        vm.currentPage = parseInt($stateParams.page)||Number(vm.missionStatus.page);
        vm.Grade = subject_grade;
        vm.Press = Press;
        vm.show = false;
        vm.grade = vm.period.grade||vm.missionStatus.grade||null;
        vm.press = vm.period.version||vm.missionStatus.press||null;
        vm.book = vm.period.bookId||vm.missionStatus.book||null;
        vm.bookName = vm.period.bookName||vm.missionStatus.bookName||null;
        vm.lessonPeriod = vm.period.lessonPeriodId||vm.missionStatus.lessonPeriodId||null;
        vm.mission = vm.missionStatus.mission||null;
        vm.lessonPeriodName = vm.period.lessonPeriodName||vm.missionStatus.lessonPeriodName||null;

        if(vm.data.add==='1'){
            vm.isShow = true;
            vm.show = true;
        }

        //教材id数组和课时id数组
        vm.id = [];
        vm.period_id = [];
        vm.Books = [];
        vm.Periods = [];
        //教材列表
        if(!$stateParams.add){
            Course_service.get_PreviewDatum({//获取教材列表
                params:{
                    page:1,
                    size:999
                }
            }).then(function (res) {
                //获取所有的教材
                vm.bookStorage = res.data.data;
                //课时列表
                vm.params1 = {
                    size:999,
                    page:1
                };
                Course_service.get_PreviewPeriod(vm.params1)
                    .then(function (res) {
                        //获取所有的课时
                        vm.periodStorage = res.data.data;
                        console.log(vm.periodStorage,vm.bookStorage);
                        //根据搜索的条件进行教材列表的充填
                        if(vm.lessonPeriod){//如果课时存在
                            vm.Periods = vm.periodStorage;
                            angular.forEach(vm.periodStorage,function (data) {
                                if(data.lessonPeriodId === vm.lessonPeriod){
                                    vm.book = data.bookId;
                                    vm.grade = data.grade;
                                    vm.press = data.version;
                                    angular.forEach(subject_grade,function (data) {
                                        if(vm.grade === data.id){
                                            vm.Grade = [data]
                                        }
                                    });
                                    angular.forEach(Press,function (data) {
                                        if(data.name === vm.press){
                                            vm.Press = [data]
                                        }
                                    });
                                    angular.forEach(vm.bookStorage,function (data) {
                                        if(data.id === vm.book){
                                            vm.Books = [data]
                                        }
                                    })
                                }
                            })
                        }else {//如果课时不存在
                            if(vm.book){//如果教材存在
                                vm.Books = vm.bookStorage;
                                vm.Periods = [];
                                angular.forEach(vm.periodStorage,function (data) {
                                    if(data.bookId === vm.book){
                                        vm.Periods.push(data)
                                    }
                                });
                                angular.forEach(vm.bookStorage,function (data) {
                                    if(vm.book === data.id){
                                        vm.press = data.version;
                                        vm.grade = data.grade;
                                        angular.forEach(subject_grade,function (data) {
                                            if(vm.grade === data.id){
                                                vm.Grade = [data]
                                            }
                                        });
                                        angular.forEach(Press,function (data) {
                                            if(data.name === vm.press){
                                                vm.Press = [data]
                                            }
                                        });
                                    }
                                })
                            }else {//如果教材不存在
                                vm.Books = [];
                                vm.Periods = [];
                                angular.forEach(vm.bookStorage,function (data) {
                                    if (vm.grade && vm.press) {
                                        if (vm.grade === data.grade && vm.press === data.version) {
                                            vm.Books.push(data)
                                        }
                                    } else if (vm.grade && !vm.press) {
                                        if (vm.grade === data.grade) {
                                            vm.Books.push(data)
                                        }
                                    } else if (!vm.grade && vm.press) {
                                        if (vm.press === data.version) {
                                            vm.Books.push(data)
                                        }
                                    } else {
                                        vm.Books = vm.bookStorage
                                    }
                                });
                                angular.forEach(vm.periodStorage,function (data) {
                                    if(vm.grade && vm.press){
                                        if(vm.grade === data.grade && vm.press === data.version){
                                            vm.Periods.push(data)
                                        }
                                    }else if(vm.grade && !vm.press){
                                        if(vm.grade === data.grade){
                                            vm.Periods.push(data)
                                        }
                                    }else if(!vm.grade && vm.press){
                                        if(vm.press === data.version){
                                            vm.Periods.push(data)
                                        }
                                    }else {
                                        vm.Periods = vm.periodStorage
                                    }
                                })

                            }
                        }
                        vm.mission_params = {
                            bookId:vm.book,
                            grade:vm.grade,
                            version:vm.press,
                            lessonPeriodId:vm.lessonPeriod,
                            taskName:vm.mission,
                            page:parseInt($stateParams.page)||vm.missionStatus.page,
                            size:10
                        };
                        Course_service.get_PreviewMission(vm.mission_params)
                            .then(function (res) {
                                if(res.data.code === 0){
                                    console.log('渲染完毕');
                                    vm.Tasks = res.data.data;
                                    if(vm.Tasks.length ===0){
                                        console.log('没有对应的任务')
                                    }
                                    console.log('任务列表',vm.Tasks);
                                    vm.totalItems = res.data.total;

                                }else {
                                    console.log(res.data.message)
                                }
                            });
                    });
            });
        }else{
            vm.mission_params = {
                bookId:vm.book,
                grade:vm.grade,
                version:vm.press,
                lessonPeriodId:vm.lessonPeriod,
                taskName:vm.mission,
                page:parseInt($stateParams.page)||vm.missionStatus.page,
                size:10
            };
            Course_service.get_PreviewMission(vm.mission_params)
                .then(function (res) {
                    if(res.data.code === 0){
                        console.log('渲染完毕');
                        vm.Tasks = res.data.data;
                        if(vm.Tasks.length ===0){
                            console.log('没有对应的任务')
                        }
                        console.log('任务列表',vm.Tasks);
                        vm.totalItems = res.data.total;

                    }else {
                        console.log(res.data.message)
                    }
                });
        }


        if(!vm.data.add) {
            //年级变化
            vm.class = function (grade) {
                if (grade) {
                    if (vm.press) {
                        vm.Books = [];
                        angular.forEach(vm.bookStorage, function (data) {
                            if (data.grade === grade && data.version === vm.press) {
                                vm.Books.push(data)
                            }
                        });
                        vm.Periods = [];
                        angular.forEach(vm.periodStorage, function (data) {
                            if (data.grade === grade && data.version === vm.press) {
                                vm.Periods.push(data)
                            }
                        });
                    } else {
                        vm.Books = [];
                        angular.forEach(vm.bookStorage, function (data) {
                            if (data.grade === grade) {
                                vm.Books.push(data)
                            }
                        });
                        vm.Periods = [];
                        angular.forEach(vm.periodStorage, function (data) {
                            if (data.grade === grade) {
                                vm.Periods.push(data)
                            }
                        });
                    }
                } else {
                    if (vm.press) {
                        vm.Books = [];
                        angular.forEach(vm.bookStorage, function (data) {
                            if (data.version === vm.press) {
                                vm.Books.push(data)
                            }
                        });
                        //console.log(vm.Books);
                        vm.Periods = [];
                        angular.forEach(vm.periodStorage, function (data) {
                            if (data.version === vm.press) {
                                vm.Periods.push(data)
                            }
                        });
                    } else {

                    }
                }
            };
            //版本变化
            vm.version = function (press) {
                if (press) {
                    if (vm.grade) {
                        vm.Books = [];
                        angular.forEach(vm.bookStorage, function (data) {
                            if (data.version === press && data.grade === vm.grade) {
                                vm.Books.push(data)
                            }
                        });
                        vm.Periods = [];
                        angular.forEach(vm.periodStorage, function (data) {
                            if (data.version === press && data.grade === vm.grade) {
                                vm.Periods.push(data)
                            }
                        });
                    } else {
                        vm.Books = [];
                        angular.forEach(vm.bookStorage, function (data) {
                            if (data.version === press) {
                                vm.Books.push(data)
                            }
                        });
                        vm.Periods = [];
                        angular.forEach(vm.periodStorage, function (data) {
                            if (data.version === press) {
                                vm.Periods.push(data)
                            }
                        });
                    }
                } else {
                    if (vm.grade) {
                        vm.Books = [];
                        angular.forEach(vm.bookStorage, function (data) {
                            if (data.grade === vm.grade) {
                                vm.Books.push(data)
                            }
                        });
                        vm.Periods = [];
                        angular.forEach(vm.periodStorage, function (data) {
                            if (data.grade === vm.grade) {
                                vm.Periods.push(data)
                            }
                        });
                    } else {

                    }
                }
            };


            //教材变化
            vm.Datum = function (datum) {
                if (datum) {
                    angular.forEach(vm.bookStorage, function (data) {
                        if (data.id === datum) {
                            vm.press = data.version;
                            vm.grade = data.grade;
                            angular.forEach(subject_grade, function (data) {
                                if (data.id === vm.grade) {
                                    vm.Grade = [data]
                                }
                            });
                            angular.forEach(Press, function (data) {
                                if (data.name === vm.press) {
                                    vm.Press = [data]
                                }
                            });
                        }
                    });
                    vm.Periods = [];
                    angular.forEach(vm.periodStorage, function (data) {
                        if (data.bookId === datum) {
                            vm.Periods.push(data)
                        }
                    })
                } else {
                    vm.Grade = subject_grade;
                    vm.Press = Press;
                    vm.Periods = vm.periodStorage;
                    vm.Books = vm.bookStorage;
                    vm.grade = null;
                    vm.press = null;
                    vm.lessonPeriod = null
                }
            };
            //选择课时
            vm.period = function (lessonPeriod) {
                if(lessonPeriod){
                    angular.forEach(vm.periodStorage,function (data) {
                        if(data.lessonPeriodId === lessonPeriod){
                            vm.grade = data.grade;
                            vm.press = data.version;
                            vm.book = data.bookId;
                            angular.forEach(subject_grade,function (data) {
                                if(data.id === vm.grade){
                                    vm.Grade = [data]
                                }
                            });
                            angular.forEach(Press,function (data) {
                                if(data.name === vm.press){
                                    vm.Press = [data]
                                }
                            });
                            angular.forEach(vm.bookStorage,function (data) {
                                if(data.id === vm.book){
                                    vm.Books = [data]
                                }
                            })
                        }
                    })
                }else {
                    vm.Grade = subject_grade;
                    vm.Press = Press;
                    vm.Periods = vm.periodStorage;
                    vm.Books = vm.bookStorage;
                    vm.grade = null;
                    vm.press = null;
                    vm.book = null;
                }
            }
        }

        vm.add = function () {
            $state.go('backStage.previewManage.missionManage',{add:1,from:1,period:$stateParams.period})
        };

        //查询
        vm.search = function () {
            //console.log('查询中...');
            vm.stateParams = {
                book:vm.book,
                grade:vm.grade,
                lessonPeriodId:vm.lessonPeriod,
                press:vm.press,
                mission:vm.mission,
                lessonPeriodName:vm.lessonPeriodName
            };
            vm.obj = angular.toJson(vm.stateParams);
            //console.log(vm.stateParams);
            $stateParams.add === '1'?$state.go('backStage.previewManage.mission',{add:1,period:$stateParams.period,obj:vm.obj,page:1}):
                $state.go('backStage.previewManage.mission',{period:$stateParams.period,obj:vm.obj,page:1})
        };
        //分页按钮
        vm.pageGo = function (x) {
            $state.go('backStage.previewManage.mission',{page:x});
        };
        //查看任务
        vm.view = function (task) {
            //console.log(task);
            vm.stateParams = {
                book:vm.book,
                grade:vm.grade,
                lessonPeriodId:vm.lessonPeriodId,
                press:vm.press,
                mission:vm.mission,
                page:1,
                size:10,
                lessonPeriodName:vm.lessonPeriodName
            };
            vm.obj = angular.toJson(vm.stateParams);
            $stateParams.add==='1'?$state.go('backStage.previewManage.missionManage',{add:1,from:2,task:task.taskId,period:$stateParams.period,obj:vm.obj}):
                $state.go('backStage.previewManage.missionManage',{from:2,task:task.taskId,period:$stateParams.period,obj:vm.obj})
        };
        vm.edit = function (task) {
            vm.stateParams = {
                book:vm.book,
                grade:vm.grade,
                lessonPeriodId:vm.lessonPeriod,
                press:vm.press,
                mission:vm.mission,
                page:1,
                size:10,
                lessonPeriodName:vm.lessonPeriodName
            };
            vm.obj = angular.toJson(vm.stateParams);
            $stateParams.add==='1'?$state.go('backStage.previewManage.missionManage',{add:1,from:3,task:task.taskId,period:$stateParams.period,obj:vm.obj}):
                $state.go('backStage.previewManage.missionManage',{from:3,task:task.taskId,period:$stateParams.period,obj:vm.obj})
        };
        //删除
        vm.delete = function (id) {
            $rootScope.modalConfrim('是否删除？')
                .then(function () {
                    Course_service.get_PreviewDeleteMission({
                        params:{
                            taskId:id
                        }
                    }).then(function (res) {
                        if(res.data.code===0){
                            $rootScope.modalConfrim('删除成功')
                                .then(function () {
                                    $state.go('backStage.previewManage.mission',{},{reload:true});
                                })
                        }else {
                            $rootScope.modalConfrim(res.data.message)
                        }
                    });
                },function () {

                });
        };
    }]);