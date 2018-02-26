angular.module('app')
    .controller("recordCtrl", ["$state", "$stateParams", "$http", '$rootScope', '$scope', 'Course_service', '$q','$scope',
        function ($state, $stateParams, $http, $rootScope, $scope, Course_service, $q,$scope) {
            var vm = this;
            vm.$stateParams = $state.params;
            if (vm.$stateParams['delete'] == 'true') {
                $rootScope.config.headNav.cancelDelete.isShow = true;
            } else {
                $rootScope.config.headNav.rubbish.isShow = true;
            }
            //记录
            vm.requestLessonList = [];
            //初始化
            (async function () {
                //获取数据
                await Course_service.get_Record({
                    params: vm.params
                }).then(function (res) {
                    vm.requestLessonList = res.data.data;
                });
                //处理数据
                vm.lessonStatus = new Array(vm.requestLessonList.length).fill(false);
                vm.lessonIds = vm.requestLessonList.map(function (v) {//所以记录id
                    return v.id;
                });
                vm.deleteItems = [];
            })();
            vm.chooseItem = function ($index, id) {
                var idIndex = vm.deleteItems.indexOf(id);
                if (vm.lessonStatus[$index]) {
                    //取消
                    vm.lessonStatus[$index] = false;//改变状态
                    if (idIndex > -1) {
                        vm.deleteItems.splice(idIndex, 1);//改变数据
                    }
                    vm.allItems.needAll = true;
                    vm.allItems.txt = '全选';
                } else {
                    //选中
                    vm.lessonStatus[$index] = true;//改变状态
                    if (idIndex < 0) {
                        vm.deleteItems.push(id);//改变数据
                    }
                    if (vm.deleteItems.length == vm.lessonIds.length) {
                        vm.allItems.needAll = false;
                        vm.allItems.txt = '取消选择';
                    }
                }
            };
            //所以
            vm.allItems = {
                txt: '全选',
                needAll: true,
                do: function () {
                    if (this.needAll) {
                        //全选
                        this.txt = '取消选择';
                        vm.lessonStatus.fill(true);
                        vm.deleteItems = vm.lessonIds.map(function (t) {
                            return t;
                        })
                    } else {
                        this.txt = '全选';
                        vm.lessonStatus.fill(false);
                        vm.deleteItems = [];
                    }
                    this.needAll = !this.needAll;
                }
            }
            vm.deleteAll = function () {
                Course_service.get_DeleteAll(vm.deleteItems)
                    .then(function (res) {
                        $state.go('app.record', {}, {reload: true})
                    })
            }
            $scope.$on('repeat-done', function () {
                mui.init();
                (function ($) {
                    var btnArray = ['确认', '取消'];
                    $('#OA_task_1').on('tap', '.mui-btn', function (event) {
                        var elem = this;
                        var li = elem.parentNode.parentNode;
                        mui.confirm('确认删除该条记录？', '您好用户', btnArray, function (e) {
                            if (e.index == 0) {
                                Course_service.idDelet(jQuery('#OA_task_1 .main').eq(e.index).scope().item.courseId)
                                    .then(function () {
                                        //请求成功之后。。
                                        $state.reload();
                                    }).catch(function (e) {
                                    //请求错误之后。。
                                });
                            } else {
                                //取消之后做某事
                            }
                        });
                    });
                })(mui);
            });

        }])
