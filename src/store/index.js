import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js'

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
    news: []
  },
  mutations: {
    SET_NEWS(state, data) {
      console.log(state,data);
      state.news = data
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(response => {
          console.log(response);
          context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
});