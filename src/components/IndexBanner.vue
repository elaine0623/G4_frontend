<template>
  <section class="pinned-section">
    <div class="container">
      <div class="textleft">
        <h2>&emsp;美&emsp;&emsp;食&emsp;&emsp;上&emsp;&emsp;桌&emsp;</h2>
      </div>
      <div class="banner">
        <img src="@/assets/image/farm.png" alt="Image 1">
        <img src="@/assets/image/car_.gif" alt="Image 2">
        <img src="@/assets/image/Rectangle 3.png" alt="Image 3">
        <!-- 根據需要添加更多圖片 -->
      </div>
      <div class="textright">
        <h2>&emsp;食&emsp;&emsp;在&emsp;&emsp;自&emsp;&emsp;然&emsp;</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async mounted() {
    await this.loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js');
    await this.loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js');

    // 確保 GSAP 和 ScrollTrigger 加載完畢後進行初始化
    gsap.registerPlugin(ScrollTrigger);

    const images = document.querySelectorAll('.banner img');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pinned-section",
        start: "-10% 10%",
        end: "+=500",
        scrub: true,
        pin: true, // 固定整個 section
        // markers: true, 校正線npm 
      }
    });

    // 遍歷所有圖片
    images.forEach((image, i) => {
      if (i === 0) {
        // 第一張圖片在頁面載入時顯示，滾動後執行動畫並消失
        tl.set(image, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.inOut"
        }).to(image, {
          opacity: 0,
          scale: 2,
          duration: 1,
          ease: "power2.inOut"
        }, "+=0.5");
      } else if (i === images.length - 1) {
        // 最後一張圖片只淡入並保持不變
        tl.to(image, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.inOut"
        }, "+=0.5");
      } else {
        // 中間圖片淡入和淡出
        tl.to(image, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.inOut"
        }, "+=0.5").to(image, {
          opacity: 0,
          scale: 2,
          duration: 1,
          ease: "power2.inOut"
        }, "+=0.5");
      }
    });
  },
  methods: {
    loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.pinned-section {
  position: relative;
  width: 100%;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1200px;

  .textleft {
    background-image: url(../assets/image/h1img.png);
    background-size: 100% 100%;
    position: absolute;
    left: 10%;

    @media screen and (max-width: 576px) {
      display: none;
    }

    h2 {
      writing-mode: vertical-lr;
      line-height: 250%;
      font-size: 1.7rem;
      z-index: 2;

      @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
      }

      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }

  .banner {
    position: relative;
    width: 50%;
    aspect-ratio: 12/10;
    overflow: visible;

    @media screen and (max-width: 1024px) {
      width: 50%;
    }

    @media screen and (max-width: 768px) {
      width: 50%;
    }

    @media screen and (max-width: 576px) {
      width: 100%;
      min-width: unset;
      overflow: hidden;
    }

    >img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      /* 初始時設置透明度為0 */
      transform: scale(0.5);
    }
  }

  .textright {
    background-image: url(../assets/image/h1imgr.png);
    background-size: 100% 100%;
    position: absolute;
    right: 10%;

    @media screen and (max-width: 576px) {
      display: none;
    }

    h2 {
      writing-mode: vertical-lr;
      line-height: 250%;
      font-size: 1.7rem;
      z-index: 2;

      @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
      }

      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
}
</style>
