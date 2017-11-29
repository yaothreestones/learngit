//最后一个页面
app.controller('AppController', function($scope, FileUploader,$http,$state,$stateParams) {
    //上传图片
    $scope.newArticle = '新增Article';
    FileUploader.FileSelect.prototype.isEmptyAfterSelection = function () {
        return true;
    };
        var uploader = $scope.uploader = new FileUploader({
            url: '/carrots-admin-ajax/a/u/img/task'
        });
        uploader.filters.push({
            name: 'syncFilter',
            fn: function(item, options) {
                console.log('syncFilter');
                return this.queue.length < 10;
            }
        });
        uploader.filters.push({
            name: 'asyncFilter',
            fn: function(item, options, deferred) {
                console.log('asyncFilter');
                setTimeout(deferred.resolve, 1e3);
            }
        });

        uploader.onCompleteItem = function(fileItem, response) {
            $scope.m = response.data.url;
        };
        uploader.onCompleteAll = function() {
        };

        $scope.img_del = function () {
            $scope.m = null
        };
    //2个下拉菜单
    $scope.sites = [
        {site : '请选择',id : 4 },
        {site : '首页banner', id : 0},
        {site : '找职位banner',id : 1},
        {site : '找精英',id : 2},
        {site : '行业大图',id : 3}
    ];
    //设定默认值
    $scope.select = $scope.sites[0];

    $scope.sites2 = [
        {site : '请选择',id : 7 },
        {site : '移动互联网', id : 0},
        {site : '电子商务',id : 1},
        {site : '企业服务',id : 2},
        {site : 'o2o',id : 3},
        {site : '教育',id : 4},
        {site : '金融',id : 5},
        {site : '游戏',id : 6}
    ];
    $scope.selected = $scope.sites2[0];

    //富文本编辑器wangEditor
    $scope.editor = new wangEditor('div1');
    $scope.editor.create();


    $scope.submit = function (x) {
        //获取编辑器内容,官方给定的API
        $scope.http = $scope.editor.$txt.html();
        //递交新增的article
        $http({
            method:'post',
            url:'/carrots-admin-ajax/a/u/article',
            params:{
                title:$scope.title,
                type:$scope.select.id,
                status:x,
                img:$scope.m,
                content:$scope.http,
                url:$scope.link,
                industry:$scope.selected.id
            }
        }).then(function successCallback(data) {
            console.log(data);
            if(data.data.code===0){
                $state.go('houtai.js6-2')
            }else {
                alert('操作失败!')
            }
        })
    };
    //正则表达式判定链接内容是否有效
    $scope.linkList = function () {
        $scope.reg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
        $scope.test = $scope.reg.test($scope.link);
        if($scope.test ===false){
            $scope.error = '请以http://样式开头，否则不通过！'
        }else {
            $scope.error = ''
        }
    };

//如果接受到参数则进行编辑流程
if($stateParams.id) {
    //字符串转化成对象
    $scope.newArticle = '编辑Article';
    var n = JSON.parse($stateParams.json);
    console.log(n);
    $scope.title = n.title;
    $scope.select = $scope.sites[n.type + 1];
    $scope.editor.$txt.append(n.content);
    $scope.m = n.img;
    $scope.link = n.url;
    $scope.reg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
    $scope.test = $scope.reg.test($scope.link);
    if($scope.test ===false){
        $scope.error = '请以http://样式开头，否则不通过！'
    }else {
        $scope.error = ''
    }
    $scope.selected = $scope.sites2[n.industry + 1];
    $scope.submit = function (x) {
        $scope.http = $scope.editor.$txt.html();
        if($scope.select.id !==3){
            $scope.selected = {};
        }
        //递交编辑后的内容
        $http({
            method:'put',
            url:'/carrots-admin-ajax/a/u/article/'+$stateParams.id,
            params:{
                title:$scope.title,
                type:$scope.select.id,
                status:x,
                img:$scope.m,
                content:$scope.http,
                url:$scope.link,
                industry:$scope.selected.id,
                createAt:n.createAt
            }
        }).then(function successCallback(data) {
            console.log(data);
            if(data.data.code===0){
                $state.go('houtai.js6-2')
            }else {
                alert('操作失败!')
            }
        })
    }
}
//这边用来获取图片的64位字符串，暂时不用
// $scope.reader = new FileReader();   //创建一个FileReader接口
// $scope.img_upload = function(files) {       //单次提交图片的函数
//     $scope.guid = (new Date()).valueOf();   //通过时间戳创建一个随机数，作为键名使用
//     $scope.reader.readAsDataURL(files[0]);  //FileReader的方法，把图片转成base64
//     $scope.reader.onload =function (e) {
//         $scope.$apply(function () {
//             $scope.thumb[$scope.guid] = {
//                 imgSrc: e.target.result  //接收base64
//             };
//         });
//     };
// };
// $scope.form = {     //用于绑定提交内容，图片或其他数据
//     image:{}
// };
// $scope.thumb = {};
// $scope.img_del = function(key) {    //删除，删除的时候thumb和form里面的图片数据都要删除，避免提交不必要的
//     var guidArr = [];
//     for(var p in $scope.thumb){
//         guidArr.push(p);
//     }
//     delete $scope.thumb[guidArr[key]];
//     delete $scope.form.image[guidArr[key]];
// };
});


