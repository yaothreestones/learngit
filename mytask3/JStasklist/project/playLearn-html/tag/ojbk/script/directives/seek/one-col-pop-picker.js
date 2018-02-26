angular.module('app')
    .directive('oneColPopPicker', function () {
        return {
            restrict: 'A',
            scope: {
                value: '=value',
                key: '=key',
                pickerData: '=pickerData',
                callback: '=callback',
            },
            link: function ($s, $e) {
                var cancel = $s.$watch('value', function (newV) {
                    if (newV||newV===0) {
                        cancel();
                        var $eMark = 'one-col-pop-picker' + $s.$id;
                        $e.addClass($eMark);
                        var pickerInstance = new MobileSelect({
                            trigger: `.${$eMark}`,
                            title: '设置年级',
                            wheels: [
                                {data: $s.pickerData}
                            ],
                            position: function () {
                                //初始化
                                if ($s.value) {
                                    $s.key = $s.pickerData[$s.value];
                                    return [$s.value];
                                }else if($s.value===0){
                                    $s.key='请选择';
                                    console.log(1);
                                }
                            }(),
                            callback: function (value, key) {
                                //@value 其实是indexArr 只是用与 one col
                                $s.value = value[0];
                                $s.key =key[0];
                                $s.$apply();
                                $s.callback();
                            }
                        });
                    }
                });
            }
        }
    });