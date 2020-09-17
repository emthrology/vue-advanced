import Vue from 'vue'
import VueRouter from 'vue-router'

// h-o-c 쓰면 팩토리패턴처럼 화면 찍어낼거니까 개별로 만들어놓은거 필요없음

import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
// import createListView from '../views/createListView.js';

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      //path: url
      //component: url-binded component
      path: '/news',
      name: 'news',
      component: NewsView,
      // component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskViwe'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
    },
    //동적 라우팅 매칭
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
})
