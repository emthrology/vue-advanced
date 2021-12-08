import axios from 'axios';

//1. Http Request & Response basic config
const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

//2. api functions
// function fetchNewsList() {
//   return axios.get(`${config.baseUrl}/news/1.json`);
// }
// function fetchAsksList() {
//   return axios.get(`${config.baseUrl}/ask/1.json`);
// }
// function fetchJobsList() {
//   return axios.get(`${config.baseUrl}/jobs/1.json`);
// }

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}/user/${userName}.json`);
}

function fetchAskItem(item) {
  return axios.get(`${config.baseUrl}/item/${item}.json`);
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}/${pageName}/1.json`);
}

export {
  // fetchNewsList, fetchAsksList, fetchJobsList,
  fetchUserInfo,
  fetchAskItem,
  fetchList,
};
