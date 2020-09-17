import { fetchNewsList, fetchAsksList, fetchJobsList, fetchUserInfo, fetchAskItem } from '../api/index.js'

export default {
FETCH_NEWS(context) { //context: makes it possible to access current mutations, getters
  fetchNewsList()
    .then(response => {
      context.commit('SET_NEWS', response.data);
      return response;
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
//페이로드 포함한 actions 작성
FETCH_USER({ commit }, userName) {
  fetchUserInfo(userName)
    .then(({ data }) => commit('SET_USER', data))
    .catch(error => console.log(error));
},
FETCH_ITEM({ commit }, item) {
  fetchAskItem(item)
    .then(({ data }) => commit('SET_ITEM',data))
    .catch(error => console.log(error));
}

}