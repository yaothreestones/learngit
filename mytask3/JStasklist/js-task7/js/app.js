var app = angular.module("myApp",['ui.router']);
 app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "login");

    $stateProvider
        .state("login",{
            url:"/login",
            templateUrl: "js7-1.html"
        })
        .state("js6-1", {
            url:"/js6-1",
            templateUrl: "js6-1.html"
        })
        .state("js6-1.js6-2", {
            url:"/js6-2",
            templateUrl: "js6-2.html"
        })
        .state("js6-1.js6-2.js6-3", {
            url:"/js6-3",
            templateUrl: "js6-3.html"
        });
});

app.controller('myCtrl',function ($scope,$http) {
    $scope.user = {};
    $scope.submit1 = function () {
        $http({
            method : 'POST',
            url    : '/carrots-admin-ajax/a/login',
            params : $scope.user
        }).then(function successCallback(admin) {
            console.log(admin)
        },function errorCallback(data) {
            alert(data)
        });
    };
    $scope.article = function () {
        $http({
            method : 'get',
            url    : '/carrots-admin-ajax/a/article/search'
        }).then(function successCallback(data) {
            var a = data.data.data.articleList;
            console.log(a);
            $scope.sites = a;
            $scope.day =new Date(a.createAt);
        },function errorCallback() {
            console.log()
        })
    }
});

$('.nav-content').hide();
$(".nav-list").click(function(){
    $(this).next('.nav-content').slideToggle(300);
});

app.filter('status',function () {
    return function (param) {
        if(param === 1){
            return '草稿';
        }else if(param === 2){
            return '上线'
        }else {
            return '?';
        }
    }
});
app.filter('online',function () {
    return function (param) {
        if (param === 1) {
            return '下线';
        } else if (param === 2) {
            return '上线'
        } else {
            return '?';
        }
    }

});


