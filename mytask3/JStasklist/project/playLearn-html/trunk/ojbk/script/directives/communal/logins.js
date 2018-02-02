(angular.module('app'))
app.directive('weChat', function () {
    return {
        restrict: 'A',
        link: function ($scope) {
            var oHeight = $(document).height(); //浏览器当前的高度
            $(window).resize(function(){
                if($(document).height() < oHeight){
                    $("#footer").css("opacity","0");
                }else{
                    $("#footer").css("opacity","1");
                }
            });
        }
    }
});
