angular.module('app')
    .controller('seeCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
        function ($scope, $stateParams, $rootScope, $state, $http) {
            $scope.grade = [
                "全部",
                "一年級",
                "二年級",
                "三年級",
                "四年級",
                "五年級",
                "六年級",
            ]
            var menuItems = $('.main-navigation li');
            menuItems.on("click", function(event) {
                menuItems.removeClass("active");
                $(this).addClass("active");
                $(".main-content").css({
                    "background": $(this).data("bg-color")
                });
                event.preventDefault();
            });
        }
    ])