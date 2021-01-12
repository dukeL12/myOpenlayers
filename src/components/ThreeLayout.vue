<!--
 * @Author: your name
 * @Date: 2020-09-27 11:31:00
 * @LastEditTime: 2021-01-11 16:11:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \first\src\components\ThreeLayout.vue
-->
<template>
<div class="three">
<el-container>
    <el-header class="header">
        <el-col :span="8"><div class=" grid-main"></div></el-col>
        <el-col :span="8"><div class=" grid-main" style="text-align: center;"><h1>{{mainText}}</h1></div></el-col>
        <el-col :span="8"><div class="showTime grid-main"><h1>{{nowDate}}{{nowWeek}} {{nowTime}}</h1></div></el-col>
    </el-header>
    <el-main>
        <el-row :gutter="20">
            <el-col :span="8"><div id="test" class="group_height grid-content bg-purple mytest"></div></el-col>
            <el-col :span="8">
              <div id="test1" class="group_height grid-content bg-purple test">
              <div style="margin:100px auto;height:100px;width:400px;text-align: center;border: 1px solid #0c3058;" class="mytest">
              <div class="borderLine">
                <div class="border-right"></div>
                <div class="textStyle">{{timerData}}<div style="font-size:20px;padding-top:15px;">飞机数量</div></div>
              </div>
              <div style="width:198px;height:100px;float:left;">
                <div class="textStyle">{{timerData2}}<div style="font-size:20px;padding-top:15px;">实时数据</div></div>
              </div>
              </div>
              </div>
            </el-col>
            <el-col :span="8"><div id="test2" class="group_height grid-content bg-purple mytest"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8"><div id="test5" class="group_height grid-content bg-purple mytest"></div></el-col>
            <el-col :span="8">
              <div class="show">
                <v-show></v-show>
              </div>
            </el-col>
            <el-col :span="8"><div id="test6" class="group_height grid-content bg-purple mytest"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8"><div id="test3" class="group_height grid-content bg-purple mytest"></div></el-col>
            <!-- <el-col :span="8"><div class="group_height grid-content bg-purple"></div></el-col> -->
            <el-col :span="8" :offset="8"><div id="test4" class="group_height grid-content bg-purple mytest"></div></el-col>
        </el-row>
    </el-main>
