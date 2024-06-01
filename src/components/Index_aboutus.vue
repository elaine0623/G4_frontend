<template>
  <section>
 ]   <div class="container">
      <div class="promise">
        <div class="title-promise">
          <h2>從田野到餐桌的綠色承諾</h2>
        </div>
        <div class="content-promise">
          <p>在現代生活的快節奏中，當你最後一次品嚐到那新鮮自然的滋味是什麼時候？果籽，帶你走進在地小農的世界，體驗那份純粹與真實。</p>
        </div>
      </div>
      <div class="intro-up">
        <div class="left-intro-up">
          <div class="pic-left-intro-up">
            <img src="../assets/image/index_about2.png" alt="garden1">
            <div class="img-circle circle1"></div>
            <div class="img-circle circle2"></div>
            <div class="img-circle circle3"></div>
          </div>
          <div class="leaf-left-intro-up">
            <img src="../assets/image/index_about_leaf1.png" alt="leaf">
          </div>
        </div>
        <div class="right-intro-up">
            <div class="pic-promise">
              <img src="../assets/image/index_about1.png" alt="garden2">
              <div class="img-circle circle1"></div>
              <div class="img-circle circle2"></div>
              <div class="img-circle circle3"></div>
            </div>
            <div class="leaf-promise">
              <img src="../assets/image/index_about_leaf2.png" alt="leaf">
            </div>
          </div>
      </div>
      <div class="pure">
        <div class="wrap-pure">
          <div class="title-pure">
            <h2>品味果籽的純粹與美好</h2>
          </div>
          <div class="content-pure">
            <p>在這裡，購買的不僅僅是一份農產品，更是一種生活態度。讓我們一起，從田間到餐桌，共同書寫這段綠色的詩篇。選擇果籽，讓我們的每一天，都更接近自然的本真。</p>
          </div>
        </div>
        <div class="intro-down">
          <div class="pic-intro-down">
              <img src="../assets/image/index_about3.png" alt="garden1">
              <div class="img-circle circle1"></div>
              <div class="img-circle circle2"></div>
              <div class="img-circle circle3"></div>
            </div>
            <div class="leaf-intro-down">
              <img src="../assets/image/index_about_leaf3.png" alt="leaf">
            </div>
        </div>
      </div>
      <div class="wrap">
        <div class="card">
          <div class="content-card">
            <h3>在地小農</h3>
            <p>心之所向這裡，每一片綠葉都飽含汗水與希望，每一顆果實都蘊藏自然的饋贈。我們深知，在地小農的辛勤耕耘不應被忽視，他們的努力值得被更多人看見和珍惜。</p>
          </div>
        </div>
        <div class="card">
          <div class="content-card">
            <h3>食農教育</h3>
            <p> 健康飲食 每一份田間的故事，都是一堂珍貴的食農教育課。我們致力於推廣健康飲食，讓每一位消費者都能了解餐桌上的美味從何而來，懂得珍惜與感恩。</p>
          </div>
        </div>
        <div class="card">
          <div class="content-card">
            <h3>透明溝通</h3>
            <p>信任連結 我們相信，透明是信任的基石。每一份農產品的背後，都有小農的名字和故事，讓你在享用美食的同時，也能感受到那份溫暖的人情味。</p>
          </div>
        </div>
        <div class="card">
          <div class="content-card">
            <h3>永續耕種</h3>
            <p> 愛護地球 我們堅信，最好的未來源自於對土地的尊重。友善耕種，減少農業對環境的影響，是我們對地球的承諾。選擇田間故事，就是選擇一種更健康、更可持續的生活方式。</p>
          </div>
        </div>
        <div class="moreBtn">
          <RouterLink to="/">閱讀更多</RouterLink>
          <!-- 要連結到關於我們頁面 -->
        </div>
      </div>
      
    </div>
    
  </section>
</template>
<script></script>


