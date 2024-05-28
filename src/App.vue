<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/product">商品</RouterLink>
        <RouterLink to="/GameView">食農教育</RouterLink>
        <RouterLink to="/ActivityView">近期活動</RouterLink>
      </nav>
      <!-- <SectionA></SectionA> -->
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import './assets/scss/base/_reset.scss'

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style lang="scss">
nav {
  font-size: $fontBase;
  font-family: $titleFont;
  background-color: #144433;
  height: 100px;
  display: flex;
  // justify-content: end;
  a {
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 8px 10px;
    align-content: center;
  }
}
</style>
