<template>
  <ul class="list-list">
    <li v-for="item in listItems" :key="item.title" class="post">
      <!-- 분기 렌더링을 위한 임시 태그 : template / 태그속성에 v-if 디렉티브를 박는경우도 검색 -->
      <template v-if="item.points">
        <div class="points">
          {{ item.points }}
        </div>
      </template>
      <template v-else>
        <div class="points time_ago">
          {{ item.time_ago }}
        </div>
      </template>
      <div>
        <p class="list-title">
          <template v-if="item.domain">
            <a :href="item.url">{{ item.title }}</a>
          </template>
          <template v-else>
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
          </template>
        </p>
        <template v-if="item.points">
          <small>{{ item.time_ago }} </small>
          <small class="user-text">
            <router-link :to="`/user/${item.user}`" class="user-text">
              {{ item.user }}
            </router-link>
          </small>
        </template>
        <template v-else>
          <small class="user-text">
            <a :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </template>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  //   created() {
  //   //store/index.js (vuex)의 action 부분 호출
  //   //라우팅 name 속성에 따라 store에서 불러올 action을 결정
  //   const name = this.$route.name;
  //   let actionName = '';
  //   switch(name) {
  //     case 'news' : actionName = 'FETCH_NEWS';
  //       break;
  //     case 'ask' : actionName = 'FETCH_ASKS';
  //       break;
  //     case 'jobs' : actionName = 'FETCH_JOBS';
  //       break;
  //   }
  //   this.$store.dispatch(actionName);
  // },
  computed: {
    // v-for 에 뿌려줄 state 고르는 로직

    listItems() {
      // const name = this.$route.name;
      // let state = this.$store.state;
      // switch(name) {
      // case 'news' : return state.news;
      // case 'ask' : return state.asks;
      // case 'jobs' : return state.jobs;
      // default : return undefined;
      // }
      console.log(this.$store.state.testStore.testList,33);
      return this.$store.state.hackerNewsStore.list;
    },
  },
};
</script>

<style>
.list-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d44d11;
}
.time_ago {
  font-size: 10px;
}
.list-title {
  margin: 0;
}
.user-text {
  color: #828282;
}
</style>
