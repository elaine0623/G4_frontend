<script>
export default {
  data() {
    return {
      cardtList: [
        {
          f_name: '墻森園',
          p_name: '高山高麗菜',
          p_img: '../src/assets/image/cabbage.png',
          p_fee: 40,
        },
        {
          f_name: '墻森園',
          p_name: '草莓',
          p_img: '../src/assets/image/strawberry1.png',
          p_fee: 88,

        },
        {
          f_name: '森林園',
          p_name: '例子南瓜',
          p_img: '../src/assets/image/pumpkin.png',
          p_fee: 35,

        },
        {
          f_name: '小莊園',
          p_name: '哈密瓜',
          p_img: '../src/assets/image/cantaloupe.png',
          p_fee: 555,

        },
        {
          f_name: '福星',
          p_name: '草莓',
          p_img: '../src/assets/image/strawberry2.png',
          p_fee: 50,

        },
        {
          f_name: '福星',
          p_name: '紅棗',
          p_img: '../src/assets/image/red dates.png',
          p_fee: 155,

        },
        {
          f_name: '瓜瓜農場',
          p_name: '小黃瓜',
          p_img: '../src/assets/image/gherkin.png',
          p_fee: 55,

        },
        {
          f_name: '大湖時光',
          p_name: '花椰菜',
          p_img: '../src/assets/image/brocoli.png',
          p_fee: 355,

        },
        {
          f_name: '梅果莊園',
          p_name: '草莓',
          p_img: '../src/assets/image/strawberry3.png',
          p_fee: 355,

        },
        {
          f_name: '阿公的斧頭',
          p_name: '芋頭',
          p_img: '../src/assets/image/taro.png',
          p_fee: 355,

        },
        {
          f_name: '阿罵小農場',
          p_name: '聖女番茄',
          p_img: '../src/assets/image/tomato.png',
          p_fee: 88,

        },
        {
          f_name: '興星',
          p_name: '香瓜',
          p_img: '../src/assets/image/cantaloupe2.png',
          p_fee: 88,

        },
      ]

    }
  },
  methods: {

  },

}
</script>


<template>
  <section productView>
    <div class="container section">
      <div class="product">
        <div class="category-product">
          <div class="crumbs-product">
            <span>首頁 / 商品</span>
          </div>
          <div class="search-product">
            <div class="icon-search-product">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <label for="">
              <input type="text" placeholder="搜尋商品">
            </label>
          </div>
        </div>
        <div class="filter-product">
          <select name="filter" id="filter">
            <option value="all">排序依據</option>
            <option value="hight">價格由高到低</option>
            <option value="low">價格由低到高</option>
          </select>
          <div class="icon-filter-product">
            <img src="../assets/image/filter.svg" alt="">
          </div>
        </div>
      </div>

      <div class="container">

        <div class="row list-product ">
          <div class="col-12 col-md-6 col-lg-3" v-for="(cardtItem, cardtIndex) in cardtList" :key="cardtIndex">
            <RouterLink to="/ProductPage" class="card-product">
              <div class="pic-card">
                <img :src="cardtItem['p_img']" alt="">
              </div>
              <div class="into-card">
                <div class="category-card">
                  <div class="name-card">
                    <div class="title-category-card">
                      <p>{{ cardtItem['f_name'] }}</p>
                    </div>
                    <span>{{ cardtItem['p_name'] }}</span>
                  </div>
                  <div class="hart-pic-card">
                    <img src="../assets/image/hart.svg" @click="favorhart">
                  </div>
                </div>
                <div class="member-card">
                  <button class="cart-shopping">
                    <div class="icon-cart-shopping" id="app">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <p>加入購物車</p>
                  </button>
                  <div class="money-card">
                    <span>NT.{{ cardtItem['p_fee'] }}</span>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="carousel">


          <div class="button prev">
            <img src="../assets/image/leftbutton.svg" alt="" />
          </div>

          <ul class="pagination">
            <li>01</li>
            <li>02</li>
            <li>03</li>

          </ul>
          <div class="button next">
            <img src="../assets/image/rightbutton.svg" alt="" />
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
    margin: auto;

    .product {
      display: flex;
      flex-direction: column;
      align-items: end;

      // width: 100%;
      @include s2bmd() {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: $mbbtwElement;

      }

      .category-product {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: $mbbtwElement;

        @include s2bmd() {
          margin-right: 25px;
        }

        .crumbs-product {
          font-family: $pFont;
          $line-height: $fontBase;
          font-size: $fontBase ;
          color: $darkGreen;

        }

        .search-product {

          display: flex;
          position: relative;
          align-items: center;
          right: 0;
          // width:50%;


          .icon-search-product {
            position: absolute;
            left: 10px;
            color: #fff;

            .fa-magnifying-glass {
              font-size: 12px;
            }

          }

          label {
            margin: 0;


            input[type="text"] {
              padding: 0 25px;
              flex: 1;
              box-sizing: border-box;
              max-width: 150px;
              height: 35px;
              border-radius: 20px;
              border: 0 solid transparent;
              background-color: $darkGreen;

              &::placeholder {
                color: #fff; // 將 placeholder 的文字顏色改為 #999
                text-align: center;
              }


            }
          }

        }

      }

      .filter-product {
        display: flex;
        margin-bottom: $mbbtwElement;

        // position: relative;
        // right: 15px;
        select {
          background-color: transparent;
          border: 0px;
          font-family: $pFont;
          $line-height: $fontBase;
          font-size: $fontBase ;
          color: $darkGreen;

          option {
            background-color: #F3EEEA;
            border: 0px solid #F3EEEA;

          }

        }

        .icon-filter-product {
          margin-left: 5px;
        }
      }

    }

    //---------------商品卡片
    .container {
      .list-product {
        width: 100%;

        // flex-wrap: nowrap;
        .card-product {
          border: 1px solid $darkGreen;
          margin: 15px 10px;
          text-decoration: none;
          display: block;


          .pic-card {
            width: 100%;

            img {
              width: 100%;
              object-fit: cover;
              vertical-align: top;

            }
          }

          .into-card {
            position: relative;

            .category-card {
              display: flex;
              justify-content: space-between;
              font-size: $fontBase;
              font-family: $pFont;
              color: $darkGreen;
              margin: 14px 10px;


              .name-card {
                .title-category-card {
                  margin: 14px 0;

                }

                span {}
              }

              .hart-pic-card {
                position: absolute;
                right: 10px;
                top: -35px;
              }

            }

            .member-card {
              display: flex;
              justify-content: space-between;
              align-items: end;
              margin: 14px 10px;

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
                }
              }

              .money-card {
                font-size: $fontBase;
                font-family: $pFont;
                color: $darkGreen;
              }

            }

          }

        }

      }

      .carousel {
        display: flex;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        padding: $mbSsec;

        .button {
          transition: transform 0.5s;

          &:hover {
            transform: scale(1.1);
          }

        }

        .pagination {
          display: flex;
          width: 100%;
          justify-content: space-evenly;

          li {
            width: 100%;
            position: relative;
            text-align: center;
            font-size: $fontBase;
            font-family: $pFont;
            color: $darkGreen;
            transition: transform 0.5s;

            &:hover {
              transform: scale(1.3);
            }

            @include s2bmd() {
              &:not(:last-child):after {
                content: "";
                width: 50%;
                height: 1.5px;
                position: absolute;
                transform: translateX(25%);

                top: 50%;
                background-color: $darkGreen;
              }

            }



          }
        }

        .button-next {}

      }
    }
  }
}
</style>