<style lang="scss" scoped>

  // map-get($title,h2)

  @keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

    @import "@/assets/scss/base/_font.scss";
    @import "@/assets/scss/mixin/mixin.scss";
    section{
      width: 100%;
      padding: 15px 0 60px;
      font-family: $pFont;
      .container{
        position: relative;
        @media screen and (min-width:768px){
          width: 80%;
          max-width: 700px;
          margin: auto;
        }
        .promise{
          width: 80%;
          max-width: 300px;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items:center;
          @media screen and (min-width:768px){
            width: auto;
            max-width: 300px;
            position: absolute;
            right: 0;
            top: 20px;
            z-index: 100;
            align-items: start;
          }
          .title-promise{
            h2{
              // font-size: clamp(20px,1.5vw,36px);
              font-size: 20px;//先寫死
              font-family: $pFont;
              color: $darkGreen;
              letter-spacing: $letterSpacing;
              position: relative;
              &::before{
              content: "";
              position: absolute; 
              top: 50%; 
              left: -30px; 
              transform: translateY(-50%);
              background-image: url('../assets/image/index_about_fork.png');
              width: 20px;
              height: 20px;
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              margin-right: 8px;
              }
              @media screen and (min-width:768px){
                font-size: 24px;//鮮血死
                &::before{
                  width: 30px;
                  height: 30px;
                  left: -40px; 
                }
              } 
            }
          }
          .content-promise{
            width: 90%;
            margin: 10px 0;
            @media screen and (min-width:768px){
              width: auto;
            }
            p{
              font-size: $fontBase;
              line-height: $lineheight;
              letter-spacing: $letterSpacing;
              font-family: $pFont;
            }
          }
        }
        .intro-up{
          width: 80%;
          height: 200px;
          margin: 30px auto 0;
          display: flex;
          justify-content: space-evenly;
          @media screen and (min-width:768px){
            width: 100%;
            height: 400px;
            justify-content:flex-start;
          }
          .left-intro-up{
            .pic-left-intro-up{
              width: 120px;
              height: 120px;
              position: relative;
              @media screen and (min-width:768px){
                width: 300px;
                height: 300px;
              }
              img{
                width: 100%;
                height: 100%;
                border-radius: 200px;
              }
              .img-circle{
                width: 120px;
                height: 120px;
                border-radius: 200px;
                border: solid 1px #144433;
                @media screen and (min-width:768px){
                  width: 300px;
                  height: 300px;
                }
              }
              .circle1{
                position: absolute;
                top: 1px;
                transform-origin:60px 59px;
                animation: rotate 2s linear infinite;
                @media screen and (min-width:768px){
                  transform-origin:150px 149px;
                }  
              }
              .circle2{
                position: absolute;
                top: 1px;
                right:1px;
                transform-origin:59px 59px;
                animation: rotate 3s linear infinite;
                @media screen and (min-width:768px){
                  transform-origin:149px 149px;
                } 
              }
              .circle3{
                position: absolute;
                top:-1px;
                right:1px;
                transform-origin:59px 61px;
                animation: rotate 2s linear infinite;
                @media screen and (min-width:768px){
                  transform-origin:149px 151px;
                } 
              }
            }
            .leaf-left-intro-up{
              display: none;
              img{
                width: 100%;
              }
              @media screen and (min-width:768px){
                display: block;
                width: 30px;
                } 
            }
          }
          .right-intro-up{
            display: flex;
            align-items: end;
            @media screen and (min-width:768px){
                margin-left:5vw;  //vw無作用，須修正
                width: 50%;
                justify-content: space-evenly;
              }
            .pic-promise{
              width: 90px;
              height: 90px;
              position: relative;
              @media screen and (min-width:768px){
                width: 200px;
                height: 200px;
              }
              img{
                width: 100%;
                height: 100%;
                border-radius: 200px;
              }
              .img-circle{
                width: 90px;
                height:90px;
                border-radius: 99px;
                border: solid 1px #144433;
                @media screen and (min-width:768px){
                  width: 200px;
                  height: 200px;
              }
              }
              .circle1{
                position: absolute;
                top: 1px;
                transform-origin:45px 44px;
                animation: rotate 3s linear infinite;
                @media screen and (min-width:768px){
                  transform-origin:100px 99px;
                }  
              }
              .circle2{
                position: absolute;
                top: 1px;
                right:1px;
                transform-origin:44px 44px;
                animation: rotate 2s linear infinite;
                @media screen and (min-width:768px){
                  transform-origin:99px 99px;
                }  
              }
              .circle3{
                position: absolute;
                top:-1px;
                right:1px;
                transform-origin:44px 46px;
                animation: rotate 3s linear infinite;
                @media screen and (min-width:768px){
                  transform-origin:99px 101px;
                }  
              }
            }
            .leaf-promise{
              display: none;
              img{
                width: 100%;
              }
              @media screen and (min-width:768px){
                width: 60px;
                height: 400px;
                margin-left:30px;
                display: flex;
                align-items: center;
              } 
            }
          }
        }
        .pure{
          width: 100%;
          margin: 40px 0 0;
          @media screen and (min-width:768px){
            display: flex;
            margin: 80px 0 0;
          }
          .wrap-pure{
            width: 80%;
            max-width: 300px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items:center;
            @media screen and (min-width:768px){
              align-items: start;
            }
            .title-pure{
              display: flex;
              align-items: center;
            h2{
              // font-size: clamp(20px,10%,36px);
                font-size: 20px;//先寫死
                font-family: $pFont;
                color: $darkGreen;
                letter-spacing: $letterSpacing;
                position: relative;
                &::before{
                content: "";
                position: absolute; 
                top: 50%; 
                left: -30px; 
                transform: translateY(-50%);
                background-image: url('../assets/image/index_about_grass.png');
                width: 20px;
                height: 20px;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                margin-right: 8px;
                }
                @media screen and (min-width:768px){
                  font-size: 24px;
                  &::before{
                  width: 30px;
                  height: 30px;
                  left: -40px; 
                }
                }
              }
            }
            .content-pure{
              width: 90%;
              margin: 10px 0;
              p{
                font-family: $pFont;
                font-size: $fontBase;
                line-height: $lineheight;
                letter-spacing: $letterSpacing;
              }
            }
          }
          .intro-down{
            display: none;
            .pic-intro-down{
              position: relative;
              @media screen and (min-width:768px){
                width: 150px;
                height: 150px;
              }
              img{
                width: 100%;
                height: 100%;
                border-radius: 200px;
              }
              .img-circle{
                width: 150px;
                height: 150px;
                border-radius: 200px;
                border: solid 1px #144433;
              }
              .circle1{
                position: absolute;
                top: 1px;
                transform-origin:75px 74px;
                animation: rotate 2s linear infinite; 
              }
              .circle2{
                position: absolute;
                top: 1px;
                right:1px;
                transform-origin:74px 74px;
                animation: rotate 3s linear infinite;
              }
              .circle3{
                position: absolute;
                top:-1px;
                right:1px;
                transform-origin:75px 76px;
                animation: rotate 2s linear infinite;
              }
            }
            @media screen and (min-width:768px){
              display: flex;
            }
            .leaf-intro-down{
              width: 70px;
              img{
                width: 100%;
              }
            }
          }
        }

        .wrap{
          width: 80%;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          .card{
            width: 80%;
            height: 200px;
            background-color: $lightGreen;
            border-radius: 20px;
            padding: 20px;
            margin: 0 0 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            .content-card{
              h3{
                font-size: 20px;
                color: #fff;
                font-weight: bold;
                letter-spacing: $letterSpacing;
                margin: 0 0 20px;
              }
              p{
                color: #fff;
                line-height: $lineheight;
                letter-spacing: $letterSpacing;
              }
            }
            
          }
          .moreBtn{
            border: solid 1px #144433;
            padding: 12px 39px;
            a{
              color: #144433;
              text-decoration: none;
              font-family: $pFont;
              font-size: $fontBase;
              line-height: $lineheight;
              letter-spacing: $letterSpacing;
            }
          }
        }
      }

    }
</style>
