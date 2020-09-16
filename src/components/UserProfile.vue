<template>
  <div class="user-container"> 
    <div>
      <!-- 사용자 프로필 -->
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <div>
        {{fetchedUser.id}}
      </div>
      <div class="time">{{fetchedUser.created}}</div>
    </div>        
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