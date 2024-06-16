<template>

  <section>
    <div class="container">
      <div class="title-container">
        <h2 class="section-title">熱門商品</h2>
        <img class="title-bgi" src="../assets/image/titlebg.svg" alt="">
      </div>
      <div class="product">
        <div class="product-list">
          <swiper :loop="true" :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }" :modules='modules' :pagination="{
            type: 'fraction',
            el: '.pagination',
          }" :space-between="10" @slideChange="onSlideChange" class="mySwiper" slides-per-view="auto" :centeredSlides="true" >
            <swiper-slide v-for="(cartItem, cartIndex) in cartList" :key="cartIndex" >
              <!-- :autoplay="{ delay: 2500, disableOnInteraction: false }" -->
              <RouterLink to="/ProductPage" class="card-product-list">
                <div class="img-product-list">
                  <img :src="parsePic(cartItem['img'])" alt="" />
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
                          <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <p>加入購物車</p>
                      </button>
                    </div>
                  </div>
                </div>
              </RouterLink>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="carousel">
        <div class="slidebutton">

          <div class="swiper-button-prev">
            <img src="../assets/image/leftbutton.svg" alt="" />
          </div>

          <div class="pagination">
            <span class="swiper-pagination-current">1</span>
            <p>-</p>
            <span class="swiper-pagination-total">5</span>
          </div>
          <div class="swiper-button-next">
            <img src="../assets/image/rightbutton.svg" alt="" />
          </div>
        </div>
      </div>



      <div class="moreBtn">
        <RouterLink to="/Product">更多商品</RouterLink>
        <!-- 要連結到關於我們頁面 -->
      </div>


    </div>
  </section>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
// ----
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export default {
  data() {
    return {
      // swiperOption:{
      //   breakpoints:{
      //     391:{
      //       slidesPerView:3,
      //       centeredSlides:true,
      //     }
          
      //   }

      // },
    
      
      cartList: [
        {
          id: 1,
          title: '福星',
          subTitle: '葡萄',
          price: 180,
          img: 'grape.png'
        },
        {
          id: 2,
          title: '高原',
          subTitle: '柿子',
          price: 100,
          img: 'persimmon.png'
        },
        {
          id: 3,
          title: '美濃',
          subTitle: '棗子',
          price: 280,
          img: 'dates.png'
        },
        {
          id: 4,
          title: '美濃',
          subTitle: '棗子',
          price: 280,
          img: 'grape.png'
        },
        {
          id: 5,
          title: '美濃',
          subTitle: '棗子',
          price: 280,
          img: 'dates.png'
        }
      ],


    };
  },
  methods: {
    parsePic(file) {
      return new URL(`../assets/image/${file}`, import.meta.url).href
    },
  },


  computed: {

  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSlideChange = () => {
      // console.log('slide change')
    }
    return {
      onSlideChange,
      modules: [Autoplay, Navigation, Pagination],
    }
  },

}
</script>
<style lang="scss" scoped>
.swiper-button-prev:after,
.swiper-button-next:after {
  display: none;


}


section {
  font-size: 16px;
  padding: $pcbtwSec 0;
  // width: 100%;


  .container {
    max-width: $fixed;
    box-sizing: border-box;
    // padding: 0 10px ;
    flex-direction: column;
    margin: 0 auto;
    overflow: hidden;


    @include lg() {

      max-width: $lg ;
    }

    @include md() {
      max-width: $md ;
    }

    @include sm() {
      max-width: $sm ;
    }

    .title-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 5vw 5vh;
      box-sizing: border-box;

      .news-section-title {
        writing-mode: horizontal-tb;
        font-family: $titleFont;
        font-size: map-get($title, h2);
        text-align: center;
        color: $darkGreen;
      }

      .title-bgi {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        max-width: 900px;
      }
    }

    .product {
      overflow: hidden;
      position: relative;
      width: 100vw;
      height: 400px;
      // transform: translate(-50%);
      width: 100%;

      @include lg() {
        width: $lg ;
      }

      @include md() {
        width: $md ;
      }

      @include sm() {
        width: $sm ;
      }


      .product-list {
        // display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        gap: 1%;
        overflow: visible;
        height: auto;
        // width: 1200px;
        // overflow: hidden;
        box-sizing: border-box;
        // position: absolute;
        // right: 50%;
        // transform: translateX(50%);
        .swiper-slide{
          width: auto;

        }

        .card-product-list {
          margin: auto;
          object-fit: cover;
          width: 380px;
          cursor:pointer;
          text-decoration: none;
          
          
        }

        .img-product-list {
          //   width: 380px;
          // height: 250px;


          img {
            width: 100%;
          //   @include bp(390px) {
          //   width: 380px;
          // }

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

                &:hover {
                  background-color: $lightGreen;
                  border: 1px solid $darkGreen;
                  cursor:pointer;
                }
              }
            }
          }
        }
      }
    }


    .carousel {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 40px 0;

      .slidebutton {
        display: flex;
        width: 50%;
        justify-content: space-evenly;



        .swiper-button-prev,
        .swiper-button-next {
          position: relative;
          margin: $mbbtwElement;
          
        }

        .pagination {
          // position: relative;
          width: 50%;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }


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

    .moreBtn {
      max-width: 100px;
      border: solid 1px #144433;
      padding: 12px 39px;
      margin: auto;
      text-align: center;

      @include s2bmd() {
        width: 100%;
        max-width: none;
        margin: 0;
        border: none;
        display: flex;
        justify-content: flex-end;
      }

      a {
        color: #144433;
        text-decoration: none;
        font-family: $pFont;
        font-size: $fontBase;
        line-height: $lineheight;
        letter-spacing: $letterSpacing;

        @include s2bmd() {
          &::after {
            content: "";
            background-image: url('../assets/image/arrow.png');
            width: 25px;
            height: 25px;
            transform: translateY(30%);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            margin-right: 55px;
            display: inline-block;

          }
        }
      }
    }
  }
}
</style>
