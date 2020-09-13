<template>
  <div>
    <p>{{fetchAskItem.title}}</p>
    <p>{{fetchAskItem.user}}</p>
    <p>{{fetchAskItem.time_ago}}</p>
    <div>{{fetchAskItem.content}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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

<style>

</style>