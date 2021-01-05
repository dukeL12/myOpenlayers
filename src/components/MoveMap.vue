<template>
  <div id="map"></div>
</template>

<script>
import 'ol/ol.css'
import { Map, View, Feature } from 'ol'
import { Image as ImageLayer, Vector as VectorLayer } from 'ol/layer'
import { ImageStatic, Vector as VectorSource } from 'ol/source'
import { getCenter } from 'ol/extent'
import { Projection } from 'ol/proj'

import { Point } from 'ol/geom'
import { Icon, Style, Text, Fill, Stroke } from 'ol/style'

// import { websocket }  from "./mixins";
import staticMap from '@/assets/tx-icon-1.png'
import img from '@/assets/map.png'

import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

export default {
  data () {
    return {
      map: null, // 地图
      imgx: 0, // 当前地图宽
      imgy: 0, // 当前地图高
      persons: [], // 人员
      features: [],
      feature: null,
      vectorSource: new VectorSource(),
      timer: null
    }
  },
  // mixins: [websocket],
  watch: {
    persons (val) {
      if (val) {
        this.setFeature()
      }
    }
  },
  methods: {
    // 初始化地图
    initMap () {
      let extent = [0, 0, this.imgx, this.imgy]
      let projection = new Projection({
        extent: extent
      })
      let $this = this
      // 默认地图
      let mapLayer = new ImageLayer({
        source: new ImageStatic({
          url: staticMap,
          projection: projection,
          imageExtent: extent
        })
      })
      // 绘制点
      let featureLayer = new VectorLayer({
        source: this.vectorSource
      })

      //   this.map = new Map({
      //     target: 'map',
      //     layers: [
      //       mapLayer,
      //       featureLayer
      //     ],
      //     view: new View({
      //       projection: projection,
      //       center: getCenter(extent),
      //       zoom: 2,
      //       maxZoom: 18
      //     })
      //   })
      this.map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          projection: 'EPSG:4326', // 使用这个坐标系
          center: [115.892151, 28.676493], // 深圳
          zoom: 12
        })
      })
    },

    // WebSocket数据接收
    // getMessage(message) {
    // let res = JSON.parse(message.data);
    // this.persons = res.data;
    // },

    // 点
    setFeature () {
      let that = this
      that.features = []
      that.vectorSource.clear() // 先清除
      that.persons.map((item) => {
        that.feature = new Feature({
          geometry: new Point([item.x, item.y]),
          name: item.name
        })
        // 设置Feature的样式，使用小旗子图标
        that.feature.setStyle(
          new Style({
            image: new Icon({
              anchor: [0, 1],
              src: img,
              height: 20,
              width: 20
            }),
            text: new Text({
              // 位置
              textAlign: 'center',
              // 基准线
              textBaseline: 'middle',
              // 文字样式
              font: 'normal 20px 微软雅黑',
              // 文本内容
              text: item.name,
              // 文本填充样式（即文字颜色）
              fill: new Fill({ color: '#aa3300' }),
              stroke: new Stroke({ color: '#ffcc33', width: 2 })
            })
          })
        )
        that.features.push(that.feature)
      })
      that.vectorSource.addFeatures(that.features)
    }
  },
  mounted () {
    let img = new Image()
    img.src = staticMap
    let that = this
    img.onload = function (res) {
      that.imgx = res.target.width
      that.imgy = res.target.height
      that.initMap()
      // that.initWebSocket();
    }
  },
  created () {
    let that = this
    that.timer = setInterval(function () {
      that.persons = [
        {id: 1, name: '点-1', x: 115.892151, y: 28.676493, z: 0},
        {id: 2, name: '点-2', x: 725.32, y: 565.88, z: 0},
        {id: 3, name: '点-3', x: 643.24, y: 503.96, z: 0}
      ]
      console.warn(that.persons, 22)
    }, 3000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style>
#map {
  width: 100%;
  height: calc(100Vh - 50px);
}
</style>
