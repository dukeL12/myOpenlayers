<template>
<div>
    <div id="map-div" style="width:800px;height:500px;">
              <!-- 弹出窗体 -->
    </div>
        <div id="test">
      <div class="font" style="color:blue;font-size:20px;"></div>
      <div id="css_animation"></div>
    </div>
</div>
</template>

<script>
import { Vector as SourceVec } from 'ol/source'
import { Feature, Map, View } from 'ol'
import { Point } from 'ol/geom'
import { Style, Icon } from 'ol/style'
import { Vector as LayerVec } from 'ol/layer'
import Overlay from 'ol/Overlay'
import 'ol/ol.css'

import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import img from '@/assets/mark.png'
export default {
  data () {
    return {
      map: null
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      this.map = new Map({
        target: 'map-div',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          projection: 'EPSG:4326', // 使用这个坐标系
          center: [114.164899, 22.548857], // 深圳
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
      this.vectorTileLayer(this.map)
      this.vectorTileLayer2(this.map)
    },
    vectorTileLayer (map) {
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
      map.addLayer(vectorLayer)
    },
    vectorTileLayer2 (map) {
      // 创建矢量容器
      var vectorSource = new SourceVec({})
      // 创建图标特性
      var iconFeature = new Feature({
        geometry: new Point([114.064899, 22.448857], 'XY')
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
      map.addLayer(vectorLayer)
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
