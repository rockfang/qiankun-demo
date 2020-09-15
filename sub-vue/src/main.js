import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import VueRouter from "vue-router"
Vue.config.productionTip = false;

// eslint-disable-next-line no-undef
__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue1' : '/',//设置base
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  // storeTest(props);
  //mount方法中触发应用的渲染方法
  render(props);
}

export async function unmount() {
  //卸载应用
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

