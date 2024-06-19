<template>
  <div class="container">
    <div class="spacer"></div>
    <div class="svg-container" ref="svgContainer">
      <!-- SVG 元素 -->
      <svg
        ref="svgElement"
        width="1265"
        height="800"
        viewBox="0 0 1270 630"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- SVG 路径 -->
        <path
          id="path"
          fill="none"
          stroke="#144433"
          stroke-width="2"
          d="M107.5 2H1163C1185.17 5.66667 1211.69 9.37674 1236 30.5C1255.57 47.5 1266.5 59 1266.5 105.5C1266.5 136 1266.5 167 1266.5 204.5C1266.5 242 1266.5 272.5 1236 295C1213.48 311.614 1191.5 319 1163 319C1140.2 319 441.167 319 94.5 319C74.6667 323.333 41.42 343.751 24 372C5.5 402 2 427.5 2 473.5C2 519.5 10 563.5 24 581.5C38 599.5 67.5 625.5 107.5 625.5C147.5 625.5 875.833 623.333 1266.5 625.5"
        />

        <!-- 在 SVG 路徑上添加 DIV 元素，初始時设置為不顯示 -->
        <foreignObject x="208" y="-74" width="100%" height="100%" style="opacity: 0" ref="div1">
          <div class="custom-div">
            <p>2013年至今</p>
            <p>重大食安事件</p>
          </div>
        </foreignObject>
        <foreignObject x="108" y="2" width="100%" height="100%" style="opacity: 0" ref="div2">
          <div class="custom-div-down">
            <ul>
              <li>2013年「大統黑心油事件」：食用油添加低成本葵花油混充並添加銅葉綠素調色</li>
              <li>2013年山水米以劣質米充優質米</li>
              <li>2016年「調和酒冒充釀製酒事件」</li>
            </ul>
          </div>
        </foreignObject>
        <foreignObject x="810" y="-74" width="100%" height="100%" style="opacity: 0" ref="div3">
          <div class="custom-div">
            <p>2023年</p>
          </div>
        </foreignObject>
        <foreignObject x="710" y="2" width="100%" height="100%" style="opacity: 0" ref="div4">
          <div class="custom-div-down">
            <ul>
              <li>「巴西蛋事件」：巴西進口雞蛋有效日期過長、進口雞蛋製造地可標示台灣。</li>
            </ul>
          </div>
        </foreignObject>
        <foreignObject x="360" y="550" width="100%" height="100%" style="opacity: 0" ref="div5">
          <div class="custom-div">
            <p>2024年初</p>
          </div>
        </foreignObject>
        <foreignObject x="260" y="626" width="100%" height="100%" style="opacity: 0" ref="div6">
          <div class="custom-div-down"> 
            <ul>
              <li>2013年「大統黑心油事件」：食用油添加低成本葵花油混充並添加銅葉綠素調色</li>
              <li>2013年山水米以劣質米充優質米</li>
              <li>2016年「調和酒冒充釀製酒事件」</li>
            </ul>
          </div>
        </foreignObject>
        <foreignObject x="965" y="550" width="100%" height="100%" style="opacity: 0" ref="div7">
          <div class="custom-div">
            <p>2024/05</p>
          </div>
        </foreignObject>
        <foreignObject x="865" y="626" width="100%" height="100%" style="opacity: 0" ref="div8">
          <div class="custom-div-down">
            <ul>
              <li>食安問題層出不窮，架設果籽網站，期望能讓民眾重視食品安全，宣導購買原型食物及有機耕種的觀念，支持在地小農以友善土地的方式耕種，讓民眾吃得健康，土地也得以永續</li>
            </ul>
          </div>
        </foreignObject>
      </svg>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#path {
  z-index: 2;
}

.spacer {
  height: 10vh; /* 全屏高度 */
}

.svg-container {
  width: 90%; /* SVG 容器宽度 */
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-div {
  background-color: #397d5a; /* DIV 背景颜色 */
  color: white; /* 文字颜色 */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.25em; /* 文字大小 */
  width: 200px;
  height: 75px;
  border-radius: 10px 10px 0 0;
  font-weight: 300;
}
.custom-div-down {
  background-color: #397d5a;
  color: white; /* 文字颜色 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;;
  width: 400px;
  height: 200px;
  border-radius: 0 0 10px 10px;
  font-weight: 300;
  ul {
    width: 90%;
    li {
      padding: 0.5em;
      line-height: 1.2;
    }
  }
}
</style>
<script setup>
import { ref, onMounted } from 'vue'

// 使用 ref
const svgElement = ref(null) // SVG 元素的 ref
const svgContainer = ref(null) // SVG 容器的 ref
const div1 = ref(null)
const div2 = ref(null)
const div3 = ref(null)
const div4 = ref(null)
const div5 = ref(null)
const div6 = ref(null)
const div7 = ref(null)
const div8 = ref(null)

// 在组件挂载后执行的逻辑
onMounted(async () => {
  // 等待 GSAP 和 ScrollTrigger 库加载完毕
  await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js')
  await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js')

  // 註冊 GSAP 的 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger)

  // 獲取 SVG 路径元素和其總長度
  const path = svgElement.value.querySelector('#path')
  const pathLength = path.getTotalLength()

  // 设置 SVG 路径的 strokeDasharray 和 strokeDashoffset 属性
  path.style.strokeDasharray = pathLength
  path.style.strokeDashoffset = pathLength

  // 使用 GSAP 控制 SVG 路径的动画效果
  gsap.timeline({
    scrollTrigger: {
      trigger: svgContainer.value, // 滾動觸發的容器
      start: '40% 75%', // 觸發動畫的開始位置
      end: '200% 25%', // 觸發動畫的結束位置
      scrub: true, // 平滑滾動效果
      // markers: true, // 調試時顯示標記
      onEnter: () => {
        // 當動畫進入時執行的回調函數
        gsap.to(path, {
          strokeDashoffset: 0, // 路徑繪製完成時的偏移量
          duration: 4, // 動畫持續時間
          ease: 'power2.inOut' // 緩動函數
        })

        // DIV1 出現動畫
        gsap.to(div1.value, { opacity: 1, duration: 0.5, delay: 1 }) // 設置延遲時間
        // DIV2 出現動畫
        gsap.to(div2.value, { opacity: 1, duration: 1.5, delay: 1.5 }) // 設置延遲時間
        // DIV3 出現動畫
        gsap.to(div3.value, { opacity: 1, duration: 1.5, delay: 2 }) // 設置延遲時間
        // DIV4 出現動畫
        gsap.to(div4.value, { opacity: 1, duration: 1.5, delay: 2.5 }) // 設置延遲時間
        // DIV5 出現動畫
        gsap.to(div5.value, { opacity: 1, duration: 1.5, delay: 3 }) // 設置延遲時間
        // DIV6 出現動畫
        gsap.to(div6.value, { opacity: 1, duration: 1.5, delay: 3.5 }) // 設置延遲時間
        // DIV7 出現動畫
        gsap.to(div7.value, { opacity: 1, duration: 1.5, delay: 4 }) // 設置延遲時間
        // DIV8 出現動畫
        gsap.to(div8.value, { opacity: 1, duration: 1.5, delay: 4.5 }) // 設置延遲時間
      }
    }
  })
})

// 加载外部脚本的函数
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}
</script>
