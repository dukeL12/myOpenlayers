<template>
<div>
    <div id="map-div" style="width:auto;height:600px;">
              <!-- 弹出窗体 -->
    </div>
        <div id="test">
      <div class="font" style="color:blue;font-size:20px;"></div>
      <div id="css_animation"></div>
    </div>
  <div style="margin:0 auto;padding-top:10px; width:200px;">
    <el-button @click="start" type="primary">开始</el-button>
    <el-button @click="stop" type="primary">停止</el-button>
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
export default {
  data () {
    return {
      flag: 0,
      map: null,
      x: 22.448857,
      twopoint: [],
      pointlist: [
        [114.164899, 22.548857],
        [114.164899, 22.448857]
      ],
      linelist: [
        [114.163899, 22.548857],
        [114.163899, 22.448857],
        [114.162899, 22.447857],
        [114.163899, 22.446857],
        [114.162899, 22.444857]
      ]
    }
  },
  mounted () {
    this.map = new Map({
      target: 'map-div',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
            wrapX: false
          })
        })
      ],
      view: new View({
        projection: 'EPSG:4326', // 使用这个坐标系
        center: [114.164899, 22.448857], // 深圳
        zoom: 16
      })
    })
    var point_div = document.getElementById('test')
    var point_overlay = new Overlay({
      element: point_div,
      positioning: 'center-center'
    })
    this.map.addOverlay(point_overlay)
    point_overlay.setPosition([114.164899, 22.548857])
    var vect = this.vectorTileLayer()
    var vect1 = this.vectorTileLayer2()
    // var vect3 = this.addline()
    this.map.addLayer(vect1)
    this.map.addLayer(vect)
    var vect3 = this.addline()
    this.map.addLayer(vect3)
    // this.map.addLayer(vect3)
    let _this = this // 声明一个变量指向Vue实例this，保证作用域一致

    // 创建矢量容器
    var vectorSource2 = new SourceVec({})
    // 创建矢量层
    var vectorLayer = new LayerVec({})
    // 创建图标特性
    var iconFeature = new Feature({
      geometry: new Point([114.164899, 22.448857], 'XY')
    })

    // 将图标特性添加进矢量中
    vectorSource2.addFeature(iconFeature)
    // 创建图标样式
    var iconStyle = new Style({
      image: new Icon({
        opacity: 0.75,
        src: plane
      })
    })

    vectorLayer.setSource(vectorSource2)
    vectorLayer.setStyle(iconStyle)
    this.map.addLayer(vectorLayer)
    this.addmanyline()
    this.timer = setInterval(() => {
      if (this.flag === 1) {
        _this.x = _this.x + 0.001
      }
      if (this.flag === 2) {
        _this.x = 22.448857
      }
      var geometry = new Point([114.164899, _this.x], 'XY')
      iconFeature.setGeometry(geometry)
    }, 500)
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
    initMap () {
      // this.map = new Map({
      //   target: 'map-div',
      //   layers: [
      //     new TileLayer({
      //       source: new OSM()
      //     })
      //   ],
      //   view: new View({
      //     projection: 'EPSG:4326', // 使用这个坐标系
      //     center: [114.164899, 22.548857], // 深圳
      //     zoom: 16
      //   })
      // })
      // var point_div = document.getElementById('test')
      // var point_overlay = new Overlay({
      //   element: point_div,
      //   positioning: 'center-center'
      // })
      // this.map.addOverlay(point_overlay)
      // point_overlay.setPosition([114.164899, 22.548857])
      this.vectorTileLayer(this.map)
      this.vectorTileLayer2(this.map)
      this.addplane(this.map)
      this.addline(this.map)
    },
    vectorTileLayer () {
      // 创建矢量容器
      var vectorSource = new SourceVec({})
      // 创建图标特性
      var iconFeature = new Feature({
        geometry: new Point([114.164899, 22.548857], 'XY')
      })

      // 将图标特性添加进矢量中
      vectorSource.addFeature(iconFeature)
      // 创建图标样式
      var iconStyle = new Style({
        image: new Icon({
          opacity: 0.75,
          src: img
        })
      })
      // 创建矢量层
      var vectorLayer = new LayerVec({
        source: vectorSource,
        style: iconStyle
      })
      // 添加进map
      // map.addLayer(vectorLayer)
      return vectorLayer
    },
    vectorTileLayer2 () {
      // 创建矢量容器
      var vectorSource = new SourceVec({})
      // 创建图标特性
      var iconFeature = new Feature({
        geometry: new Point([114.164899, 22.448857], 'XY')
      })

      // 将图标特性添加进矢量中
      vectorSource.addFeature(iconFeature)
      // 创建图标样式
      var iconStyle = new Style({
        image: new Icon({
          opacity: 0.75,
          src: img
        })
      })
      // 创建矢量层
      var vectorLayer = new LayerVec({
        source: vectorSource,
        style: iconStyle
      })
      // 添加进map
      // map.addLayer(vectorLayer)
      return vectorLayer
    },
    addline () {
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
                width: 2,
                lineDash: null,
                lineDashOffset: 0
              })
            })
          ]
          return style
        }
      })
      // map.addLayer(linevectorLayer)// 这里是执行，执行之后点就出来了
      return linevectorLayer
    },
    addmanyline () {
      this.linelist.forEach(element => {
        this.twopoint.push(element)

        console.log(element)
      })
      for (let i = 0; i < this.linelist.length; i++) {
        if (i === 0) {
          this.twopoint.push(this.linelist[i])
        } else {
          this.twopoint.push(this.linelist[i])
          this.twopoint.push(this.linelist[i])
        }
      }
    },
    addplane (vectorSource, vectorLayer) {
      var that = this
      // 创建图标特性
      var iconFeature = new Feature({
        geometry: new Point([114.164899, that.x], 'XY')
      })

      // 将图标特性添加进矢量中
      vectorSource.addFeature(iconFeature)
      // 创建图标样式
      var iconStyle = new Style({
        image: new Icon({
          opacity: 0.75,
          src: plane
        })
      })

      vectorLayer.setSource(vectorSource)
      vectorLayer.setStyle(iconStyle)
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
