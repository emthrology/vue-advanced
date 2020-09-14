<template>
  <div>
    <ul class="jobs-list">
      <li v-for="item in this.$store.state.jobs" :key="item.title" class="post">
        <div class="time-ago">
          {{item.time_ago}}
        </div>
        <div>
          <p class="jobs-title">
            <a :href="item.url">{{item.title}}</a>
          </p>
          <small class="jobs-domain">
            <a :href="item.url">
              {{item.domain}}
            </a>            
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
  .jobs-list {
    margin: 0;
    padding: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .time-ago {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d44d11;
    font-size: 10px;
  }
  .jobs-title {
    margin: 0;

  }
  .jobs-domain {
    color: #828282;
  }
</style>