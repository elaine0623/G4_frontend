
<template>
  <section>
  <h2>關於果籽</h2>
  <div class="aboutus">
    <div class="card">
      <p>食安問題層出不窮，架設果籽網站，期望能讓民眾重視食品安全，宣導購買原型食物及有機耕種的觀念，支持在地小農以友善土地的方式耕種，讓民眾吃得健康，土地也得以永續</p>
      <img src="" alt="">
    </div>
    <h2>核心價值</h2>
    <div class="card">
      <ul>
        <li>向民眾宣導購買原型食物</li>
        <li>介紹有機耕種的在地小農</li>
        <li>協助在地小農推廣有機作物</li>
        <li>讓民眾吃得健康</li>
        <li>土地得以永續</li>
      </ul>
      <img src="" alt="">
    </div>

  </div>

  <section class="sdgs">

  </section>
  <h2>果籽協助小農推廣有機耕種及農產品 <br>
期望達成聯合國永續發展目標（SDGs）</h2>
<button>12 負責任的生產消費循環</button>
<button>11 永續城鄉</button>
<button>15 陸域生態</button>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/base/_font.scss";
@import "@/assets/scss/mixin/mixin.scss";
.aboutus{
  margin: 20px;
  padding: 20px;
}
.card{
  width: 450px;
  background-color: #397D5A;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
}
section{
  max-width: 1200px;
  text-align: center;

}
</style>