<!-- <script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
</script>

<template>
  <font-awesome-icon :icon="['fas', 'cart-shopping']" />
</template> -->

<template>
  <section>
    <div class="container">
      <div class="h2txt">

        <h2>熱門商品</h2>
      </div>
      <div class="product-list">
        <div class="card-product-list">
          <div class="img-product-list">
            <img src="@/assets/image/grape.png" alt="">
          </div>
          <div class="into-product-list">
            <div class="title-product-list">
              <p>福星草莓-草莓</p>
            </div>
            <div class="member-product-list">
              <span>NT.180</span>
              <div class="car-member-product-list">
                <button class="cart-shopping">
                  <!-- <img src="../assets/image/ion_cart-outline.svg" alt=""> -->
                  <div class="icon-cart-shopping" id="app"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></div>
                  <p>加入購物車</p>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
 
</template>
<script>

</script>
<script>
export default {
  name: 'app',
  data() {
    return {
      // count:0,
    }
  },
  methods: {
    // add() {
    //   this.count++;
    //   console.log(this.count)
    // }
    
  },
  computed: {
    
  },
}
</script>
<style lang="scss" scoped>
section {
  font-size: 16px;

  .container {
    width: $fixed;
    flex-direction: column;

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

      .img-product-list {
        img {
          width: 100%;
        }

      }

      .into-product-list {
        padding: 25px;

        .title-product-list {
          padding: 27px;
          font-family: $pFont;
          color:$darkGreen ;
        }

        .member-product-list {
          display: flex;
          justify-content: space-between;
          font-family: $titleFont ;
          font-family: $pFont;
          color:$darkGreen ;
          


          span {
            font-weight: 900px;
          }
          .car-member-product-list{
            

             .cart-shopping{
            display: flex;
            gap: 6px;
            padding: 11px 9px;
           
          }
          }
         
        }


      }

    }

  }

}
</style>
