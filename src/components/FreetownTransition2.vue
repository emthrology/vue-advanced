<template>
  <div>
    <div class="container mx-auto">
      <!-- 1 -->
      <div class="m-4 mt-6 mb-3 relative text-bold text-xl text-bold pb-2 border border-b-gray-200 border-white">         
        <div class="right-0 absolute text-sm text-gray-400 rounded">더보기
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        내 지갑
      </div>
      <draggable
        group="group"
        tag="ul" 
        ghost-class="ghost"
        handle=".handle"
        :value="realValue"
        @input="input"
        @add="add"
        @remove="remove"
        @start="drag = true"
        @end="drag = false"
      >
        <transition-group type="transition" :name="'list'">
          <li v-for="row in realValue" :key="row.id">
            <div class="flex m-4">
              <div class="mt-4 mr-2">
                <i class="fa fa-align-justify handle"></i>
              </div>
              <div class="flex-shrink-0 sm:mb-0 mr-4">
                <img class="w-20 h-20 border border-gray-300 bg-white text-gray-300" src="https://picsum.photos/200/300" />
              </div>
              <div>
                <p class="text-md text-gray-800 font-semibold mt-1 p-0">{{ row.title }}</p>
                <div class="right-0 text-gray-800 text-sm">{{ row.date_at }}</div>
                <div class="flex gap-2 text-gray-500 h-[1.25rem] bg-gray-100 px-2 rounded-full py-0.5 mr-auto mt-0.5" data-v-187e7972=""><div class="flex gap-1 text-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="eye_svg__w-6 eye_svg__h-6 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <span>8</span></div> <div class="flex gap-1 text-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="chat_svg__w-6 chat_svg__h-6 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"></path></svg> <span>0</span></div> <div class="flex gap-1 text-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hand-thumb-up_svg__w-6 hand-thumb-up_svg__h-6 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.53 4.53 0 01-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665 8.97 8.97 0 00.654 3.375z"></path></svg> <span>0</span></div></div>
              </div>
              <div class="absolute right-0 mr-1 mt-4">
                <button class="bg-gray-300 focus:bg-red-300 text-white font-bold w-18 h-9 py-2 px-2 rounded" @click="emitEvent('deleteClick', row)">지우기</button>
              </div>
            </div>
          </li>
        </transition-group>
      </draggable>
        <div class="flex flex-row justify-center space-x-2 py-4">
          <button class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
            @click="emitEvent('sendKakaoFeed')"
          >
            공유하기(피드)
          </button>
          <button class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
            @click="emitEvent('sendKakaoList')"
          >
            공유하기(리스트)
          </button>
        </div>
    </div>      
  </div>
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
  computed: {
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
      drag: false,
    }
  },
  methods: {
    
    async input(newValue) {
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
    emitEvent(eventName, item = undefined) {
      this.$emit(eventName, item? item.id : undefined);
    },
    beforeLeave(el) {
      const { marginLeft, marginTop, width, height } = window.getComputedStyle(
        el
      );
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
      el.style.width = width;
      el.style.height = height;
    }
  }
}
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


.list-leave-active {
  @apply absolute transform-gpu transition duration-1000
}
.list-leave {
  @apply opacity-100 translate-x-0 transition duration-1000
}
.list-leave-to {
  @apply opacity-0 -translate-x-full transition duration-1000
}

</style>