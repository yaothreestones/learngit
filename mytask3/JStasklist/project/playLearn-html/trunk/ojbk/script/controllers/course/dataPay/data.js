angular.module('app')
    .controller('dataCtrl',['$scope','$state','$stateParams','Course_service',function ($scope,$state,$stateParams,Course_service) {
        var vm = this;
        vm.img = 'image/app/surebuy.png';
        vm.selected = '0';
        vm.courseShow = true;
        vm.courseId = parseInt($stateParams.dataFromCourse)||parseInt(sessionStorage.getItem("dataFromCourse"));
        vm.periodId = parseInt($stateParams.dataFromPeriod)||parseInt(sessionStorage.getItem("dataFromPeriod"))
        //从课程过来
        console.log($stateParams);
        if($stateParams.dataFromCourse||sessionStorage.getItem("dataFromCourse")) {
            Course_service.get_course_detail(
                vm.courseId
            ).then(function (res) {
                if(res.data.code === 0){
                    console.log("课程详情",res.data.data);
                    vm.courseDetail = res.data.data;
                    vm.name = vm.courseDetail.name;
                    vm.recommend = vm.courseDetail.recommend;
                    vm.studyCount = vm.courseDetail.studyCount;
                    vm.grade = vm.courseDetail.grade;
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
        //从课时过来
        if($stateParams.dataFromPeriod||sessionStorage.getItem("dataFromPeriod")){
            Course_service.get_period_detail(
                vm.periodId
            ).then(function (res) {
                if(res.data.code === 0) {
                    vm.periodDetail = res.data.data;
                    console.log('课时详情', vm.periodDetail);
                    vm.name = vm.periodDetail.name;
                    vm.recommend = vm.periodDetail.recommend;
                    vm.studyCount = vm.periodDetail.studyCount;
                    vm.information = vm.periodDetail.information;
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
                            vm.needMoneyFromCourse = res.data.data.needMoney;
                        }
                    });
                }
            })
        }
        if($state.params.choose === '1'){
            vm.courseShow = false;
            vm.selected = '1'
        }
        vm.data_next_step = function () {
            //there为后退按钮判断参数；
            //payment为资料付款类型，0为课时下资料，1位课程下资料；
            //choose为防止后退时造成课程课时页面混乱，0为从课时下进入，1为从课程下进入。
            $state.go("app.dataPay",{there:1,payment:vm.selected,choose:$state.params.choose,preview:$state.params.preview});
        }
    }])