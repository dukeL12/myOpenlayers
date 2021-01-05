<!--
 * @Author: your name
 * @Date: 2020-09-27 11:31:00
 * @LastEditTime: 2020-12-29 18:37:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \first\src\components\ThreeLayout.vue
-->
<template>
<div class="three">
<el-container>
    <el-header class="header">
        <el-col :span="8"><div class=" grid-main"></div></el-col>
        <el-col :span="8"><div class=" grid-main"><h1>{{mainText}}</h1></div></el-col>
        <el-col :span="8"><div class="showTime grid-main"><h1>{{nowDate}}{{nowWeek}} {{nowTime}}</h1></div></el-col>
    </el-header>
    <el-main>
        <el-row :gutter="20">
            <el-col :span="8"><div class="group_height grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="group_height grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="group_height grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8"><div class="group_height grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="group_height grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="group_height grid-content bg-purple"></div></el-col>
        </el-row>
    </el-main>
</el-container>
</div>
</template>
<style>
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
  .group_height{
      border: 1px solid rgba(25, 186, 139, 0.17);
      height: 230px;
      background: url('/static/images/line.png') no-repeat top center;
  }
  .group_height::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
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
}
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
export default {
  data () {
    return {
      mainText: '数据信息展示中心',
      nowDate: '', // 当前日期
      nowTime: '', // 当前时间
      nowWeek: '' // 当前星期
    }
  },
  methods: {
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
    // 页面加载完后显示当前时间
    this.dealWithTime(new Date())
    // 定时刷新时间
    this.timer = setInterval(() => {
      this.dealWithTime(new Date()) // 修改数据date
    }, 500)
  },
  destroyed () {
    if (this.timer) { // 注意在vue实例销毁前，清除我们的定时器
      clearInterval(this.timer)
    }
  }

}
</script>
