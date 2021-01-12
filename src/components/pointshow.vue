<!--
 * @Author: your name
 * @Date: 2021-01-04 15:22:11
 * @LastEditTime: 2021-01-11 10:58:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \first\src\components\pointshow.vue
-->
<template>
<div>
    <div id="map-div" style="width:auto;height:240px;">
              <!-- 弹出窗体 -->
    </div>
            <div id="mouse-position" style="float: left; position: absolute; bottom: 5px; width: 350px; height: 20px; z-index: 2000;">
        </div>
          <div style="margin:0 auto;padding-top:10px; width:500px;">
    <el-button @click="start" type="primary">开始</el-button>
    <el-button @click="stop" type="primary">回放</el-button>
            <label for="speed" style="font-weight: bold;">
            运动速度:&nbsp;
            <input id="speed" type="range" min="10" max="999" step="10" value="60" />
        </label>
  </div>
</div>
</template>

<script>
import { Vector as SourceVec } from 'ol/source'
import { Feature, Map, View } from 'ol'
import { Point } from 'ol/geom'
import { Style, Icon, Stroke } from 'ol/style'
import { Vector as LayerVec } from 'ol/layer'
import Overlay from 'ol/Overlay'
import 'ol/ol.css'
import LineString from 'ol/geom/LineString'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'
import img from '@/assets/mark.png'
import plane from '@/assets/boss_zidan.png'
import { fromLonLat } from 'ol/proj'
import MousePosition from 'ol/control/MousePosition'
export default {
  name: 'v-show',
  data () {
    return {
      Coordinates: [],
      flag: 0,
      speedInput: 80,
      map: null,
      x: 22.448857,
      pointlist: [
        [200.164899, 22.548857],
        [114.164899, 22.448857]
      ],
      planeLine: [
        {'longitude': 106.645226, 'latitude': 29.723155, 'height': 0, 'direction': 160.5},
        {'longitude': 107.715408, 'latitude': 30.161297, 'height': 2000, 'direction': 150.5},
        {'longitude': 109.74831, 'latitude': 30.727201, 'height': 5200, 'direction': 159.5},
        {'longitude': 111.735218, 'latitude': 30.492475, 'height': 7600, 'direction': 200.5},
        {'longitude': 114.214254, 'latitude': 29.981271, 'height': 8000, 'direction': 210.5},
        {'longitude': 117.23141, 'latitude': 31.825407, 'height': 4560, 'direction': 130.5},
        {'longitude': 118.836574, 'latitude': 31.577667, 'height': 2680, 'direction': 195.5},
        {'longitude': 121.814917, 'latitude': 31.157179, 'height': 0, 'direction': 200.5},
        {'longitude': 121.814917, 'latitude': 32.257179, 'height': 0, 'direction': 0},
        {'longitude': 121.814917, 'latitude': 33.257179, 'height': 0, 'direction': 0},
        {'longitude': 121.814917, 'latitude': 34.257179, 'height': 0, 'direction': 0},
        {'longitude': 121.814917, 'latitude': 35.257179, 'height': 0, 'direction': 0},
        {'longitude': 121.814917, 'latitude': 36.257179, 'height': 0, 'direction': 0},
        {'longitude': 121.814917, 'latitude': 37.257179, 'height': 0, 'direction': 0},
        {'longitude': 121.814917, 'latitude': 38.257179, 'height': 0, 'direction': 0},
        {'longitude': 121.814917, 'latitude': 39.257179, 'height': 0, 'direction': 0},
        {'longitude': 121.814917, 'latitude': 40.257179, 'height': 0, 'direction': 0},
        {'longitude': 121.814917, 'latitude': 41.257179, 'height': 0, 'direction': 0},
        {'longitude': 121.814917, 'latitude': 42.257179, 'height': 0, 'direction': 0}
      ]
    }
  },
  mounted () {
    this.map = new Map({
      target: 'map-div',
      loadTilesWhileAnimating: true,
      view: new View({
        projection: 'EPSG:4326', // 使用这个坐标系
        center: [114.164899, 22.548857], // 深圳
        zoom: 4,
        minZoom: 2,
        maxZoom: 19
      }),
      controls: [
        new MousePosition(
          {
            target: document.getElementById('mouse-position')
          }
        )
      ],
      layers: [
        new TileLayer({
          title: '天地图矢量图层',
          source: new XYZ({
            url: 'http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=' + '3dcc07b9c11b178c0d9ff5a84fca6f1d'
          })
        }),
        new TileLayer({
          title: '天地图矢量注记图层',
          source: new XYZ({
            url: 'http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=' + '3dcc07b9c11b178c0d9ff5a84fca6f1d',
            wrapX: false
          })
        })
      ]
    })
    this.showline(this.map)
    // 创建矢量容器
    var vectorSource2 = new SourceVec({})
    // 创建矢量层
    var vectorLayer = new LayerVec({})
    // 创建图标特性
    var iconFeature = new Feature({
      geometry: new Point([106.645226, 29.723155], 'XY')
    })

    // 将图标特性添加进矢量中
    vectorSource2.addFeature(iconFeature)
    // 创建图标样式
    var angle = Math.PI / 360 * this.planeLine[0].direction
    var iconStyle = new Style({
      image: new Icon({
        opacity: 0.75,
        anchor: [0.5, 0.5],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        rotation: angle,
        src: plane
      })
    })

    vectorLayer.setSource(vectorSource2)
    vectorLayer.setStyle(iconStyle)
    this.map.addLayer(vectorLayer)
    var index = 0

    this.timer = setInterval(() => {
      if (this.flag === 1) {
        if (index !== this.planeLine.length) {
          var geometry = new Point([this.planeLine[index].longitude, this.planeLine[index].latitude], 'XY')
          index++
          iconFeature.setGeometry(geometry)
          iconStyle.image_.setRotation(Math.PI / 360 * this.planeLine[index].direction)
        }
      }
      if (this.flag === 2) {
        this.flag = 1
        index = 0
        if (index !== this.planeLine.length) {
          var geometry2 = new Point([this.planeLine[index].longitude, this.planeLine[index].latitude], 'XY')
          index++
          iconFeature.setGeometry(geometry2)
          iconStyle.image_.setRotation(Math.PI / 360 * this.planeLine[index].direction)
        }
      }
    }, this.speedInput * 10)
    // this.addline(this.map)
  },
  destroyed () {
    if (this.timer) { // 注意在vue实例销毁前，清除我们的定时器
      clearInterval(this.timer)
    }
  },
  methods: {
    start () {
      this.flag = 1
    },
    stop () {
      this.flag = 2
    },
    showline (map) {
      var Coordinates = []
      // for (var i = 0; i < 600000; i += 5000) {
      //   Coordinates.push([(-30322402) + i, 5444359 - i])
      // }
      // for (var j = 0; j < 600000; j += 5000) {
      //   Coordinates.push([(-30322402) + 600000 + j, 5444359 - 600000])
      // }
      // for (var k = 0; k < 600000; k += 5000) {
      //   Coordinates.push([(-30322402) + 1200000 + k, 5444359 - 600000 - k])
      // }
      // for (var h = 0; h < 600000; h += 5000) {
      //   Coordinates.push([(-30322402) + 1800000 + h, 5444359 - 1200000])
      // }
      // Coordinates.push([114.164899, 22.548857])
      // Coordinates.push([110.164899, 25.548857])
      // Coordinates.push([113.164899, 30.548857])
      // Coordinates.push([120.164899, 30.548857])
      this.planeLine.forEach(element => {
        Coordinates.push([element.longitude, element.latitude])
      })
      // 将离散点构建成一条折线
      var route = new LineString(Coordinates)
      var routeFeature = new Feature({
        geometry: route
      })
      routeFeature.setStyle(new Style({
        stroke: new Stroke({
          opacity: 0.75,
          width: 4,
          color: '#1CD2B7'
        })
      }))
      // 创建一个 source图层
      const source = new SourceVec()
      source.addFeature(routeFeature)
      var vectorLayer = new LayerVec({
        source: source
      })
      map.addLayer(vectorLayer)
    },
    addline (map) {
      var that = this
      let line = new Feature(new LineString(that.pointlist))// 这里要注意写fromLonLat，很重要
      line.setStyle(new Style({
        stroke: new Stroke({
          opacity: 0.75,
          width: 2,
          color: '#1CD2B7'
        })
      }))
      // 创建一个 source图层
      const source = new SourceVec()
      source.addFeature(line)
      var linevectorLayer = new LayerVec({
        className: 'map-line-string',
        source: source,
        zIndex: 300,
        style: function (feature, resolution) {
          // console.log(feature)
          const style = [
            new Style({
              stroke: new Stroke({
                color: '#409eff',
                width: 4,
                lineDash: null,
                lineDashOffset: 0
              })
            })
          ]
          return style
        }
      })
      map.addLayer(linevectorLayer)// 这里是执行，执行之后点就出来了
    }

  }
}
</script>
<style>

/** 地图上的故障处理器显示效果*/
#css_animation {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background: rgba(255, 0, 0, 0.9);
  transform: scale(0);
  animation: myfirst 3s;
  animation-iteration-count: infinite;
}
@keyframes myfirst {
  to {
    transform: scale(2);
    background: rgba(0, 0, 0, 0);
  }
}
#test {
  position: relative;
}
.font {
  position: absolute;
  top: 15px;
  left: 14px;
}
</style>
