<template>
  <div>
    <div v-for="ask in this.$store.state.asks" :key="ask.title">{{ ask.title }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asks: []
    }
  },
  created() {
    this.$store.dispatch('FETCH_ASKS'); 
  }  
}
</script>

<style>

</style>