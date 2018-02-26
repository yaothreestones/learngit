angular.module('app')
    .controller('teachingCtrl', function ($scope, $timeout, $state, $stateParams, pathProject, Course_service) {
        $scope.info = $stateParams;
        console.log($scope.info);
        sessionStorage.setItem('grade', $stateParams.grade);
        $scope.bindName = "绑定";
        $scope.dataName = '资料';
        $scope.studyName = '开始学习';
        //判断是否有资料
        $scope.means = false;
        $scope.pinless = true;
        $scope.iSchange = false;
        //查看教材详情
        $scope.material = []
        Course_service.get_Books($scope.info.bookId)
            .then(function (res) {
                $scope.info = res.data.data;
                $scope.material = res.data.data;
                console.log('查看教材详情', $scope.info)
            }, function (res) {
                alert('请求失败')
            });
        $scope.bound = function () {
            Course_service.get_BookBind($scope.info.bookId)
                .then(function (res) {
                    if (res.data.code == 0) {
                        $scope.book = res.data.data;
                        console.log('绑定教材', $scope.book);
                        if (res.data.code == 0) {
                            $scope.iSchange = true;
                            $scope.pinless = false;
                        }
                    }
                }, function (res) {
                    alert('请求失败')
                });
        };
        $scope.bounds = function () {
            $state.go("app.search", {grade: 0}, {reload: true});
        };
        //获取课时列表
        $scope.params = {
            bookId: $scope.info.bookId,
            page: 1,
            size: 999,
        };
        Course_service.get_BookLessonPeriod($scope.params)
            .then(function (res) {
                if (res.data.code == 0) {
                    $scope.hour = res.data.data;
                    console.log('课时list', $scope.hour);
                    //开始判断
                    angular.forEach($scope.hour, function (data, index) {
                        console.log(data);
                        //判断当前的状态
                        $scope.opinion = function () {
                            if (data.lock == 1) {
                                //解锁全部
                                $scope.studyName = '立即解锁';
                                $scope.learning = function () {
                                    //('解锁全部');
                                    console.log(data.lessonPeriodId)
                                    $state.go('app.dataPay', {textbookId: $stateParams.bookId});
                                }
                                return;
                            }
                            if (data.lock !== 1) {
                                if (data.status === 0) {
                                    $scope.studyName = '开始学习';
                                    $scope.learning = function () {
                                        //('开始学习');
                                        $state.go('app.period', {
                                            textbookId: $stateParams.bookId,
                                            periodId: data.lessonPeriodId
                                        });
                                    }
                                } else if (data.status === 1) {
                                    $scope.studyName = '继续学习';
                                    $scope.learning = function () {
                                        //('继续学习');
                                        $state.go('app.period', {
                                            textbookId: $stateParams.bookId,
                                            periodId: data.lessonPeriodId
                                        });
                                    }
                                }
                            }
                        }
                        if (data.status !== 2 && index === 0) {
                            $scope.opinion();
                        }
                        if (data.status !== 2 && index !== 0) {
                            //判断上一个 是否完成   判断下一个 不包含当前的状态 已完成 就进行下一个判断
                            if ($scope.hour[index - 1].status === 2 && index !== 0) {
                                $scope.opinion();
                            }
                        }
                    });
                    //完成以后
                    if ($scope.hour [$scope.hour.length - 1].status === 2) {
                        $scope.studyName = '完成学习';
                        $scope.learning = function () {
                            //('完成学习');
                            var dialog = bootbox.dialog({
                                message: '<p class="text-center" style="margin: auto">请选择已完成的课时进行学习</p>',
                                closeButton: false
                            });
                            setTimeout(function () {
                                dialog.modal('hide');
                            },1500)


                        }
                    }
                    //单个课时
                    $scope.learn = function (index, hours) {
                        //判断第一个
                        $scope.material = res.data.data;
                        sessionStorage.setItem('bookName', $scope.info.bookName);
                        $scope.judge = function () {
                            if (hours.lock == 1 && index == 0) {
                                //('单个解锁')
                                $state.go('app.period', {
                                    textbookId: $stateParams.bookId,
                                    periodId: hours.lessonPeriodId
                                });
                                return;
                            }
                            if (hours[index - 1] || hours.status !== 2) {
                                if (hours.lock == 1) {
                                    //('单个解锁')
                                    $state.go('app.period', {
                                        textbookId: $stateParams.bookId,
                                        periodId: hours.lessonPeriodId
                                    });
                                    return;
                                }
                                if (hours.lock !== 1) {
                                    //('开始学习,或继续学习');
                                    if (hours.status === 0) {
                                        //('开始学习')
                                        $state.go('app.period', {
                                            textbookId: $stateParams.bookId,
                                            periodId: hours.lessonPeriodId
                                        });
                                        return

                                    } else if (hours.status === 1) {
                                        //('继续学习')
                                        $state.go('app.period', {
                                            textbookId: $stateParams.bookId,
                                            periodId: hours.lessonPeriodId
                                        });
                                        return
                                    }

                                }
                            }

                        }
                        if (index !== 0 && $scope.hour[index - 1].status !== 2) {
                            var dialog = bootbox.dialog({
                                message: '<p class="text-center" style="margin: auto">请完成当前课时</p>',
                                closeButton: false
                            });
                            setTimeout(function () {
                                dialog.modal('hide');
                            },1500)
                        }
                        //判断没有完成 当前的其他状态
                        if (hours.status !== 2 && index === 0) {
                            $scope.judge();
                        }
                        //判断没有完成 其他状态
                        if (hours.status !== 2 && index !== 0) {
                            //判断上一个 是否完成   判断下一个 不包含当前的状态 已完成 就进行下一个判断
                            if ($scope.hour[index - 1].status === 2 && index !== 0) {
                                $scope.judge();
                            }
                        }
                        //这是判断完成的状态
                        if (hours.status === 2 && index === 0) {
                            //('已完成');
                            $state.go('app.period', {textbookId: $stateParams.bookId, periodId: hours.lessonPeriodId});
                            return;
                        } else if (hours.status === 2 && index !== 0) {
                            $state.go('app.period', {textbookId: $stateParams.bookId, periodId: hours.lessonPeriodId});
                        }

                    }
                }
                ;
            }, function (res) {
                alert('请求失败')
            });
        //同步预习-课时列表的资料统计接口
        Course_service.get_LessonPeriod($scope.info.bookId)
            .then(function (res) {
                if (res.data.code == 0) {
                    $scope.books = res.data.data;
                    console.log('资料统计接口', $scope.books);
                    console.log($scope.books.lockDataNumber);
                    if ($scope.books.dataNumbers) {
                        //有资料判断是否已购
                        if ($scope.books.lockDataNumber === $scope.books.dataNumbers) {
                            $scope.dataName = '已购';
                            $scope.datum = function () {
                                $state.go("app.means", {reload: true});
                            }
                        } else if ($scope.books.lockDataNumber != $scope.books.dataNumbers) {
                            $scope.dataName = '资料';
                            $scope.datum = function () {
                                $state.go("app.data", {dataFromBook: $stateParams.bookId}, {reload: true});
                            }
                        }
                        $scope.means = true;
                    } else if ($scope.books.dataNumbers == 0) {
                        //没有资料
                        $scope.means = false;
                    }
                }
            }, function (res) {
                alert('请求失败')
            });
        //分享
        $scope.isShare = false;
        $scope.share = function () {
            $scope.isShare = true
        };
        $scope.cancelShare = function () {
            $scope.isShare = false
        }

    });



