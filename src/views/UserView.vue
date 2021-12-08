<template>
  <div>
    <user-profile :propInfo="fetchedUser">
      <!-- 
        slot
        하위 컴포넌트를 부르는 템플릿 상에서 하위 컴포넌트의 구조를 생각할
        필요 없이(블록,인라인정도만 구분?) slot 요소 붙여서 어떤 슬롯에
        들어가는지 매칭만 해주면 됨
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
