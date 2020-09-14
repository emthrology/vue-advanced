<template>
  <div id="app">
    <!-- convention: template, 컴포넌트를 케밥케이스로 표기함  test2-->
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
  a {
    color: #34495e;
    text-decoration: none;
  }

  a.router-link-exact-active {
    text-decoration: underline;
  }

  a:hover {
    color:  #d44d11;
    text-decoration: underline;
  }

  /* Router Transitions : accepted in cascade way */
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
