<script>
export default {
  data() {
    return {
      userInfo: [],
      count: 1,
      mainImage: '', // 主圖片
    };
  },
  computed: {
    userId() {
      return this.$route.params.productId;
    },
    filteredImages() {
      const product = this.userInfo[this.userId - 1];
      if (product && product.p_img) {
        // 确保只返回三张次要小圖
        return product.p_img.filter(img => img !== this.mainImage).slice(0, 3);
      }
      return [];
    }
  },
  watch: {
    userId: {
      immediate: true,
      handler: async function (val) {
        this.userInfo = await this.fetchUserInfo();
        if (this.userInfo.length > 0) {
          this.mainImage = this.userInfo[val - 1].p_img[0];
        }
      },
    },
  },
  methods: {
    add() {
      if (this.count >= 10) return
      this.count += 1;
    },
    subtraction() {
      if (this.count == 0) return
      this.count -= 1;

    },
    async fetchUserInfo() {
      //  fetch data from API
      return await fetch("/productList.json")
        .then((response) => response.json())
        .then((json) => json);
    },

    changeMainImage(imgIndex) {
      const product = this.userInfo[this.userId - 1];
      const selectedIndex = product.p_img.findIndex(img => img === this.filteredImages[imgIndex]);
      this.mainImage = product.p_img[selectedIndex];
    }
  },
  async created() {
    this.userInfo = await this.fetchUserInfo();
    if (this.userInfo.length > 0) {
      this.mainImage = this.userInfo[this.userId - 1].p_img[0];
    }
  },


};
</script>
<template>
  <section>
    <div class="container">
      <div class="crumbs-product">
        <ul>
          <li>
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li>
            <RouterLink to="/product">/ 商品 /</RouterLink>
          </li>
          <li class="current"><em aria-current="page">{{ userInfo[$route.params.productId - 1]["pc_name"] }}</em></li>
        </ul>
      </div>
      <div class="row">
        <div class="card">
          <div class="pic">
            <div class="main-pic">
              <img :src="mainImage" alt="">
            </div>
            <div class="second-pic">
              <img v-for="(img, index) in filteredImages" :key="index" :src="img" @click="changeMainImage(index)"
                alt="Secondary Image">
              <!-- <img :src="userInfo[userId - 1].p_img[2]" alt="">
              <img :src= "userInfo[userId - 1].p_img[3]" alt=""> -->
            </div>

          </div>
          <div class="into">
            <div class="category">
              <div class="title">
                <h2>{{ userInfo[userId - 1].f_name }}-{{ userInfo[userId - 1].p_name
                  }}
                </h2>
                <div class="under-scord">
                  <img src="../assets/image/product-underScord.svg" alt="">

                </div>

              </div>
              <div class="txt">
                <p>{{ userInfo[userId - 1].introduce }}</p>

                <!-- <li>堅持選用無帶病的組培苗再移植培養雖然成本高時效短，且需不斷放入新的草鈴幼蟲</li>

                <li>得以控制小型昆蟲，堅持有機無毒的種植方式!</li> -->

              </div>
            </div>
            <div class="price">
              <div class="under-scord-price">
                <img src="../assets/image/product-underScord2.svg" alt="">
              </div>
              <div class="unit">
                <p>單位:</p><span>{{ userInfo[userId - 1].unit }}</span>
              </div>
              <div class="Charge">
                <p>售價:</p><span>{{ userInfo[userId - 1].p_fee }}元</span>
              </div>
              <div class="quantity">
                <p>數量:</p>
                <div class="card-num">
                  <button @click="add">+</button>
                  {{ count }}
                  <button @click="subtraction">-</button>
                </div>
              </div>


              <div class="member-card">
                <button class="cart-shopping">
                  <div class="icon-cart-shopping" id="app">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <p>加入購物車</p>
                </button>
                <button class="buy">
                  <p>立即購買</p>
                </button>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
*:focus {
  outline: none;
  box-shadow: none;
}

