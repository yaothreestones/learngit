angular.module("app")
    .directive('register', [function () {
        return {
            restrict: "EA",
            templateUrl: "view/serviceManage/enroll/register.html",
            replace: true,
            link: function (scope) {
                // 图表配置
                var options = {
                    // 标题
                    title: {
                        align: 'low',
                        text: '注册人数图表',
                        margin:40
                    },
                    // 副标题
                    subtitle: {
                        align: 'low',
                        text: '总人数：2400'
                    },
                    // X轴
                    xAxis: [{
                        scrollbar: {
                            enabled: true,
                            barBackgroundColor: 'gray',
                            barBorderRadius: 10,
                            barBorderWidth: 2,
                            buttonBackgroundColor: 'gray',
                            buttonBorderWidth: 15,
                            buttonArrowColor: 'yellow',
                            buttonBorderRadius: 1,
                            rifleColor: 'yellow',
                            trackBackgroundColor: 'white',
                            trackBorderWidth: 10,
                            trackBorderColor: 'silver',
                            trackBorderRadius: 0
                        },

                        max: 8,

                        min: 0,
                        //轴线宽度
                        lineWidth:2,

                        labels: {
                            formatter: function () {
                                return this.value;
                            }
                        },
                        //刻度线长度
                        tickLength:8,
                        //刻度线宽度
                        tickWidth:2,
                        //刻度线对齐方式
                        tickmarkPlacement:'between',

                        categories: ['2017-12-14','2017-12-15','2017-12-16','2017-12-17','2017-12-18','2017-12-20','2017-12-22','2017-12-24','2017-12-27']   // x 轴分类

                    },{

                        labels: {
                            formatter: function () {
                                return this.value;
                            }
                        },

                        lineWidth:0,

                        tickLength:0,

                        tickWidth:0,

                        tickmarkPlacement:'between',

                        categories: ['周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三'],
                        //对面显示
                        opposite:true,

                    }],
                    yAxis: [{

                        title: {
                            align: 'high',
                            offset: 0,
                            text: '总人数',
                            rotation: 0,
                            y: -40
                        },

                        lineWidth:2,//轴线宽

                        labels: {
                            formatter: function () {
                                return this.value;
                            },
                            //     staggerLines: 3,
                        },

                        tickLength:8,//刻度线的长度、宽度

                        tickWidth:2,

                        tickPositions: [0,1000, 2000, 3000, 4000, 5000,6000] //刻度数组

                    },{
                        title: {
                            align: 'high',
                            offset: 0,
                            text: '日人数',
                            rotation: 0,
                            y: -40
                        },

                        lineWidth:2,//轴线宽

                        labels: {
                            formatter: function () {
                                return this.value;
                            },
                            //     staggerLines: 3,
                        },

                        tickLength:8,//刻度线的长度、宽度

                        tickWidth:2,
                        //对面显示
                        opposite:true,
                        //刻度数组
                        tickPositions: [0,5, 10, 15, 20, 25,30]

                    }],

                    series: [{                              // 数据列
                        name: '总人数',
                        // 数据列名
                        data: [1000, 1100,4200,3300,5400,500,5000, 5100, 2200,5300,500,5500,2100, 5200,5300] ,  // 数据

                        yAxis:0,

                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            lineColor: null // inherit from series
                        }
                    }, {                              // 数据列
                        name: '总人数',
                        // 数据列名
                        data: [12,15,25,23,16,18,23,12,22,14,15,23,11,12]  , // 数据

                        xAxis:1,

                        yAxis:1,

                        marker: {

                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            symbol:'circle',
                            lineColor: null // inherit from series
                        }
                    },],
                    //图例位置
                    legend: {
                        align: 'center', //水平方向位置
                        verticalAlign: 'top', //垂直方向位置
                        y: 30 //距离Y轴的距离
                    }
                };
                // 图表初始化函数
                var chart = Highcharts.chart('container',options);
            }

        }
    }])