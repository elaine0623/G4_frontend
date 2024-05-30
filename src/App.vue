<template>
  <header1 />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import './assets/scss/base/_reset.scss'
import header1 from '@/components/header.vue'
// import Aboutus from './views/aboutus.vue'

export default {
  name: 'App',
  components: {
    header1,
    RouterLink,
    RouterView
  }
}
</script>

<style lang="scss"></style>
