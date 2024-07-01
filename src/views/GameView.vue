<template>
  <section class="game">
    <div class="container">
      <transition name="slide-fade" mode="out-in">
        <div
          v-if="!gameStarted || showScore"
          class="game_rule"
          :key="!gameStarted ? 'rule' : 'score'"
        >
          <div class="rule_text">
            <h1>食農小學堂</h1>
            <template v-if="!showScore">
              <ul>
                <li>歡迎來到食農小學堂！</li>
                <li>這款知識問答遊戲旨在幫助玩家掌握農業和食品安全相關知識。</li>
                <li>每道問題都有四個選項，每題正確答案可獲得十分。</li>
                <li>隨著你的得分累積，你將能夠獲得商品的優惠券。</li>
                <li>準備好了嗎？讓我們一起迎接食農知識的挑戰，開啟飲食健康之旅吧！</li>
              </ul>
              <button @click="startGame">開始遊戲</button>
            </template>
            <template v-else>
              <h2>您的分數為:{{ userScore }}</h2>
              <h2 v-if="userScore >= 90">恭喜你獲得8折券！<br /><br />優惠代碼CCC8888</h2>
              <h2 v-else-if="userScore >= 80">恭喜你獲得85折券！<br /><br />優惠代碼CCC8585</h2>
              <h2 v-else-if="userScore >= 70">恭喜你獲得9折券！<br /><br />優惠代碼CCC9999</h2>
              <button @click="resetGame">重新開始</button>
            </template>
          </div>
        </div>

        <div v-else class="game_start" key="start">
          <h1>食農小學堂</h1>
          <!-- 遊戲項目區塊 -->
          <div class="game_item">
            <!-- 如果回答結果不為空，顯示結果區塊 -->
            <div v-if="answeredCorrectly !== null" class="result-item">
              <!-- 如果回答正確，顯示正確結果 -->
              <div v-if="answeredCorrectly" class="result">
                <span>答對了！</span>
                <!-- 顯示答案圖片 -->
                <div class="answer-pic">
                  <img :src="parsePic(currentQuestion.answer_image)" alt="Answer Image" />
                </div>
                <!-- 顯示答案解釋 -->
                <span>{{ currentQuestion.explanation }}</span>
              </div>
              <!-- 如果回答錯誤，顯示錯誤結果 -->
              <div v-else class="result">
                <span>答錯了！</span>
                <span>正確答案是{{ currentQuestion.correctAnswer }}。</span>
                <!-- 顯示答案圖片 -->
                <div class="answer-pic">
                  <img :src="parsePic(currentQuestion.answer_image)" alt="Answer Image" />
                </div>
                <!-- 顯示答案解釋 -->
                <span>{{ currentQuestion.explanation }}</span>
              </div>
              <!-- 下一題按鈕 -->
              <button @click="showNextQuestion">下一題</button>
            </div>

            <!-- 如果還沒有回答，顯示問題和選項 -->
            <div v-else>
              <div class="question-text">
                <p>{{ currentQuestion.question }}</p>
              </div>
              <div class="answer">
                <!-- 循環顯示每個選項 -->
                <div
                  v-for="(option, index) in currentQuestion.options"
                  :key="index"
                  class="answer-item"
                >
                  <!-- 顯示選項圖片 -->
                  <div class="answer-pic">
                    <img :src="parsePic(option.img)" alt="Option Image" />
                  </div>
                  <!-- 顯示選項文字 -->
                  <div class="answer-txt">
                    <p>{{ option.text }}</p>
                  </div>
                  <!-- 選擇答案按鈕 -->
                  <button @click="selectAnswer(option.key)">{{ option.key }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- 進度條容器 -->
      <div v-if="showProgressBar" class="progress-container">
        <div class="progress-bar" :style="{ width: progressWidth + '%' }"></div>
        <div class="progress-img-container" :style="{ width: progressWidth + '%' }">
          <img
            class="progress-img"
            src="/src/assets/image/game-img/鏟子.png"
            alt="Progress Image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false, // 指示遊戲是否已經開始
      showProgressBar: false, // 控制進度條的顯示
      questions: [], // 存儲問答題目的數組
      currentQuestionIndex: 0, // 當前問題的索引
      userScore: 0, // 用戶的分數
      answeredCorrectly: null, // 指示用戶是否回答正確
      showScore: false // 控制最終得分的顯示
    }
  },
  computed: {
    currentQuestion() {
      // 返回當前的問題，如果沒有問題則返回一個空對象
      return this.questions[this.currentQuestionIndex] || {}
    },
    progressWidth() {
      // 計算進度條的寬度，根據當前問題的索引和總問題數量
      return ((this.currentQuestionIndex + 1) / this.questions.length) * 100
    }
  },
  methods: {
    async loadQuestions() {
    try {
        // 异步加载问题数据
        const url = "http://localhost/php_g4/questions.php";
        const response = await fetch(url, {
            method: "POST",
            // body: JSON.stringify(body) // 如果需要请求体，请取消注释并提供适当的body
        });

        const allQuestions = await response.json();
        this.questions = this.selectRandomQuestions(allQuestions, 10);
    } catch (error) {
        console.error("Error loading questions:", error);
    }
},

selectRandomQuestions(allQuestions, count) {
    // 随机选择指定数量的问题
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
},
    startGame() {
      // 開始遊戲，並在4秒後顯示進度條
      this.gameStarted = true
      setTimeout(() => {
        this.showProgressBar = true
      }, 4000) // 延遲4秒後顯示進度條
    },
    selectAnswer(answer) {
      // 處理用戶選擇答案的邏輯
      if (answer === this.currentQuestion.answer) {
        console.log('答對了！')
        this.userScore += 10
        this.answeredCorrectly = true
      } else {
        console.log('答錯了！')
        this.answeredCorrectly = false
      }
    },
    showNextQuestion() {
      // 顯示下一個問題或顯示最終得分
      this.answeredCorrectly = null
      if (this.currentQuestionIndex + 1 < this.questions.length) {
        this.currentQuestionIndex++
      } else {
        this.showScore = true
      }
    },
    resetGame() {
      // 重置遊戲狀態並重新加載問題
      this.gameStarted = false
      this.currentQuestionIndex = 0
      this.userScore = 0
      this.answeredCorrectly = null
      this.showScore = false
      this.loadQuestions() // 加載隨機問題
    },
    parsePic(file) {
      // 解析圖片文件的URL
      return new URL(`../assets/image/game-img/${file}`, import.meta.url).href
    }
  },
  created() {
    // 組件創建時加載問題
    this.loadQuestions()
  }
}
</script>
<style lang="scss" scoped>
.game {
  margin: auto;
  font-family: game-font;
  .container {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .game_rule,
    .game_start {
      width: 80%;
      aspect-ratio: 16/10;
      background-color: #6f9283;
      background-image: url(/src/assets/image/game-img/gamebgimg.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      margin: auto;
      @include md() {
        width: 80%;
        aspect-ratio: 1/1.3;
        @include sm() {
          width: 90%;
          aspect-ratio: 1/1.4;
          justify-content: space-between;
        }
      }
      .rule_text,
      .game_item {
        width: 80%;
        aspect-ratio: 16/11;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin: auto;
        @include md() {
          width: 80%;
          aspect-ratio: 1/1.3;
        }
        @include sm() {
          aspect-ratio: 1/1.4;
        }
      }
      h1 {
        font-size: 2.5em;
        color: white;
        @include lg() {
          font-size: 2em;
        }
        @include md() {
          font-size: 1.75em;
        }
      }
      li {
        font-size: 1.25em;
        margin-bottom: 1em;
        margin: 0.5em;
        color: white;
        @include lg() {
          font-size: 1em;
          margin-bottom: 0.8em;
        }
        @include sm() {
          // font-size: $desc;
          margin-bottom: 1.5m;
        }
      }
      button {
        font-family: game-font;
        padding: 17px 53px;
        border-radius: 25px;
        border: none;
        background-color: #144433;
        color: #fff;
        display: block;
        letter-spacing: 1.5px;
        cursor: pointer;
        transition: transform 0.1s ease-in;
        margin: 6px 0;

        &:active {
          transform: scale(0.9);
        }

        &:focus {
          outline: none;
        }

        @include lg() {
          padding: 13px 40px;
        }
        @include md() {
          padding: 10px 30px;
        }
      }
    }
    .game_start {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h1 {
        font-size: 2.5em;
        color: white;
        margin-top: 1em;
        @include lg() {
          font-size: 2em;
        }
        @include md() {
          font-size: 1.75em;
          margin-top: 2em;
          justify-content: space-around;
        }
        @include sm() {
          font-size: 1.5em;
        }
      }
      .game_item {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;

        .question-text {
          font-size: 1.75em;
          padding: 2em 0.5em;
          color: white;
          display: flex;
          justify-content: center;
          @include lg() {
            font-size: 1.5em;
            padding: 1.5em 0.5em;
          }
          @include md() {
            font-size: 1.25em;
            padding: 1.25em 0.5em;
          }
          @include bp(450px) {
            font-size: 1em;
            padding: 1em 0.5em;
          }
        }
        .answer-pic {
          width: 100px;
          height: 100px;
          @include md() {
            width: 75px;
            height: 75px;
          }
          @include lg() {
            width: 70px;
            height: 70px;
          }
          @include bp(450px) {
            width: 60px;
            height: 60px;
          }
          img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            vertical-align: top;
          }
        }
        span {
          font-size: 1.25em;
          padding: 1.25em;
          @include lg() {
            font-size: 1.25em;
            padding: 0.9em;
          }
          @include md() {
            font-size: 1em;
            padding: 1em;
          }
        }
        .answer {
          display: flex;
          width: 100%;
          height: 80%;
          justify-content: space-evenly;
          color: white;
          @include lg() {
            height: 75%;
          }
          @include md() {
            flex-direction: row;
            flex-wrap: wrap;
          }
          @include sm() {
            height: 65%;
          }
          .answer-item {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            width: 90%;
            height: 90%;
            @include md() {
              width: 50%;
              height: 71%;
            }
            @include sm() {
              height: 70%;
            }
            .answer-txt {
              p {
                font-size: 1em;
                @include sm() {
                  font-size: $desc;
                }
              }
            }
            button {
              font-family: game-font;
              padding: 17px 53px;
              border-radius: 25px;
              border: none;
              background-color: #144433;
              color: #fff;
              display: block;
              letter-spacing: 1.5px;
              cursor: pointer;
              transition: transform 0.1s ease-in;
              margin: 6px 0;

              &:active {
                transform: scale(0.9) !important;
              }

              &:focus {
                outline: none;
              }

              @include lg() {
                padding: 13px 40px;
              }
              @include md() {
                padding: 10px 30px;
              }
            }
          }
        }
        .result-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 80%;
          margin: auto;
        }
        .result {
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
    .rule_text {
      h2 {
        font-size: 1.25em;
        color: white;
      }
    }
    .progress-container {
      width: 80%;
      aspect-ratio: 10/1;
      margin: 20px auto;
      position: relative;

      .progress-bar {
        height: 100%;
        transition: width 0.4s linear;
        background-image: url(../assets/image/game-img/tree.png);
        background-size: auto 100%;
      }
      .progress-img-container {
        position: absolute;
        top: 4px;
        height: 60px;
        display: flex;
        justify-content: end;
        align-items: center;
        @include lg() {
          height: 50px;
          top: 2px;
        }
        @include md() {
          height: 40px;
          top: 0px;
        }
        @include sm() {
          top: -3px;
          height: 25px;
        }
        img.progress-img {
          height: 60px;
          width: 60px;
          max-width: 100%; /* 圖片最大寬度為其容器寬度 */
          object-fit: contain; /* 確保圖片比例不失真 */
          @include lg() {
            height: 50px;
            width: 50px;
          }
          @include md() {
            height: 35px;
            width: 35px;
          }
          @include sm() {
            height: 25px;
            width: 25px;
          }
        }
      }
    }
  }
}

.slide-fade-enter-to,
.slide-fade-leave {
  animation: slide-fade-enter 2s ease forwards;
}

.slide-fade-leave-to,
.slide-fade-enter {
  animation: slide-fade-leave 2s ease forwards;
}
@keyframes slide-fade-leave {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}
@keyframes slide-fade-enter {
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
