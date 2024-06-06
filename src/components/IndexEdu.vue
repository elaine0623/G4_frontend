<template>
    <section>
        <div class="container">
            <div class="title-container" >
                <h2 class="news-section-title">{{title}}</h2>
                <img class="title-bgi" src="../assets/image/titlebg.svg" alt="">
            </div>
            <div class="sub-title">
                <span>{{ subTitle["first"] }}</span>
                <span>{{ subTitle["second"] }}</span>
            </div>
            <div class="content">
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RaFZFBDFlUo?si=IQ7QLL5fgGmRVYEl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="txt">
                <div class="sub-title">
                    <span>{{ subTitle["first"] }}</span>
                    <span>{{ subTitle["second"] }}</span>
                </div>
                <p>{{ txt["p1"] }}</p>
                <p>{{ txt["p2"] }}</p>
            </div>
            </div>
            
        </div>
    </section>

</template>

<script>
    export default{
        data(){
            return{
                title:'食農教育',
                subTitle:{
                    first:'好好吃飯',
                    second:'從小教起',
                },
                txt:{
                    p1:'真正深化的食農教育，其實就是在建立人與食物、人與土地、人與文化的關係，了解自己吃的食物、了解農業活動與價值，並對農業及其生產者有更豐富的認識。吃飯，是每個人從小就學會的基本生活技能，那麼「好好」吃飯呢？可就不是單純填飽肚子而已了。',
                    p2:'而若能讓「好好吃飯」從小開始，實踐健全的飲食生活，傳承飲食文化，了解土地，支持在地農業，進一步關懷自然與環境，理解自身的責任，將可帶來長遠的價值。',
                },
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
        @include s2bmd(){
            width: 80%;
            max-width: 1200px;
            margin: auto;
        }
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
                font-size: 1.25em;
                text-align: center;
                color: $darkGreen;
                @include s2bmd(){
                    font-size: 1.75em;
                }
                @include s2blg(){
                    font-size: 2.25em;
                }
            }
            .title-bgi {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                max-width: 900px;
            }
        }
        .sub-title{
            width: 90%;
            margin: 35px auto 0;
            text-align: center; 
            @include s2bmd(){
                display: none;
            }
            span{
                font-size: 1.1em;
                margin: 0 20px;
                color: $darkGreen;
                letter-spacing: $letterSpacing;
                font-family: $pFont;
            }
        }
        .content{
            width: 100%;
            @include s2bmd(){
                display: flex;
                flex-direction: row-reverse;
                justify-content: space-between;
            }
            .video{
                width: 90%;
                max-width: 340px;
                margin: 35px auto 0;
                @include s2bmd(){
                    width: 45%;
                    max-width: 450px;
                }
                @include s2blg(){
                    width: 50%;
                }
                iframe{
                    width: 100%;
                }
            }
            .txt{
                width: 90%;
                margin: 35px auto 0;
                @include s2bmd(){
                    width: 50%;
                }
                @include s2blg(){
                    width: 45%;
                    max-width: 360px;
                }
                .sub-title{
                    display: none;
                    @include s2bmd(){
                        display: block;
                        width: 100%;
                        margin: 0;
                        text-align: start;
                    }
                    @include s2blg(){
                        margin: 15px 0 0;
                    }
                    span{
                        font-size: 1.25em;
                        margin: 0 20px 0 0;
                        color: $darkGreen;
                        letter-spacing: $letterSpacing;
                        font-family: $pFont;
                    }
                }
                p{
                    font-size: $fontBase;
                    line-height: $lineheight;
                    letter-spacing: $letterSpacing;
                    font-family: $pFont;
                    color: $darkGreen;
                    margin: 20px 0 20px auto;
                    @include s2bmd(){
                        margin: 15px 0;
                    }
                    @include s2blg(){
                        margin: 20px 0;   
                    }
                }
            }
        }
        
    }
}
</style>