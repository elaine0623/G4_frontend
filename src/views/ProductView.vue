<script>
export default {
  data() {
    return {
      responseData: [],
      displayData: [],
      currentPage: 1,
      isSearchMode: false,
      keyworlds: "",
      search: '',
      currentClass: '0',

    }
  },
  methods: {
    toggleImage(index) {
      this.displayData[index]['isImage1'] = !this.displayData[index]['isImage1'];
    },
    SearchMode() {//判斷是否搜尋
      if (this.search !== "") {
        this.isSearchMode = true;
      }
    },
    fetchData() {
      fetch("/productList.json")
        .then(res => res.json())
        .then(json => {
          // 確認有沒有response
          console.log(json);
          // 備份還原用
          this.responseData = json
          // 顯示用
          this.displayData = json
        })

    },
    filterData() {//搜尋
      console.log(this.search)
      console.log(this.isSearchMode)
      this.displayData = this.responseData.filter((item) => {
        return item.p_name.includes(this.search) || item.pc_name.includes(this.search) || item.f_name.includes(this.search)//類別
      }
      )
    },
    clear() {//清空搜尋資料
      this.search = '';
      this.isSearchMode = false;
      this.displayData = this.responseData;
    },
    activedClass() {
      let activeClass = document.querySelector('#filter')// //偵測目前類別為何
      this.currentClass = activeClass.value
      console.log(this.activedProduct)
      console.log(this.currentClass)
      console.log(this.isSearchMode)
    },
  },
  mounted() {
    this.fetchData();

  },
  computed: {
    activedProduct() {
      let filter = [];
      if (this.isSearchMode == false && this.currentClass == '0') {
        filter = this.responseData
      } else if (this.currentClass !== '0' && this.isSearchMode == false) {
        filter = this.responseData.filter(
          product => product.pc_name == this.currentClass)
      } else if (this.isSearchMode == true) {
        filter = this.displayData
      }
      return filter
    },
  }

}
</script>


<template>
  <section productView>
    <div class="container section">
      <div class="product">
        <div class="category-product">
          <div class="crumbs-product">
            <ul>
              <li>
                <RouterLink to="./">首頁</RouterLink>
              </li>
              <li>
                <RouterLink to="./product">/ 商品</RouterLink>
              </li>
            </ul>
          </div>
          <div class="search-product">
            <div class="icon-search-product">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <label for="">
              <input type="text" placeholder="搜尋商品" v-model="search" @keyup.enter="filterData()" @change="SearchMode()">
              <button @click="clear">X</button>
            </label>
          </div>
        </div>
        <div class="filter-product" @change="activedClass()">
          <select name="filter" id="filter">
            <option value="0">全部商品</option>
            <option value="蔬菜">蔬菜</option>
            <option value="水果">水果</option>
            <option value="茗茶">茗茶</option>
            <option value="其他">其他</option>
          </select>
          <div class="icon-filter-product">
            <img src="../assets/image/filter.svg" alt="">
          </div>
        </div>
      </div>

      <div class="container">

        <div class="row list-product ">
          <div class="col-12 col-md-6 col-lg-3" v-for="(cardtItem, cardtIndex) in activedProduct" :key="cardtIndex">
            <RouterLink :to="`/ProductPage/${cardtIndex + 1}`" class="card-product">
              <div class="pic-card">
                <img :src="cardtItem.p_img[0]" alt="">
              </div>
              <div class="into-card">
                <div class="category-card">
                  <div class="name-card">
                    <div class="title-category-card">
                      <p>{{ cardtItem['f_name'] }}</p>
                    </div>
                    <span>{{ cardtItem['p_name'] }}</span>
                  </div>
                  <div class="hart-pic-card" @click.prevent="toggleImage(cardtIndex)">
                    <img :src="cardtItem['isImage1'] ? cardtItem['hartImage'] : cardtItem['hartImage1']" alt="">

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
              color: #fff;

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
      padding: 0 70px;

      @include s2bmd() {
        padding: auto;
      }

      .list-product {
        width: 100%;
        margin: auto;


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
                width: 38px;
                height: 38px;
                z-index: 10;

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
                cursor: pointer;


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