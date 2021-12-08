<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import dataFetchingMixin from '../mixins/dataFetchingMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [dataFetchingMixin],
};
</script>
