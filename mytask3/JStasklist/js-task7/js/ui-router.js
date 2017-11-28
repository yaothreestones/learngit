app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "login");

    $stateProvider
        .state("login",{
            url:"/login",
            templateUrl: "js7-1.html"
        })
        .state("houtai", {
            url:"/houtai",
            templateUrl: "houtai.html"
        })
        .state("houtai.js6-2", {
            params:{
                page: null,size: null,type: null,status: null,startAt: null,endAt: null
            },
            url:"/js6-2?size&page&type&status&startAt&endAt",
            templateUrl: "js6-2.html"
        })
        .state("houtai.js6-2.js6-3", {
            params:{
                id:null,json:null
            },
            url:"/js6-3?id",
            templateUrl: "js6-3.html"
        })
});