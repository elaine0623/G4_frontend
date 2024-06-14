<script>
export default {
  data() {
    return {
      productlist: [
        {
          "f_name": "墻森園",
          "p_name": "高山高麗菜",
          "p_img": "../src/assets/image/cabbage.png",
          "unit": "約五台斤*1箱",
          "p_fee": 40
        },
        {
          "f_name": "墻森園",
          "p_name": "栗子地瓜",
          "p_img": "../src/assets/image/pumpkin.png",
          "unit": "約五台斤*1箱",
          "p_fee": 335
        }
      ]
    }
  },
  methods() {

  }
}
</script>
<template>
  <div class="userFavorite">
    <button class="cancel1"><router-link to="/userlayout"><i class="fa-solid fa-xmark"></i></router-link></button>
    <h2>收藏</h2>
    <hr>
    <div class="productlist">
      <ul>
        <div class="list">
          <li v-for="item in productlist" :key="item.p_name">
          <li><input type="checkbox"></li>
          <li>
            <div class="pic"><img :src="item.p_img"></div>
          </li>
          <li>
            <div class="text">
              <h3>{{ item.f_name }} {{ item.p_name }}</h3>
              <p>{{ item.unit }}</p>
            </div>
          </li>
          <li class="price">單價{{ item.p_fee }}</li>
          <li><button class="cancel">X</button></li>
          </li>
        </div>
        <hr>
      </ul>
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


  @include s2bmd() {
    display: none;
  }

  a {
    color: #fff;
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

li {
  display: flex;
  gap: 7%;
  justify-content: center;
  margin: 8px 0;
  line-height: 1.4;
  align-items: center;

  // @include md() {
  //   display: flex;
  //   flex-direction: column;
  //   gap: 3%;
  // }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: #144433;
    border-radius: 0;
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
  }

  .cancel {
    width: fit-content;
    height: fit-content;
    border: none;
    cursor: pointer;
  }
}

hr {
  width: 95%;
  margin: 10px auto;
}
</style>