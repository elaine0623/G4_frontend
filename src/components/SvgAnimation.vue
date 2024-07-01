<template>
  <div class="container">
    <div class="svg-container" ref="svgContainer">
      <!-- Desktop SVG -->
       <h1>食安事件年表</h1>
      <svg
        v-if="isDesktop"
        ref="svgElement"
        width="1100"
        height="900"
        viewBox="0 0 1270 630"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- SVG Path -->
        <path
          id="path"
          fill="none"
          stroke="#144433"
          stroke-width="2"
          d="M107.5 2H1163C1185.17 5.66667 1211.69 9.37674 1236 30.5C1255.57 47.5 1266.5 59 1266.5 105.5C1266.5 136 1266.5 167 1266.5 204.5C1266.5 242 1266.5 272.5 1236 295C1213.48 311.614 1191.5 319 1163 319C1140.2 319 441.167 319 94.5 319C74.6667 323.333 41.42 343.751 24 372C5.5 402 2 427.5 2 473.5C2 519.5 10 563.5 24 581.5C38 599.5 67.5 625.5 107.5 625.5C147.5 625.5 875.833 623.333 1266.5 625.5"
        />

        <!-- Desktop Foreign Objects -->
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
              <li>2024年2月「蘇丹紅事件」：辣椒粉含致癌物蘇丹紅，製成各式產品流竄全台。</li>
              <li>2024年3月「寶林茶室食物中毒事件」：造成重大集體中毒事件，多人受害死亡，迄今還有人急救中。</li>
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
              <li>
                食安問題層出不窮，架設果籽網站，期望能讓民眾重視食品安全，宣導購買原型食物及有機耕種的觀念，支持在地小農以友善土地的方式耕種，讓民眾吃得健康，土地也得以永續
              </li>
            </ul>
          </div>
        </foreignObject>
      </svg>

      <!-- Mobile SVG -->
      <svg
        v-else
        ref="mobileSvgElement"
        width="380"
        height="1600"
        viewBox="0 0 100 1600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Mobile SVG Path and Foreign Objects -->
        <path id="mobilePath" fill="none" stroke="#144433" stroke-width="2" d="M50 0 L50 1600" />
        <foreignObject x="-50" y="100" width="380" height="400" style="opacity: 0" ref="mobileDiv1">
          <div class="custom-div">
            <p>2013年至今</p>
            <p>重大食安事件</p>
          </div>
        </foreignObject>
        <foreignObject
          x="-150"
          y="175"
          width="380"
          height="400"
          style="opacity: 0"
          ref="mobileDiv2"
        >
          <div class="custom-div-down">
            <ul>
              <li>2013年「大統黑心油事件」：食用油添加低成本葵花油混充並添加銅葉綠素調色</li>
              <li>2013年山水米以劣質米充優質米</li>
              <li>2016年「調和酒冒充釀製酒事件」</li>
            </ul>
          </div>
        </foreignObject>
        <foreignObject x="-50" y="500" width="380" height="400" style="opacity: 0" ref="mobileDiv3">
          <div class="custom-div">
            <p>2023年</p>
          </div>
        </foreignObject>
        <foreignObject
          x="-150"
          y="575"
          width="380"
          height="400"
          style="opacity: 0"
          ref="mobileDiv4"
        >
          <div class="custom-div-down">
            <ul>
              <li>「巴西蛋事件」：巴西進口雞蛋有效日期過長、進口雞蛋製造地可標示台灣。</li>
            </ul>
          </div>
        </foreignObject>
        <foreignObject
          x="-50"
          y="900"
          width="380"
          height="400"
          style="opacity: 0"
          ref="mobileDiv5"
        >
          <div class="custom-div">
            <p>2024年初</p>
          </div>
        </foreignObject>
        <foreignObject
          x="-150"
          y="975"
          width="380"
          height="400"
          style="opacity: 0"
          ref="mobileDiv6"
        >
          <div class="custom-div-down">
            <ul>
              <li>2024年2月「蘇丹紅事件」：辣椒粉含致癌物蘇丹紅，製成各式產品流竄全台。</li>
              <li>2024年3月「寶林茶室食物中毒事件」：造成重大集體中毒事件，多人受害死亡，迄今還有人急救中。</li>
            </ul>
          </div>
        </foreignObject>
        <foreignObject
          x="-50"
          y="1300"
          width="400"
          height="400"
          style="opacity: 0"
          ref="mobileDiv7"
        >
          <div class="custom-div">
            <p>2024/05</p>
          </div>
        </foreignObject>
        <foreignObject
          x="-150"
          y="1375"
          width="400"
          height="400"
          style="opacity: 0"
          ref="mobileDiv8"
        >
          <div class="custom-div-down">
            <ul>
              <li>
                食安問題層出不窮，架設果籽網站，期望能讓民眾重視食品安全，宣導購買原型食物及有機耕種的觀念，支持在地小農以友善土地的方式耕種，讓民眾吃得健康，土地也得以永續
              </li>
            </ul>
          </div>
        </foreignObject>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const svgElement = ref(null)
