import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

const state = {
    list: [],
    news: [],
    jobs: [],
    asks: [],
    user: {},
    item: {},
  };

const getters = {
    fetchedAsk(state) {
      return state.asks;
    },
    fetchedUser(state) {
      return state.user;
    },
    fetchAskItem(state) {
      return state.item;
    },
    fetchList(state) {
      return state.list;
    },
  };


export default {
    state, mutations, actions, getters,
}