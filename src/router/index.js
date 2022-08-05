import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

let userAgent = navigator.userAgent.toLowerCase();
let isPhone;
if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(userAgent)) {
  isPhone = true
} else {
  isPhone = false
}
const routes = [{
  path: '/',
  redirect: '/home',
},
  {
    path: '/home',
    name: 'home', //首页
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/dash',
    name: 'dash',
    component: () => import('@/views/Dashboard/index.vue'),
  },
  {
    path: '/partner',
    name: 'partner',
    component: () => import('@/views/Partner/index.vue'),
  },
  {
    path: '/Lootery',
    name: 'Lootery',
    component: () => import('@/views/Lootery/index.vue'),
  },
  {
    path: '/ido',
    name: 'ido',
    component: () => import('@/views/ido/index.vue'),
  },
  {
    path: '/charity',
    name: 'charity',
    component: () => import('@/views/charity/index.vue'),
  }]

export default new VueRouter({
  // mode: 'history',
  routes
})
