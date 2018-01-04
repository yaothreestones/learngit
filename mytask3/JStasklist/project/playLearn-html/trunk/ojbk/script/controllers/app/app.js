angular.module('app')
    .controller('appCtrl',function ($scope,$state) {
        $scope.cancel = function() {
            if($state.params.there === '1'){
              $state.go('app.data',{there:2,choose:$state.params.choose,preview:$state.params.preview})
            }else if($state.params.there === '2'&&$state.params.preview === undefined){
                $state.go('app.course')
            }else if($state.params.preview === '1'){
                $state.go('app.teaching',{preview:2})
            }else if($state.params.preview === '2'){
                $state.go('app.search',{preview:3})
            }else if($state.params.preview === '3'){
                $state.go('app.page')
            }
            else {
                history.back(-1);
            }
        }
        var oHeight = $(document).height(); //浏览器当前的高度
        $(window).resize(function(){
            if($(document).height() < oHeight){
                $("#footer").css("opacity","0");
            }else{
                $("#footer").css("opacity","1");
            }
        });
    });
