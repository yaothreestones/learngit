angular.module("app")
app.controller("seekCtrl", function ($scope,$interval,$timeout) {
    $scope.show01 = true;
    var index = 1;
    var timer;
    $scope.next = function () {
        switch(index){
            case 1:
                $scope.show01 = false;
                $scope.fade01 = 'fadeLeft';
                $scope.show02 = true;
                $scope.fade02 = 'fadeRight';
                index = 2;
                break;
            case 2:
                $scope.show02 = false;
                $scope.fade02 = 'fadeLeft';
                $scope.show03 = true;
                $scope.fade03 = 'fadeRight';
                index = 3;
                break;
            case 3:
                $scope.show03 = false;
                $scope.fade03 = 'fadeLeft';
                $scope.show04 = true;
                $scope.fade04 = 'fadeRight';
                index = 4;
                break;
            case 4:
                $scope.show04 = false;
                $scope.fade04 = 'fadeLeft';
                $scope.show05 = true;
                $scope.fade05 = 'fadeRight';
                index = 5;
                break;
            case 5:
                $scope.show05 = false;
                $scope.fade05 = 'fadeLeft';
                $scope.show01 = true;
                $scope.fade01 = 'fadeRight';
                index = 1;
                break;
        };
        timer = $timeout(function () {
            $scope.next();
        }, 3000);
    };
    $scope.prev = function () {
        switch(index){
            case 1:
                $scope.show01 = false;
                $scope.fade01 = 'fadeRight';
                $scope.show05 = true;
                $scope.fade05 = 'fadeLeft';
                index = 5;
                break;
            case 2:
                $scope.show02 = false;
                $scope.fade02 = 'fadeRight';
                $scope.show01 = true;
                $scope.fade01 = 'fadeLeft';
                index = 1;
                break;
            case 3:
                $scope.show03 = false;
                $scope.fade03 = 'fadeRight';
                $scope.show02 = true;
                $scope.fade02 = 'fadeLeft';
                index = 2;
                break;
            case 4:
                $scope.show04 = false;
                $scope.fade04 = 'fadeRight';
                $scope.show03 = true;
                $scope.fade03 = 'fadeLeft';
                index = 3;
                break;
            case 5:
                $scope.show05 = false;
                $scope.fade05 = 'fadeRight';
                $scope.show04 = true;
                $scope.fade04 = 'fadeLeft';
                index = 4;
                break;
        };
        timer = $timeout(function () {
            $scope.next();
        }, 3000);
    };
    $scope.nextImg = function () {
        if (angular.isDefined(timer)) {
            $timeout.cancel(timer);
            timer = undefined;
        }
        $scope.next();
    };
    $scope.prevImg = function () {
        if (angular.isDefined(timer)) {
            $timeout.cancel(timer);
            timer = undefined;
        }
        $scope.prev();
    };
});
