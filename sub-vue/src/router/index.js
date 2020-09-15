import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // 懒加载影响子应用路由跳转!!
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")

    // component: About

  }
];

export default routes;
