angular.module('app')
    .controller('appCtrl',function ($scope,$state,$stateParams,$location,Course_service) {
        $scope.cancel = function() {
            history.back();
            angular.element('body').removeClass('overflow');
        };
        $scope.revert=function () {
            $state.go('app.page')
        };
        $scope.page=function () {
            $state.go('app.login');
        };
        $scope.skip=function () {
            $scope.data = {
                name: "学习？学个",
                profilePicture:'image/app/UploadHeadImage.png',
            };
                console.log($scope.data);
                Course_service.get_Detail($scope.data)
                    .then(function(res) {
                        console.log(res)
                        $state.go('app.page');
                    })
        }

        $scope.isShare = false;
        $scope.share = function () {
            $scope.isShare = true
        };
        $scope.cancelShare = function () {
            $scope.isShare = false
        }

    });
