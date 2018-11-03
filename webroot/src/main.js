import '@babel/polyfill'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

Vue.config.productionTip = false;
Vue.component('v-icon', Icon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");