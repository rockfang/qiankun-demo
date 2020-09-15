<template>
  <div id="app">
    <h1>main(vue)应用</h1>

    <!-- 侧边栏 -->
    <div style="width:200px;display:flex;justify-content:space-between;margin:0 auto">
      <a @click="push('/vue1')">vue1</a>
      <a @click="push('/vue2')">vue2</a>
      <a @click="push('/purehtml')">Purehtml</a>
    </div>
    <!-- 子应用  -->
    <main id="subapp-container"></main>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    push(subapp) {
      window.history.pushState(null, subapp, subapp);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
