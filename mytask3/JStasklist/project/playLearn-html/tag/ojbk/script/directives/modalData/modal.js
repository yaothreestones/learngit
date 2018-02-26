(angular.module('app'))
app.directive('modal', function () {
    return {
        restrict: 'AE',
        templateUrl: 'script/directives/modalData/modal.html',
        controller: function ($scope, $timeout, $state) {
            //手机和密码
            $scope.phonePattern = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
            $scope.pwdPattern = /\w{6,16}/;
            //个人资料的昵称和邮件
            $scope.namePattern = /^[\w\u4e00-\u9fa5]{1,10}$/;
            $scope.emailPattern = /^[1-9a-zA-Z_]\w*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/;
            // $scope.provingPattern = /^\d{6}$/;
            $scope.modal = function (callback) {
                $scope.text = true;
                $timeout(function () {
                    $scope.text = false;
                    if (typeof callback === "function"){
                        callback();
                    }
                }, 1500)
            }
        }
    }
});
