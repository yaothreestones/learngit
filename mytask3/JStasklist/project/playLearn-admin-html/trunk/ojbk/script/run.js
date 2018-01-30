(function (app) {
    app.run(function ($rootScope, $uibModal) {
        var _lazyLoad = function (loaded) {
            return function ($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {serie: true});
            };
        };
        $rootScope.modalAlert = function (content) {
            var instance = $uibModal.open({
                keyboard: true,
                animation: true,
                backdrop: 'static',
                templateUrl: 'script/directives/alertModal/alert.html',
                controller: 'alertCtrl',
                size: 'md',
                resolve: {
                    params: {
                        content: content,
                    },
                    loadFile: _lazyLoad(['script/directives/alertModal/alertCtrl.js'])
                }
            })
            instance.result.then(function (resolved) {
                //$close()
            }, function (rejected) {
                //$dismiss()
            })
        };
        $rootScope.modalAlert2 = function (content) {//............
            var instantiate = $uibModal.open({
                keyboard: true,
                animation: true,
                backdrop: 'static',
                templateUrl: 'script/directives/alertModal/alert.html',
                controller: 'alertCtrl',
                size: 'md',
                resolve: {
                    params: {
                        content: content,
                    },
                    loadFile: _lazyLoad(['script/directives/alertModal/alertCtrl.js'])
                }
            });
            return instantiate.result;
        };
        $rootScope.modalConfrim = function () {
            var content = [].slice.call(arguments);//传入的参数
            var instance = $uibModal.open({
                keyboard: true,
                animation: true,
                backdrop: 'static',
                templateUrl: 'script/directives/confrimModal/confrim.html',
                controller: 'confrimCtrl',
                size: 'md',
                resolve: {
                    params: {
                        content: content,
                    },
                    loadFile: _lazyLoad(['script/directives/confrimModal/confrimCtrl.js'])
                }
            });
            //这是promise
            return instance.result;
        };
    })
})(angular.module('app'));
