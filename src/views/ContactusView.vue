<script>
  export default {
  data() {
    return {
      currentIndex: 0, 
    };
  },
};
</script>
<template>
  <section>
    <div class="container">
      <div class="pic">
        <img src="../assets/image/logo-Contactus.svg" alt="">
      </div>
      <div class="title">
        <h2>聯絡我們</h2>
        <picture class="under-scord">
          <img src="../assets/image/contacus-underScord.svg" alt="">
        </picture>
      </div>
      <div class="btn">
        <button :class="{ 'btn-active': currentIndex === 0 }"
        @click="currentIndex = 0">聯絡我們</button>
        <button :class="{ 'btn-active': currentIndex === 1 }"
        @click="currentIndex =1 ">我要加盟</button>
      </div>
      <h3>感謝您撥冗填寫以下表單 ，我們將會在3~5個工作天內盡速與您聯繫!</h3>
      <div class="category" v-if="currentIndex === 0">
        <h4>聯絡基本資料</h4>
        <div class="form">
          <div class="name">
            <label for="text">
              <span>姓名</span>
              <input type="text">
            </label>
            <div class="gender">
              <label for="gender_mr">
                <input type="radio" id="gender_mr" name="gender" value="mr" />
                <span>先生</span>
              </label>
              <label for="gender_ms">
                <input type="radio" id="gender_ms" name="gender" value="ms" />
                <span>小姐</span>
              </label>
            </div>
          </div>
          <div class="phone">
            <label for="">
              <span>連絡電話</span>
              <input type="text" />
            </label>
            <label for="">
              <span>電子信箱</span>
              <input type="text" />
            </label>
          </div>
          <div class="order">
            <label for="">
              <span>訂單編號</span>
              <input type="text" />
            </label>
            <label for="">
              <span>購買時間</span>
              <input type="text" />
            </label>
          </div>
          <div class="opinion">
            <span>意見內容</span>
            <textarea class="custom-textarea" rows="16" wrap="soft"></textarea>

          </div>
          <div class="uploa">
            上傳圖片
            <div class="uploa-pic">         
                <button type="submit" >
                  選擇檔案
                </button>
            </div>
          </div>
        </div>
      </div>
      <div class="category" v-if="currentIndex === 1">
        <h4>聯絡基本資料</h4>
        <div class="form">
          <div class="name">
            <label for="text">
              <span>姓名</span>
              <input type="text">
            </label>
            <div class="gender">
              <label for="gender_mr">
                <input type="radio" id="gender_mr" name="gender" value="mr" />
                <span>先生</span>
              </label>
              <label for="gender_ms">
                <input type="radio" id="gender_ms" name="gender" value="ms" />
                <span>小姐</span>
              </label>
            </div>
          </div>
          <div class="age-title">
          <span>年齡</span>
          <div class="age">
            <label for="age">
                <input type="radio" id="age" name="age" value="age" />
                <span>18-25歲</span>
              </label>
              <label for="age1">
                <input type="radio" id="age1" name="age" value="age" />
                <span>26-35歲</span>
              </label>
              <label for="age2">
                <input type="radio" id="age2" name="age" value="age" />
                <span>36-45歲</span>
              </label>
              <label for="age3">
                <input type="radio" id="age3" name="age" value="age" />
                <span>46-55歲</span>
              </label>
          </div>
        </div>
          <div class="phone">
            <label for="">
              <span>連絡電話</span>
              <input type="text" />
            </label>
            <label for="">
              <span>電子信箱</span>
              <input type="text" />
            </label>
          </div>
          
          <div class="opinion">
            <span>合作項目及方式</span>
            <textarea class="custom-textarea" rows="16" wrap="soft"></textarea>

          </div>
          <div class="bottom">
            <p>以上您填寫之資料，果籽會尊重個⼈隱私，善盡保密義務，絕不外流。
            表單提交後，我們將會在3~6個工作天內聯繫您，感謝您的耐心等待。</p>
          </div>
        </div>
      </div>
      <div class="sendout">
        <button>提交</button>
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
  .container {}
}

