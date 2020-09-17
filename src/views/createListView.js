import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name){
  return {
    //재사용할 인스턴스 혹은 컴포넌트 옵션
    /*
      예를 들어,
      el: '',
      data: '',
      components: {

      },
      created() {

      }
      ...
    */
    /*
    h-o-c 에서 필요한것
    1.만들어낼 view 의 이름 (여기서는 name)
    2.공통으로 사용하는 인스턴스적 옵션 (여기서는 created() // 이 외 위에 적어놓은 것들이 포함될 수 있다.)
    3.vue에서 컴포넌트를 만드는 render 함수
    */
    name,
    created() {
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name) 
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch(error => {
          console.log(error);
        });
      },1000);    
    }  ,
    render(createElement) {
      return createElement(ListView);
    }
  }
}