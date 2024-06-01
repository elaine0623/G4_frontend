<template>
  <!-- <section>banner</section> -->

  <section>
    <div class="container">
      <div class="textleft">
        <h2>&emsp;美&emsp;&emsp;食&emsp;&emsp;上&emsp;&emsp;桌&emsp;</h2>
      </div>
      <div class="pic">
        <img src="../assets/image/Space.jpg" alt="" />
      </div>
      <div class="textright">
        <h2>&emsp;純&emsp;&emsp;靜&emsp;&emsp;自&emsp;&emsp;然&emsp;</h2>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
h2 {
  writing-mode: vertical-lr;
  line-height: 200%;
  font-size: 1.3rem;
  z-index: 2;
}
.pic {
  width: 40%;
  min-width: 300px;
}
.textleft {
  background-image: url(../assets/image/h1img.png);
  background-size: 100% 100%;
  position: absolute;
  top: 15%;
  left: 20%;
}
.textright {
  // background-image: url(~@assets/image/h1imgr.png);
  background-image: url(../assets/image/h1imgr.png);
  background-size: 100% 100%;
  position: absolute;
  top: 15%;
  right: 20%;
}
@media screen and (max-width: 1024px) {
  .pic {
    width: 40%;
    min-width: 300px;
  }
  h2 {
    writing-mode: vertical-lr;
    font-size: 1rem;
  }
}
@media screen and (max-width: 768px) {
  .pic {
    width: 40%;
    min-width: 300px;
  }
  h2 {
    writing-mode: vertical-lr;
    font-size: 0.8rem;
  }
  .textleft {
    left: 15%;
  }
  .textright {
    right: 15%;
  }
}
@media screen and (max-width: 576px) {
  .pic {
    width: 100%;
    min-width: 300px;
    margin-top: 50%;
  }
  h2 {
    writing-mode: vertical-lr;

    font-size: 0.6rem;
  }
  .textleft {
    top: 10%;
    left: 38%;
  }
  .textright {
    top: 10%;
    right: 38%;
  }
}
</style>
