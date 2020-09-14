<template>
  <ul class="news-list">
      <li v-for="item in this.$store.state.news" :key="item.title" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a :href="item.url">{{item.title}}</a>
          </p>
          <small>{{item.time_ago}} </small>
          <small class="user-text">            
            <router-link :to="`/user/${item.user}`" class="user-text">
              {{item.user}}
            </router-link>
          </small> 
        </div>
      </li>
    </ul>
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
  .news-list {
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
  .news-title {
    margin: 0;

  }
  .user-text {
    color: #828282;
  }
</style>