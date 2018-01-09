(angular.module('app'))
app.directive('modal', function () {
    return {
        restrict: 'ACE',
        templateUrl:'script/directives/modalData/modal.html',
        controller: function ($scope,$timeout,$state) {
            //手机和密码
            $scope.phonePattern=/(^$)|^(((\+86)|(86))?1[34578]\d{9})$/;
            $scope.pwdPattern=/\w{6,16}/;
            //个人资料的昵称和邮件
            $scope.namePattern=/^[\w\u4e00-\u9fa5]{1,10}$/;
            $scope.emailPattern=/^[1-9a-zA-Z_]\w*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/;
            $scope.provingPattern=/^\d{6}$/;
            $scope.modal=function () {
                    $scope.text=true;
                    $timeout(function(){
                        $scope.text = false;
                    },2500)
            }
        }
    }
});
