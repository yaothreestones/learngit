angular.module('app')
    .controller('dataCtrl', function ($scope, $state, $http, Course_service, CourseMaterials, optionsData, $rootScope) {
        var vm = this;
        //add为1同步预习课时跳没有科目 为2从侧栏跳 为3教学管理跳 有科目
        vm.period = $state.params;
        for (var i in vm.period) {
            if (/^\d+$/.test(vm.period[i])) {
                vm.period[i] *= 1;
            }
        }
        console.log(vm.period)
        //新增按钮判断
        vm.newly = true;
        //隐藏重置
        vm.show = true;
        //下拉框显示禁用
        vm.disabled = false;
        vm.iSubject = true;
        vm.iSubjects = true;
        //资料类别下拉
        vm.Datum = optionsData()['datum'];
        vm.downGrade = optionsData()['downGrade'];
        console.log(vm.downGrade)

        vm.params = {
            page: 1,
            size: 999
        };


        if (vm.period.add == 1) {
            console.log("同步预习跳转资料")
            vm.period.type = 2;
            vm.disabled = true;
            vm.show = false;
        }
        if (vm.period.add == 2) {
            console.log("侧栏跳转资料");
            vm.disabled = false;
        }
        if (vm.period.add == 3) {
            console.log("教学跳转资料")
            vm.disabled = true;
            vm.show = true;
        }
        //分页按钮
        vm.pageGo = function (x) {
            $state.go($state.current, {page: x}, {reload: true});
        };
        if (vm.period.type === 1) {
            vm.iSubject = true;
            vm.iSubjects = false;
            vm.data = {
                page: parseInt(vm.period.page),
                size: vm.period.size,
                type: vm.period.type,
                subjectId: vm.period.subjectId,
                grade: vm.period.grade,
                courseId:vm.period.courseId,
                lessonPeriodId: vm.period.lessonPeriodId,
            };
            //教学 type==1
            Course_service.get_TechPeriod(vm.params).then(function (res) {
                if (res.data.code == 0) {
                    vm.Book = res.data.data;
                    console.log('科目，课时，课程', vm.Book);
                }
            });

        }
        // courseId==bookId
        if (vm.period.type === 2) {
            vm.iSubject = false;
            vm.iSubjects = true;
            vm.data = {
                page: parseInt(vm.period.page),
                size: vm.period.size,
                type: vm.period.type,
                grade: vm.period.grade,
                bookId: vm.period.courseId,
                lessonPeriodId: vm.period.lessonPeriodId,
            };
            //同步预习 type==2
            //所属课时 教材
            Course_service.get_PreviewPeriod(vm.params).then(function (res) {
                if (res.data.code == 0) {
                    vm.Book = res.data.data;
                    vm.period.subjectId = null;
                    console.log('同步预习的课时,教材列表', vm.Book);
                }
            });
            //获取同步预习所属课程/教材下拉    教材列表
            vm.material = function () {
                Course_service.get_PreviewDatum(vm.params).then(function (res) {
                    vm.Book = res.data.data;
                    console.log('同步预习的教材，课时', vm.Book);
                });
                //获取课时下拉课时列表
            };
            // vm.material();
        }
        vm.list = function () {
            Course_service.get_Materials(vm.data)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.means = res.data.data;
                        vm.currentPage = parseInt(vm.period.page);
                        vm.total = res.data.total;
                        vm.lessonPeriodId = vm.means.lessonPeriodId;
                        vm.bookId = vm.means.bookId;
                        console.log(vm.total)
                        console.log('资料列表', vm.means, res)
                    }
                }, function (res) {
                    alert('请求失败')
                })
        };
        //查询
        vm.inquiry = function () {
            $state.reload();
        }
        //重置
        vm.clear = function () {
            vm.period.type = 1,
                vm.period.subjectId = '',
                vm.period.grade = '',
                vm.period.courseId = '',
                vm.period.bookId = '',
                vm.period.lessonPeriodId = ''
            $state.reload();
        }
        // //删除
        vm.delete = function (id) {
            isConfrim = $rootScope.modalConfrim('删除后无法显示', '是否删除操作？');
            isConfrim.then(function () {
                Course_service.get_MaterialsDelete(id)
                    .then(function (res) {
                        console.log(res)
                        if (res.data.code == 1) {
                            vm.list();
                            $state.go($state.current, {}, {reload: true});
                            $rootScope.modalConfrim('删除成功');
                            console.log('删除', res.data.message);
                        } else if (res.data.code == 3001) {
                            $rootScope.modalConfrim("请先删除合作机构下的课程");
                        }
                    }, function (res) {
                        $rootScope.modalConfrim("请求失败")
                    });
            }, function () {
                $rootScope.modalConfrim('已取消')
            })

        }
        vm.list();

    });



