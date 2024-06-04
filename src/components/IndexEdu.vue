<template>
    <section>
        <div class="container">
            <div class="title-container" >
                <h2 class="news-section-title">{{title}}</h2>
                <img class="title-bgi" src="../assets/image/titlebg.svg" alt="">
            </div>
        </div>
    </section>

</template>

<script>
    export default{
        data(){
            return{
                title:'食農教育',
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/_color.scss';
@import '@/assets/scss/base/_font.scss';
@import '@/assets/scss/base/_reset.scss';
@import '@/assets/scss/base/_var.scss';
section{
    width: 100%;
    padding: 15px 0 60px;
    font-family: $pFont;
    @include s2bmd(){
        padding: 80px 0 ;
    }
    .container{
        .title-container{
            position: relative; 
            display: flex;
            justify-content: center;
            align-content: center;
            padding: 5vw 5vh;
            box-sizing: border-box;
            .news-section-title{
                writing-mode: horizontal-tb;
                font-family: $titleFont;
                font-size: map-get($title, h2 );
                text-align: center;
                color: $darkGreen;
            }
            .title-bgi {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                max-width: 900px;
            }
        }
    }
}
</style>