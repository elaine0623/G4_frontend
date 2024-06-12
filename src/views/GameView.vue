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
              <h2 v-if="userScore >= 90">恭喜你獲得8折券！<br />優惠代碼CCC8888</h2>
              <h2 v-else-if="userScore >= 80">恭喜你獲得85折券！<br />優惠代碼CCC8585</h2>
              <h2 v-else-if="userScore >= 70">恭喜你獲得9折券！<br />優惠代碼CCC9999</h2>
              <button @click="resetGame">重新開始</button>
            </template>
          </div>
        </div>

        <div v-else class="game_start" key="start">
          <h1>食農小學堂</h1>
          <div class="game_item">
            <div v-if="answeredCorrectly !== null" class="result-item">
              <div v-if="answeredCorrectly" class="result">
                <span>答對了！</span>
                <span>{{ currentQuestion.explanation }}</span>
              </div>
              <div v-else class="result">
                <span>答錯了！</span>
                <span>正確答案是{{ currentQuestion.correctAnswer }}。</span>
                <span>{{ currentQuestion.explanation }}</span>
              </div>
              <button @click="showNextQuestion">下一題</button>
            </div>
            <div v-else>
              <div class="question-text">{{ currentQuestion.question }}</div>
              <div class="answer">
                <div
                  v-for="(option, index) in currentQuestion.options"
                  :key="index"
                  class="answer-item"
                >
                  {{ option.text }}
                  <button @click="selectAnswer(option.key)">{{ option.key }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false,
      questions: [],
      currentQuestionIndex: 0,
      userScore: 0,
      answeredCorrectly: null,
      showScore: false
    };
  },
//   mounted() {
//     fetch('/questions.json')
//         .then(response => response.json())
//         .then(data => {
//             this.questions = this.selectRandomQuestions(data, 10);
//         })
//         
// },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex] || {};
    }
  },
  methods: {
    async loadQuestions() {
        const response = await fetch('/questions.json');
        const allQuestions = await response.json();
        this.questions = this.selectRandomQuestions(allQuestions, 10);
      
    },
    selectRandomQuestions(allQuestions, count) {
      const shuffled = allQuestions.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    },
    startGame() {
      this.gameStarted = true;
    },
    selectAnswer(answer) {
      if (answer === this.currentQuestion.answer) {
        console.log('答對了！');
        this.userScore += 10;
        this.answeredCorrectly = true;
      } else {
        console.log('答錯了！');
        this.answeredCorrectly = false;
      }
    },
    showNextQuestion() {
      this.answeredCorrectly = null;
      if (this.currentQuestionIndex + 1 < this.questions.length) {
        this.currentQuestionIndex++;
      } else {
        this.showScore = true;
      }
    },
    resetGame() {
      this.gameStarted = false;
      this.currentQuestionIndex = 0;
      this.userScore = 0;
      this.answeredCorrectly = null;
      this.showScore = false;
      this.loadQuestions(); // 加載隨機問題
    }
  },
  created() {
    this.loadQuestions();
  }
};
</script>

<style lang="scss" scoped>
.game {
  margin: auto;
  .container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .game_rule,
    .game_start {
      width: 80%;
      aspect-ratio: 16/9;
      background-color: #128a63;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      .rule_text,
      .game_item {
        width: 80%;
        aspect-ratio: 16/9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
      }
      h1 {
        font-size: 2.5em;
        color: white;

        @include lg(){
          font-size:2em;
        }
      }
      li {
        font-size: 1.25em;
        margin-bottom: 1em;
        color: white;
      }
      button {
        padding: 17px 53px;
        border-radius: 50px;
        background-color: #144433;
        color: white;
      }
      button:active {
        background-color: #128a63;
      }
    }
    .game_start {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 2.5em;
        color: white;
        margin-top: 0.5em;
        @include lg(){
          font-size:2em;
        }
      }
      .game_item {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        
        .question-text {
          font-size: 1.75em;
          padding: 2em;
          color: white;
          @include lg(){
          font-size:1.25em;
          padding: 1.5em;
        }
        }
        span {
          font-size: 1.25em;
          padding: 2em;
        }
        .answer {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: space-evenly;
          color: white;
          .answer-item {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            button {
              padding: 17px 53px;
              border-radius: 50px;
              background-color: #144433;
              color: white;
              @include lg(){

              }
            }
            button:active {
              background-color: #128a63;
            }
          }
        }
        .result-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 80%;
        }
        .result {
          font-size: 1rem;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
        }
      }
    }
    .rule_text {
      h2 {
        font-size: 1.25em;
        color: white;
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
