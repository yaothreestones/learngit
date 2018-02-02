(angular.module('app'))
    app.directive('mobileSelect1', function () {
        return {
            restrict: 'A',
            link: function ($scope) {
                var weekdayArr;
                var weekdayArr=['请选择','一年级','二年级','三年级','四年级','五年级','六年级'];
                var mobileSelect1 = new MobileSelect({
                    trigger: '#trigger',
                    title: '设置年级',
                    wheels: [
                        {data: weekdayArr}
                    ],
                        callback:function(indexArr, data){
                        $scope.data.grade=indexArr*1;
                            console.log($scope.data.grade);
                        }
                });


            }
        }
    });
