angular.module('app')
    .controller('courseCtrl',['$scope','$rootScope','classes','Course_service','$state','$http','$stateParams','isNewUser',
        function ($scope,$rootScope,classes,Course_service,$state,$http,$stateParams,isNewUser) {
            var vm =this;
            vm.subject_isShow = false;
            vm.class_isShow = false;
            vm.class_selected = $stateParams.className||'年级';
            vm.params = {};
            vm.scroll = {};
            vm.scroll.items = [];
            //用户信息
            Course_service.userinfo(
            ).then(function (res) {
                if(res.data.code === 0){}
                console.log(res.data.data);
                vm.userInfo = res.data.data;
                if(res.data.data.length ===0){
                    $rootScope.config.isNew = true
                }else {
                    $rootScope.config.isNew = false
                }
                console.log($scope.config.isNew,$rootScope.config.isNew);
                if(!$stateParams.grade){
                    sessionStorage.setItem('indexofclass',vm.userInfo.grade||'');
                    sessionStorage.setItem('index','0')
                }else if($stateParams.grade != sessionStorage.getItem('indexofclass')){
                    sessionStorage.setItem('indexofclass',vm.userInfo.grade||'');
                    sessionStorage.setItem('index','0')
                }
                vm.grade = parseInt($stateParams.grade)||vm.userInfo.grade||undefined;
                if($stateParams.grade === '0'){
                    vm.grade = 0
                }
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
                        vm.box = [];
                        vm.box.length = vm.subjects.length;
                        vm.box.fill(0);
                        if(sessionStorage.getItem('index')){
                            vm.box[sessionStorage.getItem('index')] = true;
                        }
                        vm.classBox = [];
                        vm.classBox.length = classes.length;
                        vm.classBox.fill(0);
                        if(sessionStorage.getItem('indexofclass')){
                            vm.classBox[sessionStorage.getItem('indexofclass')] = true;
                        }
                        console.log('科目列表',vm.subjectStorage);
                        angular.forEach(vm.subjectStorage,function (data) {
                            if(data.status === 1){
                                vm.subjects.push(data);
                            }
                        });
                        vm.subject_selected = $stateParams.subjectName||vm.subjects[0].name;
                        vm.params = {
                            subjectId:parseInt($stateParams.subject)||vm.subjects[0].id,
                            grade:$stateParams.grade||vm.userInfo.grade,
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
                            if($stateParams.grade === '0'){
                                vm.params.grade = null
                            }
                            Course_service.get_course_list({
                                params:{
                                    subject: $stateParams.subject||vm.scroll.subject,
                                    grade:vm.params.grade,
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
            vm.subject_select = function (x,index) {
                sessionStorage.setItem('index',index);
                vm.subject_selected = x.name;
                console.log(x);
                vm.subject_isShow = false;
                vm.params.subjectId = x.id;
                console.log(vm.params);
                $state.go('app.course',{subject:vm.params.subjectId,grade:$stateParams.grade,subjectName:vm.subject_selected,className:vm.class_selected})
            };
            vm.class_select = function (x,index) {
                sessionStorage.setItem('indexofclass',index);
                vm.class_selected = x.name;
                console.log(x.id);
                vm.grade = x.id;
                vm.class_isShow = false;
                vm.params.grade = x.id;
                console.log(vm.params);
                $state.go('app.course',{subject:vm.params.subjectId,grade:vm.grade,subjectName:vm.subject_selected,className:vm.class_selected})
            };
            vm.course_detail = function (x) {
                $state.go('app.courseDetails',{courseId:x});
                console.log(x)
            };
            //上拉加载

        }]);