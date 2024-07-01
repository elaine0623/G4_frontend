<script>
import Swal from 'sweetalert2' //引用sweetalert2;
import { useAdminStore } from '@/stores/userLogin.js'; // 引入 Pinia store
import UserLayout from '@/components/UserLayout.vue';
export default {
  data() {
    return {
      signUp: false,
      name: '',
      email: '',
      psw: '',
      dbpsw: '',
      errorMsg: {
        name: '',
        email: '',
        psw: '',
        dbpsw: ''
      },
      mbSignup: false,
      // login
      acc: '',
      lpsw: '',
      returnData: []
    }
  },
  components: {
    UserLayout
  },
  methods: {
    // 前端驗證：使用者註冊時姓名不得為空
    checkname() {
      const namelimit = /^[a-zA-Z\u4e00-\u9fa5]{1,15}$/g; //正規表達式：不可輸入數字、空白及特殊符號 最多15字
      if (this.name === "") {
        this.errorMsg.name = "*請輸入姓名";
        return false;
      }
      else if (namelimit.test(this.name)) {
        this.errorMsg.name = "";
        return true;
      } else {
        this.errorMsg.name = "*姓名不得輸入數字、空白及特殊符號";
        return false;
      }
    },
    // 前端驗證：使用者email有效
    checkemail() {
      const emaillimit = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//正規表達式：email格式
      if (emaillimit.test(this.email)) {
        this.errorMsg.email = "";
        return true;
      } else {
        this.errorMsg.email = "*請輸入正確的email";
        return false;
      }
    },
    // 前端驗證：使用者輸入密碼長度6-12位，至少一個大寫字母
    checkpsw() {
      const pswlimit = /^(?=.*[A-Z])[a-zA-Z0-9]{6,12}$/g; //正規表達式：密碼長度6-12位，至少一個大寫字母
      if (pswlimit.test(this.psw)) {
        this.errorMsg.psw = "";
        return true;
      } else {
        this.errorMsg.psw = "請輸入6-12位，至少一大寫字母"
        return false;
      }
    },
    //確認兩次密碼相同否則跳出錯誤訊息
    dbcheckpsw() {
      if (this.psw !== this.dbpsw) {
        this.errorMsg.dbpsw = "兩者密碼不相同，請重新輸入";
        return false;
      } else {
        this.errorMsg.dbpsw = "";
        return true;
      }
    },
    //註冊:會員資料回傳後端資料庫
    register() {
      if (!this.checkname() || !this.checkemail() || !this.checkpsw() || !this.dbcheckpsw()) {
        return false;
      }
      const url = `http://localhost/php_G4/register.php`
      let body = {
        "name": this.name,
        "email": this.email,
        "psw": this.psw,
        "dbpsw": this.dbpsw,
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(
          json => {
            this.data = json
          }
        );
    },
    async memLogin() {
      try {
        const store = useAdminStore() // 獲取 Pinia store 的實例

        const url = `http://localhost/php_G4/login.php`
        let body = {
          "acc": this.acc,
          "lpsw": this.lpsw,
        }
        const response =
          await fetch(url, {
            method: "POST",
            body: JSON.stringify(body)
          })
        const users = await response.json();
        console.log(users["data"]);
        console.log(store.currentUser);
        if (users.code != 200) {
          alert(users.msg);
          this.acc = ''
          this.lpsw = ''
        } else {
          store.setCurrentUser(users["data"]) // 設置當前用戶到 Pinia
          // console.log(store.currentUser);
          // console.log(store.currentAccount);
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "登入成功",
            showConfirmButton: false,
            timer: 1500
          });
          //判斷從哪個頁面登入
          let history = this.$route.query;
          console.log(history);
          // this.$router.push({ path: history.from.path, query: history.from.query })
          if (history == '') {
            this.$router.push('/userlayout/userdata')
          } else {
            this.$router.push(history.page);
          };
        }
      } catch (error) {
        console.error('登入失敗:', error)
        alert('登入失敗')
      }
    },

  },
  mounted() {
    const store = useAdminStore();
    const isLogin = store.isLoggedIn();
    if (isLogin) {
      this.$router.push('/userlayout/userdata');
    }
  },
}
</script>
<script setup>
//RWD確認視窗大小<768時顯示手機版本會員登入&註冊頁面
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
const mbContent = ref(false);

