angular.module('app')
    .controller('courseCtrl',['classes','Course_service','$state','$http','$stateParams',
        function (classes,Course_service,$state,$http,$stateParams) {
            var vm =this;
            vm.subject_isShow = false;
            vm.class_isShow = false;
            vm.class_selected = $stateParams.className||'年级';
            vm.params = {};
            vm.scroll = {};
            vm.scroll.items = [];
            Course_service.get_SubjectList({
                params:{
                    size:999,
                    page:1,
                    status:1
                }

            }).then(function (res) {
                if(res.data.code === 0){
                    vm.subjectStorage = res.data.data;
                    vm.subjects = [];
                    console.log('科目列表',vm.subjectStorage);
                    angular.forEach(vm.subjectStorage,function (data) {
                        if(data.status === 1){
                            vm.subjects.push(data);
                        }
                    });
                    vm.subject_selected = $stateParams.subjectName||vm.subjects[0].name;
                    vm.params = {
                        subjectId:parseInt($stateParams.subject)||vm.subjects[0].id,
                        grade:'',
                        page:1,
                        size:10
                    };

                    vm.scroll.nextPage = function () {
                        vm.scroll.subject = vm.params.subjectId;
                        vm.scroll.after = '';
                        vm.scroll.page = Math.ceil(vm.scroll.items.length/10) + 1;
                        if(vm.scroll.busy){
                            return;
                        }
                        vm.scroll.busy = true;
                        Course_service.get_course_list({
                            params:{
                                subject: $stateParams.subject||vm.scroll.subject,
                                grade: $stateParams.grade||vm.params.grade,
                                page: vm.scroll.page,
                                size: 10
                            }
                        }).then(function (res) {
                            if(res.data.code === 0){
                                var items = res.data.data;
                                vm.scroll.items.push.apply(vm.scroll.items,items);
                                console.log(vm.scroll.items);
                                vm.scroll.busy = false;
                                vm.scroll.info = '加载中...'
                            }else{
                                vm.scroll.busy = true;
                                vm.scroll.info = '已无更多...'
                            }
                        });
                    };
                    console.log(vm.scroll);
                    vm.scroll.nextPage();
                }
            });
            vm.subject_search = function () {
                vm.subject_isShow = !vm.subject_isShow;
                vm.class_isShow = false;
            };
            vm.class_search = function () {
                vm.class_isShow = !vm.class_isShow;
                vm.subject_isShow = false;
            };
            vm.classes = classes;
            vm.subject_select = function (x) {
                vm.subject_selected = x.name;
                vm.subject_isShow = false;
                vm.params.subjectId = x.id;
                console.log(vm.params);
                $state.go('app.course',{subject:vm.params.subjectId,grade:vm.params.grade,subjectName:vm.subject_selected,className:vm.class_selected},{reload:true})
            };
            vm.class_select = function (x) {
                vm.class_selected = x.name;
                vm.class_isShow = false;
                vm.params.grade = x.id;
                console.log(vm.params);
                $state.go('app.course',{subject:vm.params.subjectId,grade:vm.params.grade,subjectName:vm.subject_selected,className:vm.class_selected},{reload:true})
            };
            vm.course_detail = function (x) {
                $state.go('app.courseDetails',{courseId:x});
                console.log(x)
            };
            //上拉加载

        }]);