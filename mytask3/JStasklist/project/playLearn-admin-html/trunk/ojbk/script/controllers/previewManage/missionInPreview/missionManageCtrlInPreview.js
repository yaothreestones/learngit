angular.module('app').controller('missionManageCtrlInPreview', ['$scope', '$stateParams', '$rootScope', '$state', '$http','steps',
    function ($scope,$stateParams,$rootScope,$http,$state,steps){
        var vm = $scope.vm = {};
        vm.steps = steps;
        vm.i = 0;
        $scope.i = 0;
        $scope.title={};
        //设置下拉菜单初始值
        $scope.select = vm.steps[0];
        //获取路由参数来判断操作
        $scope.data = $stateParams;
        if($stateParams.from === '1'){
            $scope.title.name = '新增任务';
        }else if($stateParams.from === '2'){
            $scope.title.name = '查看任务';
            $scope.show = true;
        }else if($stateParams.from === '3'){
            $scope.title.name = '编辑任务';
        }
        $scope.show = false;
        $scope.lock =true;
        //上传图片接口，暂定为任务的接口
        $scope.ajaxAds = '/carrots-admin-ajax/a/u/img/task';
        //初始化ng-repeat单个模板为空对象
        $scope.mission_step = [];
        $scope.mission_step[vm.i] = {};
        //初始化ng-repeat模板
        $scope.mission_steps = [$scope.mission_step[vm.i]];
        //添加模板数组
        $scope.add_step = function () {
            vm.i += 1;
            $scope.mission_step[vm.i] = {};
            $scope.mission_steps.push($scope.mission_step[vm.i]);
        };
        //初始化空数组来存储type
        $scope.type = [];
        $scope.count = [];
        $scope.urls = [];
        var a = null;
        //获取选择类型
        $scope.selected = function (x,y) {
            if(a !== y){
                $scope.type[y] = x.id;
                $scope.count[y] = y;
                a = y
            }else {
                $scope.type[y] = x.id
            }
        };
        //初始化空数组来存储富文本框内容
        $scope.text_content = [];
        $scope.count2 = [];
        //获得文本框的内容
        $scope.text = function (x,y) {
            if(a !== y){
                $scope.text_content[y] = x;
                $scope.count2[y] = y;
                a = y;
            }else {
                $scope.text_content[y] = x
            }
        };
        $scope.send_data = [];
        $scope.urls = [];
        //初始化数组存储url
        vm.img = [];
        $scope.img_url = function (x) {
            console.log(x);
            ~function () {
                var cancle = $scope.$watch('vm.img[x].exportSrc',function (newVal) {
                    if(newVal){
                        vm.img[x].exportSrc = newVal;
                        cancle()
                    }
                });
            }()
        };
        console.log($scope.send_data);
        //点击确定后forEach将几个数组的内容装配到将要发送的参数数组内
        $scope.sure = function () {
            $scope.send_data.length = $scope.mission_steps.length;
            $scope.send_data.fill({});
            angular.forEach($scope.send_data,function (data,index,array) {
                if($scope.type[index] === 2){
                    vm.img[index]= {
                        exportSrc : ''
                    }
                }
                array[index] = {
                    type: $scope.type[index]||1,
                    Text: $scope.text_content[index]||'',
                    url:  vm.img[index].exportSrc||''
                }
            });
            console.log($scope.type,$scope.text_content);
            console.log($scope.send_data);
        }
    }]);
