<template>
  <div>
    <!-- <FreetownItem
      v-model="contents"
      @deleteClick="deleteFromList"
    /> -->
    <FreetownTransition2
      v-model="contents"
      @deleteClick="deleteFromList"
      @sendKakaoFeed="sendKakaoFeed"
      @sendKakaoList="sendKakaoList"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import FreetownTransition2 from '../components/FreetownTransition2.vue'
// import dataFetchingMixin from '../mixins/dataFetchingMixin.js';

export default {
  components: {
    FreetownTransition2
  },
  computed: {
    ...mapGetters(['fetchContents']),
    contents: {
      get() {
        return this.fetchContents
      },
      set(contents) {
        this.UPDATE_CONTENTS(contents);
      }
    }
  },
  // mixins: [dataFetchingMixin],
  methods: {
    ...mapActions(['UPDATE_CONTENTS']),
    /**
     * 카카오 공유하기 피드
     */
    sendKakaoFeed() {
      const content = this.fetchContents[0];
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: content.title,
          description: content.date_at,
          imageUrl: 'https://picsum.photos/200/300',
          link: {
            mobileWebUrl: 'http://192.168.0.31:8080/myWallet',
            webUrl: 'http://localhost:8080/myWallet',
          }
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: 'http://192.168.0.31:8080/myWallet',
              webUrl: 'http://localhost:8080/myWallet',
            }
          },
        ],
      });
    },
    /**
     * 카카오 공유하기 리스트
     */
    sendKakaoList() {
      if(this.fetchContents.length < 2) {
         alert('리스트 공유시 2개 이상의 콘텐츠가 필요합니다.');
         return;
      }
      const listContents = 
      this.fetchContents
      .slice(0,3)
      .map(item => ({
        title:item.title,
        description: item.date_at,
        imageUrl: 'https://picsum.photos/200/300',
        link: {
          mobileWebUrl: 'http://192.168.0.31:8080/myWallet',
          webUrl: 'http://localhost:8080/myWallet',
        }
      }));
      window.Kakao.Share.sendDefault({
        objectType: 'list',
        headerTitle: '자유마을 소식',
        headerLink: {
          mobileWebUrl: 'http://192.168.0.31:8080/myWallet',
          webUrl: 'http://localhost:8080/myWallet',
        },
        contents: [
          ...listContents
        ],
        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: 'http://192.168.0.31:8080/myWallet',
              webUrl: 'http://localhost:8080/myWallet',
            }
          },
        ],
      });
    },
     /**
     * 리스트에서 지우고 스토어 뮤테이션 발생
     */
    deleteFromList(id) {
      // console.log(id)
      const newList = this.fetchContents.filter(row => row.id !== id)
      this.UPDATE_CONTENTS(newList); //업데이트는 클라이언트 스토어만 변경됨, 서버와 fetching 필요함
    },
  },
  
};
</script>
