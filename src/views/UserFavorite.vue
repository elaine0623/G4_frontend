<script>
export default {
  data() {
    return {
      productlist: [
        {
          "f_name": "墻森園",
          "p_name": "高山高麗菜",
          "p_img": "cabbage.png",
          "unit": "約五台斤*1箱",
          "p_fee": 40
        },
        {
          "f_name": "墻森園",
          "p_name": "栗子地瓜",
          "p_img": "pumpkin.png",
          "unit": "約五台斤*1箱",
          "p_fee": 335,
        },
        {
          "f_name": "墻森園",
          "p_name": "栗子地瓜",
          "p_img": "pumpkin.png",
          "unit": "約五台斤*1箱",
          "p_fee": 335
        },
        {
          "f_name": "墻森園",
          "p_name": "栗子地瓜",
          "p_img": "pumpkin.png",
          "unit": "約五台斤*1箱",
          "p_fee": 335
        },
        {
          "f_name": "墻森園",
          "p_name": "高山高麗菜",
          "p_img": "cabbage.png",
          "unit": "約五台斤*1箱",
          "p_fee": 40
        },
        {
          "f_name": "墻森園",
          "p_name": "高山高麗菜",
          "p_img": "cabbage.png",
          "unit": "約五台斤*1箱",
          "p_fee": 40
        },
      ]
    }
  },
  methods: {
    parsePic(file) {
      return new URL(`../assets/image/${file}`, import.meta.url).href
    },
    deleteitem(index) {
      this.productlist.splice(index, 1);
    }
  }
}
</script>
<template>
  <div class="userFavorite">
    <router-link to="/userlayout"><button class="cancel1"><i class="fa-solid fa-xmark"
          style="color: #FFF;"></i></button></router-link>
    <h2>收藏</h2>
    <hr>
    <div class="productlist">
      <ul>
        <li v-for="(item, index) in productlist" :key="item.p_name">
          <div class="list">
        <li><input type="checkbox" :id="'checkbox' + (index + 1)">
          <label :for="'checkbox' + (index + 1)" id="checkbox"></label>
        </li>
        <li>
          <div class="pic"><img :src="parsePic(item.p_img)"></div>
        </li>
        <li>
          <div class="text">
            <h3>{{ item.f_name }} {{ item.p_name }}</h3>
            <p>{{ item.unit }}</p>
          </div>
        </li>
        <li class="price">單價<span class="pricetxt">{{ item.p_fee }}</span></li>
        <li class="cancelmark"><button class="cancel" @click="deleteitem(index)"><i
              class="fa-solid fa-xmark"></i></button>
        </li>
    </div>
    <hr>
    </li>
    </ul>
    <div class="btn">
      <router-link to="/product"><button class="routebtn">更多商品<i
            class="fa-solid fa-arrow-right"></i></button></router-link>
      <button class="routebtn">加入購物車<i class="fa-solid fa-cart-shopping"></i></button>
    </div>
  </div>
  </div>

</template>

<style lang="scss" scoped>
.cancel1 {
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px 10px;
  margin: 4px 4px;
  border-radius: 50%;
  background-color: #144433;
  border: 1px solid #eee;
  cursor: pointer;

  @include s2bmd() {
    display: none;
  }
}

h2 {
  // text-align: center;
  color: #144433;
  margin: 20px 0 0 8px;
  font-family: $titleFont;
  font-size: 24px;
  font-weight: 500;

  @include md() {
    font-size: 20px;
  }
}

ul {
  height: 370px;
  overflow-y: scroll;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px $bcgr;
  background-color: #F5F5F5;
}

::-webkit-scrollbar {
  width: 6px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
  background-color: #144433;
}


.list {
  display: flex;
  gap: 7%;
  justify-content: center;
  margin: 8px 0;
  line-height: 1.4;
  align-items: center;

  @include md() {
    gap: 0;
    justify-content: space-evenly;
  }

  .cancelmark {
    @include md() {
      order: -1;
    }
  }
}

li {
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]+label::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #144433;

    @include md() {
      display: none;
    }

  }


  input:checked+label::before {
    background-image: url("../assets/image/Vector\ 176.png");
    background-size: cover;
  }

  .pic {
    width: 70px;
    height: 60px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: top;
    }
  }

  .text {
    width: 150px;

    p {
      font-size: 14px;
    }
  }

  .price {
    width: 35px;
    text-align: center;

    .pricetxt {
      font-size: 14px;
    }
  }

  .cancel {
    width: fit-content;
    height: fit-content;
    border: none;
    cursor: pointer;
    background-color: #F5F4EA;

    @include md() {
      order: 1;
    }
  }
}

hr {
  width: 95%;
  margin: 8px auto;
}

.btn {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 30px 0;
}

.routebtn {
  width: 120px;
  background-color: $darkGreen;
  color: #fff;
  padding: 8px 15px;
  border: none;
  letter-spacing: 1.3px;
  cursor: pointer;
}
</style>