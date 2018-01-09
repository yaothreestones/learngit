angular.module('VerificationDirective',[])
    .directive('proving',function () {
            return {
                templateUrl: "script/directives/proving/proving.html",
                controller: function ($scope,$interval,Course_service) {
                    //短信验证
                    var data = {
                        phone: $scope.phone,
                    }
                    $scope.send=function () {
                        getTestCode();
                        Course_service.get_Send({
                            data:data
                        })
                            .then(function(res) {
                                $scope.code=res.data.code;
                                console.log($scope.code)
                                $scope.message=res.data.message;
                                console.log(res)
                                alert(1)
                            }, function(res) {
                                alert('请求失败')
                            })
                    };
                    //语音验证
                    $scope.call=function () {
                        getTestStart();
                        Course_service.get_Call({
                            data:data
                        })
                            .then(function(res) {
                                $scope.code=res.data.code;
                                console.log($scope.code)
                                $scope.message=res.data.message;
                                console.log(res)
                                alert(1)
                            }, function(res) {
                                alert('请求失败')
                            })
                    };
                    $scope.canClick = false;
                    $scope.startClick = false;
                     $scope.speech = "语音验证";
                    $scope.description = "短信验证";
                    var second = 2;
                    var timerHandler;

                    function recovery() {
                        $interval.cancel(timerHandler);
                        second = 2;
                        $scope.canClick = false;
                        $scope.startClick = false;
                        $scope.codeColor = "color-code";
                    }
                       function getTestCode() {
                        alert("短信")
                        timerHandler = $interval(function () {
                            $scope.canClick = true;
                            $scope.description = "短信验证";
                            if (second <= 0) {
                                recovery();
                                $scope.description = "重新获取";
                                $scope.speech="语音验证"
                            } else {
                                second--;
                                $scope.codeColor = "code-color";
                                $scope.description = "重获" + second + "s";
                                $scope.speech = "语音验证";
                                $scope.startClick = true;
                            }
                        }, 1000);
                    };
                    function getTestStart() {
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
