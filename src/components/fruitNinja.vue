<template>
  <div class="fruitNinja">
    <div class="container">
      <div class="instructions">食農遊戲</div>
      <!-- 遊戲標題 -->
      <div class="fruitcontainer">
        <div v-if="playing" class="score">
          <div class="score-display">
            採收 <span class="score-value">{{ score }}</span>
            <!-- 顯示收穫的水果數量 -->
          </div>
        </div>
        <div v-if="playing" class="trials-left">
          <img v-for="n in trialsLeft" :key="n" :src="heartIcon" class="life" alt="生命" />
          <!-- 顯示剩餘生命值的心形圖示 -->
        </div>
        <div v-if="!playing" class="front">
        <p>  開啟農場奇遇的冒險之旅 !</p>
          <!-- 遊戲未開始時顯示的歡迎訊息 -->
          <img :src="farmerIcon" alt="農夫" />
          <!-- 顯示農夫的圖片 -->
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
      <!-- 遊戲開始/重置按鈕 -->
      <div v-if="gameOver" class="game-over">
        <p>採收結束!</p>
        <!-- 遊戲結束提示 -->
        <p>總共採集了 {{ score }} 個</p>
        <!-- 顯示總共收穫的水果數量 -->
        <p v-if="score >= 3">恭喜獲得折價券</p>
        <!-- 如果收穫超過等於3個水果，則顯示折扣券提示 -->
        <p v-if="score >= 3" style="color: #bc192c">#123456</p>
        <!-- 顯示折扣券碼的虛擬範例 -->
        <!-- <button @click="restartGame">再次採收</button> -->
        <!-- 遊戲重新開始按鈕 -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 匯入圖片資源
import heartIcon from '@/assets/image/hart2.svg' // 心形圖示
import farmerIcon from '@/assets/image/game-img/farmer.png' // 農夫的圖片
import cornIcon from '@/assets/image/game-img/corn.png' // 玉米的圖片
import strawberryIcon from '@/assets/image/game-img/strawberry.png' // 草莓的圖片
import orangeIcon from '@/assets/image/game-img/orange.png' // 橙子的圖片
import riceIcon from '@/assets/image/game-img/rice.png' // 米飯的圖片

export default {
  name: 'App',
  setup() {
    // 响應式狀態
    const playing = ref(false) // 遊戲進行狀態
    const score = ref(0) // 收穫的水果數量
    const trialsLeft = ref(3) // 剩餘的生命值
    const gameOver = ref(false) // 遊戲結束狀態
    const currentFruit = ref('') // 當前顯示的水果圖片
    const fruitPosition = ref({ left: 0, top: -50 }) // 水果位置
    const step = ref(10) // 水果下落速度
    const isNewFruit = ref(false) // 新水果標記
    let gameLoop // 遊戲循環計時器

    // 水果圖片列表
    const fruits = [cornIcon, strawberryIcon, orangeIcon, riceIcon, cornIcon]

    // 計算屬性，動態更新水果位置樣式
    const fruitStyle = computed(() => ({
      left: `${fruitPosition.value.left}px`,
      top: `${fruitPosition.value.top}px`,
      opacity: isNewFruit.value ? 0 : 1, // 控制新水果透明度
      transition: 'opacity 1s ease' // 過渡效果
    }))

    // 隨機選擇水果
    const chooseRandomFruit = () => {
      currentFruit.value = fruits[Math.floor(Math.random() * fruits.length)]
    }

    // 開始遊戲動作
    const startAction = () => {
      chooseRandomFruit()
      fruitPosition.value = {
        left: Math.round(550 * Math.random()),
        top: -100 // 確保水果從頂部開始落下
      }
      step.value = 1 + Math.round(5 * Math.random())

      gameLoop = setInterval(() => {
        fruitPosition.value.top += step.value
        if (fruitPosition.value.top > 400) {
          if (trialsLeft.value > 1) {
            resetFruit()
            trialsLeft.value--
          } else {
            endGame()
          }
        }
      }, 10)
    }

    // 重置水果位置和速度
    const resetFruit = () => {
      chooseRandomFruit()
      fruitPosition.value = {
        left: Math.round(550 * Math.random()),
        top: -100 // 新水果從頂部開始
      }
      step.value = 1 + Math.round(5 * Math.random())
      isNewFruit.value = true // 設置新水果標記為 true

      // 0.1秒後取消新水果透明度
      setTimeout(() => {
        isNewFruit.value = false
      }, 100)
    }

    // 切水果動作
    const sliceFruit = () => {
      score.value++
      resetFruit() // 重置水果
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

    // 返回組件所需的狀態和方法
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
      farmerIcon
    }
  }
}
</script>

<style scoped>
.fruitNinja {
  font-family: cursive, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 750px;
  margin: 10px auto;
  padding: 20px;
  position: relative;
}

.instructions {
  width: 450px;
  height: 50px;
  margin: 10px auto;
  font-size: 30px;
  background-color: #144433;
  color: #fff;
  text-align: center;
  line-height: 50px;
  border-radius: 20px;
  box-shadow: 0px 4px 0px 0px #775012;
}

.fruitcontainer {
  background: url('../assets/image/game-img/farm.jpg');
  background-size: cover;
  width: 650px;
  height: 450px;
  margin: 30px auto 20px auto;
  border-radius: 20px;
  box-shadow: 0px 4px 0px 0px #4b4b4e;
  position: relative;
  overflow: hidden;
}

.fruit {
  width: 100px;
  height: 100px;
  position: absolute;
  transition:
    top 0.1s linear,
    opacity 1s ease; 
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
}

.start-reset:active {
  background-color: #519a58;
  transform: translateY(4px);
}

.score {
  position: absolute;
  top: 10px;
  left: 10px;
}

.score-display {
  display: flex;
  color: #888e61;
  font-size: 30px;
  align-items: center;
}

.trials-left {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
}

.life {
  width: 30px;
  margin-left: 5px;
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
  color: #cb8b22;
  font-size: 2em;
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

.front {
  font-size: 40px;
  color: linear-gradient(-225deg, #d4ffec 0%, #57f2cc 48%, #4596fb 100%);
  width: 650px;
  height: 450px;
  padding: 10px;
  margin: 30px auto 20px auto;
  z-index: 2;
}

.front img {
  width: 450px;
}
</style>
