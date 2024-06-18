<script>
export default {
  data() {

  },
  methods: {
    dbcheckpsw() {
      if (this.psw !== this.dbpsw) {
        this.errorMsg.dbpsw = "兩者密碼不相同，請重新輸入";
      } else {
        this.errorMsg.dbpsw = "";
      }
    },
  }
}
</script>

<template>
  <div class="userdata">
    <router-link to="/userlayout"><button class="cancel"><i class="fa-solid fa-xmark"></i></button></router-link>
    <h2>個人資料</h2>
    <form @submit.prevent="submitForm">
      <div class="name">
        <label for="m_name">姓名</label>
        <input type="text" id="m_name" name="m_name">
      </div>
      <div class="account">
        <label for="m_account">帳號</label>
        <input type="email" id="m_account" name="m_account">
      </div>
      <div>
        <label for="m_phone">電話</label>
        <input type="tel" id="m_phone" name="m_phone">
      </div>
      <div class="birth">
        <label for="m_birth">生日</label>
        <input type="date" id="m_birth" name="m_birth" class="m_birth">
      </div>
      <div class="address">
        <label for="m_add">地址</label>
        <input type="email" id="m_add" name="m_add">
      </div>
      <hr style="color: #144433; width: 100%;">
      <div class="oldpsw">
        <label for="m_old_psw">舊密碼</label>
        <input type="password" id="m_old_psw" name="">
      </div>
      <div class="newpsw">
        <label for="m_new_psw">新密碼</label>
        <input type="password" id="m_new_psw" name="" v-model="psw">
      </div>
      <div class="dbpsw">
        <label for="m_dbc_psw">確認新密碼</label>
        <input type="password" id="m_dbc_psw" name="" v-model="dbpsw" @blur="dbcheckpsw()">
      </div>
    </form>
  </div>
  <button>儲存</button>
</template>

<style lang="scss" scoped>
.userdata {
  width: 80%;
  margin: 0 auto;

  @include md() {
    width: 90%;
  }

  .cancel {
    position: absolute;
    right: 0;
    top: 3;
    padding: 8px 10px;
    margin: 0 4px;
    border-radius: 50%;

    @include s2bmd() {
      display: none;
    }

    a {
      color: #fff;
    }
  }

  h2 {
    text-align: center;
    color: #144433;
    margin: 20px 0;
    font-family: $pFont;
    font-size: 24px;
    font-weight: 500;

    @include md() {
      font-size: 20px;
    }
  }

  div {
    width: 80%;
    margin: 0 auto 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include md() {
      width: 90%;
    }
  }

  // .m_birth {
  //   // width: 55%;

  //   @include md() {
  //     width: 57%;
  //   }
  // }

}



input {
  background-color: #eee;
  border: 1px solid #144433;
  outline: none;
  padding: 8px 15px;
  // width: calc(100% - 30px);
  overflow: hidden;
  flex: 0 0 55%;
  height: 15px;

  &:focus {
    outline: none;
    background-color: #fff;
  }

  @include md() {
    font-size: 13px;
    padding: 6px 10px;

  }
}

label {
  color: #144433;
  font-weight: 500;

  @include md() {
    font-size: 13px;
  }
}



button {
  display: block;
  margin: 0 auto;
  border-radius: 25px;
  border: 1px solid #eee;
  background-color: #144433;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 55px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: transform .1s ease-in;

  &:active {
    transform: scale(.9);
  }

  &:focus {
    outline: none;
  }

  @include md() {
    font-size: 13px;
    padding: 8px 40px;
    margin-bottom: 15px;
  }
}
</style>
