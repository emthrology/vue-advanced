<template>
  <div id="app">
    <!-- convention: template, 컴포넌트를 케밥케이스로 표기함  test-->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
</style>
