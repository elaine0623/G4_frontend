<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><img class="logo" src="@/assets/image/logo_F.svg" /></RouterLink>
        <RouterLink to="/product">商品</RouterLink>
        <RouterLink to="/game">食農教育</RouterLink>
        <RouterLink to="/activity">近期活動</RouterLink>
        <RouterLink to="/contactus">聯絡我們</RouterLink>
        <RouterLink to="/aboutus" class="about">關於我們</RouterLink>
        <RouterLink to="/cart"><i class="fa-solid fa-cart-shopping icon"></i></RouterLink>
        <RouterLink to="/user"><i class="fa-regular fa-user icon"></i></RouterLink>
        <RouterLink to="/heart"><i class="fa-regular fa-heart icon"></i></RouterLink>
      </nav>
      <!-- <SectionA></SectionA> -->
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
    padding: 8px 20px;
    align-content: center;
  }
  .about {
    flex-grow: 0.15;
  }
  .icon {
    font-size: map-get($title, h4);
  }
}
</style>
