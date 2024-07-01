<script>
export default {
  data() {
    return {
      responseData: [],
      count: 1,
      mainImage: '', // 主圖片
    };
  },
  computed: {
    userId() {
      return this.$route.params.productId;
      // return item.$route.params. pi_id;
    },
    filteredImages() {
      const product = this.responseData[this.userId-1];
      if (product && product.p_img) {
        // 确保只返回三张次要小圖
        return product.p_img.filter(img => this.parsePic(img) !== this.mainImage).slice(0, 3);
      }
      return [];
    }
  },
  watch: {
    userId: {
      immediate: true,
      handler: async function (val) {
        console.log(typeof(val));
        this.responseData = await this.fetchData();
        console.log(parseInt(val)-1);
        console.log(typeof(parseInt(val)-1));
        this.mainImage = this.responseData[1].p_img[0];
        // if (this.responseData.length > 0) {
          // this.mainImage = this.responseData[parseInt(val)-1].p_img[0];
        // } 
      },

    },
  },
  methods: {
    parsePic(file) {//修改照片路徑
      return new URL(`../assets/image/${file}`, import.meta.url).href
    },
    add() {
      this.responseData[this.userId - 1].count += 1;
      localStorage.setItem(`user1`, JSON.stringify(this.responseData))
    },
    subtraction() {
      if (this.responseData[this.userId - 1].count == 1) return
      this.responseData[this.userId - 1].count -= 1;
      localStorage.setItem(`user1`, JSON.stringify(this.responseData))

    },
    async fetchData() {
     
     let body = {
       "page": 2,
     }
     fetch(`http://localhost/php_g4/product.php`, {
       method: "POST",
       body: JSON.stringify(body)
     })
       .then((res) => res.json())
       .then((json) => {
         this.responseData = json["data"]["list"]
         // localStorage.setItem(`user1`, JSON.stringify(json))
         console.log(json);
         console.log(this.responseData);
       })
     // //  fetch data from API
     // return await fetch(`${import.meta.env.BASE_URL}productList.json`)
     //   .then((response) => response.json())
     //   .then((json) => {
     //     console.log(json)
     //   this.responseData = json
     //   console.log(this.responseData)
     //   }
     
     // );
      
      
   }
    , addCart(index) {
      if (this.responseData[index].isaddCart === false) {
        this.responseData[index].isaddCart = true;
        // localStorage.setItem(`shoppingItem${index}`,JSON.stringify(this.responseData[index]));
        localStorage.setItem(`user1`, JSON.stringify(this.responseData))
      } else {
        this.responseData[index].isaddCart = false;
        localStorage.setItem(`user1`, JSON.stringify(this.responseData))
      }
      console.log(this.responseData)
    },

    changeMainImage(imgIndex) {
      const product = this.responseData[this.userId - 1];
      const selectedIndex = product.p_img.findIndex(img => img === this.filteredImages[imgIndex]);
      this.mainImage = this.parsePic(product.p_img[selectedIndex]);
      // this.parsePic(this.mainImage);
    }
  },
  async created() {
    this.responseData = await this.fetchData();
    if (this.responseData.length > 0) {
      this.mainImage = this.parsePic(this.responseData[this.userId - 1].p_img[0]);
      console.log(this.mainImage);
    };
    if (localStorage.getItem('user1') != null) {
      let responseDatas = localStorage.getItem('user1');
      this.responseData = JSON.parse(responseDatas);
      console.log(this.responseData);
      // console.log(this.displayData );
    } else {
      this.fetchData();
      console.log('fffff')
    }
  },
  mounted() {

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
          <li class="current"><em aria-current="page">{{ responseData[userId - 1]["pc_name"] }}</em></li>
        </ul>
      </div>
      <div class="row">
        <div class="card">
          <div class="pic">
            <div class="main-pic">
              <img :src="mainImage" alt="">
            </div>
            <div class="second-pic">
              <img v-for="(img, index) in filteredImages" :key="index" :src="parsePic(img)"
                @click="changeMainImage(index)" alt="Secondary Image">
              <!-- <img :src="userInfo[userId - 1].p_img[2]" alt="">
              <img :src= "userInfo[userId - 1].p_img[3]" alt=""> -->
            </div>

          </div>
          <div class="into">
            <div class="category">
              <div class="title">
                <h2>{{ responseData[userId - 1].f_name }}-{{ responseData[userId - 1].p_name
                  }}
                </h2>
                <div class="under-scord">
                  <img src="../assets/image/product-underScord.svg" alt="">

                </div>

              </div>
              <div class="txt">
                <p>{{ responseData[userId - 1].introduce }}</p>

                <!-- <li>堅持選用無帶病的組培苗再移植培養雖然成本高時效短，且需不斷放入新的草鈴幼蟲</li>

                <li>得以控制小型昆蟲，堅持有機無毒的種植方式!</li> -->

              </div>
            </div>
            <div class="price">
              <div class="under-scord-price">
                <img src="../assets/image/product-underScord2.svg" alt="">
              </div>
              <div class="unit">
                <p>單位:</p><span>{{ responseData[userId - 1].unit }}</span>
              </div>
              <div class="Charge">
                <p>售價:</p><span>{{ responseData[userId - 1].p_fee }}元</span>
              </div>
              <div class="quantity">
                <p>數量:</p>
                <div class="card-num">
                  <button @click="subtraction">-</button>
                  {{ responseData[userId - 1].count }}
                  <button @click="add">+</button>
                </div>
              </div>


              <div class="member-card">
                <button class="cart-shopping"  @click="addCart(userId - 1)" v-if=" responseData[userId - 1].isaddCart === false">
                    <i class="fa-solid fa-cart-shopping fa-xs"></i>加入購物車
                </button>
                <button class="cart-cancel-btn cart-shopping"  @click="addCart(userId - 1)" v-if=" responseData[userId - 1].isaddCart === true">
                    <i class="fa-solid fa-xmark"></i>取消
                </button>
                <button class="buy">
                  <router-link to="/cart">立即購買</router-link>
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
            aspect-ratio:1/0.7;
            object-fit: cover;

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
              gap:30px;
              justify-content: center;
              align-items: end;
              margin:auto;

              @include s2bmd() {
                // justify-content: start;
                padding: 24px 10px;
                align-items: center;
                margin: auto;
              }

              .cart-shopping {
                padding: 1% 2%;
                font-family: $pFont;
                font-size:0.9rem;
                color: #fff;
                background-color: $darkGreen;
                border-radius: 20px;
                border: 1px solid #000;
                &:hover {
                  background-color: $lightGreen;
                  border: 1px solid $darkGreen;
                  cursor: pointer;
                }

                i {
                  margin-right: 10px;
                }
              }

              .cart-cancel-btn {
                background-color: #eb3445;
                border-radius: 20px;
                border: none;
                i {
                  margin-right: 10px;
                }
                }

              .buy {
                padding: 1% 2%;
                font-family: $pFont;
                color: #fff;
                background-color: $darkGreen;
                border-radius: 20px;
                border: 1px solid #000;

                a {
                  text-decoration: none;
                  color: #fff
                }

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