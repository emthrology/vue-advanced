<template>
  <div>
    <div v-for="user in this.$store.state.news" :key="user.title">{{ user.title }}</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    //store/index.js (vuex)의 action 부분 호출
    this.$store.dispatch('FETCH_NEWS'); 
  }  
}
</script>

<style>

</style>