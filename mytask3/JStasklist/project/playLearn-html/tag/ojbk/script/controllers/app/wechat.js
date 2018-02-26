angular.module('app')
    .controller('wechatCtrl',function ($scope,$state,$stateParams,Course_service,$timeout) {
        //读取code
        $scope.codes=sessionStorage.getItem("codes");
        console.log($scope.codes);
        //检测此微信是否绑定过手机号
        $scope.name='您的微信暂时未关联回家学习';
        $scope.data=$stateParams;
        console.log($scope.data);
    });
