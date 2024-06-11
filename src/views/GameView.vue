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
              <h2 v-if="userScore >= 90">恭喜你获得8折券！<br />優惠代碼CCC8888</h2>
              <h2 v-else-if="userScore >= 80">恭喜你获得85折券！<br />優惠代碼CCC8585</h2>
              <h2 v-else-if="userScore >= 70">恭喜你获得9折券！<br />優惠代碼CCC9999</h2>
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
              <p>{{ currentQuestion.question }}</p>
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
      questions: [
        {
          question: '哪種農業方式最有利於維護生物多樣性？',
          options: [
            {
              key: 'A',
              text: '單一作物農業'
            },
            {
              key: 'B',
              text: '混合農業'
            },
            { key: 'C', text: '溫室種植' },
            { key: 'D', text: '工業化農業' }
          ],
          correctAnswer: 'B',
          explanation: '混合農業可以提供各種生態棲息地，有助於維護生物多樣性。'
        },
        {
          question: '哪一種肥料來源對環境影響最小？',
          options: [
            { key: 'A', text: '化學肥料' },
            { key: 'B', text: '有機肥料' },
            { key: 'C', text: '人造合成肥料' },
            { key: 'D', text: '礦物肥料' }
          ],
          correctAnswer: 'B',
          explanation:
            '有機肥料源自動植物殘體和糞便，對土壤和環境的影響較小，有助於提高土壤的有機質含量。'
        },
        {
          question: '下列哪一種作物最適合輪作，以保持土壤健康？',
          options: [
            { key: 'A', text: '玉米' },
            { key: 'B', text: '小麥' },
            { key: 'C', text: '豆類' },
            { key: 'D', text: '稻米' }
          ],
          correctAnswer: 'C',
          explanation: '豆類能固定氮氣，提高土壤的氮含量，有助於保持土壤的肥力和健康。'
        },
        {
          question: '下列哪種灌溉技術最節水？',
          options: [
            { key: 'A', text: '漫灌' },
            { key: 'B', text: '噴灌' },
            { key: 'C', text: '滴灌' },
            { key: 'D', text: '溝灌' }
          ],
          correctAnswer: 'C',
          explanation: '滴灌系統能精確控制水量，直接供水到植物根部，大幅減少水資源浪費。'
        },
        {
          question: '哪種農業方式最有利於維護生物多樣性？',
          options: [
            { key: 'A', text: '單一作物農業' },
            { key: 'B', text: '混合農業' },
            { key: 'C', text: '溫室種植' },
            { key: 'D', text: '工業化農業' }
          ],
          correctAnswer: 'B',
          explanation: '混合農業可以提供各種生態棲息地，有助於維護生物多樣性。'
        },
        {
          question: '哪一種肥料來源對環境影響最小？',
          options: [
            { key: 'A', text: '化學肥料' },
            { key: 'B', text: '有機肥料' },
            { key: 'C', text: '人造合成肥料' },
            { key: 'D', text: '礦物肥料' }
          ],
          correctAnswer: 'B',
          explanation:
            '有機肥料源自動植物殘體和糞便，對土壤和環境的影響較小，有助於提高土壤的有機質含量。'
        },
        {
          question: '下列哪一種作物最適合輪作，以保持土壤健康？',
          options: [
            { key: 'A', text: '玉米' },
            { key: 'B', text: '小麥' },
            { key: 'C', text: '豆類' },
            { key: 'D', text: '稻米' }
          ],
          correctAnswer: 'C',
          explanation: '豆類能固定氮氣，提高土壤的氮含量，有助於保持土壤的肥力和健康。'
        },
        {
          question: '下列哪種灌溉技術最節水？',
          options: [
            { key: 'A', text: '漫灌' },
            { key: 'B', text: '噴灌' },
            { key: 'C', text: '滴灌' },
            { key: 'D', text: '溝灌' }
          ],
          correctAnswer: 'C',
          explanation: '滴灌系統能精確控制水量，直接供水到植物根部，大幅減少水資源浪費。'
        },
        {
          question: '下列哪一種作物最適合輪作，以保持土壤健康？',
          options: [
            { key: 'A', text: '玉米' },
            { key: 'B', text: '小麥' },
            { key: 'C', text: '豆類' },
            { key: 'D', text: '稻米' }
          ],
          correctAnswer: 'C',
          explanation: '豆類能固定氮氣，提高土壤的氮含量，有助於保持土壤的肥力和健康。'
        },
        {
          question: '下列哪一種作物最適合輪作，以保持土壤健康？',
          options: [
            { key: 'A', text: '玉米' },
            { key: 'B', text: '小麥' },
            { key: 'C', text: '豆類' },
            { key: 'D', text: '稻米' }
          ],
          correctAnswer: 'C',
          explanation: '豆類能固定氮氣，提高土壤的氮含量，有助於保持土壤的肥力和健康。'
        }
      ],
      currentQuestionIndex: 0,
      userScore: 0,
      answeredCorrectly: null,
      showScore: false
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex]
    }
  },
  methods: {
    startGame() {
      this.gameStarted = true
    },
    selectAnswer(answer) {
      if (answer === this.currentQuestion.correctAnswer) {
        console.log('答對了！')
        this.userScore += 10
        this.answeredCorrectly = true // 设置为正确答案的键
      } else {
        console.log('答錯了！')
        this.answeredCorrectly = false // 设置为错误答案的键
      }
    },
    showNextQuestion() {
      this.answeredCorrectly = null // 清空答对标记
      if (this.currentQuestionIndex + 1 < this.questions.length) {
        this.currentQuestionIndex++
      } else {
        this.showScore = true
      }
    },
    resetGame() {
      this.gameStarted = false
      this.currentQuestionIndex = 0
      this.userScore = 0
      this.answeredCorrectly = null
      this.showScore = false
    }
  }
}
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
      }
      .game_item {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        // text-align: center;

        p {
          font-size: 1.75em;
          padding: 2em;
          color: white;
        }
        span {
          font-size: 1.25em;
          padding: 2em;
        }
        .answer {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: space-around;
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