const mobileSvgElement = ref(null)
const svgContainer = ref(null)
const div1 = ref(null)
const div2 = ref(null)
const div3 = ref(null)
const div4 = ref(null)
const div5 = ref(null)
const div6 = ref(null)
const div7 = ref(null)
const div8 = ref(null)
const mobileDiv1 = ref(null)
const mobileDiv2 = ref(null)
const mobileDiv3 = ref(null)
const mobileDiv4 = ref(null)
const mobileDiv5 = ref(null)
const mobileDiv6 = ref(null)
const mobileDiv7 = ref(null)
const mobileDiv8 = ref(null)

const isDesktop = ref(window.innerWidth >= 768)

const updateScreenWidth = () => {
  isDesktop.value = window.innerWidth >= 768
}

onMounted(async () => {
  window.addEventListener('resize', updateScreenWidth)
  await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js')
  await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js')

  gsap.registerPlugin(ScrollTrigger)

  if (isDesktop.value) {
    const path = svgElement.value.querySelector('#path')
    const pathLength = path.getTotalLength()

    path.style.strokeDasharray = pathLength
    path.style.strokeDashoffset = pathLength

    gsap.timeline({
      scrollTrigger: {
        trigger: svgContainer.value,
        start: '40% 75%',
        scrub: true,
        // markers: true,
        onEnter: () => {
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 4,
            ease: 'power2.inOut'
          })
          // 透明度動畫示例
          gsap.to(div1.value, { opacity: 1, duration: 0.5, delay: 1 })
          gsap.to(div2.value, { opacity: 1, duration: 1.5, delay: 1.5 })
          gsap.to(div3.value, { opacity: 1, duration: 1.5, delay: 2 })
          gsap.to(div4.value, { opacity: 1, duration: 1.5, delay: 2.5 })
          gsap.to(div5.value, { opacity: 1, duration: 1.5, delay: 3 })
          gsap.to(div6.value, { opacity: 1, duration: 1.5, delay: 3.5 })
          gsap.to(div7.value, { opacity: 1, duration: 1.5, delay: 4 })
          gsap.to(div8.value, { opacity: 1, duration: 1.5, delay: 4.5 })
        }
      }
    })
  } else {
    const mobilePath = mobileSvgElement.value.querySelector('#mobilePath')
    const mobilePathLength = mobilePath.getTotalLength()

    mobilePath.style.strokeDasharray = mobilePathLength
    mobilePath.style.strokeDashoffset = mobilePathLength

    gsap.timeline({
      scrollTrigger: {
        trigger: svgContainer.value,
        start: '10% 75%',
        scrub: true,
        // markers: true,
        onEnter: () => {
          gsap.to(mobilePath, {
            strokeDashoffset: 0,
            duration: 4,
            ease: 'power2.inOut'
          })
          // 透明度動畫示例
          gsap.to(mobileDiv1.value, { opacity: 1, duration: 0.5, delay: 1 })
          gsap.to(mobileDiv2.value, { opacity: 1, duration: 1.5, delay: 1.5 })
          gsap.to(mobileDiv3.value, { opacity: 1, duration: 1.5, delay: 2 })
          gsap.to(mobileDiv4.value, { opacity: 1, duration: 1.5, delay: 2.5 })
          gsap.to(mobileDiv5.value, { opacity: 1, duration: 1.5, delay: 3 })
          gsap.to(mobileDiv6.value, { opacity: 1, duration: 1.5, delay: 3.5 })
          gsap.to(mobileDiv7.value, { opacity: 1, duration: 1.5, delay: 4 })
          gsap.to(mobileDiv8.value, { opacity: 1, duration: 1.5, delay: 4.5 })
        }
      }
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth)
})

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

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .svg-container {
    width: 90%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 80px;
    @include md() {
      margin: 40px;
    }
    .divitem {
      display: block;
    }
    .mobileDivitem {
      display: none;
    }
    @include md() {
      .divitem {
        display: none;
      }
      .mobileDivitem {
        display: block;
      }
    }
    h1{
      font-size:2.5em;
      text-align: center;
      color: #144433;
      @include md(){
        font-size: 1.75em;
        padding: 2em;
      }
    }
    .custom-div {
      background-color: #397d5a;
      color: white;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 190px;
      height: 75px;
      border-radius: 10px 10px 0 0;
      font-weight: 400;
      line-height: 1.5;
      @include md() {
        font-size: 1em;
      }
    }
    .custom-div-down {
      background-color: #397d5a;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 380px;
      height: 200px;
      font-weight: 400;
      font-size: 1em;
      ul {
        width: 90%;
        li {
          padding: 0.5em;
          line-height: 2;
          text-align: left;
        }
      }
    }
  }
}
</style>
