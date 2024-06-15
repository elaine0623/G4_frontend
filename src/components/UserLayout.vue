<!-- router每次到userlayout頁面時，會透過classname改變z-index -->
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const hideChild = computed(() => {
    return route.name === 'UserLayout'
})
</script>

<script>
export default {
    data() {
        return {
            countDown: 10, // 倒數的秒數
            timer: null // 定時器的引用
        };
    },
    created() {
        this.startTimer(); //在此執行-->寫在事件結束後執行
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                if (this.countDown > 0) {
                    // 時間未到，減一秒
                    this.countDown--;
                } else {
                    // 時間到，清除計時器
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }, 1000); // 每秒執行一次進入作用域
        }
    },
    beforeUnmount() {
        // vue實體銷毀前，關掉這一頁面
        if (this.timer) {
            clearInterval(this.timer); // 防止記憶體洩漏，清除定時器
        }
    }
};
</script>

<template>
    <!-- {{ route }}
    {{ hideChild }} -->
    <!-- {{ countDown }} -->
    <section>
        <div class="wrapper">
            <div class="member-context">
                <div class="member-pic">
                    <!-- <img :src="member.image" /> -->
                    <img src="/src/assets/image/memberPic.png">
                </div>
                <span class="member-name">方老伯</span>
                <div class="btn-selection">
                    <router-link to="/userlayout/userdata"><button class="btn-info">個人資料</button></router-link>
                    <router-link to="/userlayout/userfavorite"><button class="btn-like">收藏項目</button></router-link>
                    <router-link to="/userlayout/userorder"><button class="btn-order">訂單紀錄</button></router-link>
                    <router-link to="/userlayout/useractivity"><button class="btn-activity">活動紀錄</button></router-link>
                </div>
                <div class="logout">
                    <button class="btn-logout">登出<i class="fa-solid fa-arrow-right-from-bracket"></i></button>
                </div>
            </div>
            <div class="router-content">
                <router-view></router-view>
            </div>
        </div>
    </section>

    <section>
        <div class="mb-memberContext">
            <div class="member-pic">
                <img src="/src/assets/image/memberPic.png">
            </div>
            <span class="member-name">方老伯</span>
            <div class="btn-selection">
                <router-link to="/userlayout/userdata"><button class="btn-info">個人資料</button></router-link>
                <router-link to="/userlayout/userfavorite"><button class="btn-like">收藏項目</button></router-link>
                <router-link to="/userlayout/userorder"><button class="btn-order">訂單紀錄</button></router-link>
                <router-link to="/userlayout/useractivity"><button class="btn-activity">活動紀錄</button></router-link>
            </div>
            <div class="logout">
                <button class="btn-logout">登出<i class="fa-solid fa-arrow-right-from-bracket"></i></button>
            </div>
            <div class="mb-routerContent" :class="{ 'invisible': hideChild }">
                <router-view></router-view>
            </div>
        </div>

    </section>

</template>


<style lang="scss" scoped>
.wrapper {
    position: relative;
    max-width: 768px;
    min-width: 300px;
    width: 100%;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
        0 10px 10px rgba(0, 0, 0, .2);
    background-color: #F5F4EA;
    box-sizing: border-box;
    margin: 0 auto;

    @include md() {
        display: none;
    }
}

.mb-memberContext {
    position: relative;
    padding: 20px 0;
    width: 350px;
    margin: 0 auto;
    background-color: #144433;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
        0 10px 10px rgba(0, 0, 0, .2);

    @include s2bmd() {
        display: none;
    }
}

.mb-routerContent {
    position: absolute;
    top: 0;
    background-color: #F5F4EA;
    width: 100%;
    height: 120%;
}

.member-context {
    position: absolute;
    width: 300px;
    height: 100%;
    left: 0;
    background-color: #144433;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btn-selection {
    margin: 20px 0 30px;
}

.member-pic {
    margin-bottom: 25px;
    width: 125px;
    height: 125px;

    img {
        width: 100%;
        vertical-align: top;
        object-fit: cover;
        border-radius: 50%;
    }
}

.member-name {
    font-size: 24px;
    font-family: $titleFont;
    color: #fff;
}

button {
    border-radius: 25px;
    border: none;
    // border: 1px solid #eee;
    background-color: #144433;
    color: #fff;
    font-size: 15px;
    font-family: $titleFont;
    // font-weight: bold;
    padding: 6px 30px;
    display: block;
    letter-spacing: 1.5px;
    cursor: pointer;
    transition: transform .1s ease-in;
    margin: 6px 0;

    &:hover {
        background-color: #357A56;
    }

    &:focus {
        outline: none;
    }
}

.btn-logout {
    background-color: #E76900;
    border: 1px solid #666;
    padding: 6px 30px;

    &:hover {
        background-color: #E76900;
    }

    i {
        font-size: 12px;
        margin: 0 3px;
    }
}

.router-content {
    position: absolute;
    width: 468px;
    height: 100%;
    right: 0;


}

a {
    text-decoration: none;
}

.invisible {
    z-index: -1;
}
</style>