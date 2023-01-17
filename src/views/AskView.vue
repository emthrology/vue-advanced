<template>
  <div>
    <list-item 
      v-model="listItems"
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
  },
  computed: {
    ...mapGetters(['fetchList']),
    listItems: {
      get() {
        return this.fetchList
      },
      set(listItems) {
        console.log('NewsView-listITems_computed_setters: ', {listItems})
        this.UPDATE_LIST(listItems);
      }
    }
  },
};
</script>
