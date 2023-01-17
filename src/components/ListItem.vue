<template>
  <!-- <ul class="list-list"> -->
    <draggable 
      group="el"
      tag="ul"
      class="list-list"
      ghost-class="ghost"
      handle=".handle"
      :value="realValue"
      @input="input"
      @add="add"
      @remove="remove"
    >
        <li v-for="item in realValue" :key="item.id" class="post">
          <i class="fa fa-align-justify handle"></i>
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
          <div class="content-wrapper">
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
          <div class="button-wrapper">
            <button @click="emitEvent(item)">지우기</button>
          </div>
        </li>
    </draggable>
  <!-- </ul> -->
</template>

<script>
import draggable from 'vuedraggable';
export default {
  components: {
    draggable,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
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

    // listItems() {
    //   // const name = this.$route.name;
    //   // let state = this.$store.state;
    //   // switch(name) {
    //   // case 'news' : return state.news;
    //   // case 'ask' : return state.asks;
    //   // case 'jobs' : return state.jobs;
    //   // default : return undefined;
    //   // }
    //   console.log(this.$store.state.testStore.testList,33);
    //   return this.$store.state.hackerNewsStore.list;
    // },
    realValue() {
      if(this.value)
        return this.value;
      else
        return [];
    }
  },
  data() {
    return {
      slowDown: false,
    }
  },
  methods: {
    async input(newValue) {
      /**
       * When moving between 2 (nested) vue.draggable's, both fire input events for their part of the tree
       * at the same time. This might cause a race condition where the dragged element might disapear
       * from the tree since the updates arrive in the wrong order
       * 
       * To fix this we need to listen for the add & remove events of the Draggable, and check if we should
       * wait a little while before sending the update to the store.
       * 
       * Because the add & remove events are fired after the input event, we will first delay processing the input
       * event for a little while, so we will have the feedback from the add & remove events before proceeding.
       */

      return new Promise((resolve) => {
        setTimeout(async() => {
          // check if we need to slowdown
          if (this.slowdown){
            await new Promise((timer) => { setTimeout(timer, 2)});
            this.slowdown = false;
          }

          //if we are using v-model, send an input event back
          if (this.value)
            this.$emit('input', newValue)
          resolve();
        }, 1)

      })
    },
    add(e) {
      if(e.pullMode === 'clone')
        return;
      
      this.slowdown = this.isMovingUp(e);
    },
    remove(e) {
      this.slowDown = !this.isMovingUp(e);
    },
    isMovingUp(e) {
      // To determine where we are moving in the hierarchy, we will count the number of nodes in the DOM path
      // between the to and from draggable div element, using javascript's native XPath selector.
      // NB: This is done on the rendered browsers DOM outside of Vue's shadow DOM.
      let toCount = e.to.ownerDocument.evaluate('ancestor::*', e.to, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength;
      let fromCount = e.from.ownerDocument.evaluate('ancestor::*', e.from, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength;

      // now we compare the results of both the see where we are going.
      return toCount > fromCount;
    },
    emitEvent({id}) {
      this.$emit('deleteClick', id);
    }
  },
};
</script>

<style>
.ghost {
  opacity: 0.1;
  background: #c8ebfb;
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}
.content-wrapper {
  width: 80%;
}
.button-wrapper {
  width: 70px; 
  height: auto; 
  padding: 5px;
}
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
