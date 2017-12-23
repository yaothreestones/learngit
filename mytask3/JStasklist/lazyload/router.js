angular.module('myApp')
    .config(function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
        var _lazyLoad = function (loaded) {
            return function ($ocLazyLoad) {
                return $ocLazyLoad.load(loaded,{serie:true});
            }
        };
        $ocLazyLoadProvider.config({
            debug:false,
            events:true
        });



        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login',{
                url:'/login',
                templateUrl:'html/login.html',
                controller:'login',
                resolve:{
                    loadMyFile:_lazyLoad([
                        'js/formdata.js',
                        'js/controller/login.js'

                    ])
                }
            })
            .state('backStage',{
                url:'/backstage',
                templateUrl:'html/backStage.html',
                controller:'backStage',
                resolve:{
                    loadMyFile:_lazyLoad([
                        'js/controller/backStage.js',
                        'js/text/1.js',
                        'js/text/2.js',
                        'js/text/3.js',
                        'js/text/4.js'
                    ])
                }
            })
    });