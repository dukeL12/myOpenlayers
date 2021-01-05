/*
 * @Author: your name
 * @Date: 2020-09-25 12:40:26
 * @LastEditTime: 2021-01-05 11:44:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \first\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import ThreeLayout from '@/components/ThreeLayout'
import map from '@/components/map'
import MoveMap from '@/components/MoveMap'
import maptest from '@/view/maptest'
import move from '@/components/move'
import line from '@/components/line'
import pointshow from '@/components/pointshow'
import manypoint from '@/components/manypoint'
import linemove from '@/components/linemove'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/ThreeLayout',
      name: 'ThreeLayout',
      component: ThreeLayout
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/MoveMap',
      name: 'MoveMap',
      component: MoveMap
    },
    {
      path: '/maptest',
      name: 'maptest',
      component: maptest
    },
    {
      path: '/line',
      name: 'line',
      component: line
    },
    {
      path: '/move',
      name: 'move',
      component: move
    },
    {
      path: '/pointshow',
      name: 'pointshow',
      component: pointshow
    },
    {
      path: '/manypoint',
      name: 'manypoint',
      component: manypoint
    },
    {
      path: '/linemove',
      name: 'linemove',
      component: linemove
    }
  ]
})
