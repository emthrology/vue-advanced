<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <user-profile :propInfo="fetchAskItem">
        <router-link slot="username" :to="`/user/${fetchAskItem.user}`">{{
          fetchAskItem.user
        }}</router-link>
        <template slot="time">{{ `Posted ${fetchAskItem.time_ago}` }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchAskItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 및 댓글 -->
      <!-- v-html : stirng 내 html 태그 및 특수문자 파싱 (xss 주의) -->
      <div v-html="fetchAskItem.content"></div>
    </section>
    <hr/>
    <section>
      <div v-for="comment in fetchAskItem.comments" :key="comment.id">
        <h2><router-link slot="username" :to="`/user/${comment.user}`">{{
          comment.user
        }}</router-link></h2>
        
        <div v-html="comment.content"></div>
        <hr/>
      </div>
      
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchAskItem']),
  },
  created() {
    const item = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', item);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
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
