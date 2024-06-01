<template>
  <header1 />
  <RouterView />
  <footer1 />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import './assets/scss/base/_reset.scss'
import header1 from '@/components/header.vue'
import footer1 from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    header1,
    RouterLink,
    RouterView,
    footer1
  }
}
</script>

<style lang="scss"></style>
