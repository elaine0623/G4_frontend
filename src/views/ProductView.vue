<script>
import Swal from 'sweetalert2'; //引用sweetalert2;
import { useAdminStore } from '@/stores/userLogin';
import { mapActions, mapState } from 'pinia';
export default {
  data() {
    return {
      responseData: [],
      displayData: [],
      currentPage: 1,
      keyworlds: '',
      search: '',
      currentClass: '0',
      itemsPerPage: 12,
      totalPages: 1,
      loading: false,
      status: false,
    }
  },
  methods: {
    //確認會員狀態
    ...mapActions(useAdminStore, ['loadCurrentUser']),
    checkLogin() {
      if (!this.currentUser) {
        Swal.fire({
          icon: "warning",
          title: "尚未登入",
          showConfirmButton: false,
          timer: 1500
        });
        this.$router.push('/user');
      }
    },
    // 確保json檔回傳圖片路徑正確
    parsePic(file) {
      return new URL(`../assets/image/${file}`, import.meta.url).href
    },
    // 判斷商品是否加入購物車(boolean)並更新狀態(存到localStorage)
    addCart(id) {
      const targetItem = this.responseData.find(v => v.id === id)
      if (targetItem.isaddCart === false) {
        targetItem.count = 1;
      }

      targetItem.isaddCart = !targetItem.isaddCart;
      localStorage.setItem(`user1`, JSON.stringify(this.responseData))
      console.log(this.responseData)
    },
    //愛心收藏功能
    toggleImage(id) {
      let targetItem = this.responseData.find(v => v.id === id);
      targetItem.isImage1 = !targetItem.isImage1 //hart2加入收藏
      if (!targetItem.isImage1) {
        localStorage.setItem(`user1`, JSON.stringify(this.responseData))
      } else {
        localStorage.setItem(`user1`, JSON.stringify(this.responseData))
      }
    },
    //fetch json檔商品資料
    fetchData() {
      this.loading = true;

      let body = {
        "page": this.currentPage,
      }
      fetch(`http://localhost/php_g4/product.php`, {
        method: "POST",
        body: JSON.stringify(body)
      })
        .then((res) => res.json())
        .then((json) => {
          this.responseData = json["data"]["list"].map((item, index) => ({
            ...item,
            id: item.id || index + 1,
            isaddCart: false,
            isImage1: false
          }));
          this.totalPages = json["data"]["total_pages"] || 1;
          console.log("Current page:", this.currentPage);
          console.log("Total pages:", this.totalPages);
          console.log("Items loaded:", this.responseData.length);
          this.loading = false;
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          this.loading = false;


          // .then((json) => {
          //   this.responseData = json["data"]["list"]
          //   // localStorage.setItem(`user1`, JSON.stringify(json))

          //   console.log(json);
          //   console.log(this.responseData);
        })
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.fetchData();
      }
    },

    nextPage() {
      console.log("點擊下一頁");
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchData();
      }
    },
    prevPage() {

      console.log("點擊上一頁");
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchData();
      }


    },
    clear() {
      //清空搜尋資料
      this.search = ''
      this.isSearchMode = false
      this.displayData = this.responseData
    },
    activedClass() {
      let activeClass = document.querySelector('#filter') // //偵測目前商品類別為何
      this.currentClass = activeClass.value;
    }
  },
  created() {

    this.fetchData(this.currentPage);

    // this.fetchData()
    //若有登入情況下
    // console.log(localStorage.getItem('user1'))
    // if (localStorage.getItem('user1') != null) {
    //   let userInfo = localStorage.getItem('user1')
    //   this.responseData = JSON.parse(userInfo)
    //   console.log(this.responseData)
    //   // console.log(this.displayData );
    // } else {
    //   this.fetchData()
    // }
  },
  computed: {
    filterDataDisplay() {
      if (this.loading) {
        return [];
      }

      let filteredData = this.responseData;

      // 应用搜索过滤
      if (this.search) {
        filteredData = filteredData.filter((item) => {
          return (
            item.p_name.includes(this.search) ||
            item.pc_name.includes(this.search) ||
            item.f_name.includes(this.search)
          );
        });
      }

      // 应用分类过滤
      if (this.currentClass !== "0") {
        filteredData = filteredData.filter((item) => {
          return item.pc_name === this.currentClass;
        });
      }

      console.log("Filtered items:", filteredData.length);
      return filteredData;
    },
    ...mapState(useAdminStore, ['currentUser']),

  },
  mounted() {
    const store = useAdminStore();
    const isLogin = store.isLoggedIn();
    this.status = isLogin;
  },
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
              <input type="text" placeholder="搜尋商品" v-model.lazy="search" />
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
            <img src="../assets/image/filter.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="container">
        <div v-if="!loading">
          <div class="row list-product">
            <!-- <img :src="parsePic(responseData[2].p_img[0])" alt="商品圖片" /> -->
            <div class="col-12 col-md-6 col-lg-3" v-for="(cardtItem, cardtIndex) in filterDataDisplay"
              :key="cardtIndex">
              <div class="card-product">

                <router-link :to='`/ProductPage/${cardtItem.p_no}`'>
                  <div class="img-product">
                    <img :src="parsePic(cardtItem.p_img[0])" alt="商品圖片" />
                  </div>
                </router-link>
                <div class="into-card">
                  <div class="category-card">
                    <div class="name-card">
                      <div class="title-category-card">
                        <p>{{ cardtItem['f_name'] }}</p>
                      </div>
                      <span>{{ cardtItem['p_name'] }}</span>
                    </div>
                    <div class="hart-pic-card" @click.prevent="toggleImage(cardtItem.id)">
                      <img :src="cardtItem['isImage1']
                        ? parsePic(cardtItem.hartImage)
                        : parsePic(cardtItem.hartImage1)
                        " alt="" />
                    </div>
                  </div>
                  <div class="member-card">
                    <button class="cart-shopping" @click="addCart(cardtItem.id)" v-if="cardtItem.isaddCart === false">
                      <i class="fa-solid fa-cart-shopping"></i>加入購物車
                    </button>
                    <button class="cart-cancel-btn" @click="addCart(cardtItem.id)" v-if="cardtItem.isaddCart === true">
                      <i class="fa-solid fa-xmark"></i>取消
                    </button>

                    <div class="money-card">
                      <span>NT${{ cardtItem['p_fee'] }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel">
            <div class="button prev" @click="prevPage" :class="{ disabled: currentPage === 1 }">
              <img src="../assets/image/leftbutton.svg" alt="" />
            </div>
            <ul class="pagination">
              <li v-for="page in totalPages" :key="page" @click="changePage(page)"
                :class="{ active: currentPage === page }">
                {{ page.toString().padStart(2, '0') }}
              </li>
            </ul>
            <div class="button next" @click="nextPage" :class="{ disabled: currentPage === totalPages }">
              <img src="../assets/image/rightbutton.svg" alt="" />
            </div>
          </div>

        </div>
        <div v-else>
          加载中...
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
          font-size: $fontBase;
          color: $darkGreen;

          ul {
            display: flex;

            li {
              a {
                text-decoration: none;
                font-family: $pFont;
                $line-height: $fontBase;
                font-size: $fontBase;
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
          button {
            position: absolute;
            right: 5px;
            top: 9px;
            background-color: transparent;
            color: #fff;
            border: 0;
          }

          .icon-search-product {
            position: absolute;
            left: 10px;
            top: 7px;
            color: #fff;

            .fa-magnifying-glass {
              font-size: 12px;
            }
          }

          label {
            margin: 0;

            input[type='text'] {
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
          font-size: $fontBase;
          color: $darkGreen;

          option {
            background-color: #f3eeea;
            border: 0px solid #f3eeea;
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
          margin: 10px;
          text-decoration: none;
          display: block;



          .img-product {
            width: 100%;
            aspect-ratio: 1/0.7;


            img {
              width: 100%;
              max-height: 100%;
              object-fit: cover; // 改為 contain
              vertical-align: middle; // 改為 middle 以居中對齊
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
                padding: 10px 15px;
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

                i {
                  margin-right: 10px;
                }
              }

              .cart-cancel-btn {
                padding: 10px 15px;
                font-family: $pFont;
                color: #fff;
                background-color: #eb3445;
                border-radius: 20px;
                border: none;

                i {
                  margin-right: 10px;
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

            // @include s2bmd() {
            //   &:not(:last-child):after {
            //     content: '';
            //     width: 50%;
            //     height: 1.5px;
            //     position: absolute;
            //     transform: translateX(25%);

            //     top: 50%;
            //     background-color: $darkGreen;
            //   }
            // }
          }
        }

        // .button-next {}
      }
    }
  }
}
</style>
