angular.module('app')
    .controller('dataCtrl', function ($scope, $state, $http,Course_service,CourseMaterials,$stateParams,optionsData) {
        var vm=this;
        //add为1从课时跳 为2从侧栏跳
        vm.data=$stateParams;
        console.log(vm.data)
        vm.isShow=true;
        vm.show=true;
        vm.disabled=true;
        vm.isShows=true;
        //资料类别
        vm.datum=optionsData()['datum'];
        //年级
        vm.grade=optionsData()['grade'];
        //科目
        vm.subject=optionsData()['subject'];
        //资料类别
        vm.account=optionsData()['account'];
        //课时
        vm.period=optionsData()['period'];
        //分页
        vm.currentPage = parseInt($stateParams.page);
        vm.size=$stateParams.size;
        console.log(vm.size)
        console.log(vm.currentPage);
        //分页按钮
        vm.pageGo = function (x) {
            $state.go($state.current,{page:x},{reload:true});
            console.log(vm.size)
        };
        vm.CourseMaterials=CourseMaterials;
        if($stateParams.add == '1'){
            vm.show=false;
        } else if($stateParams.add == '2'){
            vm.isShow=false;
            vm.isShows=false;
        }
        vm.demoLists = [];
        vm.params={
            page:parseInt($stateParams.page),
            size:vm.size,
            belong:'',
            grade:'',
            type:'',
            status:'',

        };
                Course_service.get_Materials({
                    params:vm.params
                })
                    .then(function(res) {
                        if(res.data.code == 0){
                            vm.code=res.data.code;
                            console.log(vm.code)
                            vm.demoLists=res.data.data;
                            vm.page=vm.demoLists.page;
                            vm.total=res.data.data.total;
                            console.log(vm.page)
                            console.log(vm.total)
                            console.log(vm.demoLists)
                            vm.message=res.data.message;
                            vm.pageSize = Math.ceil(vm.total / vm.params.size);//页数量
                            console.log(vm.pageSize)
                        }
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
    });



