<script>
import { useAdminStore } from '@/stores/userLogin.js'; // 引入 Pinia store
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      isMenuVisible: false,
    }
  },
  computed: {
    ...mapState(useAdminStore, ['currentAccount']),
    userIconRoute() {
      return this.currentAccount ? '/userlayout/userdata' : '/user';
    }
  },
  methods: {
    ...mapActions(useAdminStore, ['loadCurrentUser'])
  },
  created() {
    this.loadCurrentUser();
  },
}
</script>

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
          <RouterLink :to="userIconRoute"><i class="fa-regular fa-user icon"></i>{{
            currentAccount
          }}</RouterLink>
          <!-- <RouterLink to="/heart"><i class="fa-regular fa-heart icon"></i></RouterLink> -->
        </div>
        <div id="moblie_menu" class="hb" @click="isMenuVisible = !isMenuVisible">
          <i class="fa-solid fa-bars" style="color: #fff;font-size: 24px; cursor: pointer;"></i>
          <transition>
            <div class="mbmenu" v-show="isMenuVisible">
              <RouterLink to="/product" style="display: block;width: 100%;text-align: center;">商品</RouterLink>
              <RouterLink to="/game" style="display: block;width: 100%;text-align: center;">食農教育</RouterLink>
              <RouterLink to="/activity" style="display: block;width: 100%;text-align: center;">近期活動</RouterLink>
              <RouterLink to="/contactus" style="display: block;width: 100%;text-align: center;">聯絡我們</RouterLink>
              <RouterLink to="/aboutus" class="about" style="display: block;width: 100%;text-align: center;">關於我們
              </RouterLink>
              <div class="icons">
                <RouterLink to="/cart"><i class="fa-solid fa-cart-shopping mbicon"></i></RouterLink>
                <RouterLink :to="userIconRoute"><i class="fa-regular fa-user mbicon"></i></RouterLink>
                <!-- <RouterLink to="/heart"><i class="fa-regular fa-heart mbicon"></i></RouterLink> -->
              </div>
            </div>
          </transition>
        </div>
      </nav>
      <!-- <SectionA></SectionA> -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.wrapper {
  background-image: url('@/assets/image/header_backgroud1.svg');
  background-size: 100%;
  height: 50vh;
  background-repeat: no-repeat;
  position: relative;

  @include lg() {
    height: 250px;
  }

  @include md() {
    height: 200px;
  }

  // @include bp(744px) {
  //   background-color: $darkGreen;
  // }

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


    .hb {
      display: none;


      @include bp(744px) {
        display: block;
      }

      .mbmenu {

        display: flex;
        width: 50%;
        height: 90vh;
        background-color: $darkGreen;
        position: absolute;
        right: 0;
        z-index: 999;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        a {
          text-decoration: none;
          color: $bcgw;
          padding: 10px 0;
        }

        .icons {
          width: 100%;

          a {
            display: inline-block;
            width: 50%;
            text-align: center;
          }
        }
      }
    }

    .logo {
      width: 80px;
      height: 80px;
      padding-top: 8px;

      @include md() {
        width: 90%;
      }

      @include sm() {
        width: 80%;
        height: 50px
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
