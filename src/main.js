import Vue from 'vue'
import App from './App.vue'
require('./assets/main.css')

import "chart.js";
import "hchs-vue-charts";

Vue.use(window.VueCharts);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
