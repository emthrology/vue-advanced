import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAsksList, fetchJobsList } from '../api/index.js'

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
  },
  getters: {
    fetchedAsk(state) {
      return state.asks;
    }
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data
    },
    SET_JOBS(state, data) {
      state.jobs = data
    },
    SET_ASKS(state, data) {
      state.asks = data
    },
  },
  actions: {
    FETCH_NEWS(context) { //context: makes it possible to access current mutations, getters
      fetchNewsList()
        .then(response => {
          console.log(response);
          context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
          console.log(error);
        })
    },
    //context를 상정하고, commit이 지금 메소드의 주 사용 속성어서 distrcturing
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => commit('SET_JOBS', data))//마찬가지
        .catch(error => console.log(error));
    },
    FETCH_ASKS({ commit }) {
      fetchAsksList()
        .then(({ data }) => commit('SET_ASKS', data))
        .catch(error => console.log(error));
    },
  }
});