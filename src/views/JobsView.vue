<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs" :key="job.title">{{ job.title }}</div> -->
    <p v-for="item in this.$store.state.jobs" :key="item.title">
      <a :href="item.url">{{item.title}}</a>
      <small>{{item.time_ago}} / {{item.domain}}</small>
    </p>
  </div>
</template>

<script>
export default {
  
  // store 에서 받아오니까 필요없음
  // data() {
  //   return {
  //     jobs: []
  //   }  
  // },
  created() {
    // fetchJobsList()
    //   .then(response => this.jobs = response.data)
    //   .catch(error => console.log(error)); 
    this.$store.dispatch('FETCH_JOBS');
  }   
}
</script>

<style>

</style>