.pic {
  margin: auto;
  width: 15%;
  padding-bottom: 5%;

  img {
    width: 100%;
  }

}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1%;

  h2 {
    text-align: center;
    font-size: map-get($title, h2);
    color: $darkGreen;
    font-family: $fontBase ;
  }

  .under-scord {
    margin: auto;
    padding: 10px;

  }
}

.btn {
  display: flex;
  gap: 30px;
  justify-content: center;
  padding-bottom:3%;

  button {
    color: $darkGreen;
    font-family: $pFont;
    font-size: 20px;
    padding: 0.5em 1em;
    background-color: transparent;
    border: 0;
  }
  .btn-active {
      background-color: $darkGreen;
      color: #fff;
      border-radius: 20px;
    }
}

h3 {
  text-align: center;
  color: $darkGreen;
  font-size: 12px;
  padding-bottom: 3%;
}

.category {
  width: 65%;
  margin: auto;
  @include sm(){
          width: 100%;
    }

  h4 {
    text-align: center;
    color: $darkGreen;
    font-size: map-get($title, h3);
    padding-bottom: 2%;
    border-bottom: 1.5px solid $darkGreen;
    ;
  }

  .form {
    padding: 2%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    span {
      color: $darkGreen;
      font-size: $fontBase;
      display: block;
      margin: 10px 0;

    }

    label {
      width: 50%;
      @include sm(){
          width: 90%;
    }

    }

    input[type=text],
    input[type=number] {
      width: 70%;
      height: 30px;
      background-color: transparent;
      border: 1.5px solid $darkGreen;
      padding: 10px;
    }

    input[type=radio] {
      display: none;
      position: relative;

      &+span::before {
        content: "";
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-right: 8px;
        border: 1.5px solid $darkGreen;
        border-radius: 50%;
        background-color: transparent;
      }

      &:checked+span::before {
        content: "";
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url('../assets/image/Vector 176.png');
        background-size: 35px;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    
    .name {
      display: flex;
      align-items:end;
      @include sm(){
        flex-direction: column;
        align-items: start;
    }
      .gender {
        display: flex;
        width: 50%;
        // margin: 5px 0;
        @include sm(){
          width: 100%;
    }
        span {
          display: inline-block;      
        }
      }
    }
    .age{
      display: flex;
      @include sm(){
        flex-wrap: wrap;
      }
      label{
        @include sm(){
          width: 50%;
          
    }
      }
      span{
        display: block;
      }
    }
    .phone,
    .order{
      display: flex;
    }
    .custom-textarea {
      width: 100%;
      box-sizing: border-box;
      padding: 15px;
      border: 1.5px solid $darkGreen;
      resize: none;
      background-color: transparent;
    }
    .uploa{
      margin: 3% 0;
      color: $darkGreen ;
      .uploa-pic{
        margin: 2% 0;
        padding: 32px;
        border: 1.5px solid $darkGreen;
        button{
          padding: 10px 15px;
          background-color: transparent;
          border: 1.2px solid $darkGreen;
          cursor: pointer;
          color: $darkGreen ;
        }
      }
    }
    .bottom{
      padding: 30px 0;
      width: 80%;
      margin: auto;
      p{ 
    color: $darkGreen;
    font-family: $pFont;
    font-size: 16px;

    }
    }
    

  }

}
.sendout{
  width: 100%;
display: flex;
align-items: center;
justify-content: center;

 button{
  padding: 5px 53px;
  border-radius:20px;
  background-color: transparent;
  border: 1.5px solid $darkGreen ;
  color: $darkGreen;
  transition: 0.5s;
  &:hover{
    background-color: transparent;
    color: #fff;
    background-color: $darkGreen;
  }
 }
}
</style>
