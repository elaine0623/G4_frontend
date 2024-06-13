<script>
export default {
  data() {
    return {
      count: 1,
      cartList:[{
        id:1,
        
      }]
    }
  },
  computed: {

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

  },
}

</script>




<template>
  <section>
    <div class="container">
      <div class="title">
        <h2>購物車</h2>
        <div class="under-scord">
          <img src="../assets/image/product-underScord2.svg" alt="">
        </div>
      </div>
      <div class="list-card-shopping">
        <nav class="list-title">
          <ul>
            <li>商品圖片</li>
            <li>商品名稱</li>
            <li>單價</li>
            <li>數量</li>
          </ul>

        </nav>
        <div class="card-list">
          <div class="card">
            <picture>
              <img src="../assets/image/strawberry-detail2.svg" alt="">
            </picture>
            <div class="product">
              <div class="product-into">
                <div class="name">
                  <span>草莓</span>-
                  <p>梅果莊園</p>
                </div>
                <div class="unit">
                  <span>單位:</span>
                  <p>約五台斤*1箱</p>
                </div>
              </div>
              <div class="price">
                <span>NT.200</span>
              </div>
            </div>
            <div class="quantity">
              <button @click="add">+</button>
              {{ count }}
              <button @click="subtraction">-</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 付款表格 -->
      <div class="pay">
        <!-- 優惠券 -->
         <div class="information">
        <div class="discount">
          <p>優惠券</p>
          <label for="">
            <input type="text" placeholder="請輸入優惠券碼">
          </label>
        </div>
        <!-- 付款資訊 -->
        <div class="receive">
          <p>收件地點</p>
          <div class="postal">
            <span>郵遞區號:</span>
            <label for="">
              <input type="text">
            </label>
          </div>

          <span>縣市:</span>
          <select>
            <option value="">台北市</option>
            <option value="">新北市</option>
            <option value="">宜蘭縣</option>
            <option value="">桃園市</option>
          </select>

          <span>地址:</span>
          <label for="">
            <input type="text" placeholder="請輸入地址">
          </label>


        </div>
      </div>
         
        <!-- 總計 -->
        <div class="total">
          <p>總計:</p>
          <div class="Product-name">
            <span>商品:</span>
            <span>NT.455</span>
          </div>
          <div class="freight">
            <span>運費:</span>
            <span>NT.60</span>

          </div>
          <div class="alltotal">
            <span>總計:</span>
            <span>NT.515</span>
          </div>
          <div class="Checkout">
            <button class="shopping">繼續購物</button>
            <button class="Checkout-pay">結帳</button>
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
    // width: 100vw;
    .title {
      //上端標題
      font-size: map-get($title, h2);
      font-family: $pFont;
      $line-height: $fontBase;
      color: $darkGreen;
      display: inline-block;
      position: relative;
      width: 9rem;
      text-align: center;
      margin-bottom: 20px;

      .under-scord {
        position: relative;
        top: -15px;
        width: 9rem;

        img {
          width: 100%;
        }
      }
    }

    .list-card-shopping {
      margin: auto;

      //購物清單
      .list-title {
        display: none;

        @include s2bmd() {
          display: block;
          width: 90%;
          margin: auto;
          margin-bottom:15px; 

        }

        //清單名稱
        ul {
          @include s2bmd() {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          li {}
        }

      }

      .card-list {
        
        // margin: 15px 0;
        .card {
          display: flex;
          justify-content: space-between;
          align-items: center;

          border-bottom: 1px solid $darkGreen;
          padding: 15px 0;

          &:nth-child(1) {
            border-top: 1px solid $darkGreen;
          }

          @include s2bmd() {
            padding: 15px 30px;
          }

          picture {
            width: 25%;

            @include s2bmd() {
              width: 20%;

            }

            img {
              width: 100%;

              @include s2bmd() {
                width: 50%;
              }
            }
          }

          .product {
            @include s2bmd() {
              display: flex;
              flex-grow: 1;
              padding: 0 20px;
              position: relative;
              right: 35px;
              justify-content: space-evenly;

            }

            //產品名稱資訊
            .product-into {
              @include s2bmd() {
                position: relative;
                right: 15px;

              }

              //產品名稱
              .name {
                display: flex;
                padding: 5px;

              }

              .unit {
                display: flex;
                padding: 5px;



              }
            }

            .price {
              padding: 5px;


            }

          }

          .quantity {
            display: flex;
            padding-bottom: 10px;
            position: relative;
            top: 35px;

            @include s2bmd() {
              top: auto;
            }

            button {
              font-size: $fontBase;
              cursor: pointer;

              background-color: transparent;
              border: 0px;

              @include s2bmd() {
                margin: 0 10px;
              }
            }
          }
        }
      }

    }

    // -------付款表格----------
    .pay {
      width: 100%;
      margin: 15px 0;
      box-sizing: border-box;
      @include s2bmd() {
          display: flex;
          gap:10%;
          justify-content:space-between;
          
        
        }
        .information{

           .discount {
           
        //優惠券
        margin-bottom: 10px;
        @include s2bmd() {
         
        }
        padding: 20px;
        border: 1px solid $darkGreen;

        p {
          font-family: $pFont;
          $line-height: $fontBase;
          color: $darkGreen;

        }

        input {
          margin-top: 15px;
          background-color: $bcgw;
          border: 1px solid $darkGreen;
          width: 300px;
          height: 35px;
          padding: 0 10px;

        }
      }

      .receive {
        //付款資訊
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin: 15px 0;
        border: 1px solid $darkGreen;
        @include s2bmd() {
          // margin: 0 15px;
          // border-top: 0;
        
        }

        p,
        span {
          font-family: $pFont;
          $line-height: $fontBase;
          color: $darkGreen;
        }

        p {
          padding-bottom: 10px;
          border-bottom: 1.5px solid $darkGreen ;
        }

        .postal {
          display: flex;
          flex-direction: column;
          padding: 10px 0;

          input[type="text"] {
            margin-top: 15px;
            background-color: $bcgw;
            border: 0;
            border: 1px solid $darkGreen;
            width: 50px;
            height: 35px;
            padding: 0 10px;

          }


        }

        input[type="text"] {
          margin-top: 15px;
          background-color: $bcgw;
          border: 0;
          border: 1px solid $darkGreen;
         width: 90%;
          height: 35px;
          padding: 0 10px;
        }

        select {
          margin: 15px 0;
          background-color: $bcgw;
          width: 300px;
          height: 35px;

          option {
            background-color: $bcgw;
          }
        }

      }
        }

     

      .total {
        //總計
        padding: 20px;
        margin: 15px 0;
        border: 1px solid $darkGreen;
        @include s2bmd() {
          margin: 0;
          width: 50%;
          padding: 35px;
          height: 200px;
         
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        }
       

        p,
        span {
          font-family: $pFont;
          $line-height: $fontBase;
          color: $darkGreen;
        }

        p {
          padding-bottom: 10px;
          border-bottom: 1.5px solid $darkGreen ;
        }

        .Product-name,
        .freight,
        .alltotal {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
        }

        .Checkout {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;

          button {
            width: 50%;
            margin: 10px 5px 5px 5px;
            padding: 10px 15px;
            font-family: $pFont;
            $line-height: $fontBase;
            color: $darkGreen;
            letter-spacing: $letterSpacing;


          }

          .shopping {
            background-color: transparent;
            border: 0;
            border: 1px solid $lightGreen;
          }
          .Checkout-pay{
            border: 0;
            border: 1px solid $lightGreen;
            background-color: $darkGreen;
            color: #fff;
          }
        }


      }
    }


  }
}
</style>