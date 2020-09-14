<template>
  <div id="app">
    <h1>main(vue)应用</h1>

      <!-- 侧边栏 -->
      <ul class="mainapp-sidemenu">
        <li onclick="push('/react16')">React16</li>
        <li onclick="push('/react15')">React15</li>
        <li onclick="push('/vue')">Vue</li>
        <li onclick="push('/angular9')">Angular9</li>
        <li onclick="push('/purehtml')">Purehtml</li>
      </ul>
    <!-- 子应用  -->
    <main id="subapp-container"></main>
  </div>
</template>

<script>
export default {
  name: "App",
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
