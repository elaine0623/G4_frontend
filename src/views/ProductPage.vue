<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {

  }
}
</script>
<template>
  <section>
    <div class="container">
      <div class="crumbs-product">
        <span>首頁 / 商品 / 鮮果</span>
      </div>
      <div class="row">
        <div class="card">
          <div class="pic">
          <div class="main-pic">
            <img src="../assets/image/strawberry2.png" alt="">
          </div>
          <div class="second-pic">
            <img src="../assets/image/strawberry-detail1.svg" alt="">
            <img src="../assets/image/strawberry-detail2.svg" alt="">
            <img src="../assets/image/strawberry-detail3.svg" alt="">
          </div>

        </div>
        <div class="into">
          <div class="category">
            <div class="title">
              <h2>福星草莓-草莓</h2>
              <div class="under-scord">
                <img src="../assets/image/product-underScord.svg" alt="">

              </div>

            </div>
            <div class="txt">
              <li>大湖時光果園種植的粉色草莓淡雅可人，包含淡雪、水蜜桃兩大品種，有著甜瓜、蜜桃的特殊香氣。</li>

              <li>堅持選用無帶病的組培苗再移植培養雖然成本高時效短，且需不斷放入新的草鈴幼蟲</li>

              <li>得以控制小型昆蟲，堅持有機無毒的種植方式!</li>

            </div>
          </div>
          <div class="price">
            <div class="under-scord-price">
              <img src="../assets/image/product-underScord2.svg" alt="">
            </div>
            <div class="unit">
              <p>單位:</p><span>約五台斤*1箱</span>
            </div>
            <div class="Charge">
              <p>售價:</p><span>2880元</span>
            </div>
            <div class="quantity">
              <p>數量:</p>
              <div class="card-num">
                <button >+</button>
                {{count}}
                <button>-</button>
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

    .crumbs-product {
      font-family: $pFont;
      $line-height: $fontBase;
      font-size: $fontBase ;
      color: $darkGreen;
      padding: $mbbtwElement 0;
    }

    .row {
      margin: auto;
      width: 100%;
      @include s2bmd() {
        display: flex;
        flex-direction: row;
        
      }
      .card{
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

        @include s2bmd() {
          flex-direction: row;
          width: 70%;
          // height: 445px;
          justify-content: center;
          align-items: center;
         

        }

        .main-pic {
          margin: auto;
          width: 100%;
          padding: 10px 0;

          @include s2bmd() {
            order: 2;
            // aspect-ratio:1/1;
            // object-fit: cover;


          }

          img {
            width: 100%;

            @include s2bmd() {
              height: 100%;
              object-fit: cover;

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
          }

          img {
            width: 33%;
            padding: 0 0.3%;

            @include s2bmd() {
              width: 100%;
              padding: 10% 0;

            }
          }

        }
      }

      //--------------------內容資訊----------------
      .into {
        margin: auto;
    

        .category {
    

          .title {
            text-align: center;
            font-size:map-get($title,h2);
            color: $darkGreen;
            font-family: $titleFont;
            margin: $mbbtwElement;
            @include s2bmd() {
              margin:10px;
        
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
              margin:10px;
            }

            li {
              list-style-type: none;
              position: relative;
              padding-left: 15px;
              color: $darkGreen;
              font-family: $pFont;
              line-height: $lineheight;
              margin: 8px 0;

              &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 10%;
                width: 5px;
                height: 5px;
                background-color: $darkGreen;
                border-radius: 50%;
              }

            }
          }
        }

        .price {
          margin: 0 $mbbtwElement;
          color: $darkGreen;
          font-family: $pFont;

          .under-scord-price {
            margin: $mbbtwElement 0;

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
              button{
                font-size: $fontBase;
                cursor:pointer;

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
              justify-content: start;
              gap: 20px;
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
                cursor:pointer;
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
                cursor:pointer;
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