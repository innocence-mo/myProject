/* 
* @Author: Marte
* @Date:   2019-10-05 12:56:45
* @Last Modified by:   Marte
* @Last Modified time: 2019-10-05 12:57:30
*/

$(document).ready(function(){
    // 以下是使用echart插件渲染的图
  var myChart=echarts.init(document.getElementById('echarts'));
  myChart.showLoading();
  // 折线图
  var myChart1=echarts.init(document.getElementById('echarts1'));
  myChart1.showLoading();
  // 饼图
  var myChart2 = echarts.init(document.getElementById('echarts2'));
  myChart2.showLoading();
  // 柱形图
 myChart.setOption({
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 20,
        lineStyle: {
            normal: {
                color: 'green',
                width: 4,
                type: 'dashed'
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: 'yellow',
                color: 'blue'
            }
        }
    }]
});
 myChart1.setOption({
    title : {
        text: '销量总结',
        subtext: '周数据',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: []
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
});
        myChart2.setOption({
            title: {
                text: '周数据'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: []
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: []
            }]
        });
        $.ajax({
            type:"get",
            url:"https://edu.telking.com/api/?type=week",
            dataType:"jsonp",
            success:function(data){
                console.log('xAxis:'+data.data.xAxis);
                console.log("series:"+data.data.series);
                // 折线图
                myChart.hideLoading();
                myChart1.hideLoading();
                myChart2.hideLoading();
                myChart.setOption({
                    xAxis:{
                        data:data.data.xAxis
                    },
                    series:[{
                        data:data.data.series
                    }]
                })
                //饼图
                myChart1.setOption({
                    legend:{
                        data:data.data.xAxis
                    },
                    series:[{
                        data:data.data.series
                    }]
                })
                //柱形图
                myChart2.setOption({
                    xAxis:{
                       data: data.data.xAxis
                    },
                    series:[{
                        name:"销量",
                        data:data.data.series
                    }]
                })
            },
            error:function(){
                console.log("访问失败！");

            }
        })
    
});