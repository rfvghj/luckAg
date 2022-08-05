import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import i18n from './i18n/index'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import Toast from 'vue2-toast';

import 'vue2-toast/lib/toast.css';
import "@/common/rem.js";
import "@/assets/css/animate.css";
import "@/assets/css/normalize.css";
import "@/assets/css/font.css";
import "@/assets/css/style.less";
import 'element-ui/lib/theme-chalk/index.css';

import animated from 'animate.css'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import "vue-snotify/styles/material.css"
const options = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.use(Snotify, options)
Vue.use(animated)

Vue.use(ElementUI, { locale })

// 弹框
Vue.use(Toast);
Vue.config.productionTip = false
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')

console.log(process.env.NODE_ENV)
