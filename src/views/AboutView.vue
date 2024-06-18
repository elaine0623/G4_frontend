
<template>
  <section>
  <h2>關於果籽</h2>
  <!-- <img class="title-bgi" src="@/assets/image/deco.png" alt=""> -->
  <div class="aboutus">
    <div class="card">
          <p>食安問題層出不窮，架設果籽網站，期望能讓民眾重視食品安全，宣導購買原型食物及有機耕種的觀念，支持在地小農以友善土地的方式耕種，讓民眾吃得健康，土地也得以永續</p>
          <div class="pic-left-intro-up">
            <img src="../assets/image/index_about2.png" alt="garden1">
            <div class="img-circle" v-for="i in 3" :key="i" :class="'circle' + i">
            </div>
          </div>
          <img src="../../src/assets/image/abour-img1.png" alt="">
    </div>
    <div class="card">
        <img src="../../src/assets/image/about-img2.png" alt="">
      <div class="card-txt">
        <h3>核心價值</h3>
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

  <h3>果籽協助小農推廣有機耕種及農產品 <br>
期望達成聯合國永續發展目標（SDGs）</h3>
<!-- 三個按鈕 -->
<button class="btn"
    :class="{ 'btn-active': currentIndex === 0 }"
    @click="currentIndex = 0"
    >11 永續城鄉
    </button>
    <button class="btn"
    :class="{ 'btn-active': currentIndex === 1 }"
    @click="currentIndex = 1"
    >12 負責任消費與生產
  </button>
  <button class="btn"
    :class="{ 'btn-active': currentIndex === 2 }"
    @click="currentIndex = 2"
  >15 陸地生態
  </button>
<!-- 點選按鈕切換內容 -->
 <div class="sdgs-info">
  <div v-if="currentIndex === 0">
    <div class="SDGs">
      <img src="../../src/assets/image/SDGs11.png" alt="SDGs11">
          <div class="sdgs-text">
            <h4>永續發展目標11:永續城鄉。<br></h4>
            <p>小農經營的傳統農業不僅維護了在地文化，更是生物多樣性的守護者。<br>他們的農地為野生動植物提供棲息地且有助於維護生態系統的平衡。</p>
      </div>
      </div>
    </div>
      <div v-if="currentIndex === 1">
        <div class="SDGs">
          <img src="../../src/assets/image/SDGs12.png" alt="SDGs12">
      <div class="sdgs-text">
        <h4>永續發展目標12:促進負責任的消費。<br></h4>
        <p>小農種植的農作物通常採用較少化學肥料和農藥，此種耕種方式更環保且對土地影響較小，有助於促進可持續的生產模式。<br>小農所提供的環保的食材，也減少了食物運輸過程中的碳足跡，符合負責任消費的理念。</p>
          </div>
        </div>
      </div>
      <div v-if="currentIndex === 2">
        <div class="SDGs">
          <img src="../../src/assets/image/SDGs15.png" alt="SDGs15">
          <div class="sdgs-text">
            <h4>永續發展目標15:關注維護陸地生態系統。<br></h4>
            <p>小農因生產規模較小，對土地的利用較為節約。此舉避免大規模過度開墾。<br>透過友善環境的農業實踐，小農也在努力保育土壤和生物多樣性，維護地球村莊的環境品質。</p>
          </div>
        </div>
        </div>
      <div>
</div>
</div>
</section>
</template>
<script>
  export default {
  data() {
    return {
      currentIndex: 0, 
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/base/_font.scss";
@import "@/assets/scss/mixin/mixin.scss";
// .title-bgi{
//   position: absolute;
//       top: 0;
//       width: 100%;
//       height: 100%;
//       max-width: 900px;
// }
.aboutus{
  margin: 20px;
  padding: 20px;
}
.card{
  max-width: 550px;
 display:flex;
 flex-direction: row;
 align-items: center;
 justify-self: center;
 margin: 0 auto;
 line-height: 1.5rem;
 padding: auto;
}
.card p,.card ul{
  color: #FFFFFF;
  background-color: #397D5A;
  width: 300px;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  list-style: disc;
  text-align: left;
}
section{
  max-width: 1200px;
  text-align: center;
  
  }
  .SDGs{
    max-width: 1200px;
    display: flex;
    // background-image: url('../src/assets/image/sdgs_img2.png');
    // position: absolute;
}
sdgs-text{
  line-height: 2.5rem;
  // position: relative;
  
}
h2{
  padding: 20px;
  font-size: 40px;
  // position: relative;
  color: #144433;
}
h3{
  line-height: 1.5rem;
}
h4{
  font-weight: bold;
  padding-bottom: 20px;
  color:#144433;
}
p{
  color: #144433;
  text-align: left;
  padding: 0 10px;

}
.btn{
  padding: 15px;
  // border-radius: 0 0 0 20px;
  color:#FFFFFF;
  background-color: #357A56;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
}
.btn-active{
  background-color: #144433;
}

.SDGs{
  padding: 20px;
  max-width: 800px;
  
}
img{
  max-width: 200px;
}
.sdgs-info{
  display: flex;
  /* 水平置中 */
  justify-content: center;    
  /* 垂直置中 */
  align-items: center; 
}
</style>