const updateView = () => {
  mbContent.value = width.value < 768;
};

watch(width, updateView);

onMounted(() => {
  updateView();
});

</script>



<template>
  <!-- 桌機版本登入頁面 -->
  <!-- 欄位驗證是在失焦blur事件發生時觸發對應函數 -->
  <section class="lightbox" v-show="!mbContent">
    <div class="wrapper" :class="{ 'sign-up-active': signUp }">
      <div class="overlay-wrapper">
        <div class="overlay">
          <div class="overlay-left">
            <h2>歡迎回來</h2>
            <p>品味原生態 健康每一餐<br>&nbsp;</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">登入</button>
          </div>
          <div class="overlay-right">
            <h2>加入果籽</h2>
            <p>環保選擇 從食開始 <br>品味原生態 健康每一餐</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">註冊</button>
          </div>
        </div>
      </div>
      <div name="myform" class="sign-up pc-form">
        <h2>建立帳號</h2>
        <input type="text" placeholder="姓名" @blur="checkname()" v-model="name" />
        <span v-text="errorMsg.name" class="wrong-msg"></span>
        <input type="email" placeholder="電子信箱" @blur="checkemail()" v-model="email" />
        <span v-text="errorMsg.email" class="wrong-msg"></span>
        <input type="password" placeholder="密碼(長度6-12位/至少一大寫英文字母)" @blur="checkpsw()" v-model="psw" />
        <span v-text="errorMsg.psw" class="wrong-msg"></span>
        <input type="password" placeholder="再次確認密碼" @blur="dbcheckpsw()" v-model="dbpsw" />
        <span v-text="errorMsg.dbpsw" class="wrong-msg"></span>
        <button @click="register()">註冊</button>
        <!-- button預設是submit  button要記得加type="button"-->
      </div>
      <form class="sign-in pc-form" action="#">
        <h2>登入</h2>
        <input type="email" placeholder="電子信箱" v-model="acc" />
        <input type="password" placeholder="密碼" v-model="lpsw" />
        <a href="#" class="forget-psw">忘記密碼?</a>
        <!-- <RouterLink to="/userlayout/userdata"><button>登入</button></RouterLink> -->
        <button @click="memLogin" type="button">登入</button>

      </form>
    </div>
  </section>
  <!-- 手機版本登入頁面 -->
  <section class="mb-content" v-show="mbContent">
    <form action="" class="mb-form">
      <img src="@/assets/image/logo_F.svg" alt="logo">
      <div class="account">
        <label for="accout">帳號</label>
        <input type="text" placeholder="電子信箱" v-model="acc">
      </div>
      <div class="mb-psw">
        <label for="psw">密碼</label>
        <input type="password" placeholder="密碼" v-model="lpsw">
      </div>
      <div class="link">
        <a href="#">忘記密碼?</a><a @click="mbSignup = !mbSignup">立即註冊!</a>
      </div>
      <button @click="memLogin" type="button">登入</button>
    </form>
    <div class="mb_signup" v-show="mbSignup">
      <h2>建立帳號</h2>
      <input type="text" placeholder="姓名" @blur="checkname()" v-model="name" />
      <span v-text="errorMsg.name" class="wrong-msg"></span>
      <input type="email" placeholder="電子信箱" @blur="checkemail()" v-model="email" />
      <span v-text="errorMsg.email" class="wrong-msg"></span>
      <input type="password" placeholder="密碼(長度6-12位/至少一大寫英文字母)" @blur="checkpsw()" v-model="psw" />
      <span v-text="errorMsg.psw" class="wrong-msg"></span>
      <input type="password" placeholder="再次確認密碼" @blur="dbcheckpsw()" v-model="dbpsw" />
      <span v-text="errorMsg.dbpsw" class="wrong-msg"></span>
      <div class="btnlayout">
        <button type="button" @click=register()>註冊</button>
        <button type="button" @click="mbSignup = !mbSignup">返回</button>
      </div>
      <!-- button預設是submit  button要記得加type="button"-->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  max-width: 768px;
  width: 100%;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
    0 10px 10px rgba(0, 0, 0, .2);
  background-color: #F5F4EA;
  box-sizing: border-box;
  margin: 0 auto;

  .overlay-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform .5s ease-in-out;
    z-index: 100;
  }

  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background-color: #144433;
    color: #fff;
    transform: translateX(0);
    transition: transform .5s ease-in-out;
  }

  @mixin overlays($property) {
    position: absolute;
    top: 50px;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform .5s ease-in-out;
  }

  .overlay-left {
    @include overlays(-20%);
  }

  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}

