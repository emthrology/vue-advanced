import axios from 'axios';

//1. Http Request & Response basic config
const config = {
  baseUrl: 'https://api.hnpwa.com/v0'
}

//2. api functions
const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}/news/1.json`)      
}
const fetchAsksList = () => {
  return axios.get(`${config.baseUrl}/ask/1.json`)
}
const fetchJobsList = () => {
  return axios.get(`${config.baseUrl}/jobs/1.json`)
}

export {
  fetchNewsList, fetchAsksList, fetchJobsList
}