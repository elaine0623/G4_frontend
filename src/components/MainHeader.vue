<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><img class="logo" src="@/assets/image/logo_F.svg" /></RouterLink>
        <div class="menu">
          <RouterLink to="/product">商品</RouterLink>
          <RouterLink to="/game">食農教育</RouterLink>
          <RouterLink to="/activity">近期活動</RouterLink>
          <RouterLink to="/contactus">聯絡我們</RouterLink>
          <RouterLink to="/aboutus" class="about">關於我們</RouterLink>
          <RouterLink to="/cart"><i class="fa-solid fa-cart-shopping icon"></i></RouterLink>
          <RouterLink to="/user"><i class="fa-regular fa-user icon"></i></RouterLink>
          <RouterLink to="/heart"><i class="fa-regular fa-heart icon"></i></RouterLink>
        </div>
        <div id="moblie_menu" href="javascript:;" class="hb">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <!-- <SectionA></SectionA> -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
.wrapper {
  background-image: url('@/assets/image/header_backgroud1.svg');
  background-size: 100%;
  height: 370px;
  background-repeat: no-repeat;
  @include lg() {
    height: 250px;
  }
  @include md() {
    height: 200px;
  }
  @include sm() {
    height: 150px;
  }
  nav {
    font-size: $fontBase;
    font-family: $titleFont;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    @include md() {
      width: 90%;
    }
    @include bp(744px) {
      justify-content: space-between;
    }
    #moblie_menu {
      // display: none;
    }
    .hb {
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      span {
        width: 60%;
        height: 2px;
        background-color: #fff;
        // margin: -5px 0;
      }
    }
    .logo {
      width: 100px;
      height: 100px;
      padding-top: 8px;
      @include md() {
        width: 90%;
      }
    }
    .menu {
      display: flex;
      justify-content: center;
      @include bp(744px) {
        display: none;
      }
      a {
        display: block;
        color: #fff;
        text-decoration: none;
        padding: 8px 20px;
        align-content: center;
        @include md() {
          padding: 6px 13px;
        }
      }
      .about {
        flex-grow: 2;
      }
      .icon {
        font-size: map-get($title, h4);
      }
    }
  }
}
</style>
