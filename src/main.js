import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import store from "./store/index";
import Routes from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

new Vue({
  store,
  render: h => h(App),
  router: router,
}).$mount("#app");
