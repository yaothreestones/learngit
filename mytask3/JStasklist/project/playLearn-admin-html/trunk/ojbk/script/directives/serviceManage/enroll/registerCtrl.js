angular.module("app")
    .directive('register', [function () {
        return {
            restrict: "EA",
            templateUrl: "view/serviceManage/enroll/chart.html",
            replace: true,
            // controller:function (ajaxService) {
            //     var vm = this
            // },
            scope: {
                count:'=count',
                total:'=total',
                date:'=date',
            },
            link: function (scope) {

                // 图表配置
                var options = {
                    chart: {
                        zoomType: 'x',
                    },

                    // 标题
                    title: {
                        align: 'low',
                        text: '注册人数图表',
                        margin: 40
                    },
                    // 副标题
                    subtitle: {
                        align: 'low',
                        text: '总人数：5395'
                    },
                    // X轴
                    xAxis: [{
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            day: '%Y-%m-%d'
                        },
                        tickmarkPlacement:'on',


                    }, {
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            day: '%A'
                        },
                        tickmarkPlacement:'on',
                        //对面显示
                        opposite: true,
                        // scrollbar : {
                        //     enabled:true
                        // },

                    }],
                    yAxis: [{
                        lineWidth: 2,//轴线宽

                        labels: {
                            formatter: function () {
                                return this.value;
                            },
                            //     staggerLines: 3,
                        },

                        tickLength: 8,//刻度线的长度、宽度

                        tickWidth: 2,

                        tickPositions: [0, 1000, 2000, 3000, 4000, 5000, 6000,7000, 8000, 9000, 10000, 11000,12000, 13000, 14000] //刻度数组

                    }, {
                        title: {
                            align: 'high',
                            offset: 0,
                            text: '日人数',
                            rotation: 0,
                            y: -40
                        },

                        lineWidth: 2,//轴线宽

                        labels: {
                            formatter: function () {
                                return this.value;
                            },
                            //     staggerLines: 3,
                        },

                        tickLength: 8,//刻度线的长度、宽度

                        tickWidth: 2,
                        //对面显示
                        opposite: true,
                        //刻度数组
                        tickPositions: [0, 5, 10, 15, 20, 25, 30,35,40,45,50,55,60,65,70]

                    }],

                    series: [{                              // 数据列
                        name: '总人数',
                        // 数据列名
                        data: [],  // 数据

                        pointStart: Date.UTC(2018, 1, 5),

                        pointInterval: 24 * 3600 * 1000 ,// one day

                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            symbol: 'circle',
                            lineColor: null // inherit from series
                        }

                    }, {                              // 数据列
                        name: '日人数',
                        // 数据列名
                        data: [], // 数据

                        xAxis: 1,

                        yAxis: 1,

                        pointStart: Date.UTC(2018, 0, 7),

                        pointInterval: 24 * 3600 * 1000 ,// one day

                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            symbol: 'circle',
                            lineColor: null // inherit from series
                        }
                    },],
                    //图例位置
                    legend: {
                        align: 'center', //水平方向位置
                        verticalAlign: 'top', //垂直方向位置
                        y: 30 //距离Y轴的距离
                    },

                    rangeSelector: {
                        buttons: [
                            {
                                type: 'month',
                                count: 1,
                                text: '1m'
                            }]
                        ,
                        selected: 1
                    },

                    navigator: {
                        enabled: false,
                        // 针对导航器来的所有数据列有效，注意 data 配置无效，因为该数据来源于主数据列
                        series: {
                            type: 'areaspline',
                            // ...
                        }
                    },

                };


                setTimeout(function () {
                    options.series[0].data = scope.total;
                    options.series[1].data = scope.count;
                    var chart = Highcharts.chart('container', options);
                    console.log(scope.count)
                    console.log(scope.total);

                }, 500);

                // 图表初始化函数

            }

        }
    }])

