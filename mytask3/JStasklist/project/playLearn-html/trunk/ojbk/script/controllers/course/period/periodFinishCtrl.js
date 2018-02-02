angular.module('app')
    .controller('periodFinishCtrl',['$state','$stateParams','Course_service','getStar','gotStar',
        function ($state,$stateParams,Course_service,getStar,gotStar) {
            var vm = this;
            vm.noNextPeriod = true;
            vm.showData = true;
            vm.noCourse = false;
            if($stateParams.getStar){
                vm.img = getStar(parseInt($stateParams.getStar))
            }else if($stateParams.gotStar){
                vm.img = gotStar(parseInt($stateParams.gotStar))
            }
            vm.Period = parseInt($stateParams.lessonPeriodId)||parseInt($stateParams.periodId);
            vm.go_buy = function () {
                $state.go('app.data',{dataFromPeriod:$stateParams.lessonPeriodId})
            };
            vm.go_index = function () {
                $state.go('app.page')
            };
            Course_service.get_next_period(
                vm.Period
            ).then(function (res) {
                if(res.data.code === 0){
                    vm.nextLessonPeriodId = res.data.data.nextLessonPeriodId;
                    vm.noNextPeriod = true
                }else {
                    vm.noNextPeriod = false;
                    if(sessionStorage.getItem('bookId')){
                        vm.noCourse = true;
                        sessionStorage.setItem("bookId",'')
                    }else {
                        Course_service.get_course_about(
                            localStorage.getItem("courseId")
                        ).then(function (res) {
                            if(res.data.code === 0){
                                vm.Courses = res.data.data
                            }
                        });
                        Course_service.get_course_end_study(
                            sessionStorage.getItem("courseId")
                        ).then(function (res) {
                            if(res.data.code === 0){

                            }
                        })

                    }
                }
            });
            vm.nextPeriod = function () {
                $state.go("app.period",{lessonPeriodId:vm.nextLessonPeriodId})
            };
            vm.course_detail =function(courseId){
                $state.go('app.courseDetails',{courseId:courseId})
            };
            if(sessionStorage.getItem("dataCount") === sessionStorage.getItem("buyDataCount")||sessionStorage.getItem("dataCount") == 0){
                vm.showData = false
            }
        }]);