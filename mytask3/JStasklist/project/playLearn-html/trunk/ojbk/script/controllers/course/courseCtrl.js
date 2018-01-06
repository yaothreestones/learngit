angular.module('app')
.controller('courseCtrl',['classes','subjects','Course_service','$state',
    function (classes,subjects,Course_service,$state) {
    var vm =this;
    vm.subject_isShow = false;
    vm.class_isShow = false;
    vm.subject_selected = '课程';
    vm.class_selected = '年级';
    vm.Course_service = Course_service;
    vm.params = {
        // Page: 1,
        // Size: 6,
        // Subjected: 0,
        // Grade: 1
    };
    vm.Course_service.get_course_list(vm.params).then(function (res) {
        vm.courseLists = res.data.list;
        console.log(vm.courseLists[0]);
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
    vm.subjects = subjects;
    vm.subject_select = function (x) {
        console.log(x);
        console.log(angular.copy(x));
        vm.subject_selected = x.name;
        vm.subject_isShow = false;

    };
    vm.class_select = function (x) {
        console.log(x);
        vm.class_selected = x.name;
        vm.class_isShow = false;
    };
    vm.courseDetail = function (x) {
        $state.go('app.courseDetails',{courseId:x});
        console.log(x)
    }
}]);