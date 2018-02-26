angular.module('app')
    .controller('pageCtrl',
        function ($scope, $timeout, $state, $stateParams, Course_service) {
            var vm = this;
            vm.groom = true;
            vm.grooms = true;
            vm.grade = $stateParams.grade;
            vm.img = 'image/app/isCollection.png';
            vm.collecting = '收藏';
            vm.show = false;
            //课程隐藏显示
            vm.ensconce = true;
            vm.conceal = false;
            vm.prepare = true;
            //添加课程隐藏显示
            //热门显示隐藏
            vm.iSmajor=true;
            // //击败用户
                Course_service.get_Studyinfo()
                    .then(function(res) {
                        vm.code=res.data.code;
                        vm.learn=res.data.data;
                        console.log('击败用户',vm.learn)
                    }, function(res) {
                        alert('请求失败')
                    });
            //我的课程
            Course_service.get_RecordList()
                .then(function (res) {
                    console.log(res)
                    if (res.data.code ==0) {
                        vm.list = res.data.data[0];
                        //判断有没有课程
                        if (vm.list == null) {
                            vm.ensconce = false;
                            vm.conceal = true;
                        } else {
                            vm.ensconce = true;
                            vm.conceal = false;
                            //判断热
                            if (vm.list.courseRecommend === 0) {
                                vm.groom = false;
                            }
                            //判断是否收藏
                            if (vm.list.userKeepCourse === 0) {
                                vm.grooms = false;
                            }
                        }

                    }

                }, function (res) {
                    alert('请求失败')
                });
            //同步预习模块
            //查看用户绑定绑定教材详情
            Course_service.get_BookLink()
                .then(function (res) {
                    $scope.book = res.data.data;
                    console.log('绑定教材详情', res);
                    if (res.data.code == 0) {
                        console.log("查看用户绑定绑定教材详情",res)
                        vm.information = res.data.data;
                                    console.log('同步预习', vm.information);
                                    if (vm.information.bookId == null) {
                                        vm.prepare = false;
                                    } else if (vm.information.bookId) {
                                        vm.info = function () {
                                            $state.go("app.teaching", {
                                                bookId: vm.information.bookId,
                                                grade: vm.information.grade
                                            }, {reload: true});
                                        }
                                    }
                    }else if(res.data.code==2){
                        vm.prepare=false;
                    }
                }, function (res) {
                    alert('请求失败')
                });
            //热门管理（8个）
            Course_service.get_Recommend()
                .then(function (res) {
                    console.log(res);
                    if(res.data.code==0){
                        vm.code = res.data.code;
                        vm.data = res.data.data;
                        console.log('热门', vm.data);
                        console.log('热门', vm.data.data);
                        console.log(vm.code);
                    }else if(res.data.code==-1){
                        vm.iSmajor=false;
                    }
                }, function (res) {
                    alert('请求失败')
                });


        });
