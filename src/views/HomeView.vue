<template>
  <main>
    <IndexBanner />
    <IndexAboutus />
    <IndexPopularProduct />
    <IndexNews />
    <IndexEdu />
    <IndexMap />
  </main>
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
