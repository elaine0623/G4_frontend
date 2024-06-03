<template>
<swiper
    :loop="true"
    :navigation="true"
    :modules="modules"
    :pagination="{ clickable: true }"
    :slides-per-view="2"
    :space-between="10"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    @slideChange="onSlideChange"
    class="mySwiper"
  >
    <swiper-slide class="productItem" v-for="(item,index) in newsData" :key="index">
      <div >
        <img :src=newsData[index].imgUrl alt="">
        <div class="product-content">
          <h2 class="product-title">{{newsData[index].title}}</h2>
          <p>{{newsData[index].content}}</p>
        </div>
      </div>
      </swiper-slide>
  </swiper>

  <section class="section news-section">
      <div class="title-container" >
        <h2 class="news-section-title">最新消息</h2>
        <img class="title-bgi" src="../assets/image/titlebg.svg" alt="">
      </div>
      <TransitionGroup name="coll">
        <div class="news-feild"  v-for="(item,index) in newsData" :key="index">
          <button class="news-collapse" type="button" v-on:click=" toggleShow(index)">
            <h2 class="news-title">{{newsData[index].title}}</h2>
          </button>
          <div class="news-content" v-show="newsData[index].isActive === true">
            <img  class="news-content" :src=newsData[index].imgUrl  alt="">
            <p>{{newsData[index].content}}
              <a :href=newsData[index].Url>閱讀更多</a>
            </p>
          </div>
        </div>
      </TransitionGroup>
  </section>

</template>
<script>
//Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules 
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default {
  data() {
    return {
      newsData:[{
        title:'永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl:'../src/assets/image/news-img/newsimg1.png',
        content:'　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        Url:'',
        isActive:false,
      },
      {
        title:'永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl:'../src/assets/image/news-img/newsimg1.png',
        content:'　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        Url:'',
        isActive:false,
      },
      {
        title:'永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl:'../src/assets/image/news-img/newsimg1.png',
        content:'　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        Url:'',
        isActive:false,
      },
      {
        title:'永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl:'../src/assets/image/news-img/newsimg1.png',
        content:'　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        Url:'',
        isActive:false,
      }]
      
    }
  },
  methods: {
    toggleShow (index) {
      this.newsData[index].isActive= !this.newsData[index].isActive
    }
    
  },
  computed: {
    
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  
  setup() {
    const onSlideChange = () => {
      // console.log("slide change");
    };
    return {
      onSlideChange,
      modules: [Autoplay, Navigation, Pagination],
    };
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base/_color.scss';
@import '@/assets/scss/base/_font.scss';
@import '@/assets/scss/base/_reset.scss';
@import '@/assets/scss/base/_var.scss';
.news-section {
  .title-container{
    position: relative; 
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 5vw 5vh;
    box-sizing: border-box;
  .news-section-title{
    writing-mode: horizontal-tb;
    font-family: $titleFont;
    font-size: map-get($title, h2 );
    text-align: center;
    color: $darkGreen;

  }
  .title-bgi {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    max-width: 900px;
  }
}
  //news fields 
  .news-feild {
    width: 100%;
  .news-collapse {
    width: 100%;
    padding: 2%;
    background-color: transparent;
    border:1px solid $darkGreen;
    margin: 20px 25px;
    box-sizing: border-box;
    max-width: 1200px;
    cursor: pointer;
    h2 {
      font-size: $fontBase;
      font-family: $titleFont;
      color:$darkGreen
    }
  }
  //fade in and fade animation
  .coll-enter-active,
.coll-leave-active {
  transition: all 0.5s ease;
}
.coll-enter-from,
.coll-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
  .news-content {
    width: 100%;
    display: flex;
    padding:  0 2%;
    margin: 0 auto;
    max-width: 1200px;
    img {
      height: 300px;
    }
    p {
      padding: 10px 10px;
      font-size: inherit;
      font-family: inherit;
      line-height:$lineheight ;
      padding: 2%;
      letter-spacing: $letterSpacing;
      position: relative;
      > a {
        color: $darkGreen;
        text-decoration: none;
        position: absolute;
        bottom: 0;
        right: 5px;
        &:after {
          content: '';
          width:100%;
          display: inline-block;
          border-bottom:0.1px solid $darkGreen;
          position: absolute;
          bottom: -1px;
          left:0 ;
        }
        

      }
    }

  }
}
}
</style>