<script>
import ChatBox from '@/components/ChatBox.vue'
export default {
  components: {
    ChatBox
  }
}
</script>



<template>
  <ChatBox />
  <section class="section_1">
    <div class="container">
      <div class="text">
        <div class="textleft">
          <router-link to="/product">產品</router-link>
          <router-link to="/game">食農教育</router-link>
          <router-link to="/activity">活動</router-link>
        </div>
        <div class="textright">
          <router-link to="/aboutus">關於我們</router-link>
          <router-link to="/contactus">聯絡我們</router-link>
        </div>
      </div>
      <div class="icon">
        <a href="https://www.facebook.com/?locale=zh_TW"><img src="@/assets/image/Vector.png" alt="fb" /></a>
        <a href="https://www.instagram.com/"><img src="@/assets/image/Vector-1.png" alt="ig" /></a>
        <a href="https://www.threads.net/?hl=zh-tw"><img src="@/assets/image/bi_threads-fill.png" alt="threads" /></a>
        <a href="https://www.youtube.com/"><img src="@/assets/image/Group 1541.png" alt="youtbe" /></a>
      </div>
      <div class="logo">
        <div class="pic">
          <a href=""><img src="@/assets/image/logo_F.svg" alt="logo" /></a>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="Contact_text">
      <p>電話: 06-2855447</p>
      <p>信箱: asdf55448@gmail.com</p>
      <p>本網站為緯育TibaMe前端工程師班學員專題作品，本平台僅供學習、展示之用。</p>
    </div>
  </section>
  <section class="section_2">
    <div class="container">
      <div class="logo">
        <div class="pic">
          <a href=""><img src="@/assets/image/logo_F.svg" alt="logo" /></a>
        </div>
        <div class="text">
          <div class="textleft">
            <router-link to="/product">產品</router-link>
            <router-link to="/game">食農教育</router-link>
            <router-link to="/activity">活動</router-link>
          </div>
          <div class="textright">
            <router-link to="/aboutus">關於我們</router-link>
            <router-link to="/contactus">聯絡我們</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="Contact">
      <div class="Contact_text">
        <p>電話: 06-2855447</p>
        <p>信箱: asdf55448@gmail.com</p>
      </div>
      <div class="icon">
        <a href="https://www.facebook.com/?locale=zh_TW"><img src="@/assets/image/Vector.png" alt="fb" /></a>
        <a href="https://www.instagram.com/"><img src="@/assets/image/Vector-1.png" alt="ig" /></a>
        <a href="https://www.threads.net/?hl=zh-tw"><img src="@/assets/image/bi_threads-fill.png" alt="threads" /></a>
        <a href="https://www.youtube.com/"><img src="@/assets/image/Group 1541.png" alt="youtbe" /></a>
      </div>
    </div>
    <div class="copyright">
      <p>本網站為緯育TibaMe前端工程師班學員專題作品，本平台僅供學習、展示之用。</p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
img {
  width: 100%;
}

section {
  max-width: 1920px;
  margin: 0 auto;
  background-image: url(@/assets/image/footer_bgc.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 30px;
  margin-top: 100px;
}

.container {
  max-width: 1200px;
  margin: 0 20% 0 20%;
  display: flex;
}

.text {
  width: 36%;
  display: flex;
}

.textleft,
.textright {
  margin: 40% 0 15% 0;
  font-size: 1rem;
  letter-spacing: 0.28em;
  padding: 0 3% 0 3%;
  display:flex;
  flex-direction: column;
  
  a {
    text-align: start;
    margin: 0 0 5% 0;
    text-decoration:none;
    color: black;
    
  }
}

.icon {
  width: 33%;
  display: flex;
  justify-content: end;
  align-items: end;

  a {
    display: flex;
    padding: 3% 5% 3% 0;

    img {
      width: 30px;
    }
  }
}

.logo {
  width: 30%;
  margin: 0 auto;
}

.logo .pic {
  width: 50px;
  padding-top: 55%;
  padding-left: 40%;
}

.line {

  width: 100%;
  border-top: 1px solid black;
}

.Contact_text {
  font-size: 1rem;
  margin: 0 0 0 22%;
  letter-spacing: 0.28em;
}

.Contact_text p {
  padding-top: 1%;
}

.section_2 {
  display: none;
}

@media screen and (max-width: 1050px) {
  .Contact_text {
    font-size: 0.8rem;
  }

  .textleft,
  .textright {
    font-size: 0.8rem;
  }

  .icon {
    a {
      img {
        width: 25px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section_1 {
    display: none;
  }

  .section_2 {
    display: block;
  }

  section {
    margin: 0 auto;
    background-image: url(@/assets/image/footer.png);

  }

  .text {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .icon {
    display: flex;
    justify-content: start;
    align-items: start;
  }

  .copyright {
    margin: 0 2% 0 2%;
  }

  .logo {
    width: 100%;
    margin: 0 auto;
    margin-top: 17%;
  }

  .logo .pic {
    width: 40px;
    padding-top: 0%;
    padding-left: 0%;
    margin: auto;
  }

  .textleft,
  .textright {
    font-size: 0.8rem;
    letter-spacing: 0.28em;
    margin: 0;
    padding: 0 3% 0 3%;
    line-height: 1;
  }

  .Contact {
    display: flex;
    justify-content: space-between;
    margin: 0 2% 0 2%;
  }

  .Contact_text {
    margin: 0;
  }

  .copyright {
    font-size: 0.8rem;
  }

  .Contact_text p {
    font-size: 0.8rem;
    line-height: 1;
  }

  .copyright {
    margin: 0 2% 0 2%;
    font-size: 0.8rem;
    line-height: 1;
  }
}

@media screen and (max-width: 576px) {
  section {
    margin: 30px auto 0 auto;
    padding: 30px 0 30px 0
  }

  .logo .pic {
    width: 25px;
  }

  .icon {
    a {
      img {
        width: 20px;
      }
    }
  }

  .Contact_text p {
    font-size: 0.6rem;
    line-height: 1;
  }

  .copyright {
    margin: 0 2% 0 2%;
    font-size: 0.6rem;
  }
}


@media screen and (max-width: 576px) {}
</style>
