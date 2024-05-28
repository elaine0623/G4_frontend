<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="helloha~~~~!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <RouterLink to="/product">Product</RouterLink>
      </nav>
      <!-- <SectionA></SectionA> -->
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import './assets/scss/base/_reset.scss'
import '@/assets/scss/style.scss'


export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style scoped></style>
