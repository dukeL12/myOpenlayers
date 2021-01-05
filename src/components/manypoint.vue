<!--
 * @Author: your name
 * @Date: 2021-01-04 18:23:50
 * @LastEditTime: 2021-01-05 11:41:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \first\src\components\manypoint.vue
-->
<template>
    <div>
            <div id="map-div" style="width:auto;height:600px;">
              <!-- 弹出窗体 -->
    </div>
    </div>
</template>

<script>
import { Vector as SourceVec, Cluster } from 'ol/source'
import { Feature, Map, View } from 'ol'
import { Point, Polygon } from 'ol/geom'
import { Style, Icon, Stroke, Fill, Text, Circle } from 'ol/style'

import { Vector as LayerVec } from 'ol/layer'
import Overlay from 'ol/Overlay'
import 'ol/ol.css'
import LineString from 'ol/geom/LineString'
import {fromExtent} from 'ol/geom/Polygon'
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
      pointlist: [
        [114.164899, 22.548857],
        [114.164899, 22.448857]
      ]
    }
  },
  mounted () {
    //加载天地图
    //第二次测试
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
    this.massiveFature(this.map)
    this.addrect(this.map)
    this.timer = setInterval(() => {
      if (this.flag === 1) {
        _this.x = _this.x + 0.001
      }
      if (this.flag === 2) {
        _this.x = 22.448857
      }
      var geometry = new Point([114.164899, _this.x], 'XY')
      iconFeature.setGeometry(geometry)
    }, 2000)
  },
  destroyed () {
    if (this.timer) { // 注意在vue实例销毁前，清除我们的定时器
      clearInterval(this.timer)
    }
  },
  methods: {
    massiveFature (map) {
      // 坐标
      var lnglats = [
        [114.154899, 22.438857],
        [114.153899, 22.448857],
        [114.153899, 22.438857],
        [114.154899, 22.428857],
        [114.152899, 22.448857],
        [114.154899, 22.448857]
      ]
      // 创建Feature对象集合
      var features = []
      for (var i = 0; i < lnglats.length; i++) {
        features.push(new Feature({
          geometry: new Point(lnglats[i])
        }))
      }
      // 矢量要素数据源
      var source = new SourceVec({
        features: features
      })
      // 聚合标注数据源
      var clusterSource = new Cluster({
        distance: 40,
        source: source
      })
      // 加载聚合标注的矢量图层
      var styleCache = {} // 用于保存特定数量的聚合群的要素样式
      var clusters = new LayerVec({
        source: clusterSource,
        style: function (feature, resolution) {
          var size = feature.get('features').length // 获取该要素所在聚合群的要素数量
          var style = styleCache[size]
          console.log(size)
          if (!style) {
            style = [
              new Style({
                image: new Circle({
                  radius: 10,
                  stroke: new Stroke({
                    color: '#fff'
                  }),
                  fill: new Fill({
                    color: '#3399CC'
                  })
                }),
                text: new Text({
                  text: size.toString(),
                  fill: new Fill({
                    color: '#fff'
                  })
                })
              })
            ]
            styleCache[size] = style
          }
          return style
        }
      })
      //
      map.addLayer(clusters)
    },
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
    addrect (map) {
      // 根据范围获取多边形
      var Rectangle = new Feature({
        geometry: new Polygon([[[114.154899, 22.438857], [114.153899, 22.437857], [114.158899, 22.436857]]])
      })

      Rectangle.setStyle(new Style({
        fill: new Fill({
          color: 'rgba(33,33,33,0.5)'
        }),
        stroke: new Stroke({
          color: '#ffcc33',
          width: 4
        }),
        image: new Circle({
          radius: 7,
          fill: new Fill({
            color: '#ffcc33'
          })
        })
      }))

      // 实例化一个矢量图层Vector作为绘制层
      var source = new SourceVec({
        features: [Rectangle]
      })
      // 创建一个图层
      var vector = new LayerVec({
        source: source
      })
      map.addLayer(vector)
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
