<template>
  
  <section>
    <div class="container">
      <div class="h2txt">
        <h2>熱門商品</h2>
      </div>
      <div class="product-list">
        <swiper
          :loop="true"
          :navigation="true"
          :modules="modules"
          :pagination="{ clickable: true }"
          :space-between="10"
          @slideChange="onSlideChange"
          class="mySwiper"
          :slides-per-view="3"
          >
          <!-- :autoplay="{ delay: 2500, disableOnInteraction: false }" -->
          <swiper-slide  v-for="(cartItem, cartIndex) in cartList" :key="cartIndex">
            <div class="card-product-list">
              <div class="img-product-list">
                <img :src="cartItem['img']" alt="" />
              </div>
              <div class="into-product-list">
                <div class="title-product-list">
                  <p>{{ cartItem['title'] }}-{{ cartItem['subTitle'] }}</p>
                </div>
                <div class="member-product-list">
                  <span>NT.{{ cartItem['price'] }}</span>
                  <div class="car-member-product-list">
                    <button class="cart-shopping">
                      <div class="icon-cart-shopping" id="app">
                        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                      </div>
                      <p>加入購物車</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="carousel">
        <div class="slidebutton">
          <div class="left-slidebutton">
            <img src="../assets/image/leftbutton.svg" alt="" />
          </div>
          <div class="number-slidebutton">
            <div class="number">01</div>
            <div class="border"></div>
            <div class="number right">02</div>
          </div>
          <div class="right-slidebutton">
            <img src="../assets/image/rightbutton.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="more">
        <a href="#">
          <button class="more-button">
            <p>更多商品</p>
            <img src="../assets/image/morebutton.svg" alt="" /></button
        ></a>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export default {
  data() {
    return {
      cartList: [
        {
          id: 1,
          title: '福星',
          subTitle: '葡萄',
          price: 180,
          img: '../src/assets/image/grape.png'
        },
        {
          id: 2,
          title: '高原',
          subTitle: '柿子',
          price: 100,
          img: '../src/assets/image/persimmon.png'
        },
        {
          id: 3,
          title: '美濃',
          subTitle: '棗子',
          price: 280,
          img: '../src/assets/image/dates.png'
        },
        {
          id: 4,
          title: '美濃',
          subTitle: '棗子',
          price: 280,
          img: '../src/assets/image/grape.png'
        },
        {
          id: 5,
          title: '美濃',
          subTitle: '棗子',
          price: 280,
          img: '../src/assets/image/dates.png'
        }
      ]
    }
  },
  computed: {},
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSlideChange,
      modules: [Autoplay, Navigation, Pagination]
    }
  }
}
</script>
<style lang="scss" scoped>
section {
  font-size: 16px;
  padding: $pcbtwSec 0;
  .container {
    width: 1200px;
    flex-direction: column;
    margin: auto;

    .h2txt {
      background-image: url(../assets/image/titlebg.svg);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      margin-bottom: 47px;

      h2 {
        font-size: map-get($title, h2);
        writing-mode: horizontal-tb;
        text-align: center;
        display: inline-block;
        display: flex;
        justify-content: center;
        color: $darkGreen;
      }
    }

    .product-list {
      display: flex;
      text-align: center;
      gap: 15px;
      width: 100%;
      height: 400px;
      margin: auto;

      .img-product-list {
      //   width: 380px;
      // height: 250px;

        img {
          // width: 100%;
        }
      }

      .into-product-list {
        padding: 25px;

        .title-product-list {
          padding: 27px;
          font-family: $pFont;
          color: $darkGreen;
        }

        .member-product-list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: $pFont;
          color: $darkGreen;

          span {
            font-weight: 900px;
          }

          .car-member-product-list {
            .cart-shopping {
              display: flex;
              gap: 6px;
              padding: 7px;
              font-family: $pFont;
              color: #fff;
              background-color: $darkGreen;
              border-radius: 20px;
              border: 1px solid #000;
            }
          }
        }
      }
    }

    .carousel {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      margin: 40px 0;

      .slidebutton {
        display: flex;
        width: 60%;
        justify-content: space-evenly;

        .number-slidebutton {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-grow: 1;
          .number {
            font-size: $fontBase;
          }

          .border {
            width: 20px;
            height: 0;
            border: 1px solid $darkGreen;
          }
        }
      }
    }

    .more {
      display: flex;
      justify-content: flex-end;
      width: 80%;
      a {
        text-decoration: none;
      }
      .more-button {
        display: flex;
        align-items: center;
        padding: 7px;
        background-color: transparent;
        color: $darkGreen;
        border: 0;
      }

      p {
        font-size: $fontBase;
        white-space: nowrap;
      }

      img {
        width: 100%px;
      }
    }
  }
}
</style>
