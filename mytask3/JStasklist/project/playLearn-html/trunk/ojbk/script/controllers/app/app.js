angular.module('app')
    .controller('appCtrl',function ($scope,$state,$stateParams) {

        $scope.cancel = function() {
            if($state.params.there === '1'){
              $state.go('app.data',{'there':2})
            }else if($state.params.there === '2'){
                $state.go('app.course')
            }else {
            history.back(-1);
            }
        }
    });
