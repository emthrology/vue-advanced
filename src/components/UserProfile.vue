<template>
  <div class="user-container"> 
    <div>
      <!-- 사용자 프로필 -->
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <div>
        {{propInfo.id}}
      </div>
      <div class="time">{{propInfo.created}}</div>
    </div>        
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  //프롭스로 부모 뷰에서 받아와서 쓸 수도 있지
  props: {
    propInfo: Object
  },
  // computed: {
  //   ...mapGetters([
  //     'fetchedUser'
  //   ]),
  // },
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