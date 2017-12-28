(angular.module('app'))
    app.directive('mobileSelect1', function () {
        return {
            restrict: 'A',
            link: function () {
                var weekdayArr=['一年级','二年级','三年级','四年级','五年级','六年级'];
                var mobileSelect1 = new MobileSelect({
                    trigger: '#trigger1',
                    title: '设置年级',
                    wheels: [
                        {data: weekdayArr}
                    ],
                });
            }
        }
    });
