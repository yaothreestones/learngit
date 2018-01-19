angular.module('app').controller('missionManageCtrlInPreview', ['$scope', '$stateParams', '$rootScope', '$state', 'pathProject','steps',
    function ($scope,$stateParams,$rootScope,$state,pathProject,steps){
        var vm = $scope.vm = {};
        vm.steps = steps;
        vm.i = 0;
        vm.ajaxAds = pathProject.getFile_url();
        $scope.title={};
        //设置下拉菜单初始值
        $scope.select = vm.steps[0];
        //获取路由参数来判断操作
        vm.data = $stateParams;
        vm.period = angular.fromJson(vm.data.period)||{};
        console.log('课时',vm.period);
        vm.bookName = vm.period.bookName;
        vm.lessonPeriodName = vm.period.lessonPeriodName;
        if($stateParams.from === '1'){
            $scope.title.name = '新增任务';
        }else if($stateParams.from === '2'){
            $scope.title.name = '查看任务';
            $scope.show = true;
        }else if($stateParams.from === '3'){
            $scope.title.name = '编辑任务';
        }
        // $scope.show = false;
        $scope.lock =true;
        //初始化ng-repeat单个模板为空对象
        //初始化ng-repeat模板
        $scope.mission_steps = [1];
        //添加模板数组
        vm.index = [true];
        $scope.add_step = function () {
            vm.i += 1;
            $scope.mission_steps.push(vm.i+1);
            vm.index.push(true);
            console.log($scope.mission_steps);
            console.log(vm.index)
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

        vm.delete = function (index) {
            console.log(index);
            vm.index.splice(index,1);
            console.log(vm.index);
            $scope.mission_steps.splice(index,1);
            $scope.type.splice(index,1);
            $scope.text_content.splice(index,1);
            vm.img.splice(index,1);
            console.log($scope.mission_steps,$scope.type,$scope.text_content,vm.img);
        };

        //点击确定后forEach将几个数组的内容装配到将要发送的参数数组内
        vm.newArray = [];
        $scope.sure = function () {
            $scope.send_data.length = $scope.mission_steps.length ;
            $scope.send_data.fill({});
            angular.forEach($scope.send_data,function (data,index,array) {
                if($scope.type[index] === 2){
                    vm.img[index] = ''
                }
                array[index] = {
                    type: $scope.type[index]||1,
                    Text: $scope.text_content[index]||'',
                    url:  vm.img[index]||''
                }
            });
            console.log($scope.type,$scope.text_content);
            console.log($scope.send_data);
        }
    }]);
