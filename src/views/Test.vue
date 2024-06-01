<template>
    <div>
        test
        <!-- src不要加分號 -->
        <img src="@/assets/image/grape.png" alt="草莓">
        <!-- v-blind:src資源所以不要加分號 -->
        <img :src="grape" alt="">

        <img :src="parseIcon('grape.png')" alt="">
        <!-- <div v-for="index in img" :key="index">
            <img :src="parseIcon(`${index}.png`)" alt="">
        </div>
        <div class="card">123</div> -->
    </div> 
    <div class="card" v-for="index in img" :key="index" :style="{'background-img':`url(${parseIcon(index)})`}">
    </div>
    <div></div>
</template>
<script>
import grape from "@/assets/image/grape.png"
export default {
    data() {
        return {
            grape,
            img:['dates','grape','h1img']
        }
    },
    methods: {
        parseIcon(file) {
            return new URL(`../assets/image/${file}`,import.meta.url).href
        }
    },
}
</script>
<style lang="scss" scoped>
img {
    height: 5rem;
}
.card {
    width: 10rem;
    height: 10rem;
    background-image: url('@/assets/image/dates.png');
}
</style>