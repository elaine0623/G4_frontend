<template>
  <section class="section news-section">
    <div class="title-container">
      <h2 class="section-title">最新消息</h2>
      <img class="title-bgi" src="../assets/image/titlebg.svg" alt="">
    </div>
    <div class="news-feild">
      <div class="news-feild-container">
        <div class="news-feild-items" v-for="(item, index) in newsData" :key="index">
          <button class="news-collapse" type="button" v-on:click=" toggleShow(index)">
            <p class="news-date">{{ newsData[index].date }}</p>
            <h2 class="news-title">{{ newsData[index].title }}</h2>
            <div class="toggle-btn" v-if="newsData[index].isActive === false">更多</div>
            <div class="toggle-btn actived" v-else>收起</div>
          </button>
          <div class="news-content" v-show="newsData[index].isActive === true">
            <a :href=newsData[index].Url target="_blank"><img :src=newsData[index].imgUrl alt="最新消息圖片"></a>
            <p class="news-para" v-if="newsData[index].isClick === false">{{ trucate(index) }}<span
                class='read-more-btn' v-on:click="newsData[index].isClick = !newsData[index].isClick">...閱讀更多</span></p>
            <p class="news-para" v-else v-on:click="newsData[index].isClick = !newsData[index].isClick">
              {{ newsData[index].content }}</p>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- chat robot -->
  <!-- <div class="chat-robot">
    <div class="chat-robot-btn" @click="chatToggle()">
      <img class='chat-icon' src="../assets/image/news-img/chat-icon.png" alt="對話圖示">
    </div> -->
  <!-- <div class="close-chat-btn"></div> -->
  <!-- chat field -->
  <!-- <div class="chat-field" v-show="isrobBtn === true">
      <div class="chat-intro-field">
        <h2 class="chat-title">客服小助手</h2>
        <p class="chat-intro">您好!如果有任何問題或要求，請隨時跟我們聯絡。</p>
      </div>
      <input type="text" name="" placeholder="請輸入關鍵字" v-model="chatMeg" required>
      <button class="submit-btn" v-on:click.prevent="userMeg()"><i class="fa-solid fa-paper-plane"
          style="color: #144433;"></i></button>

      <div class="chat-area">
        <p class="text" v-for="item in chatData" :key="item"
          :class="{ user: item.author === 'user', robot: item.author !== 'user' }">
          {{ item.message }}
        </p>
      </div>
    </div>
  </div> -->

  <!-- go up btn 
<div class="go-up-btn">
  <a href="#">TOP</a>
