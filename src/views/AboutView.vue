<template>
  <section>
    <h1>關於果籽</h1>
    <!-- <img class="title-bgi" src="@/assets/image/deco.png" alt=""> -->
    <div class="aboutus">
      <div class="card-up">
        <div class="card-txt">
          <p>
            食安問題層出不窮，架設果籽網站，期望能讓民眾重視食品安全，宣導購買原型食物及有機耕種的觀念，支持在地小農以友善土地的方式耕種，讓民眾吃得健康，土地也得以永續
          </p>
        </div>
        <div class="cardpic">
          <img src="../../src/assets/image/abour-img1.png" alt="" />
          <div class="img-circle" v-for="i in 3" :key="i" :class="'circle' + i"></div>
        </div>
      </div>
      <div class="card-dwon">
        <div class="cardpic">
          <img src="../../src/assets/image/about-img2.png" alt="" />
          <div class="img-circle" v-for="i in 3" :key="i" :class="'circle' + i"></div>
        </div>

        <div class="card-txt">
          <div class="txt">
            <ul>
            <li>向民眾宣導購買原型食物</li>
            <li>介紹有機耕種的在地小農</li>
            <li>協助在地小農推廣有機作物</li>
            <li>讓民眾吃得健康</li>
            <li>土地得以永續</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
    <SvgAnimation />
    <div class="switchbox">
      <h3>果籽協助小農推廣有機耕種及農產品</h3>
      <h3>期望達成聯合國永續發展目標（SDGs）</h3>
      <!-- 三個按鈕 -->
      <div class="btns">
        <button class="btn" :class="{ 'btn-active': currentIndex === 0 }" @click="currentIndex = 0">
          11永續城鄉
        </button>
        <button class="btn" :class="{ 'btn-active': currentIndex === 1 }" @click="currentIndex = 1">
          12負責任消費與生產
        </button>
        <button class="btn" :class="{ 'btn-active': currentIndex === 2 }" @click="currentIndex = 2">
          15陸地生態
        </button>
      </div>
      <!-- 點選按鈕切換內容 -->
      <div class="sdgs-info">
        <div v-if="currentIndex === 0">
          <div class="SDGs">
            <div class="SDGspic">
              <img src="../../src/assets/image/SDGs11.png" alt="SDGs11" />
            </div>
            <div class="sdgs-text">
              <h4>永續發展目標11:永續城鄉。</h4>
              <p>
                小農經營的傳統農業不僅維護了在地文化，更是生物多樣性的守護者。他們的農地為野生動植物提供棲息地且有助於維護生態系統的平衡。
              </p>
            </div>
          </div>
        </div>
        <div v-if="currentIndex === 1">
          <div class="SDGs">
            <div class="SDGspic">
              <img src="../../src/assets/image/SDGs12.png" alt="SDGs12" />
            </div>
            <div class="sdgs-text">
              <h4>永續發展目標12:促進負責任的消費。</h4>
              <p>
                小農種植的農作物通常採用較少化學肥料和農藥，此種耕種方式更環保且對土地影響較小，有助於促進可持續的生產模式。<br />小農所提供的環保的食材，也減少了食物運輸過程中的碳足跡，符合負責任消費的理念。
              </p>
            </div>
          </div>
        </div>
        <div v-if="currentIndex === 2">
          <div class="SDGs">
            <div class="SDGspic">
              <img src="../../src/assets/image/SDGs15.png" alt="SDGs15" />
            </div>
            <div class="sdgs-text">
              <h4>永續發展目標15:關注維護陸地生態系統。</h4>
              <p>
                小農因生產規模較小，對土地的利用較為節約。此舉避免大規模過度開墾。透過友善環境的農業實踐，小農也在努力保育土壤和生物多樣性，維護地球村莊的環境品質。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SvgAnimation from '@/components/SvgAnimation.vue'

export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
    SvgAnimation
  }
}
</script>
<style lang="scss" scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

