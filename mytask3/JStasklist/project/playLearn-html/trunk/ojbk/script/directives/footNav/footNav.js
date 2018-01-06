(function (app) {
    app
        .directive('listenerRepeatFinish', function ($rootScope) {
            //@example 需要link一个标识符
            // <div class="options" choose-scope="aaa">
            // <div listener-repeat-finish="aaa" ng-repeat="i in [1,2,3,4,5,6]">{{$index}}年级</div>
            // </div>
            return {
                restrict: 'A',
                link: function (scope, element, property) {
                    if (scope.$last) {
                        $rootScope.$emit(property.listenerRepeatFinish);
                    }
                }
            }
        }
        )
        .directive('footNav', ['$rootScope', '$state', 'footNavData', function ($rootScope, $state, footNavData) {
        return {
            restrict: 'E',
            templateUrl: 'script/directives/footNav/footNav.html',
            scope: {},//独立
            link: function (scope, element, property) {
                scope.data = footNavData;
                $rootScope.$on('appFootNav', function () {
                    var $perItem = element.find('.tab');
                    $perItem.click(function () {
                        setView($(this).index());
                    });

                    function setView(i) {
                        try {
                            if (!i && i !== 0) return;
                            //还原
                            angular.forEach($perItem, function (value, key) {
                                $(value).scope().item.active['icon'] = scope.data[key].icon;
                            });
                            $perItem.removeClass('active');
                            $perItem.eq(i).scope().item.active['icon'] = scope.data[i].activeIcon;
                            $perItem.eq(i).addClass('active');
                        } catch (e) {
                        }
                    }

                    //针对项目...
                    $rootScope.$on('$stateChangeSuccess', function () {
                        setView(currentViewIndex());
                    })

                    //初始
                    function currentViewIndex() {
                        var key = null;
                        angular.forEach(scope.data, function (value, i) {
                            if (value.url === $state.current.name) {
                                key = i;
                            }
                        });
                        return key;
                    }

                    setView(currentViewIndex());
                })
            }
        }
    }])

})(angular.module('app'));