<template>
  <div>
    <!-- <div v-for="ask in askItems" :key="ask.title">{{ ask.title }}</div> -->
    <p v-for="item in askItems" :key="item.title">
      <a :href="item.url">{{item.title}}</a>
      <small>{{item.time_ago}} / {{item.user}}</small>
    </p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
  // data() {
  //   return {
  //     asks: []
  //   }
  // },
  computed: {
    // ask() {
    //   return this.$store.state.asks;
    // }
    //mapSate 헬퍼 함수 사용
    // ...mapState({
    //   asks: state => state.asks
    // })
    //mapGetter 헬퍼 함수 사용
    ...mapGetters({
      askItems : 'fetchedAsk'
    }),
    //store 의 getters 이름 그대로 쓰고싶으면 ...mapGetters 를 배열형으로 선언하면된다
    // ...mapGetters([
    //   'fetchedAsk'
    // ])
  },
  created() {
    this.$store.dispatch('FETCH_ASKS'); 
  }  
}
</script>

<style>

</style>