<template>
  <header1 />
  <RouterView />
  <footer1 />
</template>


<script>
import './assets/scss/base/_reset.scss'
import { RouterView } from 'vue-router'
import header1 from '@/components/MainHeader.vue'
import footer1 from '@/components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    header1,
    RouterView,
    footer1
  }
}
</script>

<style lang="scss"></style>