</el-container>
</div>
</template>
<style>
@import url('../common/font/font.css');
h1{
    margin-top: 0px;
    margin-bottom: 0px;
    color: #ffffff;
}
    body{
      background: url('/static/images/bg.jpg') no-repeat #000;
    }
  .el-row {
    margin-bottom: 20px;

  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #ffffff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 40px;
  }
  .grid-main {
    border-radius: 4px;
    min-height: 40px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  center{
          height: 400px;
  }
  .group_height{
      border: 1px solid rgba(25, 186, 139, 0.17);
      height: 280px;
      background: url('/static/images/line.png') no-repeat top center;
  }
  .test{
    box-shadow: 0 0 2.5vw #237ad4 inset;
    background: linear-gradient(#1359df, #1359df) left top,
    linear-gradient(#1359df, #1359df) left top,
    linear-gradient(#1359df, #1359df) right top,
    linear-gradient(#1359df, #1359df) right top,
    linear-gradient(#1359df, #1359df) left bottom,
    linear-gradient(#1359df, #1359df) left bottom,
    linear-gradient(#1359df, #1359df) right bottom,
    linear-gradient(#1359df, #1359df) right bottom;
    background-repeat: no-repeat;
    background-size: 0.1vw 18vw, 1.5vw 0.1vw;
  }
  .mytest{
        background: linear-gradient(to left, #02a6b5, #02a6b5) left top no-repeat,
 linear-gradient(to bottom, #02a6b5, #02a6b5) left top no-repeat,
 linear-gradient(to left, #02a6b5, #02a6b5) right top no-repeat,
 linear-gradient(to bottom, #02a6b5, #02a6b5) right top no-repeat,
 linear-gradient(to left, #02a6b5, #02a6b5) left bottom no-repeat,
 linear-gradient(to bottom, #02a6b5, #02a6b5) left bottom no-repeat,
 linear-gradient(to left, #02a6b5, #02a6b5) right bottom no-repeat,
 linear-gradient(to left, #02a6b5, #02a6b5) right bottom no-repeat;
   /*设置大小*/
    background-size: 0.15rem 0.6rem, 0.6rem 0.15rem, 0.15rem 0.6rem, 0.6rem 0.15rem;
  }
  .textStyle{
    margin:10px 25px;
    height:80px;
    width:150px;
    float:left;
    text-align: center;
    font-size: 40px;
    color: #ffeb7b;
    text-align: center;
        font-family: 'DS-Digital';
    font-style: italic;
  }
  .borderLine{
    width:201px;height:100px;float:left;position: relative;
  }
  .border-right {

}

    .border-right:after {
        content: '';
        position: absolute;
        left: auto;
        top: auto;
        bottom: 20px;
        right: 0;
        height: 52%;
        width: 1px;
        background-color: #3c487a;
    }
  /* .group_height::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
    }
    .panel-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    }
    .panel-footer::before {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
    }
    .panel-footer::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
}
    .group_height::after {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
} */

  .header{
      height: 80px;
      background: url('/static/images/head_bg.png') no-repeat top center;
      background-size: 100% 100%;
  }
  .showTime{
      float: right;
  }
</style>
<script>
import vShow from './pointshow.vue'
export default {
  components: {
    vShow
  },
  data () {
    return {
      mainText: '数据信息展示中心',
      timerData: 367922,
      timerData2: 425811,
      nowDate: '', // 当前日期
      nowTime: '', // 当前时间
      nowWeek: '' // 当前星期
    }
  },
  methods: {
    dataTimer () {
      setInterval(function () {
        this.timerData += 1
        this.timerData2 += 1
      }, 2000)
    },
    drawreso () {
      let myChart = this.$echarts.init(document.getElementById('test6'))
      let option6 = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            data: [{value: 50, name: '完成率'}]
          }
        ]
      }

      setInterval(function () {
        option6.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
        myChart.setOption(option6, true)
      }, 2000)
      // 绘制图表
      myChart.setOption(option6)
    },
    drawtryline () {
      var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
      let myChart = this.$echarts.init(document.getElementById('test5'))
      let option5 = {
        title: {
          text: '世界人口总量',
          textStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize: '12'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2011年', '2012年']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          // 修改刻度标签 相关样式
          axisLabel: {
            color: 'rgba(255,255,255,.6) ',
            fontSize: '12'
          },
          // x轴线的颜色为   rgba(255,255,255,.2)
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
          // 修改刻度标签 相关样式
          axisLabel: {
            color: 'rgba(255,255,255,.6) ',
            fontSize: '12'
          },
          // x轴线的颜色为   rgba(255,255,255,.2)
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          }
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      }
      // 绘制图表
      myChart.setOption(option5)
    },
    drawcol () {
      let myChart = this.$echarts.init(document.getElementById('test4'))
      let option4 = {
        title: {
          text: '世界人口总量',
          textStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize: '12'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2011年', '2012年']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          // 修改刻度标签 相关样式
          axisLabel: {
            color: 'rgba(255,255,255,.6) ',
            fontSize: '12'
          },
          // x轴线的颜色为   rgba(255,255,255,.2)
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
          // 修改刻度标签 相关样式
          axisLabel: {
            color: 'rgba(255,255,255,.6) ',
            fontSize: '12'
          },
          // x轴线的颜色为   rgba(255,255,255,.2)
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          }
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      }
      // 绘制图表
      myChart.setOption(option4)
    },
    drawcircle () {
      let myChart = this.$echarts.init(document.getElementById('test3'))
      let option3 = {
        color: [
          '#006cff',
          '#60cda0',
          '#ed8884',
          '#ff9f7f',
          '#0096ff',
          '#9fe6b8',
          '#32c5e9',
          '#1d9dff'
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          bottom: '0%',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize: '12'
          }
        },
        series: [
          {
            name: '地区分布',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            // 图形的文字标签
            label: {
              fontSize: 10
            },
            // 链接图形和文字的线条
            labelLine: {
              // length 链接图形的线条
              length: 6,
              // length2 链接文字的线条
              length2: 8
            },
            data: [
              { value: 20, name: '云南' },
              { value: 26, name: '北京' },
              { value: 24, name: '山东' },
              { value: 25, name: '河北' },
              { value: 20, name: '江苏' },
              { value: 25, name: '浙江' },
              { value: 30, name: '四川' },
              { value: 42, name: '湖北' }
            ]
          }
        ]
      }
      // 绘制图表
      myChart.setOption(option3)
    },
    drawlinetwo () {
      let myChart = this.$echarts.init(document.getElementById('test2'))
      var option2 = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: '0%',
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
          textStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize: '12'
          }
        },

        grid: {
          left: '10',
          top: '30',
          right: '10',
          bottom: '10',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            // x轴更换数据
            data: [
              '01',
              '02',
              '03',
              '04',
              '05',
              '06',
              '07',
              '08',
              '09',
              '10',
              '11',
              '12',
              '13',
              '14',
              '15',
              '16',
              '17',
              '18',
              '19',
              '20',
              '21',
              '22',
              '23',
              '24',
              '25',
              '26',
              '26',
              '28',
              '29',
              '30'
            ],
            // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
            axisLabel: {
              textStyle: {
                color: 'rgba(255,255,255,.6)',
                fontSize: 12
              }
            },
            // x轴线的颜色为   rgba(255,255,255,.2)
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.2)'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(255,255,255,.6)',
                fontSize: 12
              }
            },
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            }
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            smooth: true,
            // 单独修改当前线条的样式
            lineStyle: {
              color: '#0184d5',
              width: '2'
            },
            // 填充颜色设置
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)' // 渐变色的起始颜色
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)' // 渐变线的结束颜色
                  }
                ],
                false
              ),
              shadowColor: 'rgba(0, 0, 0, 0.1)'
            },
            // 设置拐点
            symbol: 'circle',
            // 拐点大小
            symbolSize: 8,
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: '#0184d5',
              borderColor: 'rgba(221, 220, 107, .1)',
              borderWidth: 12
            },
            data: [
              30,
              40,
              30,
              40,
              30,
              40,
              30,
              60,
              20,
              40,
              30,
              40,
              30,
              40,
              30,
              40,
              30,
              60,
              20,
              40,
              30,
              40,
              30,
              40,
              30,
              40,
              20,
              60,
              50,
              40
            ]
          },
          {
            name: '联盟广告',
            type: 'line',
            smooth: true,
            lineStyle: {
              normal: {
                color: '#00d887',
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(0, 216, 135, 0.4)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(0, 216, 135, 0.1)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)'
              }
            },
            // 设置拐点 小圆点
            symbol: 'circle',
            // 拐点大小
            symbolSize: 5,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: '#00d887',
              borderColor: 'rgba(221, 220, 107, .1)',
              borderWidth: 12
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            data: [
              130,
              10,
              20,
              40,
              30,
              40,
              80,
              60,
              20,
              40,
              90,
              40,
              20,
              140,
              30,
              40,
              130,
              20,
              20,
              40,
              80,
              70,
              30,
              40,
              30,
              120,
              20,
              99,
              50,
              20
            ]
          }
        ]
      }
      // 绘制图表
      myChart.setOption(option2)
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('test'))
      let option = {
        color: ['#2f89cf'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // 修改图表的大小
        grid: {
          left: '0%',
          top: '10px',
          right: '0%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '旅游行业',
              '教育培训',
              '游戏行业',
              '医疗行业',
              '电商行业',
              '社交行业',
              '金融行业'
            ],
            axisTick: {
              alignWithLabel: true
            },
            // 修改刻度标签 相关样式
            axisLabel: {
              color: 'rgba(255,255,255,.6) ',
              fontSize: '12'
            },
            // 不显示x坐标轴的样式
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            // 修改刻度标签 相关样式
            axisLabel: {
              color: 'rgba(255,255,255,.6) ',
              fontSize: 12
            },
            // y轴的线条改为了 2像素
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)',
                width: 2
              }
            },
            // y轴分割线的颜色
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            }
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 5
            }
          }
        ]
      }
      // 绘制图表
      myChart.setOption(option)
    },
    dealWithTime (data) { // 获取当前时间
      let Y = data.getFullYear()
      let M = data.getMonth() + 1
      let D = data.getDate()
      let H = data.getHours()
      let Min = data.getMinutes()
      let S = data.getSeconds()
      let W = data.getDay()
      H = H < 10 ? '0' + H : H
      Min = Min < 10 ? '0' + Min : Min
      S = S < 10 ? '0' + S : S
      switch (W) {
        case 0:
          W = '日'
          break
        case 1:
          W = '一'
          break
        case 2:
          W = '二'
          break
        case 3:
          W = '三'
          break
        case 4:
          W = '四'
          break
        case 5:
          W = '五'
          break
        case 6:
          W = '六'
          break
        default:
          break
      }
      this.nowDate = Y + '年' + M + '月' + D + '日 '
      this.nowWeek = '周' + W
      this.nowTime = H + ':' + Min + ':' + S
      // formatDateTime = Y + "年" + M + "月" + D + "日 " + " 周" +W + H + ":" + Min + ":" + S;
    }
  },
  mounted () {
    this.drawLine()
    this.drawlinetwo()
    this.drawcircle()
    this.drawcol()
    this.drawtryline()
    this.drawreso()
    // 页面加载完后显示当前时间
    this.dealWithTime(new Date())
    // 定时刷新时间
    this.timer = setInterval(() => {
      this.dealWithTime(new Date()) // 修改数据date
    }, 500)
    this.timer2 = setInterval(() => {
      this.timerData += 1
      this.timerData2 += 1
    }, 2000)
  },
  destroyed () {
    if (this.timer) { // 注意在vue实例销毁前，清除我们的定时器
      clearInterval(this.timer)
    }
    if (this.timer2) { // 注意在vue实例销毁前，清除我们的定时器
      clearInterval(this.timer2)
    }
  }

}
</script>
