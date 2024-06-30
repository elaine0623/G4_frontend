<template>
  <div class="fruitNinja">
    <div class="container">
      <div class="instructions">食農遊戲</div>
      <div class="fruitcontainer" ref="fruitContainer">
        <div v-if="playing" class="score">
          <div class="score-display">
            採收 <span class="score-value">{{ score }}</span>
          </div>
        </div>
        <div v-if="playing" class="trials-left">
          <img v-for="n in trialsLeft" :key="n" :src="heartIcon" class="life" alt="生命" />
        </div>
        <div v-if="!playing" class="front">
          <p>開啟農場奇遇的冒險之旅 !</p>
          <img :src="farmerIcon" alt="農夫" />
        </div>
        <img
          v-show="playing"
          class="fruit"
          :src="currentFruit"
          :style="fruitStyle"
          @mouseover="sliceFruit"
        />
      </div>
      <button class="start-reset" @click="toggleGame">{{ playing ? '重新採收' : '開採!' }}</button>
      <div v-if="gameOver" class="game-over">
        <p>採收結束!</p>
        <p>總共採集了 {{ score }} 個</p>
        <p v-if="score >= 10">恭喜獲得折價券</p>
        <p v-if="score >= 10">#123456</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import heartIcon from '@/assets/image/hart2.svg'
import farmerIcon from '@/assets/image/game-img/farmer.png'
import cornIcon from '@/assets/image/game-img/corn.png'
import strawberryIcon from '@/assets/image/game-img/strawberry.png'
import orangeIcon from '@/assets/image/game-img/orange.png'
import riceIcon from '@/assets/image/game-img/rice.png'

export default {
  name: 'App',
  setup() {
    const playing = ref(false)
    const score = ref(0)
    const trialsLeft = ref(3)
    const gameOver = ref(false)
    const currentFruit = ref('')
    const fruitPosition = ref({ left: 0, top: -50 })
    const step = ref(10)
    const isNewFruit = ref(false)
    let gameLoop
    const fruitContainer = ref(null)

    const fruits = [cornIcon, strawberryIcon, orangeIcon, riceIcon, cornIcon]

    const fruitStyle = computed(() => ({
      left: `${fruitPosition.value.left}px`,
      top: `${fruitPosition.value.top}px`,
      opacity: isNewFruit.value ? 0 : 1,
      transition: 'opacity 1s ease'
    }))

    const chooseRandomFruit = () => {
      currentFruit.value = fruits[Math.floor(Math.random() * fruits.length)]
    }

    const startAction = () => {
      chooseRandomFruit()
      const containerRect = fruitContainer.value.getBoundingClientRect()
      const containerWidth = containerRect.width
      const minWidth = containerWidth * 0.1 // 10% 的寬度
      const maxWidth = containerWidth * 0.9 // 90% 的寬度

      fruitPosition.value = {
        left: Math.round(minWidth + Math.random() * (maxWidth - minWidth)),
        top: -50
      }

      step.value = 1 + Math.round(5 * Math.random())

      gameLoop = setInterval(() => {
        fruitPosition.value.top += step.value
        const screenHeight = window.innerHeight
        if (fruitPosition.value.top > screenHeight) {
          if (trialsLeft.value > 1) {
            resetFruit()
            trialsLeft.value--
          } else {
            endGame()
          }
        }
      }, 10)
    }

    const resetFruit = () => {
      chooseRandomFruit()
      const containerRect = fruitContainer.value.getBoundingClientRect()
      const containerWidth = containerRect.width
      const minWidth = containerWidth * 0.1 // 10% 的寬度
      const maxWidth = containerWidth * 0.9 // 90% 的寬度

      fruitPosition.value = {
        left: Math.round(minWidth + Math.random() * (maxWidth - minWidth)),
        top: -100
      }

      step.value = 1 + Math.round(5 * Math.random())
      isNewFruit.value = true
      setTimeout(() => {
        isNewFruit.value = false
      }, 100)
    }

    const sliceFruit = () => {
      score.value++
      resetFruit()
    }

    const toggleGame = () => {
      if (playing.value) {
        endGame()
      } else {
        startGame()
      }
    }

    const startGame = () => {
      playing.value = true
      score.value = 0
      trialsLeft.value = 3
      gameOver.value = false
      startAction()
    }

    const endGame = () => {
      playing.value = false
      gameOver.value = true
      clearInterval(gameLoop)
    }

    const restartGame = () => {
      gameOver.value = false
      startGame()
    }

    onUnmounted(() => {
      clearInterval(gameLoop)
    })

    return {
      playing,
      score,
      trialsLeft,
      gameOver,
      currentFruit,
      fruitStyle,
      toggleGame,
      sliceFruit,
      restartGame,
      heartIcon,
      farmerIcon,
      fruitContainer
    }
  }
}
</script>

<style lang="scss" scoped>
.fruitNinja {
  font-family: $pFont;
  text-align: center;
  color: #2c3e50;
  margin: 80px auto 0;
  .container {
    max-width: 750px;
    width: 90%;
    margin: auto;
    position: relative;
    .instructions {
      max-width: 450px;
      height: 50px;
      margin: 80px auto 0;
      font-size: 2.25em;
      background-color: #144433;
      color: #fff;
      text-align: center;
      line-height: 50px;
      border-radius: 20px;

      @include sm() {
        max-width: 250px;
        height: 30px;
        line-height: 30px;
        font-size: 1.25em;
        margin: 80px auto 0;
      }
    }
    .fruitcontainer {
      background: url('../assets/image/game-img/farm.jpg');
      background-size: cover;
      width: 90%;
      aspect-ratio: 16/11;
      margin: 30px auto 20px auto;
      border-radius: 20px;
      position: relative;
      overflow: hidden;
      @include sm() {
        aspect-ratio: 1/1.2;
      }
      .score {
        position: absolute;
        top: 10px;
        left: 10px;
        .score-display {
          display: flex;
          color: #888e61;
          font-size: 30px;
          align-items: center;
        }
      }
      .trials-left {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        .life {
          width: 30px;
          margin-left: 5px;
        }
      }
      .front {
        font-size: 40px;
        width: 100%;
        height: 450px;
        padding: 10px;
        margin: 30px auto 20px auto;
        z-index: 2;
        @include sm() {
          width: 290px;
        }
        p {
          font-size: 1em;
          @include md(){
            font-size: 0.9em;
          }
          @include sm() {
            font-size: 0.8em;
        }
        }
        img {
          width: 450px;
          @include md(){
            width: 350px;
          }
          @include sm() {
            width: 250px;
          }
        }
      }

      .fruit {
        width: 100px;
        position: absolute;
        transition:
          top 0.1s linear,
          opacity 1s ease;
        @include md() {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
  .start-reset {
    width: 90px;
    padding: 10px;
    margin: 0 auto;
    background-color: #144433;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: transform 0.1s ease-in;
    margin: 6px 0;

    &:active {
      transform: scale(0.9) !important;
    }

    &:focus {
      outline: none;
    }
  }
  .game-over {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: #144433;
    font-size: 2em;
    @include md() {
      font-size: 1.5em;
    }
    @include sm() {
      font-size: 1em;
      top: 65%;
    }
  }
}

.game-over button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 0.5em;
  background-color: #144433;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
