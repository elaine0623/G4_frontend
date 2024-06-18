<template>
  <div class="container">
    <div class="spacer"></div>
    <div class="svg-container" ref="svgContainer">
      <!-- SVG 元素 -->
      <svg
        ref="svgElement"
        width="1265"
        height="629"
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
        
        <!-- 在 SVG 路径上添加 DIV 元素，初始时设置为不显示 -->
        <foreignObject x="100" y="0" width="120" height="40" style="opacity: 0;" ref="div1">
          <div class="custom-div">
            第一个DIV
          </div>
        </foreignObject>
        <foreignObject x="500" y="0" width="120" height="40" style="opacity: 0;" ref="div2">
          <div class="custom-div">
            第二个DIV
          </div>
        </foreignObject>
      </svg>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 使用 ref 创建响应式变量
const svgElement = ref(null); // SVG 元素的 ref
const svgContainer = ref(null); // SVG 容器的 ref

// 在组件挂载后执行的逻辑
onMounted(async () => {
  // 等待 GSAP 和 ScrollTrigger 库加载完毕
  await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js');
  await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js');

  // 注册 GSAP 的 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger);

  // 获取 SVG 路径元素和其总长度
  const path = svgElement.value.querySelector("#path");
  const pathLength = path.getTotalLength();

  // 设置 SVG 路径的 strokeDasharray 和 strokeDashoffset 属性
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  // 使用 GSAP 控制 SVG 路径的动画效果
  gsap.to(path, {
    scrollTrigger: {
      trigger: svgContainer.value, // 触发滚动的容器
      start: "top 75%", // 触发动画的开始位置
      end: "bottom 25%", // 触发动画的结束位置
      scrub: true, // 平滑滚动效果
      markers: true, // 调试时显示标记
      onEnter: () => {
        // 当动画进入时，执行的回调函数
        gsap.to(path, {
          strokeDashoffset: 0, // 路径绘制完成时的偏移量
          duration: 4, // 动画持续时间
          ease: "power2.inOut", // 缓动函数
        });

        // 同时显示第一个 DIV
        gsap.to(div1.value, {
          opacity: 1, // 设置透明度为 1，显示 DIV
          duration: 0.5, // 动画持续时间
          delay: 4, // 延迟时间，与路径动画时间一致
        });
      },
      onEnterBack: () => {
        // 当动画返回时，执行的回调函数
        gsap.to(path, {
          strokeDashoffset: pathLength, // 路径返回到初始偏移量
          duration: 4, // 动画持续时间
          ease: "power2.inOut", // 缓动函数
        });

        // 同时隐藏第一个 DIV
        gsap.to(div1.value, {
          opacity: 0, // 设置透明度为 0，隐藏 DIV
          duration: 0.5, // 动画持续时间
        });
      },
    },
  });

  // 控制第二个 DIV 在 SVG 路径动画经过时的显示
  gsap.to(div2.value, {
    opacity: 0, // 初始状态为隐藏
    scrollTrigger: {
      trigger: path, // 触发滚动的元素为 SVG 路径
      start: "top 50%", // 触发动画的开始位置
      end: "bottom 50%", // 触发动画的结束位置
      scrub: true, // 平滑滚动效果
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to(div2.value, { opacity: 1, duration: 0.5 }); // 显示 DIV
        } else {
          gsap.to(div2.value, { opacity: 0, duration: 0.5 }); // 隐藏 DIV
        }
      },
    },
  });
});

// 加载外部脚本的函数
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spacer {
  height: 100vh; /* 全屏高度 */
}

.svg-container {
  width: 80%; /* SVG 容器宽度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-div {
  background-color: rgba(255, 0, 0, 0.5); /* DIV 背景颜色 */
  color: white; /* 文字颜色 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px; /* 文字大小 */
}
</style>
