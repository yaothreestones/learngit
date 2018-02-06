angular.module('app')
    .controller('courseDetailsCtrl',['$scope','$timeout','$state','$stateParams','Course_service',
        function ($scope,$timeout,$state,$stateParams,Course_service) {
            var vm = this;
            //收藏功能
            vm.img = 'image/app/collection.png';
            vm.collecting = '收藏';
            vm.show = false;
            vm.return = true;
            console.log($stateParams);
            vm.Course_service = Course_service;
            vm.courseDetail_params = $stateParams.courseId;
            vm.Course_service.get_course_detail(vm.courseDetail_params)
                .then(function (res) {
                    if(res.data.code === 0){
                        vm.courseDetail = res.data.data;
                        sessionStorage.setItem("courseId",vm.courseDetail.id);
                        console.log(vm.courseDetail);
                        if(vm.courseDetail.keepStatus === 0){
                            vm.collecting = '收藏';
                            vm.img = 'image/app/collection.png';
                        }else {
                            vm.img = 'image/app/isCollection.png';
                            vm.collecting = '已收藏';
                        }
                        if(vm.courseDetail.dataBuyStatus === vm.courseDetail.dataCount){
                            vm.dataBuy = 1
                        }else {
                            vm.dataBuy = 0
                        }
                    }
                });
            vm.Course_service.get_period_list({
                courseId: $stateParams.courseId
            }).then(function (res) {
                console.log(res.data.data);
                vm.periodLists = res.data.data;
                angular.forEach(vm.periodLists,function (data,index,array) {
                    if(vm.return){
                        if(data.lock === 1){
                            vm.status = 3;
                            vm.lessonPeriodId = data.id;
                            vm.return = false
                        }else if(array[index].studyStatus === 1||(array[0].studyStatus === 2 && array[index].studyStatus === 0)){
                            vm.status = 1;
                            vm.lessonPeriodId = array[index].id;
                            vm.index = index;
                            vm.return = false
                        }else if(array[0].studyStatus === 0){
                            vm.status = 0
                        }else {
                            vm.status = 2
                        }
                    }
                });

                vm.nextStudy = function () {
                    if(vm.status === 3){
                        $state.go('app.dataPay',{courseId:$stateParams.courseId})
                    }else if(vm.status === 0){
                        $state.go('app.period',{lessonPeriodId:vm.periodLists[0].id,courseName:vm.courseDetail.name,index:0})
                    }else if(vm.status ===1){
                        $state.go('app.period',{lessonPeriodId:vm.lessonPeriodId,courseName:vm.courseDetail.name})
                    }else {
                        $state.go('app.period',{lessonPeriodId:vm.periodLists[0].id,courseName:vm.courseDetail.name})
                    }
                }
            });
            vm.course_detail = function (index,data) {
                //课时需要按照顺序学习
                if(index === 0){
                    console.log(index,data);
                    sessionStorage.setItem('courseName',vm.courseDetail.name);
                    if(data.studyStatus === 0){
                        $state.go("app.period",{lessonPeriodId:data.id,courseName:vm.courseDetail.name,index:index});
                    }else {
                        $state.go("app.period",{lessonPeriodId:data.id,courseName:vm.courseDetail.name,index:index});
                    }
                }else {
                    if(vm.periodLists[index-1].studyStatus === 2){
                        console.log(index,data);
                        $state.go("app.period",{lessonPeriodId:data.id,courseName:vm.courseDetail.name,index:index})
                    }else {
                        alert('请先完成上一个课时')
                    }
                }
            };
            //收藏
            vm.collection = function() {
                if (vm.img === 'image/app/collection.png') {
                    Course_service.get_courseCollect({},{
                        params:{
                            courseId:parseInt($stateParams.courseId)
                        }
                    }).then(function (res) {
                        if(res.data.code === 0){
                            vm.img = 'image/app/isCollection.png';
                            vm.show = true;
                            vm.collect = '收藏成功';
                            vm.collecting = '已收藏';
                            $timeout(function(){
                                vm.show = false;
                            },2500)
                        }
                    })
                } else {
                    Course_service.get_courseCollect({},{
                        params:{
                            courseId:parseInt($stateParams.courseId)
                        }
                    }).then(function (res) {
                        if(res.data.code === 0){
                            vm.img = 'image/app/collection.png';
                            vm.show = true;
                            vm.collect = '取消收藏成功';
                            vm.collecting = '收藏';
                            $timeout(function(){
                                vm.show = false;
                            },2500)
                        }
                    })
                }
            };
            //根据资料或者已购来判断跳转方向，0为资料，跳到资料购买界面；1为已购，跳到购买记录
            vm.data = function(){
                if(vm.dataBuy === 0){
                    // sessionStorage.setItem('dataFromCourse',vm.courseDetail.id);
                    // sessionStorage.setItem('dataFromBook','');
                    // sessionStorage.setItem('dataFromBookPeriod','');
                    // sessionStorage.setItem('dataFromPeriod','');
                    $state.go('app.data',{dataFromCourse:$stateParams.courseId})
                }else {
                    $state.go("app.means")
                }
            };
        }])



