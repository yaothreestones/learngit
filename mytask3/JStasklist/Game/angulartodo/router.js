angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
        var _lazyLoad = function (loaded) {
            return function ($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {
                    serie: true
                });
            }
        }
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise("/home");
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'html/home.html',
                controller: 'homeController as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        'js/homeController.js',
                        'css/home.css'
                    ])
                }
            })
    }
])