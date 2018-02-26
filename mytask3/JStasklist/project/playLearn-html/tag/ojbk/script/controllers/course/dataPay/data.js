angular.module('app')
    .controller('dataCtrl',['$scope','$state','$stateParams','Course_service',function ($scope,$state,$stateParams,Course_service) {
        var vm = this;
        vm.img = 'image/app/surebuy.png';
        vm.selected = '0';
        vm.courseShow = true;
        vm.courseId = parseInt($stateParams.dataFromCourse)||parseInt(sessionStorage.getItem("dataFromCourse"));
        vm.periodId = parseInt($stateParams.dataFromPeriod)||parseInt(sessionStorage.getItem("dataFromPeriod"))
        vm.bookId = parseInt($stateParams.dataFromBook);
        //从课程过来
        console.log($stateParams);
        if($stateParams.dataFromCourse||sessionStorage.getItem("dataFromCourse")) {
            vm.parent = '课程';
            vm.selected = "1";
            vm.courseShow = false;
            Course_service.get_course_detail(
                vm.courseId
            ).then(function (res) {
                if(res.data.code === 0){
                    vm.control = true;
                    console.log("课程详情",res.data.data);
                    vm.courseDetail = res.data.data;
                    vm.name = vm.courseDetail.name;
                    vm.recommend = vm.courseDetail.recommend;
                    vm.studyCount = vm.courseDetail.studyCount;
                    vm.grade = vm.courseDetail.grade;
                    vm.picture = vm.courseDetail.logo;
                    Course_service.get_data_buy({
                        params:{
                            id:vm.courseId,
                            type:1
                        }
                    }).then(function (res) {
                        if (res.data.code === 0) {
                            vm.needMoney = res.data.data.needMoney;
                        }
                    })
                }
            })
        }
        //从教材过来
        if($stateParams.dataFromBook){
            vm.parent = '教材';
            vm.selected = "1";
            vm.courseShow = false;
            Course_service.get_Books(
                parseInt($stateParams.dataFromBook)
            ).then(function (res) {
                if(res.data.code === 0){
                    vm.control = true;
                    console.log(res.data.data);
                    vm.bookDetail = res.data.data;
                    vm.name = vm.bookDetail.bookName;
                    vm.recommend = vm.bookDetail.recommend;
                    vm.studyCount = vm.bookDetail.studyCount;
                    vm.grade = vm.bookDetail.grade;
                    vm.picture = vm.bookDetail.picture;
                    vm.version = vm.bookDetail.version;
                    Course_service.get_data_buy({
                        params:{
                            id:vm.bookId,
                            type:2
                        }
                    }).then(function (res) {
                        if(res.data.code === 0){}
                        console.log(res.data.data);
                        vm.needMoney = res.data.data.needMoney
                    })
                }
            })
        }
        //从课时过来
        if($stateParams.dataFromPeriod||sessionStorage.getItem("dataFromPeriod")){
            Course_service.get_period_detail(
                vm.periodId
            ).then(function (res) {
                if(res.data.code === 0) {
                    vm.control = true;
                    vm.periodDetail = res.data.data;
                    if(vm.periodDetail.courseId){
                        vm.parent = '课程'
                    }else {
                        vm.parent = '教材'
                    }
                    console.log('课时详情', vm.periodDetail);
                    vm.name = vm.periodDetail.name;
                    vm.recommend = vm.periodDetail.recommend;
                    vm.studyCount = vm.periodDetail.studyCount;
                    vm.information = vm.periodDetail.information;
                    vm.lock = vm.periodDetail.lock
                    if(vm.periodDetail.courseId){
                        vm.type = 1
                    }else if(vm.periodDetail.bookId){
                        vm.type = 2
                    }
                    Course_service.get_data_buy({//课程||教材
                        params:{
                            id:vm.periodDetail.courseId||vm.periodDetail.bookId,
                            type:vm.type
                        }
                    }).then(function (res) {
                        if (res.data.code === 0) {
                            vm.needMoney = res.data.data.needMoney;
                        }
                    });
                    Course_service.get_data_buy({//课时
                        params:{
                            id:vm.periodDetail.id,
                            type:3
                        }
                    }).then(function (res) {
                        if (res.data.code === 0) {
                            vm.needMoneyFromBook = res.data.data.needMoney;
                        }
                    });
                }
            })
        }
        vm.data_next_step = function () {
            console.log(vm.selected);
            if(vm.selected === '0' && $stateParams.dataFromPeriod){
                $state.go("app.dataPay",{dataFromPeriod:$stateParams.dataFromPeriod})
            }else if(vm.selected === '1' && $stateParams.dataFromPeriod && vm.periodDetail.bookId){
                $state.go("app.dataPay",{dataFromBook:vm.periodDetail.bookId})
            }else if(vm.selected === '1' && $stateParams.dataFromPeriod && vm.periodDetail.courseId){
                $state.go("app.dataPay",{dataFromCourse:vm.periodDetail.courseId})
            }else {
                $state.go("app.dataPay",{dataFromCourse:$stateParams.dataFromCourse,dataFromBook:$stateParams.dataFromBook})
            }


        }
    }])