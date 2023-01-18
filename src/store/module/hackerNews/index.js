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
    contents: [
      { 
        id : 1,
        title : '1 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 2,
        title : '2 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 3,
        title : '3 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 4,
        title : '4 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 5,
        title : '5 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 6,
        title : '6 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 7,
        title : '7 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 8,
        title : '8 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 9,
        title : '9 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 10,
        title : '10 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 11,
        title : '11 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 12,
        title : '12 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 13,
        title : '13 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 14,
        title : '14 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
       { 
        id : 15,
        title : '15 대한민국을 응원합니다!',
        content : '간단한 글 내용입니다.',
        date_at : '2023-01-14'
       },
    ]
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
    fetchContents(state) {
      return state.contents;
    }
  };


export default {
    state, mutations, actions, getters,
}