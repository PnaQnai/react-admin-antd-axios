import React from 'react'
// 折线图
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

export default class Polyline extends React.Component{
    constructor(){
        super()

    }
    // 组件加载完毕之后立即执行
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 引入提示框和标题组件
        require('echarts/lib/component/tooltip');
        require('echarts/lib/component/title');
        require("echarts/lib/component/legendScroll");
        require("echarts/lib/component/grid");
        require("echarts/lib/component/toolbox");
        let options = {
            title: {
                text: '数据详情'
            },
            tooltip: {
                formatter: function(params, ticket, callback) {
                    console.log(params)
                    console.log(callback)
                    return '日期：'+params['name'] + "<br />" + '类别名称：'+params['seriesName'] + "<br />"+ '浏览数量：'+params['value'];
                }
            },
            legend: {
                data:['求职招聘','房屋租售','顺风车','二手交易','生活圈','二手车','本地转让','婚恋交友','生活服务']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 1500,
                interval: 500
            },
            
            series: [
                {
                    name:'求职招聘',
                    type:'line',
                    stack: '求职招聘',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'房屋租售',
                    type:'line',
                    stack: '房屋租售',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'顺风车',
                    type:'line',
                    stack: '顺风车',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'二手交易',
                    type:'line',
                    stack: '二手交易',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'生活圈',
                    type:'line',
                    stack: '生活圈',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                },
                {
                    name:'二手车',
                    type:'line',
                    stack: '二手车',
                    data:[20, 332, 421, 604, 100, 530, 820]
                },
                {
                    name:'本地转让',
                    type:'line',
                    stack: '本地转让',
                    data:[520, 632, 501, 334, 990, 170, 1020]
                },
                {
                    name:'婚恋交友',
                    type:'line',
                    stack: '婚恋交友',
                    data:[220, 632, 501, 724, 560, 1400, 620]
                },
                {
                    name:'生活服务',
                    type:'line',
                    stack: '生活服务',
                    data:[720, 632, 301, 234, 1000, 1030, 1320]
                }
            ]
        };
        // 绘制图表
        myChart.setOption(options,true);
        //根据窗口的大小变动图表 --- 重点
        window.onresize = function(){
            myChart.resize();
            //myChart1.resize();    //若有多个图表变动，可多写

        }
    }
    render(){
        return (
            <div id="main" style={{ width: '100%', height: 500,display:'flex',flex:1 }}></div>
        )
    }
}

