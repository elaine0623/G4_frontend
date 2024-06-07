<template>
  <main>
    <IndexBanner />
    <IndexAboutus />
    <IndexPopularProduct />
    <IndexNews />
    <IndexEdu />
    <IndexMap />
  </main>
  <!-- go up btn -->
  <div class="go-up-btn">
    <a href="#">TOP</a>
  </div>
</template>

<script>
import IndexBanner from '@/components/IndexBanner.vue'
import IndexAboutus from '@/components/IndexAboutus.vue'
import IndexPopularProduct from '@/components/IndexPopularProduct.vue'
import IndexNews from '@/components/IndexNews.vue'
import IndexEdu from '@/components/IndexEdu.vue'
import IndexMap from '@/components/IndexMap.vue'
export default {
  components: {
    IndexBanner,
    IndexAboutus,
    IndexPopularProduct,
    IndexNews,
    IndexEdu,
    IndexMap
  }
}
</script>

<style lang="scss" scoped>
.go-up-btn {
  text-align: end;
  position: sticky;
  height: 70px;
  bottom: 10px;
  z-index: 100;

  a {
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    border-radius: 100%;
    background-color: $darkGreen;
    padding: 35px 30px;
    margin-right: 20px;
    position: relative;

    &::before {
      position: absolute;
      top: 20px;
      left: 35px;
      content: '';
      display: inline-block;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      width: 26px;
      height: 26px;
      transform: rotate(-135deg);
    }
  }
}
</style>