</div>-->
</template>
<script>
export default {
  data() {
    return {
      isrobBtn: false,
      chatMeg: '',
      chatData: [{
        message: '您好!',
        author: 'robot',
      },
      {
        message: '您好!',
        author: 'user',
      },
      {
        message: '您好!',
        author: 'robot',
      }


      ],
      newsData: [{
        title: '永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl: '../src/assets/image/news-img/newsimg1.png',
        content: '　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        Url: '',
        isActive: false,
        isClick: false,
        date: '2024-06-04',
      },
      {
        title: '永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl: '../src/assets/image/news-img/newsimg1.png',
        content: '　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        date: '2024-06-04',
        Url: '',
        isActive: false,
        isClick: false,
      },
      {
        title: '永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl: '../src/assets/image/news-img/newsimg1.png',
        content: '　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        date: '2024-06-04',
        Url: '',
        isActive: false,
        isClick: false,
      },
      {
        title: '永續食農 傳承共榮，第一屆國家食農教育傑出貢獻獎啟動徵選',
        imgUrl: '../src/assets/image/news-img/newsimg1.png',
        content: '　　食農教育法在111年5月4日經總統令公布2周年來，農業部積極落實食農教育法，陸續完備相關法規及推動計畫、建置食農教育資訊整合平台、發展食農教育主題教材140餘項；及依產業特性，輔導公私部門辦理食農教育推廣計畫、食農教育創新整合計畫、農村產業跨域計畫及農村亮點計畫、推動食米學園計畫及食魚教育推廣計畫等各項食農教育計畫，該部並依國家食農教育傑出貢獻獎獎勵辦法規定，於本年度辦理「第一屆國家食農教育傑出貢獻獎」，藉此獎勵我國從事食農教育推動者，並期待透過中央與地方共同合作，評選出國內從事食農教育具傑出貢獻者，並公開頒獎表揚，藉此激發全國優質食農教育工作者榮譽感，促進食農教育永續發展。',
        date: '2024-06-04',
        Url: '',
        isActive: false,
        isClick: false,
      }]

    }
  },
  methods: {
    toggleShow(index) {
      this.newsData[index].isActive = !this.newsData[index].isActive
    },
    //paragraph limit display text
    trucate(index) {
      if (this.newsData[index].content.length > 100) {
        return this.newsData[index].content.substring(0, 90);
      } else {
        return this.newsData[index].content;
      }
    },
    userMeg() {
      if (this.chatMeg === '') {
        return
      } else {
        this.chatData.push({ message: this.chatMeg, author: 'user' });
        this.chatMeg = '';
        console.log(this.chatData)
      }
    },
    chatToggle() {
      this.isrobBtn = !this.isrobBtn;
    }
  },
  computed: {
    //enven num compute 
    evenNums() {
      return this.chatData.filter(number => number % 2 === 0)
    },
    oddNums() {
      return this.chatData.filter(number => number % 2 !== 0)
    }

  },


}
</script>
<style lang="scss" scoped>
.news-section {
  padding: 40px 0;

  .title-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 5vw 5vh;
    box-sizing: border-box;

    .news-section-title {
      writing-mode: horizontal-tb;
      font-family: $titleFont;
      font-size: map-get($title, h2);
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

  .news-feild {
    width: 100%;

    .news-feild-container {
      width: 80%;
      max-width: 1200px;
      margin: auto;

      @include lg() {
        width: 100%;
        margin: auto
      }

      .news-feild-items {
        width: 100%;

        .news-collapse {
          width: 100%;
          padding: 2%;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid $darkGreen;
          margin-top: 20px;
          box-sizing: border-box;
          max-width: 1200px;
          cursor: pointer;
          position: relative;
          display: flex;
          justify-content: space-between;
          gap: 10%;

          @include md () {
            flex-direction: column;
            gap: 10px;

          }

          .news-date {
            color: $darkGreen;
            font-size: 12px;
            align-self: center;

            @include md () {
              align-self: center;
            }
          }

          h2 {
            font-size: $fontBase;
            font-family: $titleFont;
            color: $darkGreen;

            @include md () {
              align-self: center;
            }
          }

          .toggle-btn {
            position: relative;
            color: $darkGreen;
            font-size: 12px;
            font-family: $pFont;
            justify-self: end;

            @include md () {
              align-self: flex-end;
            }

            &::before {
              position: absolute;
              top: 2px;
              left: -18px;
              content: '';
              display: inline-block;
              border-right: 2px solid $darkGreen;
              border-bottom: 2px solid $darkGreen;
              width: 8px;
              height: 8px;
              transform: rotate(-315deg);
            }
          }

          .actived {
            &::before {
              position: absolute;
              top: 8px;
              left: -18px;
              content: '';
              display: inline-block;
              border-right: 2px solid $darkGreen;
              border-bottom: 2px solid $darkGreen;
              width: 8px;
              height: 8px;
              transform: rotate(-135deg);
            }
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
        margin: 10px auto;
        max-width: 1200px;

        @include md () {
          flex-direction: column;
        }

        a {
          width: 40%;
          overflow: hidden;

          @include md () {
            width: 90%;
            margin: auto;
          }

          img {
            width: 100%;
            cursor: pointer;
          }
        }

        .news-para {
          padding: 10px 10px;
          font-size: inherit;
          font-family: inherit;
          line-height: $lineheight ;
          padding: 2%;
          letter-spacing: $letterSpacing;
          width: 60%;

          @include md () {
            width: 90%;
            margin: auto;
          }

          .read-more-btn {
            color: $darkGreen;
            font-family: $pFont;
          }
        }

      }
    }
  }

}

.chat-robot {
  position: sticky;
  left: 20px;
  bottom: 20px;
  width: 110px;
  height: 110px;
  z-index: 101;

  .chat-robot-btn {
    position: relative;
    width: 110px;
    height: 110px;
    border-radius: 100%;
    border: 1px solid $darkGreen;
    background-color: #fff;
    background-image: url(../assets/image/news-img/chat-robot-img.png);
    background-position: 20px center;
    background-repeat: no-repeat;
    position: relative;
    cursor: pointer;

    .chat-icon {
      position: absolute;
      right: 15px;
      top: 20px;
      cursor: pointer;
    }

  }
}

// chat field 
.chat-field {
  width: 450px;
  bottom: 120px;
  left: 55px;
  position: absolute;
  border-radius: 20px;
  border: 1px solid $darkGreen;

  .chat-intro-field {
    text-align: center;
    background-color: $darkGreen;
    color: #fff;
    padding: 30px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;

    .chat-title {
      margin-bottom: 35px;
      font-size: $fontBase;
      font-family: inherit;
    }

    .chat-intro {
      font-size: 12px;
    }
  }

  input[type="text"] {
    position: absolute;
    top: 110px;
    right: 50%;
    transform: translateX(50%);
    width: 80%;
    padding: 10px 25px 10px 10px;
    border-radius: 5px;
    border: 1px solid #eee;
  }

  .submit-btn {
    position: absolute;
    top: 120px;
    right: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer
  }

  .chat-area {
    width: 100%;
    height: 230px;
    overflow: scroll;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;

    .text {
      background-color: $lightGreen;
      color: #fff;
      width: 100%;
      padding: 15px 20px;
      display: block;
      word-wrap: break-word;
      margin-bottom: 10px;
      border-radius: 60px;
      border-bottom-right-radius: 0px;
      box-sizing: border-box;
      font-size: $fontBase;
    }

    .robot {
      border-bottom-right-radius: 60px;
      border-bottom-left-radius: 0px;
      background-color: #fff;
      border: 1px solid $darkGreen;
      color: black;
    }
  }
}

.go-up-btn {
  text-align: end;
  position: sticky;
  height: 70px;
  bottom: 10px;
  z-index: 100;

  a {
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    border-radius: 100%;
    background-color: $darkGreen;
    padding: 35px 30px;
    margin-right: 20px;
    position: relative;

    &::before {
      position: absolute;
      top: 20px;
      left: 35px;
      content: '';
      display: inline-block;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      width: 26px;
      height: 26px;
      transform: rotate(-135deg);
    }
  }


}

::-webkit-scrollbar {
  width: 10px;
}
</style>