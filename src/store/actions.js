import { fetchNewsList, fetchAsksList, fetchJobsList } from '../api/index.js'

export default {
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