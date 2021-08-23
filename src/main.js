import Vue from 'vue'
import App from './App.vue'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

import 'axios'

import {
  VuejsDatatableFactory
} from 'vuejs-datatable';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";


import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";


Vue.use(VuejsDatatableFactory);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')