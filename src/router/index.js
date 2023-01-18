import Vue from 'vue';
import VueRouter from 'vue-router';

import bus from '../utils/bus.js';
import { store } from '../store/index.js';

// h-o-c 쓰면 팩토리패턴처럼 화면 찍어낼거니까 개별로 만들어놓은거 필요없음

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '../views/createListView.js';
import FreeTownView from '../views/FreeTownView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', //URL 상의'#'기호를 없애주는 모드..
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
      //router navigation guard 적용.
      beforeEnter: (to, from, next) => {
        // console.log('to',to);
        // console.log('from',from);
        // console.log('next',next);
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            //인증값 이나 validation 로직 처리 후 next()를 보통 호출한다
            next();
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskViwe'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('ask fetched');
            //인증값 이나 validation 로직 처리 후 next()를 보통 호출한다
            next();
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            //인증값 이나 validation 로직 처리 후 next()를 보통 호출한다
            next();
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    {
      path: '/myWallet',
      name: 'myWallet',
      component: FreeTownView,
      
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
  ],
});
