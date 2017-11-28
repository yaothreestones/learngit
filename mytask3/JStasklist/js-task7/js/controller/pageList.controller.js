//获取article页面
app.controller('formList',function ($scope,$http,$state,$stateParams,$filter) {
    //发送请求参数
    $http({
        method: 'get',
        url: '/carrots-admin-ajax/a/article/search',
        params: {
            size: $stateParams.size,
            page: $stateParams.page,
            type: $stateParams.type,
            status: $stateParams.status,
            startAt: $stateParams.startAt,
            endAt: $stateParams.endAt
        }
    }).then(function successCallback(data) {
        var a = data.data.data;
        $scope.sites = a.articleList;
        console.log($scope.sites);
        $scope.total = a.total;
        $scope.selectSize = a.size;
        $scope.page = a.page;
        //判定最后一页
        if (($scope.total % $scope.selectSize) === 0) {
            $scope.lastPage = parseInt($scope.total / $scope.selectSize)
        } else {
            $scope.lastPage = parseInt($scope.total / $scope.selectSize) + 1
        }
        //把页码加入数组
        var pageList = [];
        for (var i = 1; i <= $scope.lastPage; i++) {
            pageList.push(i);

        }
        $scope.pageList = pageList;

        //首页
        $scope.firstPage = function () {
            $state.go("houtai.js6-2", {page: 1})
        };
        //末页
        $scope.finalPage = function () {
            $state.go("houtai.js6-2", {page: $scope.lastPage});

        };
        //跳转
        $scope.goPageList = function (x) {
            $state.go("houtai.js6-2", {page: x})
        };
        //往前
        $scope.turnLeft = function () {
            if ($scope.page > 1) {
                $scope.page = $scope.page - 1;
                $state.go("houtai.js6-2", {page: $scope.page});
            } else {
                $state.go("houtai.js6-2", {page: 1})
            }
        };

        //往后
        $scope.turnRight = function () {
            if ($scope.page < $scope.lastPage) {
                $scope.page = Number($scope.page) + 1;
                $state.go("houtai.js6-2", {page: $scope.page});
            } else {
                $state.go("houtai.js6-2", {page: $scope.lastPage})
            }
        };
        // 每页显示多少
        $scope.go = function () {
            if ($scope.listNumber <= $scope.total) {
                $state.go("houtai.js6-2", {page: 1, size: $scope.listNumber})
            } else if ($scope.kun <= $scope.lastPage) {
                $state.go("houtai.js6-2", {page: $scope.kun})
            } else {
                $state.go("houtai.js6-2", {page: $scope.lastPage})
            }
        };

        //搜索日历表
        $scope.format = "new Date()";
        $scope.altInputFormats = ['yyyy/M!/d!'];

        $scope.popup1 = {
            opened: false
        };
        $scope.popup2 = {
            opened: false
        };
        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };
        //清空搜索条件
        $scope.clear = function () {
            $state.go("houtai.js6-2", {page: 1, size: null, type: null, status: null, startAt: null, endAt: null},{reload:true})
        };
        //按类型搜索
        $scope.lists = [
            {site : '全部',id : null},
            {site : '首页banner',id : 0},
            {site : '找职位banner',id : 1},
            {site : '找精英',id : 2},
            {site : '行业大图',id : 3}
        ];
        //默认选项
        $scope.myVar=$scope.lists[0];
        //按状态搜索
        $scope.lists2 = [
            {site : '全部',id :null},
            {site : '草稿',id : 1},
            {site : '上线',id : 2}

        ];
        //默认选项
        $scope.statue=$scope.lists2[0];
        //初始化日历
        $scope.dat1 = null;
        $scope.dat2 = null;
        $scope.search = function () {
            if($scope.myVar.id !==null){
                $scope.type = $scope.myVar.id
            }
            if($scope.statue.id !==null){
                $scope.status = $scope.statue.id
            }
            //日历转化为时间戳
            if($scope.dat1 !== null){
                $scope.startAt = new Date($scope.dat1).setHours(0,0,1);
            }
            //设定选中当天的23时59分59秒
            if($scope.dat2 !== null){
                $scope.endAt = new Date($scope.dat2).setHours(23,59,59);
            }
            $state.go("houtai.js6-2", {startAt: $scope.startAt, endAt:$scope.endAt, type: $scope.type, status:$scope.status});
        };
        if($stateParams.type){
        $scope.myVar = $scope.lists[Number($stateParams.type)+1];
        }
        if($stateParams.status){
        $scope.statue = $scope.lists2[Number($stateParams.status)];
        }
        if($stateParams.startAt){
        $scope.dat1 = Number($stateParams.startAt);
        console.log($stateParams.startAt)
        }
        if($stateParams.endAt){
        $scope.dat2 = new Date(parseInt($stateParams.endAt));
        console.log($scope.dat2)
        }
    });
    //编辑
    $scope.edit = function (x) {
        $http({
            method:'get',
            url:'/carrots-admin-ajax/a/article/'+x.id
        }).then(function successCallback(data) {
            $scope.o = data.data.data.article;
            var m = JSON.stringify($scope.o);
            console.log(m);
            $state.go('houtai.js6-2.js6-3',{id:x.id,json:m});
        })
    };
    //删除
    $scope.delete = function (x) {

        $state.go('houtai.js6-2',{},{reload:true});
        $http({
            method:'delete',
            url:'/carrots-admin-ajax/a/u/article/'+x.id
        }).then(function successCallback(data) {
            console.log(data);
            if(data.data.code===0){
                alert('删除成功')
            }
        })
    };
    //上下线
    $scope.operation = function (x) {
        $state.go('houtai.js6-2',{},{reload:true});
        if(x.status === 1){
            var s = 2
        }else {
            s = 1
        }
        $http({
            method:'put',
            url:'/carrots-admin-ajax/a/u/article/status',
            params:{
                id:x.id,
                status:s
            }
        }).then(function successCallback(data) {
            console.log(data);
            if(data.data.code===0){
                alert('操作成功')
            }
        })
    }

});