h2 {
  margin: 0 0 20px 0;
  font-size: 24px;
  font-family: $titleFont;
}

p {
  margin: 40px 0 0;
  line-height: 30px;
  font-weight: 200;
}

a {
  color: #fff;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
  // font-weight: 200;
}

.forget-psw {
  color: #357A56;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
  // font-weight: 200;
}

button {
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
}

button.invert {
  background-color: transparent;
  border-color: #fff;
  margin-top: 97px
}

.mb-content {
  // display: none;
  width: 80%;
  font-family: $titleFont;
  margin: 0 auto;
  background-color: #144433;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
    0 10px 10px rgba(0, 0, 0, .2);
  border-radius: 10px;
  position: relative;

  .mb_signup {
    position: absolute;
    top: 145px;
    background-color: #144433;
    width: 100%;
    height: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: #fff;
    }

    input {
      width: calc(100% - 168px);
      line-height: 1.5;
      background-color: #eee;
      border: 1px solid #144433;
      outline: none;
      padding: 8px 15px;
      overflow: hidden;
    }

    span {
      width: calc(100% - 168px);
      color: #fff;
      margin: 3px 2px;
    }

    .btnlayout {
      margin-top: 8px;

      button {
        padding: 6px 20px;
        margin: 0 15px;
      }

    }

    .link {
      width: 60%;
      margin: 10px auto 15px;

      a {
        display: inline-block;
        width: 50%;
        text-decoration: none;
        text-align: center;
        margin: 20px auto;
        color: #eee;
        font-size: 14px;
      }
    }

    button {
      text-align: center;
      margin-bottom: 40px;
    }
  }

  .mb-form {
    width: calc(90% - 30px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      margin: 20px auto 0;
      width: 60%;
      height: 80px;
      padding: 20px 0;
    }

    .account,
    .mb-psw {
      margin: 0 auto;
      width: 60%;

      label {
        color: #fff;
        line-height: 3;
      }

      input {
        width: 100%;
        line-height: 1.5;
        background-color: #eee;
        border: 1px solid #144433;
        outline: none;
        padding: 8px 15px;
        overflow: hidden;
      }
    }

    .link {
      width: 60%;
      margin: 10px auto 15px;

      a {
        display: inline-block;
        width: 50%;
        text-decoration: none;
        text-align: center;
        margin: 20px auto;
        color: #eee;
        font-size: 14px;
      }
    }

    button {
      text-align: center;
      margin-bottom: 40px;
    }
  }

}


.pc-form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: calc(50% - 120px);
  height: calc(100% - 180px);
  text-align: center;
  background-color: #F5F4EA;
  transition: all .5s ease-in-out;

  div {
    font-size: 1rem;
  }

  input {
    background-color: #eee;
    border: 1px solid #144433;
    outline: none;
    padding: 8px 15px;
    width: calc(100% - 30px);
    overflow: hidden;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}

.wrong-msg {
  font-size: $desc;
  color: $red;
  margin: 1px 0;
  padding: 0;
  height: 12px;
  width: calc(100% - 30px);
  text-align: start;
}

.sign-in {
  left: 0;
  z-index: 2;
}

.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}

.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show .5s;
  }

  .overlay-wrapper {
    transform: translateX(-100%);
  }

  .overlay {
    transform: translateX(50%);
  }

  .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    transform: translateX(20%);
  }
}

@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }

  49% {
    opacity: 0;
    z-index: 1;
  }

  50% {
    opacity: 1;
    z-index: 10;
  }
}
</style>