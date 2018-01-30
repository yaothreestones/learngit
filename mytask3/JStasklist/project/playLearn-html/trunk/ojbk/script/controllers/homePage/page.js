angular.module('app')
    .controller('pageCtrl',
        function ($scope,$timeout,$state,$stateParams,Course_service) {
        var vm=this;
        vm.groom=true;
        vm.grooms=true;
        vm.grade=$stateParams.grade;
            vm.img = 'image/app/isCollection.png';
            vm.collecting = '收藏';
            vm.show = false;
            //课程隐藏显示
            vm.ensconce=true;
            vm.conceal=false;
            //添加课程隐藏显示
            //学习星
            //     Course_service.get_StudyInformation({
            //     })
            //         .then(function(res) {
            //             vm.code=res.data.code;
            //             vm.study_star=res.data.study_star;
            //             vm.rank=res.data.rank;
            //             console.log(vm.code)
            //             vm.message=res.data.message;
            //             console.log(res)
            //         }, function(res) {
            //             alert('请求失败')
            //         });
            //我的课程
            Course_service.get_RecordList($scope.params)
                .then(function(res) {
                    vm.list=res.data.data[0];
                    // console.log(vm.list)
                    // console.log(vm.list.courseRecommend);
                    // //判断有没有课程
                    // if(vm.list==undefined){
                    //     vm.ensconce=false;
                    //     vm.conceal=true;
                    // }else{
                    //     vm.ensconce=true;
                    //     vm.conceal=false;
                    // }
                    // //判断热
                    // if(vm.list.courseRecommend===0){
                    //     vm.groom=false;
                    // }
                    // //判断是否收藏
                    // if(vm.list.userKeepCourse===0){
                    //     vm.grooms=false;
                    // }
                       }, function(res) {
                                alert('请求失败')
                       });
            //同步预习模块
            Course_service.get_BookList({
            })
                .then(function(res) {
                    vm.code=res.data.code;
                    vm.information=res.data.data[0];
                    console.log('同步预习',vm.information);
                    vm.information.bookId=null;
                    if(vm.information.bookId==null){
                        vm.info=function () {
                            $state.go("app.search",{grade:vm.information.grade},{reload:true});
                        }
                    }else if(vm.information.bookId){
                        vm.info=function () {
                            $state.go("app.teaching",{bookId:vm.information.bookId,grade:vm.information.grade},{reload:true});
                        }
                    }

                }, function(res) {
                    alert('请求失败')
                });

                //热门管理（8个）
            // Course_service.get_Recommend({
            // })
            //     .then(function(res) {
            //         vm.code=res.data.code;
            //         vm.data=res.data.data;
            //         console.log(vm.data)
            //         console.log(vm.code)
            //     }, function(res) {
            //         alert('请求失败')
            //     });


})
