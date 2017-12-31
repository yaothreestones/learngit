angular.module('app')
    .controller('appCtrl',function ($scope,$state) {

        $scope.cancel = function() {
            if($state.params.there === '1'){
              $state.go('app.data',{there:2,choose:$state.params.choose})

            }else if($state.params.there === '2'){
                $state.go('app.course')
            }else {
            history.back(-1);
            }
        }
    });