section {
  .container {
    // overflow: hidden;


    .crumbs-product {
      font-family: $pFont;
      $line-height: $fontBase;
      font-size: $fontBase ;
      color: $darkGreen;

      ul {
        display: flex;

        li {
          a {
            text-decoration: none;
            font-family: $pFont;
            $line-height: $fontBase;
            font-size: $fontBase ;
            color: $darkGreen;

          }

        }
      }

    }

    .row {
      margin: auto;
      width: 100%;
      // width: 1200px;

      @include s2bmd() {
        display: flex;
        flex-direction: row;

      }

      .card {
        @include s2bmd() {
          display: flex;
          flex-direction: row;

        }

        .pic {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: auto;
          padding: 60px;
          // width: 100vw;
          box-sizing: border-box;
          // overflow: hidden;


          @include s2bmd() {
            flex-direction: row;
            width: 50vw;
            // height: 445px;
            justify-content: center;
            align-items: center;
            padding: 0;



          }

          .main-pic {
            margin: auto;
            width: 100%;
            padding: 10px 0;

            @include s2bmd() {
              order: 2;
              // aspect-ratio:1/1;
              // object-fit: cover;
              max-width: 700px; //
              // height: 380px;//


            }

            img {
              width: 100%;

              @include s2bmd() {
                height: 100%;
                object-fit: cover;
                // width: 421.3333px;
                // height: 305.3333px;

              }

            }
          }

          .second-pic {
            display: flex;
            box-sizing: border-box;
            width: 100%;
            margin: auto;


            @include s2bmd() {
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              order: 1;
              width: auto;
              height: 100%;
              padding: 0% 4%;
              // width: 209px;
              // height: 124px;
            }

            img {
              width: 33%;
              padding: 0 0.3%;

              @include s2bmd() {
                // max-width: 100%;
                padding: 10% 0;
                // width: 100%;
                width: 103.3333px;
                height: 97px;
                object-fit: cover;

              }
            }

          }
        }

        //--------------------內容資訊----------------
        .into {
          margin: auto;
          box-sizing: border-box;
          overflow: hidden;
          width: 100%;

          height: auto;

          @include s2bmd() {
            width: 50%;
          }


          .category {


            .title {
              text-align: center;
              font-size: map-get($title, h2);
              color: $darkGreen;
              font-family: $titleFont;
              margin: $mbbtwElement;

              @include s2bmd() {
                margin: 10px;

              }

              .under-scord {
                margin: auto;

                @include s2bmd() {
                  width: 50%;
                }

                img {
                  width: 100%;

                }
              }

            }

            .txt {
              margin: $mbbtwElement;

              @include s2bmd() {
                margin: 10px;
              }

              p {
                list-style-type: none;
                position: relative;
                padding-left: 15px;
                color: $darkGreen;
                font-family: $pFont;
                line-height: $lineheight;
                margin: 8px 0;

                // &::before {
                //   content: '';
                //   position: absolute;
                //   left: 0;
                //   top: 10%;
                //   width: 5px;
                //   height: 5px;
                //   background-color: $darkGreen;
                //   border-radius: 50%;
                // }

              }
            }
          }

          .price {
            margin: 0 $mbbtwElement;
            color: $darkGreen;
            font-family: $pFont;

            .under-scord-price {
              margin: $mbbtwElement 0;

              @include s2bmd() {
                margin: 10px;
              }

              img {
                width: 100%;
              }
            }

            .unit {
              display: flex;
              padding-bottom: 10px;

              p {
                margin-right: 5px;
              }
            }

            .Charge {
              display: flex;
              padding-bottom: 10px;

              p {
                margin-right: 5px;
              }

            }

            .quantity {
              display: flex;
              padding-bottom: 10px;

              .card-num {
                button {
                  font-size: $fontBase;
                  cursor: pointer;

                  background-color: transparent;
                  border: 0px;

                }
              }



              p {
                margin-right: 5px;
              }
            }

            .member-card {
              display: flex;
              justify-content: space-between;
              align-items: end;
              margin: 14px 10px;

              @include s2bmd() {
                // justify-content: start;
                padding: 24px 10px;
                width: 60%;
                align-items: center;
                margin: auto;
              }

              .cart-shopping {
                display: flex;
                gap: 6px;
                padding: 5px 15px;
                font-family: $pFont;
                color: #fff;
                background-color: $darkGreen;
                border-radius: 20px;
                border: 1px solid #000;


                &:hover {
                  background-color: $lightGreen;
                  border: 1px solid $darkGreen;
                  cursor: pointer;
                }
              }

              .buy {
                padding: 5px 28px;
                font-family: $pFont;
                color: #fff;
                background-color: $darkGreen;
                border-radius: 20px;
                border: 1px solid #000;

                &:hover {
                  background-color: $lightGreen;
                  border: 1px solid $darkGreen;
                  cursor: pointer;
                }
              }

            }

          }
        }

      }


    }
  }


}
</style>