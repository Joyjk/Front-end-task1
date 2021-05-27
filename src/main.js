import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './Store'


import VueRouter from 'vue-router'


import Home from './components/Home.vue'
import Login from './components/Login.vue'
import ModelData from './components/ModelData.vue'
import AddDevice from './components/AddDevice.vue'



Vue.use(VueRouter);
const routes = [
  {path:'/home', component:Home},
  {path:'/', component:Login},
  {path:'/modeldata/:brandid/:name', component:ModelData},
  {path:'/add/:typeid', component:AddDevice},

]

const router =  new VueRouter({
  mode:'history',
  routes
})


Vue.config.productionTip = false

new Vue({
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')
