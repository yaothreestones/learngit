angular.module('app')
    .controller('dataPayCtrl',['$state','$stateParams','$rootScope','Course_service',"$timeout",
        function ($state,$stateParams,$rootScope,Course_service,$timeout) {
            var vm = this;
            vm.goPay = true;//显示隐藏支付选项
            vm.confirmEmail = false;//显示隐藏确认邮箱界面
            $rootScope.config.headNav.title = '支付';
            vm.selected = "0";
            console.log($stateParams);
            Course_service.userinfo()
                .then(function (res) {
                    if(res.data.code === 0){
                        console.log(res);
                        vm.email = sessionStorage.getItem("email")||res.data.data.email
                    }
                });
            //更换邮箱
            vm.dataPay_changeEmail = function () {
                sessionStorage.setItem("email",vm.email);
                $state.go("app.changeEmail",{payment:$state.params.payment,choose:$state.params.choose,preview:$state.params.preview});
            };

            //课时解锁
            if($stateParams.periodOfCourse){
                vm.periodOfCourse = $stateParams.periodOfCourse;
                Course_service.get_period_unlock(
                    parseInt($stateParams.periodOfCourse)
                ).then(function (res) {
                    if(res.data.code === 0){
                        vm.payDetail = res.data.data;
                        console.log('课时',vm.payDetail);
                        vm.name = vm.payDetail.lessonPeriodName;
                        vm.price = vm.payDetail.needMoney;
                        vm.star = vm.payDetail.needStar;
                        vm.task = vm.payDetail.taskNumber;
                    }
                });
                //课程解锁
            }else if($stateParams.courseId){
                vm.courseId = $stateParams.courseId;
                Course_service.get_course_unlock(
                    parseInt($stateParams.courseId)
                ).then(function (res) {
                    if(res.data.code === 0){
                        vm.payDetail = res.data.data;
                        console.log('课程',vm.payDetail);
                        vm.name = vm.payDetail.name;
                        Course_service.get_course_price(
                            parseInt($stateParams.courseId)
                        ).then(function (res) {
                            if(res.data.code === 0){
                                vm.showPrice = res.data.data;
                                console.log('课程价格',vm.showPrice);
                                vm.price = vm.showPrice.needMoney;
                                vm.star = vm.showPrice.needStar
                            }
                        })
                    }
                })
            }else if($stateParams.periodOfBook){
                vm.bookPeriodId = $stateParams.periodOfBook;
                Course_service.get_period_unlock(
                    parseInt(vm.bookPeriodId)
                ).then(function (res) {
                    if (res.data.code === 0) {
                        vm.payDetail = res.data.data;
                        console.log('课时', vm.payDetail);
                        vm.name = vm.payDetail.lessonPeriodName;
                        vm.price = vm.payDetail.needMoney;
                        vm.star = vm.payDetail.needStar;
                        vm.task = vm.payDetail.taskNumber;
                    }
                })
            } else if($stateParams.textbookId){
                vm.bookId = $stateParams.textbookId;
                Course_service.get_Books(
                    parseInt(vm.bookId)
                ).then(function (res) {
                    if (res.data.code === 0) {
                        vm.payDetail = res.data.data;
                        console.log('教材', vm.payDetail);
                        vm.name = vm.payDetail.bookName;
                        vm.task = vm.payDetail.taskNumber;
                        vm.picture = vm.payDetail.picture;
                        vm.version = vm.payDetail.version;
                        Course_service.get_book_unlock(
                            parseInt(vm.bookId)
                        ).then(function (res) {
                            vm.price = res.data.data.needMoney;
                            vm.star = res.data.data.needStar;
                        })
                    }
                })
            }else {
                vm.confirmEmail = true;
            }
            //立即支付按钮
            vm.click = function () {
                if(!vm.confirmEmail) {
                    console.log(vm.selected);
                    if (vm.selected === '0') {
                        if (vm.periodOfCourse) {
                            Course_service.get_pay_period_by_star({
                                lessonPeriodId: parseInt($stateParams.periodOfCourse)
                            }).then(function (res) {
                                if (res.data.code === 0) {
                                    vm.show = true;
                                    vm.collect = '解锁成功';
                                    $timeout(function () {
                                        vm.show = false;
                                        history.back();
                                        //$state.go("app.period", {lessonPeriodId: $stateParams.periodOfCourse}, {reload: true})
                                    }, 2500)
                                } else {
                                    vm.show = true;
                                    vm.collect = '学习星不足，解锁失败';
                                    $timeout(function () {
                                        vm.show = false;
                                    }, 2500)
                                }
                            }, function (res) {

                            })
                        } else if (vm.courseId) {
                            Course_service.get_pay_course_by_star({
                                courseId: $stateParams.courseId
                            }).then(function (res) {
                                if (res.data.code === 0) {
                                    vm.show = true;
                                    vm.collect = '解锁成功';
                                    $timeout(function () {
                                        vm.show = false;
                                        history.back();
                                        //$state.go("app.courseDetails", {courseId: $stateParams.courseId}, {reload: true})
                                    }, 2500)
                                } else {
                                    vm.show = true;
                                    vm.collect = '学习星不足，解锁失败';
                                    $timeout(function () {
                                        vm.show = false;
                                    }, 2500)
                                }
                            }, function (res) {

                            })
                        } else if (vm.bookPeriodId) {
                            Course_service.get_pay_period_by_star({
                                lessonPeriodId: parseInt(vm.bookPeriodId)
                            }).then(function (res) {
                                if (res.data.code === 0) {
                                    vm.show = true;
                                    vm.collect = '解锁成功';
                                    $timeout(function () {
                                        vm.show = false;
                                        history.back();
                                        //$state.go('app.period', {bookId: $stateParams.bookId}, {reload: true})
                                    }, 2500)
                                } else {
                                    vm.show = true;
                                    vm.collect = '学习星不足，解锁失败';
                                    $timeout(function () {
                                        vm.show = false;
                                    }, 2500)
                                }
                            }, function (res) {

                            })
                        } else if (vm.bookId) {
                            Course_service.get_pay_book_by_star({
                                bookId: parseInt(vm.bookId)
                            }).then(function (res) {
                                if (res.data.code === 0) {
                                    vm.show = true;
                                    vm.collect = '解锁成功';
                                    $timeout(function () {
                                        vm.show = false;
                                        $state.go('app.teaching', {
                                            bookId: $stateParams.textbookId,
                                            grade : sessionStorage.getItem('grade')
                                        }, {reload: true})
                                    }, 2500)
                                } else {
                                    vm.show = true;
                                    vm.collect = '学习星不足，解锁失败';
                                    $timeout(function () {
                                        vm.show = false;
                                    }, 2500)
                                }
                            }, function (res) {

                            })
                        }else {
                            vm.goPay = false;
                        }
                    }else {
                        vm.goPay = false;
                    }
                }else {
                    vm.goPay = false;
                }
            };

            //取消支付
            vm.cancel = function () {
                vm.goPay = true;

            };
            //确认支付，调用微信支付接口
            vm.sure = function () {
                //判断购买类型
                if($stateParams.courseId){//购买课程
                    vm.orderType = 1;
                    vm.orderTypeId = parseInt($stateParams.courseId)
                }else if($stateParams.periodOfCourse||$stateParams.periodOfBook){//购买单个课时
                    vm.orderType = 2;
                    vm.orderTypeId = parseInt($stateParams.periodOfCourse)||parseInt($stateParams.periodOfBook)
                }else if($stateParams.textbookId){//购买教材
                    vm.orderType = 4;
                    vm.orderTypeId = parseInt($stateParams.textbookId)
                } else {
                    vm.orderType = 3;
                    if($stateParams.dataFromPeriod){
                        vm.orderTypeId = parseInt($stateParams.dataFromPeriod)
                    }else if($stateParams.dataFromCourse){
                        vm.orderTypeId = parseInt($stateParams.dataFromCourse)
                    }else if($stateParams.dataFromBook){
                        vm.orderTypeId = parseInt($stateParams.dataFromBook)
                    }
                }
                //先调用后端接口发送商品概况
                Course_service.get_wx_prepay({},{
                    params:{
                        orderType:vm.orderType,
                        orderTypeId:vm.orderTypeId
                    }
                }).then(function (res) {
                    if(res.data.code === 0){
                        console.log(res.data.data);
                        //$state.go('app.result',{result:2})
                        onBridgeReady();//调用微信支付接口
                        function onBridgeReady() {
                            WeixinJSBridge.invoke(
                                'getBrandWCPayRequest', {
                                    "appId": res.data.data.appId,
                                    "timeStamp": res.data.data.timeStamp,
                                    "nonceStr": res.data.data.nonceStr,
                                    "package": res.data.data.package,
                                    "signType": res.data.data.signType,
                                    "paySign": res.data.data.paySign
                                },
                                function (resp) {
                                    console.log(resp.err_code + "  " + resp.err_desc + "  " + resp.err_msg);
                                    if (resp.err_msg === "get_brand_wcpay_request:ok") {//成功
                                        console.log(resp);
                                        Course_service.get_wx_pay_result(
                                            res.data.data.outTradeNo
                                        ).then(function (res) {
                                            if(res.data.code===0){
                                                $state.go('app.result',{result:1})
                                            }else {
                                                $state.go('app.result',{result:2});
                                            }
                                        })
                                    } else if (resp.err_msg === "get_brand_wcpay_request:cancel") {
                                        console.log(resp);//取消
                                        $state.go('app.result',{result:2});
                                    } else if (resp.err_msg === "get_brand_wcpay_request:fail") {//失败
                                        $state.go('app.result',{result:2});
                                        console.log(resp)
                                    }
                                }
                            );
                        }
                    }
                });
            }
        }]);