section {
  width: 100%;
  margin: auto;
  max-width: 1200px;
  text-align: center;
  h1 {
    padding: 20px;
    font-size: 2.5em;
    color: #144433;
    @include md() {
      font-size: 1.75em;
    }
  }
  .aboutus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .card-up {
      max-width: 1200px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      line-height: 1.5rem;
      @include md() {
        justify-content: space-around;
      }
      @include sm() {
        flex-direction: column-reverse;
      }

      .card-txt {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #397d5a;
        width: 40%;
        aspect-ratio: 1.5/1;
        border-radius: 20px;
        @include sm() {
          width: 70%;
          margin: 5%;
        }
        p {
          width: 85%;
          font-size: 1.25em;
          line-height: 2;

          color: #ffffff;
          text-align: left;
          @include lg() {
            font-size: 1em;
          }
          @include md() {
            font-size: 0.8em;
          }
          @include sm() {
            font-size: 1em;
          }
        }
      }
      .cardpic {
        width: 120px;
        height: 120px;
        position: relative;
        @include s2bmd() {
          width: 300px;
          height: 300px;
        }

        @include s2blg() {
          width: 400px;
          height: 400px;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          vertical-align: top;
          border-radius: 500px;
        }
        .img-circle {
          width: 120px;
          height: 120px;
          border-radius: 500px;
          border: solid 1px #144433;
          @include s2bmd() {
            width: 300px;
            height: 300px;
          }
          @include s2blg() {
            width: 400px;
            height: 400px;
          }
        }

        .circle1 {
          position: absolute;
          top: 1px;
          transform-origin: 60px 59px;
          animation: rotate 2s linear infinite;

          @include s2bmd() {
            transform-origin: 150px 149px;
          }

          @include s2blg() {
            transform-origin: 200px 199px;
          }
        }

        .circle2 {
          position: absolute;
          top: 1px;
          right: 1px;
          transform-origin: 59px 59px;
          animation: rotate 3s linear infinite;

          @include s2bmd() {
            transform-origin: 149px 149px;
          }

          @include s2blg() {
            transform-origin: 199px 199px;
          }
        }

        .circle3 {
          position: absolute;
          top: -1px;
          right: 1px;
          transform-origin: 59px 61px;
          animation: rotate 2s linear infinite;

          @include s2bmd() {
            transform-origin: 149px 151px;
          }

          @include s2blg() {
            transform-origin: 199px 201px;
          }
        }
      }
    }
    .card-dwon {
      max-width: 1200px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      line-height: 1.5rem;
      @include md() {
        justify-content: space-around;
      }
      @include sm() {
        flex-direction: column;
      }
      .card-txt {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #397d5a;
        width: 40%;
        aspect-ratio: 1.5/1;
        border-radius: 20px;
        @include sm() {
          margin: 5%;
          width: 70%;
        }
        .txt{
          margin: auto;
          ul {
          width: 100%;
          text-align: center;
          li {
            font-size: 1.25em;
            line-height: 2;
            color: #ffffff;
            text-align: left;

            list-style: disc;
            @include lg() {
              font-size: 1em;
            }
            @include md() {
              font-size: 0.8em;
            }
            @include sm() {
              font-size: 1em;
            }
          }
        }
        }

      }
      .cardpic {
        width: 120px;
        height: 120px;
        position: relative;
        @include s2bmd() {
          width: 300px;
          height: 300px;
        }

        @include s2blg() {
          width: 400px;
          height: 400px;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          vertical-align: top;
          border-radius: 500px;
        }
        .img-circle {
          width: 120px;
          height: 120px;
          border-radius: 500px;
          border: solid 1px #144433;
          @include s2bmd() {
            width: 300px;
            height: 300px;
          }
          @include s2blg() {
            width: 400px;
            height: 400px;
          }
        }

        .circle1 {
          position: absolute;
          top: 1px;
          transform-origin: 60px 59px;
          animation: rotate 2s linear infinite;

          @include s2bmd() {
            transform-origin: 150px 149px;
          }

          @include s2blg() {
            transform-origin: 200px 199px;
          }
        }

        .circle2 {
          position: absolute;
          top: 1px;
          right: 1px;
          transform-origin: 59px 59px;
          animation: rotate 3s linear infinite;

          @include s2bmd() {
            transform-origin: 149px 149px;
          }

          @include s2blg() {
            transform-origin: 199px 199px;
          }
        }

        .circle3 {
          position: absolute;
          top: -1px;
          right: 1px;
          transform-origin: 59px 61px;
          animation: rotate 2s linear infinite;

          @include s2bmd() {
            transform-origin: 149px 151px;
          }

          @include s2blg() {
            transform-origin: 199px 201px;
          }
        }
      }
    }
  }
}

.switchbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 1.75em;
    padding: 0.5em;
    color: #144433;
    @include lg() {
      font-size: 1.5em;
    }
    @include md() {
      font-size: 1.25em;
    }
    @include sm() {
      font-size: 1em;
      padding: 1.5em;
    }
  }
  .btns {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    @include lg() {
      width: 70%;
    }
    @include md() {
      width: 80%;
    }
    @include sm() {
      width: 100%;
    }
    .btn {
      padding: 15px;
      color: #ffffff;
      background-color: #357a56;
      border: none;
      cursor: pointer;
      width: 33%;
      font-size: 1em;
      @include lg() {
        font-size: 0.9em;
      }
      @include md() {
        font-size: 0.8em;
      }
      @include sm() {
        font-size: 0.5em;
      }
    }
    .btn:hover {
      background-color: #144433;
    }
  }
  .sdgs-info {
    display: flex;
    margin-top: 20px;
    .SDGs {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 900px;
      margin: auto;
      @include sm() {
        flex-direction: column;
      }
      .SDGspic {
        width: 250px;
        height: 250px;
        @include lg() {
          width: 200px;
          height: 200px;
        }
        @include md() {
          width: 150px;
          height: 150px;
        }
      
        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
          object-fit: cover;
        }
      }
      .sdgs-text {
        width: 60%;
        padding: 5%;
        @include lg() {
          padding: 4%;
        }
        @include md() {
          padding: 3%;
        }
        @include sm() {
          padding: 2%;
        }
      }
      h4 {
        font-size: 1.5em;
        text-align: left;
        font-weight: bold;
        padding-bottom: 20px;
        color: #144433;
        @include lg() {
          font-size: 1.3em;
        }
        @include md() {
          font-size: 1.1em;
        }
        @include sm() {
          font-size: 1em;
        }
      }
      p {
        width: 90%;
        color: #144433;
        text-align: left;
        @include lg() {
          font-size: 1.3em;
        }
        @include md() {
          font-size: 1.1em;
        }
        @include sm() {
          font-size: 1em;
        }
      }
    }
  }
}
</style>
