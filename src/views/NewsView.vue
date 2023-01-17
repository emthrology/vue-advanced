<template>
  <div>
    <list-item 
      v-model="listItems"
      @deleteClick="deleteFromList"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
import dataFetchingMixin from '../mixins/dataFetchingMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [dataFetchingMixin],
  methods: {
    ...mapActions(['UPDATE_LIST']),
    /**
     * 리스트에서 지우고 스토어 뮤테이션 발생
     */
    deleteFromList(id) {
      const newList = this.fetchList.filter(item => item.id !== id)
      this.UPDATE_LIST(newList); //업데이트는 클라이언트 스토어만 변경됨, 서버와 fetching 필요함
    },
  },
  computed: {
    ...mapGetters(['fetchList']),
    listItems: {
      get() {
        return this.fetchList
      },
      set(listItems) {
        // console.log('NewsView-listITems_computed_setters: ', {listItems})
        this.UPDATE_LIST(listItems);
      }
    }
  },
};
</script>
