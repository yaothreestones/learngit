angular.module('app')
.directive('list',function () {
    return {
        restrict:'EACM',
        replace:true,
        template:'<div class="panel-group" ng-transclude></div>',
        controllerAS:'a',
        transclude:true,
        controller:function () {
            this.group = [];
            this.closeOtherCollapse = function (nowScope) {
                angular.forEach(this.group,function (scope) {
                    if(scope !== nowScope){
                        scope.isOpen = false;
                    }
                })
            }
        }
    }
})
    .directive('sideNavigation',function () {
        return {
            restrict:'EACM',
            replace:true,
            templateUrl:'tpls/panel.html',
            require:'^list',
            transclude:true,
            scope:{
                heading:'@'
            },
            link:function (scope,element,attrs,a) {
                scope.isOpen = false;
                scope.changeOpen = function () {
                    scope.isOpen = !scope.isOpen;
                    a.closeOtherCollapse(scope)
                };
                a.group.push(scope)
            }


        }
    })