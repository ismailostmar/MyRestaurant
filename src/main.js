import Vue from 'vue';
import App from './App.vue';
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue';
import 'axios';
import {
  VuejsDatatableFactory
} from 'vuejs-datatable';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import * as VueGoogleMaps from 'vue2-google-maps';


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCAEvHBJUkh01sEx3WSDf6gN-Ne366VERo',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})

Vue.use(VuejsDatatableFactory);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')