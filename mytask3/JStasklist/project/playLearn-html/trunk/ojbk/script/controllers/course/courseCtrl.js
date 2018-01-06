angular.module('app')
.controller('courseCtrl',['classes','Course_service','$state',
    function (classes,Course_service,$state) {
    var vm =this;
    vm.subject_isShow = false;
    vm.class_isShow = false;
    vm.subject_selected = '课程';
    vm.class_selected = '年级';
    vm.Course_service = Course_service;
    vm.params = {
        SubjectId:1,
        Grade:0,//全部年级
        Page:1,
        Size:10
    };
    vm.Course_service.get_subject({
        Size:1,
        Page:10
    }).then(function (res) {
        vm.subjects = res.data.data;
        vm.Course_service.get_course_list(vm.params).then(function (res) {
            vm.courseLists = res.data.list;
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
    vm.subject_select = function (x) {
        vm.subject_selected = x.subject;
        vm.subject_isShow = false;
        vm.params.SubjectId = x.subjectId;
        console.log(vm.params);
        vm.Course_service.get_course_list(vm.params).then(function (res) {
            vm.courseLists = res.data.list;
        });
    };
    vm.class_select = function (x) {
        vm.class_selected = x.name;
        vm.class_isShow = false;
        vm.params.Grade = x.id;
        console.log(vm.params);
        vm.Course_service.get_course_list(vm.params).then(function (res) {
            vm.courseLists = res.data.list;
        });
    };
    vm.course_detail = function (x) {
        $state.go('app.courseDetails',{courseId:x});
        console.log(x)
    }
}]);