(function () {
    'use strict';
    angular.module('enjoyApp')
        .controller('introduce.Controller',function () {
            var myChart = echarts.init(document.getElementById('main'));
            var myChart1 = echarts.init(document.getElementById('main1'));
            myChart.setOption({
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        roseType: 'angle',
                        data:[
                            {value:400, name:'angularjs'},
                            {value:300, name:'git'},
                            {value:300, name:'svn'},
                            {value:360, name:'html5+css3'},
                            {value:380, name:'jquery+bootStript'}
                        ]
                    }
                ]
            })


            myChart1.setOption({

                radar: [
                    {

                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        }
                    },
                    {
                        indicator: [
                            { text: '学习能力', max: 150 },
                            { text: '工作效率', max: 150 },
                            { text: '工作态度', max: 150 },
                            { text: '工作质量', max: 150 },
                            { text: '责任心', max: 150 },
                            { text: '助人为乐', max: 150 }
                        ],
                        center: ['50%', '50%'],
                        radius: 120
                    }
                ],
                series: [
                    {
                        name: '优势',
                        type: 'radar',
                        radarIndex: 1,
                        data: [

                            {
                                value: [132, 130, 131, 133, 133, 132],
                                name: '李四',
                                label: {
                                    normal: {
                                        show: true,
                                        formatter:function(params) {
                                            return params.value;
                                        }
                                    }
                                },
                                areaStyle: {
                                    normal: {
                                        opacity: 0.9,
                                        color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                                            {
                                                color: '#B8D3E4',
                                                offset: 0
                                            },
                                            {
                                                color: '#72ACD1',
                                                offset: 1
                                            }
                                        ])
                                    }
                                }
                            }
                        ]
                    }
                ]
            })
        })
})();