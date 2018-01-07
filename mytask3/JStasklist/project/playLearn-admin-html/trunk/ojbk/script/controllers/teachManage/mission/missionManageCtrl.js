angular.module('app').controller('missionManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
    function ($scope,$stateParams,$rootScope,$http,$state){
        $scope.data = $stateParams;
        $scope.title={};
        $scope.show = false;
        $scope.lock =true;
        $scope.ajaxAds = '/carrots-admin-ajax/a/u/img/task';
        $scope.editorContent = '';
        $scope.steps = [
            {
                name:'图片',
                id:1
            },
            {
                name:'文本',
                id:2
            },
            {
                name:'文字&音频',
                id:3
            },
            {
                name:'视频',
                id:4
            }
        ];
        $scope.img_upload = true;
        $scope.rich_text = false;
        $scope.select = $scope.steps[0];
        $scope.selected = function () {
            if($scope.select.id ===1){
                $scope.img_upload = true;
                $scope.rich_text = false;
            }else if ($scope.select.id ===2){
                $scope.img_upload = false;
                $scope.rich_text = true;
            }else if($scope.select.id ===3){
                $scope.img_upload = true;
                $scope.rich_text = true;
            }
        };
        if($scope.data.from === '1'){
            $scope.title.name = '新增任务';
        }else if($scope.data.from === '2'){
            $scope.title.name = '查看任务';
            $scope.show = true;
        }else if($scope.data.from === '3'){
            $scope.title.name = '编辑任务';
        }
    }])
