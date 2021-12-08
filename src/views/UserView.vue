<template>
  <div>
    <user-profile :propInfo="fetchedUser">
      <!-- 
        div는 블럭요소작용, template은 아마도 테그없는 plain text 인듯 하다
        =>template 을 span으로 바꿈 
       -->
      <div slot="username">{{ fetchedUser.id }}</div>
      <span slot="time">{{ `Joined ${fetchedUser.created}` }}, </span>
      <span slot="karma">{{ `${fetchedUser.karma} karma` }}</span>
    </user-profile>
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
    ...mapGetters(['fetchedUser']),
  },
  created() {
    const userName = this.$route.params.id;
    //페이로드 전달방식 복습
    this.$store.dispatch('FETCH_USER', userName);
  },
};
</script>

<style></style>
