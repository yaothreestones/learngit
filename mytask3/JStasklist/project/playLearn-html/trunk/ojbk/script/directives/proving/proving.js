angular.module('app')
    .directive('proving', function () {
        return {
            restrict: 'AE',
            templateUrl: "script/directives/proving/proving.html",
            controller: function ($scope, $interval) {
                $scope.canClick = false;
                $scope.startClick = false;
                $scope.speech = "语音验证";
                $scope.description = "短信验证";
                var second = 60;
                var timerHandler;
                function recovery() {
                    $interval.cancel(timerHandler);
                    second = 60;
                    $scope.canClick = false;
                    $scope.startClick = false;
                    $scope.codeColor = "color-code";
                }
                $scope.getTestCode=function (){
                    alert("短信")
                    timerHandler = $interval(function () {
                        $scope.canClick = true;
                        $scope.description = "短信验证";
                        if (second <= 0) {
                            recovery();
                            $scope.description = "重新获取";
                            $scope.speech = "语音验证"
                        } else {
                            second--;
                            $scope.codeColor = "code-color";
                            $scope.description = "重获" + second + "s";
                            $scope.speech = "语音验证";
                            $scope.startClick = true;
                        }
                    }, 1000);
                };

                $scope.getTestStart=function () {
                    alert("语音")
                    timerHandler = $interval(function () {
                        $scope.startClick = true;
                        $scope.speech = "语音验证";
                        if (second <= 0) {
                            recovery();
                            $scope.speech = "重新获取";
                            $scope.description = "短信验证";
                        } else {
                            second--;
                            $scope.codeColor = "code-color";
                            $scope.speech = "重获" + second + "s";
                            $scope.description = "短信验证";
                            $scope.canClick = true;
                        }
                    }, 1000);
                };


            }
        }
    });
