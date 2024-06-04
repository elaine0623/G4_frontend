<template>
<section class="section news-section">
      <div class="title-container" >
        <h2 class="news-section-title">最新消息</h2>
        <img class="title-bgi" src="../assets/image/titlebg.svg" alt="">
      </div>
        <div class="news-feild"  >
          <div class="news-feild-container" >
          <div class="news-feild" v-for="(item,index) in newsData" :key="index">
          <button class="news-collapse" type="button" v-on:click=" toggleShow(index)">
            <p class="news-date">{{newsData[index].date}}</p>
            <h2 class="news-title">{{newsData[index].title}}</h2>
              <div class="toggle-btn" v-if="newsData[index].isActive  === false">更多</div>
              <div class="toggle-btn actived" v-else>收起</div>
          </button>
          <div class="news-content" v-show="newsData[index].isActive === true">
            <a :href=newsData[index].Url target="_blank"><img :src=newsData[index].imgUrl alt="最新消息圖片"></a>
            <p class="news-para" v-if="newsData[index].isClick ===false"    v-on:click="newsData[index].isClick = !newsData[index].isClick">{{trucate(index)}}<span class='read-more-btn' v-on:click="newsData[index].isClick = !newsData[index].isClick" >...閱讀更多</span></p>
            <p class="news-para" v-else  v-on:click="newsData[index].isClick = !newsData[index].isClick" >{{newsData[index].content}}</p>
             
          </div>
        </div>
      </div>
        </div>
  </section>

</template>
<script>
export default {
  data() {
    return {
      newsData:[{
        title:'永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl:'../src/assets/image/news-img/newsimg1.png',
        content:'　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        Url:'',
        isActive:false,
        isClick:false,
        date:'2024-06-04',
      },
      {
        title:'永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl:'../src/assets/image/news-img/newsimg1.png',
        content:'　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        date:'2024-06-04',
        Url:'',
        isActive:false,
        isClick:false,
      },
      {
        title:'永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl:'../src/assets/image/news-img/newsimg1.png',
        content:'　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        date:'2024-06-04',
        Url:'',
        isActive:false,
        isClick:false,
      },
      {
        title:'永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl:'../src/assets/image/news-img/newsimg1.png',
        content:'　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        date:'2024-06-04',
        Url:'',
        isActive:false,
        isClick:false,
      }]
      
    }
  },
  methods: {
    toggleShow (index) {
      this.newsData[index].isActive= !this.newsData[index].isActive
    },
      //paragraph limit display text
      trucate (index) {
        if (this.newsData[index].content.length > 100) {
          return this.newsData[index].content.substring(0,90) ;
        }else {
          return this.newsData[index].content;
        }
      }
  },
  computed: {
    
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
  .news-feild-container {
    width: 80%;
    max-width: 1200px;
    margin: auto;
  .news-feild {
    width: 100%;
    
  .news-collapse {
    width: 100%;
    padding: 2%;
    background-color: transparent;
    border:none;
    border-bottom:1px solid $darkGreen;
    margin: 20px 25px;
    box-sizing: border-box;
    max-width: 1200px;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 10%;
    @include lg () {
      
    }
    .news-date {
      color:$darkGreen;
      font-size: 12px;
      align-self: center;
    }
    h2 {
      font-size: $fontBase;
      font-family: $titleFont;
      color:$darkGreen
    }
    .toggle-btn {
      position: relative;
      color:$darkGreen;
      font-size: 12px;
      font-family: $pFont;
      justify-self: end;
      &::before {
        position: absolute;
        top: 2px;
        left: -18px;
        content:'';
        display: inline-block;
        border-right: 2px solid $darkGreen;
        border-bottom: 2px solid $darkGreen;
        width: 8px; height: 8px;
        transform: rotate(-315deg);
      }
      }
      .actived {
        &::before{
        position: absolute;
        top: 8px;
        left: -18px;
        content:'';
        display: inline-block;
        border-right: 2px solid $darkGreen;
        border-bottom: 2px solid $darkGreen;
        width: 8px; height: 8px;
        transform: rotate(-135deg);
        }
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
    padding:  0 5%;
    margin: 0 auto;
    max-width: 1200px;
    a {
      width: 40%;
    img {
      height: 300px;
      width: 100%;
      cursor: pointer;
      }
    }
    .news-para {
      padding: 10px 10px;
      font-size: inherit;
      font-family: inherit;
      line-height:$lineheight ;
      padding: 2%;
      letter-spacing: $letterSpacing;
      width: 60%;
      .read-more-btn {
        color:$darkGreen;
        font-family: $pFont;
      }
    }

  }
}
}
}
</style>