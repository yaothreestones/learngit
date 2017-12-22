/**
 * Created by gmisl on 17-12-14.
 */
angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
        $locationProvider.hashPrefix("!");
        var _lazyLoad = function (loaded) {
            return function ($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {serie: true});
            }
        };
        $locationProvider.hashPrefix("");
        $urlRouterProvider.when("", "/begin");
        $stateProvider
        //前台开始页面
            .state("begin", {
                url: "/begin",
                templateUrl: 'view/begin/begin.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/begin/begin.css",
                        "script/controllers/begin/begin.js",
                    ])
                }
            })
            //前台登录页面
            .state("app", {
                url: "/app",
                templateUrl: 'view/app/app.html',
                controller: 'appCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/begin/begin.css",
                        "script/controllers/app/app.js"
                    ])
                }
            })
             //微信授权
            .state("wechat", {
                url: "/wechat",
                templateUrl: 'view/app/wechat.html',
                // controller: 'wechatCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/begin/begin.css",
                        // "script/controllers/app/Wechat.js",
                    ])
                }
            })
            //关联回家学习账号
            .state("binding", {
                url: "/binding",
                templateUrl: 'view/app/binding.html',
                // controller: 'bindingCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/begin/begin.css",
                        // "script/controllers/app/bingding.js",
                    ])
                }
            })
            //注册并绑定回家学习账号
            .state("newAccount", {
                url: "/newAccount",
                templateUrl: 'view/app/newAccount.html',
                // controller: 'newAccountCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/begin/begin.css",
                        // "script/controllers/app/newAccount.js",
                    ])
                }
            })
            //前台注册页面
            .state("enroll", {
                url: "/enroll",
                templateUrl: 'view/app/enroll.html',
                controller: 'enrollCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/begin/begin.css",
                        "script/controllers/app/enroll.js",
                    ])
                }
            })
        //找回密码
            .state("retrieve", {
                url: "/retrieve",
                templateUrl: 'view/app/retrieve.html',
                // controller: 'retrieveCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/begin/begin.css",
                        // "script/controllers/app/retrieve.js",
                    ])
                }
            })


    }
]);