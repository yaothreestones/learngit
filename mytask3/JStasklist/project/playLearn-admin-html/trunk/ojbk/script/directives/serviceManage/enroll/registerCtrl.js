angular.module('app')
// Controller
    .controller('chartsCtrl', ['$scope', 'chartsServ', function($scope,chartsServ){
        $scope.chartsData = null
        // 数据初始化
        return chartsServ.getData('sign')
            .then(function (d) {
            $scope.chartsData = d
        })
        // 按钮改变数据
        $scope.changeChart = function (para) {
            return chartsServ.getData(para).then(function (d) {
                $scope.chartsData = d
            })
        }
    }])
    // Service
    .service('chartsServ', ['$http', '$q', function ($http,$q) {
        return {
            // @getData 异步获取数据并处理
            // @para    Str    需要的数据
            // @return  Obj    promise对象
            getData: function (para) {
                // para对应的配置对象
                urlMap = {
                    sign: {
                        // url: '/charts/?' + Date(),
                        title: '注册人数图表',
                        subtext: '总人数',
                        series: '日人数'
                    },
                    daily: {
                        // url: '/dailys/?' + Date(),
                        title: '日报数图表',
                        subtext: '总日报数',
                        series: '日报数'
                    }
                }
                // @concatData   结合数据与配置
                // @para   Obj   d    异步获取的数据
                // @para   Str   para 参数
                // @return Obj   整合的数据
                function concatData (d,para) {
                    var tmp = {
                        data: d.data,
                        detail: urlMap[para]
                    }
                    return tmp
                }
                // 异步获取数据，返回promise对象
                // var deferred = $q.defer()
                // $http.get(urlMap[para].url).then(
                //     function (d) {
                //         d = concatData(d,para)
                //         deferred.resolve(d)
                //     }
                // )
                // return deferred.promise
            }
        }
    }])
    // Directive
    .directive('charts', ['chartsServ', function(chartsServ){
        return {
            restrict: 'E',
            replace: true,
            scope: {
                data: '=data'
            },
            template: '<div class="signchart-wrap"></div>',
            // 依赖echarts.min.js
            link: function($scope, ele) {
                // 创建echart对象
                var myChart = echarts.init(ele[0]);

                // 生成图表
                function bootup (data) {
                    // 数据分类
                    var d = data.data.data
                    var dayData = []
                    var numData = []
                    var totalData = []

                    // 数据分别放入数组
                    function transArr (data,type) {
                        var tmp = []
                        for (var i = 0; i < data.length; i++) {
                            tmp.unshift(data[i][type])
                        }
                        return tmp
                    }

                    dayData = transArr(d,'date')
                    numData = transArr(d,'num')

                    // 计算每日总数
                    function dayCount (data) {
                        var tmpArr = []
                        for (var i = 0;i < data.length; i++) {
                            var tmpNum = data[0]
                            for (var j = 0; j < i; j++) {
                                tmpNum += data[j + 1]
                            }
                            tmpArr.push(tmpNum)
                        }
                        return tmpArr
                    }

                    var dateArr = (function () {
                        var tmp = []
                        var dayMap = {
                            0: '周日',
                            1: '周一',
                            2: '周二',
                            3: '周三',
                            4: '周四',
                            5: '周五',
                            6: '周六'
                        }
                        for (var i = 0; i < dayData.length; i++) {
                            tmp[i] = new Date(dayData[i])
                            tmp[i] = dayMap[tmp[i].getDay()]
                        }
                        return tmp
                    })()

                    totalData = dayCount(numData)

                    // 填数据，初始化
                    var detail = data.detail
                    myChart.setOption({
                        // 标题
                        title: {
                            text: detail.title,
                            subtext: detail.subtext + '：' + totalData[totalData.length-1]
                        },
                        // 表格位置
                        grid: {
                            top: 100,
                        },
                        // X轴（2个）
                        xAxis: [
                            // 年月日
                            {
                                type: 'category',
                                boundaryGap : true,
                                splitLine: {
                                    show: false
                                },
                                data: dayData
                            },
                            // 星期
                            {
                                type: 'category',
                                boundaryGap : true,
                                splitLine: {
                                    show: false
                                },
                                data: dateArr
                            }
                        ],
                        // Y轴（2个）
                        yAxis: [
                            // 日数据
                            {
                                type: 'value',
                                name: detail.subtext,
                                nameGap: 35,
                                splitLine: {
                                    show: false
                                },
                            },
                            // 总数据
                            {
                                type: 'value',
                                name: detail.series,
                                nameGap: 35,
                                splitLine: {
                                    show: false
                                },
                            }
                        ],
                        // 标注
                        legend: {
                            data: [detail.subtext,detail.series]
                        },
                        // 系列（2个）
                        series: [
                            // 总人数
                            {
                                yAxisIndex: 0,
                                type: 'line',
                                name: detail.subtext,
                                data: totalData
                            },
                            // 日人数
                            {
                                yAxisIndex: 1,
                                type: 'line',
                                name: detail.series,
                                data: numData
                            },
                            {
                                xAxisIndex: 1,
                                type: 'line',
                                name: '1',
                                data: dateArr
                            }
                        ],
                        // 鼠标滑动提示
                        tooltip: {
                            trigger: 'axis',
                        },
                        // 缩放（数据过滤）
                        dataZoom: [
                            // 表内移动
                            {
                                type: 'inside',
                                show: true,
                                startValue: dateArr.length - 15,
                                end: 100
                            },
                            // 滑动条移动 缩放
                            {
                                type: 'slider',
                                xAxisIndex: [0, 1],
                                handleSize: 20,
                                show: true,
                                startValue: dateArr.length - 15,
                                end: 100
                            }
                        ],
                        // 线条颜色（依次）
                        color: ['#c23531', '#44525d', '#314656', '#61a0a8', '#dd8668', '#91c7ae', '#6e7074', '#61a0a8', '#bda29a', '#c4ccd3']
                    })

                    // 隐藏Loading
                    myChart.hideLoading()

                }

                // 加载loading界面
                myChart.showLoading({color:'#44525d'})
                // 监测数据变化（按钮按下），生成图表
                $scope.$watch('data',function (newData) {
                    if ($scope.data) {
                        myChart.dispose()
                        myChart = echarts.init(ele[0])
                        bootup(newData)
                    }
                })
            }
        };
    }]);
