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
                        console.log(vm.list);
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
            Course_service.get_BookList({})
                .then(function (res) {
                    vm.code = res.data.code;
                    if(res.data.code==0){
                        vm.information = res.data.data[0];
                        console.log('同步预习', vm.information);
                        if (vm.information.bookId == null) {
                            vm.info = function () {
                                $state.go("app.search", {grade: vm.information.grade}, {reload: true});
                            }
                        } else if (vm.information.bookId) {
                            vm.info = function () {
                                $state.go("app.teaching", {
                                    bookId: vm.information.bookId,
                                    grade: vm.information.grade
                                }, {reload: true});
                            }
                        }
                    }
                }, function (res) {
                    alert('请求失败')
                });
            //判断是否有list
            console.log(parseInt($stateParams.page))
            vm.params = {
                grade: $stateParams.page,
                page: 1,
                size: 999
            };
            vm.list = function () {
                console.log(vm.params);
                Course_service.get_BookList({params: vm.params})
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.demoLists = res.data.data;
                            console.log('教材list', vm.demoLists);
                            vm.prepare = true;

                        }else if(res.data.code == 2){
                                vm.prepare = false;
                        }
                    }, function (res) {
                        alert('请求失败')
                    })
            };
            vm.list();
            //热门管理（8个）
            Course_service.get_Recommend()
                .then(function (res) {
                    vm.code = res.data.code;
                    vm.data = res.data.data;
                    console.log('热门', vm.data)
                    console.log(vm.code)
                }, function (res) {
                    alert('请求失败')
                });


        })
