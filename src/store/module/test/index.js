import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';

Vue.use(Vuex);

const state = {
    testList: ['a','b','c'],
  };

const getters = {
    getTestList(state) {
        return state.list;
    }
  };


export default {
    state, mutations, getters,
}