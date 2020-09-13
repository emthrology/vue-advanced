import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);


/*
Vuex 기술요소
 state : 여러 컴포넌트에 공유되는 데이터 (vue의 data)
 getters : 미리 연산된 state 관련 값에 접근하는 속성 (computed)
 mutations : state 값을 변경하는 이벤트 로직or 메서드 (methods)
 actions : 비동기처리 로직 선언 (async...)
*/
export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
    user: {},
    item: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.asks;
    },
    fetchedUser(state) {
      return state.user;
    },
    fetchAskItem(state) {
      return state.item;
    }
  },
  mutations,
  actions,
});