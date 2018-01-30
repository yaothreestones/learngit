angular.module('app').controller('uniteCtrl',
    function ($scope,$stateParams,$rootScope,$state,$http,Course_service){
    var vm=this;
    //分页
        vm.size=$stateParams.size;
        //分页按钮
        vm.pageGo = function (x) {
            $state.go($state.current,{page:x},{reload:true});
            console.log(vm.size)
        };
      //获取list
        vm.params = {
            page:parseInt($stateParams.page),
            size:vm.size
        };
        vm.list=function () {
            Course_service.get_Company({
                params:vm.params,
            })
                .then(function(res) {
                    if(res.data.code == 0){
                        vm.currentPage = parseInt($stateParams.page);
                        vm.code=res.data.code;
                        vm.demoLists=res.data.data;
                        vm.name=vm.demoLists.name
                        console.log(vm.name)
                        vm.total= res.data.total;
                    }
                    console.log(res)
                }, function(res) {
                    alert('请求失败')
                })
        };
        vm.list();
        //查看
        vm.see=function (id) {
            $state.go("backStage.contentManage.uniteManage",{from:2,id:id}, {reload: true});
        };
        //解冻=1 冻结=0
        //点击冻结  解冻
        vm.off =function (id,status) {
            vm.isConfrim=undefined;
            if(status == 0){
                isConfrim=$rootScope.modalConfrim('冻结后无法显示','是否冻结操作？');
            }else if(status == 1){
                isConfrim=$rootScope.modalConfrim('解冻后无法显示','是否解冻操作？');
            }else{
                return
            }
            isConfrim.then(function () {
                Course_service.get_CompanyStatus(id)
                .then(function (res) {
                    if(res.data.code==0){
                        vm.list();
                        $rootScope.modalConfrim((status? '解冻' : '冻结')+'成功');
                        $state.go($state.current,{},{reload:true});
                    }
                },function (res){
                    $rootScope.modalConfrim("请求失败")
                });
            },function () {
                $rootScope.modalConfrim('已取消')
            })
        }
        //删除
        vm.delete=function (id) {
            isConfrim=$rootScope.modalConfrim('删除后无法显示','是否删除操作？');
            isConfrim.then(function () {
                Course_service.get_CompanyDelete(id)
                    .then(function (res) {
                    if(res.data.code==0){
                        vm.list();
                        $state.go($state.current,{},{reload:true});
                        $rootScope.modalConfrim('删除成功');
                        console.log(res.data.message);
                    }else if(res.data.code==3001){
                            $rootScope.modalConfrim("请先删除合作机构下的课程");
                        }
                },function (res) {
                    $rootScope.modalConfrim("请求失败")
                });
            },function () {
                $rootScope.modalConfrim('已取消')
            })

        }

    });
