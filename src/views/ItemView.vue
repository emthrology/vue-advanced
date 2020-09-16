<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <user-profile :propInfo="fetchAskItem">
        <div slot="username">{{fetchAskItem.user}}</div>
        <template slot="time">{{fetchAskItem.time_ago}}</template>
      </user-profile>
      <!-- <div class="user-container"> 
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchAskItem.user}`">{{fetchAskItem.user}}</router-link>
          <div class="time">{{fetchAskItem.time_ago}}</div>
        </div>        
      </div> -->
    </section>    
    <section>
      <h2>{{fetchAskItem.title}}</h2>
    </section>
    <section>
      <!-- 질문 및 댓글 -->
      <!-- v-html : stirng 내 html 태그 및 특수문자 파싱 (xss 주의) -->
      <div v-html="fetchAskItem.content">
        <!-- {{fetchAskItem.content}} -->
      </div>     
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex'
export default {
  components:{
    UserProfile,
  },
  computed: {
    ...mapGetters([
      'fetchAskItem'
    ]),
  },
  created() {
    const item = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM',item);
  }
}
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items:center;
    padding: 0.5rem;
  }
  .user-description {
    padding-left: 8px;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .time {
    font-size: 0.7rem;
  }
</style>