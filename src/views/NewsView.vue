<template>
  <div>
    <p v-for="item in this.$store.state.news" :key="item.title">
      <a :href="item.url">{{item.title}}</a>
      <small>
        {{item.time_ago}} / 
        <!-- router link 사용 -->
        <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
      </small>
    </p>
  </div>
</template>

<script>

export default {
  
  created() {
    //store/index.js (vuex)의 action 부분 호출
    this.$store.dispatch('FETCH_NEWS'); 
  }  
}
</script>

<style>

</style>