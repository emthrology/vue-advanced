<template>
  <div>
    <p>{{fetchedUser.id}}</p>
    <p>{{fetchedUser.karma}}</p>
    <p>{{fetchedUser.created}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'fetchedUser'
    ]),
  },
  created() {
    const userName = this.$route.params.id;
    //페이로드 전달방식 복습
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>

<style>

</style>