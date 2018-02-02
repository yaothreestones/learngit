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
            }else if($stateParams.periodId){
                vm.bookPeriodId = $stateParams.periodId;
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
            } else {
                vm.confirmEmail = true;
            }
            //立即支付按钮
            vm.click = function () {
                if(!vm.confirmEmail){
                    console.log(vm.selected);
                    if(vm.selected === '0'){
                        if(vm.periodOfCourse){
                            Course_service.get_pay_period_by_star({
                                lessonPeriodId:parseInt($stateParams.periodOfCourse)
                            }).then(function (res) {
                                if(res.data.code === 0){
                                    vm.show = true;
                                    vm.collect = '解锁成功';
                                    $timeout(function(){
                                        vm.show = false;
                                        $state.go("app.period",{lessonPeriodId:$stateParams.periodOfCourse},{reload:true})
                                    },2500)
                                }else {
                                    vm.show = true;
                                    vm.collect = '学习星不足，解锁失败';
                                    $timeout(function(){
                                        vm.show = false;
                                    },2500)
                                }
                            },function (res) {

                            })
                        }else if(vm.courseId){
                            Course_service.get_pay_course_by_star({
                                courseId:$stateParams.courseId
                            }).then(function (res) {
                                if(res.data.code === 0){
                                    vm.show = true;
                                    vm.collect = '解锁成功';
                                    $timeout(function(){
                                        vm.show = false;
                                        $state.go("app.courseDetails",{courseId:$stateParams.courseId},{reload:true})
                                    },2500)
                                }else {
                                    vm.show = true;
                                    vm.collect = '学习星不足，解锁失败';
                                    $timeout(function(){
                                        vm.show = false;
                                    },2500)
                                }
                            },function (res) {

                            })
                        }else if(vm.bookPeriodId){
                            Course_service.get_pay_period_by_star({
                                lessonPeriodId:parseInt(vm.bookPeriodId)
                            }).then(function (res) {
                                if(res.data.code === 0){
                                    vm.show = true;
                                    vm.collect = '解锁成功';
                                    $timeout(function(){
                                        vm.show = false;
                                        $state.go('app.teaching',{bookId:$stateParams.bookId},{reload:true})
                                    },2500)
                                }else {
                                    vm.show = true;
                                    vm.collect = '学习星不足，解锁失败';
                                    $timeout(function(){
                                        vm.show = false;
                                    },2500)
                                }
                            },function (res) {

                            })
                        }
                    }
                }else {
                    vm.goPay = !vm.goPay;
                }

            };
            //取消支付
            vm.cancel = function () {
                vm.goPay = true;

            };
            //确认支付，调用微信支付接口
            vm.sure = function () {
                //判断购买类型
                if($stateParams.courseId){
                    vm.orderType = 1;
                    vm.orderTypeId = parseInt($stateParams.courseId)
                }else if($stateParams.periodOfCourse){
                    vm.orderType = 2;
                    vm.orderTypeId = parseInt($stateParams.periodOfCourse)
                }else {
                    vm.orderType = 3;
                    vm.orderTypeId = parseInt($stateParams.periodOfCourse)
                }
                //先调用后端接口发送商品概况
                Course_service.get_wx_prepay({
                    orderType:vm.orderType,
                    orderTypeId:vm.orderTypeId,
                    email:3
                }).then(function (res) {
                    if(res.data.code === 0){
                        function onBridgeReady() {
                            WeixinJSBridge.invoke(
                                'getBrandWCPayRequest', {
                                    "appId": a,
                                    "timeStamp": res.data.data.timeStamp,
                                    "nonceStr": res.data.data.nonceStr,
                                    "package": res.data.data.package,
                                    "signType": "MD5",
                                    "paySign": res.data.data.paySign
                                },
                                function (res) {
                                    console.log(res.err_code + "  " + res.err_desc + "  " + res.err_msg);
                                    if (res.err_msg === "get_brand_wcpay_request:ok") {
                                        alert("充值成功");
                                    } else if (res.err_msg === "get_brand_wcpay_request:cancel") {
                                        alert("用户取消支付");

                                    } else if (res.err_msg === "get_brand_wcpay_request:fail") {
                                        alert("支付失败");
                                    }
                                }
                            );
                        }
                    }
                });
                //此处调用后端接口获得数据后调用微信支付接口
                $state.go('app.result')
            }
        }]);
