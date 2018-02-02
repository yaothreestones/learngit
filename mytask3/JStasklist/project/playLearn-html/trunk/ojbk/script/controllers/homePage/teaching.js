angular.module('app')
    .controller('teachingCtrl', function ($scope, $timeout, $state, $stateParams, pathProject, Course_service) {
        // $scope.data = function(x){
        //     if(x===1){
        //         $state.go('app.data',{choose:1,preview:1})
        //     }
        // };
        $scope.info = $stateParams;
        console.log($scope.info);
        $scope.bindName = "绑定";
        $scope.dataName = '资料';
        $scope.studyName = '开始学习';
        //判断是否有资料
        $scope.means = false;
        $scope.pinless = false;
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
        //查看用户是否绑定绑定教材详情
        Course_service.get_BookLink()
            .then(function (res) {
                $scope.book = res.data.data;
                console.log('绑定教材详情', $scope.book);
                if (res.data.code == 0) {
                    $scope.iSchange = true;
                    $scope.bounds = function () {
                        $state.go("app.search", {grade: 0}, {reload: true});
                    }
                } else if (res.data.code == 2) {
                    $scope.pinless = true;
                    //开始按钮

                    //绑教材接口
                    $scope.bound = function () {
                        Course_service.get_BookBind($scope.info.bookId)
                            .then(function (res) {
                                $scope.book = res.data.data;
                                console.log('绑定教材', $scope.book);
                                if (res.data.code == 0) {
                                    $scope.iSchange = true;
                                    $scope.pinless = false;
                                }
                            }, function (res) {
                                alert('请求失败')
                            });
                    }
                }
            }, function (res) {
                alert('请求失败')
            });
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
                        $scope.opinion=function () {
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
                                if(data.status === 0){
                                    $scope.studyName = '开始学习';
                                    $scope.learning = function () {
                                        //('开始学习');
                                        $state.go('app.period', {textbookId: $stateParams.bookId, periodId: data.lessonPeriodId});
                                    }
                                }else if(data.status === 1){
                                    $scope.studyName = '继续学习';
                                    $scope.learning = function () {
                                        //('继续学习');
                                        $state.go('app.period', {textbookId: $stateParams.bookId, periodId: data.lessonPeriodId});
                                    }
                                }
                            }
                        }
                        if(data.status !==2&&index===0){
                            $scope.opinion();
                        }
                        if (data.status !==2&& index !== 0) {
                            //判断上一个 是否完成   判断下一个 不包含当前的状态 已完成 就进行下一个判断
                            if ($scope.hour[index - 1].status === 2 && index !== 0) {
                                $scope.opinion();
                            }
                        }
                    });
                    //完成以后
                    if($scope.hour [$scope.hour.length-1].status===2){
                        $scope.studyName = '完成学习';
                        $scope.learning = function () {
                            //('完成学习');
                            alert('已完成当前教材的课时,')
                            // console.log($scope.hour [$scope.hour.length-1].lessonPeriodId)
                            // $state.go('app.period', {textbookId: $stateParams.bookId, periodId: $scope.hour.lessonPeriodId});
                        }
                    }
                    // $state.go('app.period', {textbookId: $stateParams.bookId, periodId: hours.lessonPeriodId});  课时
                    // $state.go('app.dataPay', {textbookId: $stateParams.bookId}); 解锁  全部只穿id    单个教材加id
                    //单个课时
                    $scope.learn = function (index, hours) {
                        //判断第一个

                        $scope.judge=function () {
                            if($scope.hour[index-1].status===2){
                                if (hours.lock == 1) {
                                    //('单个解锁')
                                    $state.go('app.dataPay', {textbookId: $stateParams.bookId,periodId:hours.lessonPeriodId});
                                    return;
                                }
                                if (hours.lock !== 1) {
                                    //('开始学习,或继续学习');
                                    if(hours.status===0){
                                        //('开始学习')
                                        $state.go('app.period', {textbookId: $stateParams.bookId, periodId: hours.lessonPeriodId});
                                        return

                                    }else if(hours.status===1){
                                        //('继续学习')
                                        $state.go('app.period', {textbookId: $stateParams.bookId, periodId: hours.lessonPeriodId});
                                        return
                                    }

                                }
                            }

                        }
                        if (index!==0&&$scope.hour[index-1].status!==2) {
                            alert('请完成当前课时')
                        }
                        //判断没有完成 当前的其他状态
                        if (hours.status !==2&& index === 0) {
                            $scope.judge();
                        }
                        //判断没有完成 其他状态
                        if (hours.status !==2&& index !== 0) {
                            //判断上一个 是否完成   判断下一个 不包含当前的状态 已完成 就进行下一个判断
                            if ($scope.hour[index - 1].status === 2 && index !== 0) {
                                $scope.judge();
                            }
                        }
                        //这是判断完成的状态
                        if (hours.status === 2&&index===0) {
                            //('已完成');
                            $state.go('app.period', {textbookId: $stateParams.bookId, periodId: hours.lessonPeriodId});
                            return;
                        }else if(hours.status === 2&&index!==0){
                            $state.go('app.period', {textbookId: $stateParams.bookId, periodId: hours.lessonPeriodId});
                        }

                    }
                };
            }, function (res) {
                alert('请求失败')
            });


        //同步预习-课时列表的资料统计接口
        Course_service.get_LessonPeriod($scope.info.bookId)
            .then(function (res) {
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
                            $state.go("app.data", {reload: true});
                        }
                    }
                    $scope.means = true;
                } else if ($scope.books.dataNumbers == 0) {
                    //没有资料
                    $scope.means = false;
                }
            }, function (res) {
                alert('请求失败')
            });

    });



