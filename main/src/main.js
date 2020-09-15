import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld"
Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [
  {
    path: "/home",
    name: "home",
    component: HelloWorld
  },]

const router = new VueRouter({
  mode: 'history',
  routes
})
/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

registerMicroApps([
  {
    name: 'sub-vue',
    entry: '//localhost:7001/main.js',
    // entry: { scripts: ['//localhost:7001/main.js'] },
    container: '#subapp-container',
    activeRule: genActiveRule('/vue1'),
  }, {
    name: 'sub-vue2',
    entry: '//localhost:7002',
    // entry: { scripts: ['//localhost:7002'] },
    container: '#subapp-container',
    activeRule: genActiveRule('/vue2'),
  },{
    name: 'purehtml',
    entry: '//localhost:7003',
    // entry: { scripts: ['//localhost:7002'] },
    container: '#subapp-container',
    activeRule: genActiveRule('/purehtml'),
  },
],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  });

setDefaultMountApp("vue1")
start();