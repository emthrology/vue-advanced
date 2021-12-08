import bus from '../utils/bus.js';

export default {
  //재사용할 컴포넌트 옵션
  // created() {
  //   bus.$emit('start:spinner');
  //   this.$store.dispatch('FETCH_LIST', this.$route.name)
  //   .then(() => {
  //     console.log('fetched');
  //     bus.$emit('end:spinner');
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }
  mounted() {
    bus.$emit('end:spinner');
  },
};

/*
 hoc와 mixin 은 공통코드를 줄이고자하는 목적은 같고 구현방식도 매우 유사하다
 hoc는 불필요한 views 파일의 생성을 줄이는 대신 페이지 상 depth 가 깊어져서 'dom 간 통신'?이 까다로워질 수 있다.
 mixin은 개별 페이지는 생성하고 딱 중복되는 코드만 맡기는 식이고 mixin을 view 에서 적용시키기도 간편하다. depth도 깊어지지 않는다.
 minin의 단점은 개별 페이지가 완전히 동일한 일을 할 때도 그대로 생성이 되어야 한다는 점이다..?
*/

/*
  [데이터 호출 시점]
    1.라우터 네비게이션 가드
      특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)
    2.컴포넌트 라이프 사이클 훅
      e.g. created : (컴포넌트가 생성)되자마자 호출되는 로직

*/
