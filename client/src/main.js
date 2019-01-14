// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import * as d3 from 'd3'
import 'bootstrap/dist/css/bootstrap.css'
import './style/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfo, faPaintBrush, faDesktop, faHistory } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
global.jQuery = jQuery

library.add(faHistory, faDesktop, faInfo, faPaintBrush)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
