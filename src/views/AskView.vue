<template>
  <div>
    <ul class="asks-list">
      <li v-for="item in askItems" :key="item.title" class=post> 
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
          </p>
          <small>{{item.time_ago}} </small>
          <small class="user-id">            
            <router-link :to="`/user/${item.user}`" class="user-id">
              {{item.user}}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
  .asks-list {
    margin: 0;
    padding: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d44d11;
  }
  .ask-title {
    margin: 0;

  }
  .user-id {
    color: #828282;
  }
</style>