import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index'
import car from '@/page/car/car'
import error from '@/components/error'
import shopList from '@/page/shopList/shopList'
import center from '@/page/center/center'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect:'/index',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/shopList',
      name: 'shopList',
      component: shopList
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/center',
      name: 'center',
      component: center
    },
    {
      path: '*',
      name: '404',
      component: error
    }
  ]
})
