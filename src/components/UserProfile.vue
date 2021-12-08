<template>
  <div class="user-container">
    <div>
      <!-- 사용자 프로필 -->
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <div>
        <!-- {{propInfo.id}} -->
        <!-- 
          slot
          프롭스 대신 슬롯으로 지정
          자식컴포넌트에서 빈칸으로 비워놓고
          가져다 쓸 부모 컴포넌트에서 채워넣는 방식
         -->
        <slot name="username"></slot>
      </div>
      <div class="time">
        <!-- {{propInfo.created}} -->
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  //프롭스로 부모 뷰에서 받아와서 쓸 수도 있지
  //=>프롭스 대신 슬롯 쓰니까 받아올 필요없어짐
  // props: {
  //   propInfo: Object
  // },
  // computed: {
  //   ...mapGetters([
  //     'fetchedUser'
  //   ]),
  // },
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
