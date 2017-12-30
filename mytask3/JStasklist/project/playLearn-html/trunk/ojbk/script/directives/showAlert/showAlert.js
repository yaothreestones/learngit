angular.module("app").directive("confirm",function () {
    return{
        restrict:"E",
        replace:true,
        // templateUrl:"view/service/mine/showAlert.html",
        controller:function ($scope) {
            //  alert（警告） 对话框
            $scope.showAlert = function() {
                // var alertPopup = alertPopup.alert({
                //     templateUrl: 'view/service/register.html',
                //     okText: " ",
                //     okType: 'button button-icon icon ion-ios-close-outline',
                // });
                // alertPopup.then(function(res) {
                //     console.log('Thank you for not eating my delicious ice cream cone');
                // });
            };
        }
    }
})