import {
  // fetchNewsList, fetchAsksList, fetchJobsList,
  fetchUserInfo,
  fetchAskItem,
  fetchList,
} from '../api/index.js';

export default {
  // FETCH_NEWS(context) { //context: makes it possible to access current mutations, getters
  //   fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  // //context를 상정하고, commit이 지금 메소드의 주 사용 속성어서 distrcturing
  // FETCH_JOBS({ commit }) {
  //   fetchJobsList()
  //     .then(({ data }) => commit('SET_JOBS', data))//마찬가지
  //     .catch(error => console.log(error));
  // },
  // FETCH_ASKS({ commit }) {
  //   fetchAsksList()
  //     .then(({ data }) => commit('SET_ASKS', data))
  //     .catch(error => console.log(error));
  // },

  //페이로드 포함한 actions 작성
  FETCH_USER({ commit }, userName) {
    return fetchUserInfo(userName)
      .then(response => {
        commit('SET_USER', response.data);
        return response;
      })
      .catch(error => console.log(error));
  },
  FETCH_ITEM({ commit }, item) {
    return fetchAskItem(item)
      .then(response => {
        commit('SET_ITEM', response.data);
        return response;
      })
      .catch(error => console.log(error));
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(response => {
        commit('SET_LIST', response.data);
        return response;
      })
      .catch(error => console.log(error));
  },
};
