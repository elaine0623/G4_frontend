<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><img class="logo" src="@/assets/image/logo_F.svg" /></RouterLink>
        <RouterLink to="/product">商品</RouterLink>
        <RouterLink to="/game">食農教育</RouterLink>
        <RouterLink to="/activity">近期活動</RouterLink>
        <RouterLink to="/contactus">聯絡我們</RouterLink>
        <RouterLink to="/aboutus">關於我們</RouterLink>
      </nav>
      <!-- <SectionA></SectionA> -->
      <!-- <font-awesome-icon icon="fa-solid fa-gift" /> -->
    </div>
  </header>
</template>

<style lang="scss">
.logo {
  width: 100px;
  height: 100px;
}
.wrapper {
  background-image: url('@/assets/image/header_backgroud1.svg');
  background-size: cover;
  height: 300px;
  background-repeat: no-repeat;
}
nav {
  font-size: $fontBase;
  font-family: $titleFont;
  display: flex;
  justify-content: center;
  a {
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 8px 10px;
    align-content: center;
  }
}
</style>
