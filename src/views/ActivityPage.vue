<script>
export default{
    data(){
            return{
                activityList:[]
                    // {
                    //     a_no:1,
                    //     a_name:"有機農業的未來：機遇與挑戰及其對可持續發展的影響",
                    //     c_no:"講座",//要改成編號
                    //     a_img:"./src/assets/image/about-page/act1.png",
                    //     a_loc:"苗栗縣公館鄉活動中心",
                    //     a_max:50,
                    //     a_fee:500,
                    //     a_date:"2024/05/24",
                    //     a_time:"14:00-16:00",
                    //     a_teacher:"李美華 女士",
                    //     a_signups:"2024/05/01",
                    //     a_signupe:"2024/05/10",
                    //     a_info:[
                    //         { type: 'paragraph', content: "在這場講座中，我們將探討有機農業的未來發展和面臨的挑戰。李美華女士將分享她多年來在有機農業領域的豐富經驗，並深入探討如何提升有機農產品的市場競爭力。無論你是有機農業的從業者，還是對這個領域感興趣的愛好者，都歡迎參加這場講座，共同交流學習。" },
                    //         { type: 'paragraph', content: "有機農業不僅僅是生產無毒無害的食品，更是一種可持續發展的生活方式。講座將涵蓋以下幾個關鍵主題：" },
                    //         { type: 'list', content: "有機農業的發展歷史與現狀：了解有機農業的起源及其在全球和本地的發展情況，分析目前的市場趨勢和消費者行為。" },
                    //         { type: 'list', content: "有機農業面臨的主要挑戰：討論有機農業在技術、政策、市場和環境方面面臨的挑戰，並探討如何克服這些挑戰。" },
                    //         { type: 'list', content: "提升有機農產品市場競爭力的策略：" },
                    //         { type: 'list', content: "有機農業在促進生態系統健康、減少環境污染和保護生物多樣性，並強調其在全球可持續發展中的重要角色。" }
                    //     ],
                    //     a_rules:[
                    //         { type: 'paragraph', content: "講座當日注意事項" },
                    //         { type: 'list', content: "請前到達，請在講座開始前15分鐘到達現場，以便完成簽到和入場。" },
                    //         { type: 'list', content: "簽到，請攜帶報名確認郵件中的編號，於入口處簽到。" },
                    //         { type: 'list', content: "材料：講座現場將提供講義和筆記本，您也可以自行攜帶筆記用具。" },
                    //         { type: 'list', content: "飲水：現場提供飲用水，請自備水杯，減少使用一次性杯子，共同愛護環境。" },
                    //         { type: 'list', content: "手機管理：為了不打擾其他參與者，請將手機調整為靜音模式。" },
                    //         { type: 'paragraph', content: "聯繫方式" },
                    //         { type: 'list', content: "電子郵件：info@organicfarming.com" },
                    //         { type: 'list', content: "電話：123-456-7890" },
                    //         { type: 'list', content: "地址：苗栗縣公館鄉社區中心，信義路123號" },
                    //         { type: 'paragraph', content: "我們期待您的參與，共同探討有機農業的未來發展與挑戰。如果您有任何疑問或需要更多資訊，請隨時與我們聯繫。" }
                    //     ],
                    //     a_status:1,
                    //     a_attendee:""

                    // }
            }
    },
    // methods: {
    //     async fetchUserInfo() {
    //         alert()
    //         return await fetch("../../public/activityPage.json")
    //         .then((response) => response.json())
    //         .then((json) => json);
    //     },
    // },
    // async created() {
    //     this.userInfo = await this.fetchUserInfo(this.userId);
    // },
    mounted() {
        // this.fetchUserInfo()
        fetch("/public/activityPage.json")
        .then(res => res.json())
        .then(json => {
            console.log(json);
            this.activityList = json;
        })
    },
}


</script>

<template>
    <section class="section">
        <div class="container">
            <div class="container-title">
                <div class="wrap-title">
                    <div class="class">
                        <h1>{{ activityList[0]["c_no"] }}</h1>
                    </div>
                    <div class="main-title">
                        <h2>{{ activityList[0]["a_name"] }}</h2>
                    </div>
                </div>
                <div class="wrap-info">
                    <nav aria-label="Breadcrumb">
                        <ul>
                            <li><RouterLink to="./">首頁</RouterLink></li>
                            <li><RouterLink to="./activity">活動</RouterLink></li>
                            <li class="current"><em aria-current="page">{{ activityList[0]["c_no"] }}</em></li>
                        </ul>
                    </nav>
                    <hr>
                </div>
            </div>
            <div class="content">
                <div class="pic-content">
                    <img :src="activityList[0]['a_img']" alt="act1">
                </div>
                <div class="info-content">
                    <div class="loc">
                        <span><i class="fa-solid fa-location-dot"></i></span>
                        <span>{{ activityList[0]["a_loc"] }}</span>
                    </div>
                    <hr>
                    <div class="date">
                        <span>日 期 : </span>
                        <span>{{ activityList[0]["a_date"] }}</span>
                    </div>
                    <div class="time">
                        <span>時 間 : </span>
                        <span>{{ activityList[0]["a_time"] }}</span>
                    </div>
                    <div class="teacher">
                        <span>講 師 : </span>
                        <span>{{ activityList[0]["a_teacher"] }}</span>
                    </div>
                    <hr>
                </div>
                <div class="intro">
                    <div class="title-intro">
                        <h3>活動介紹</h3>
                    </div>
                    <div v-for="(info, index) in activityList[0]['a_info']" :key="index">
                        <p v-if="info.type === 'paragraph'">{{ info.content }}</p>
                        <ul v-else-if="info.type === 'list'">
                            <li>{{ info.content }}</li>
                        </ul>
                    </div>
                </div>
                <div class="rules">
                    <div class="title-rules">
                        <h3>活動須知</h3>
                    </div>
                    <div class="item-rules">
                        <p>報名截止日期</p>
                        <ul>
                            <li>{{ activityList[0]["a_signupe"] }}</li>
                        </ul>
                    </div>
                    <div class="item-rules">
                        <p>報名費用</p>
                        <ul>
                            <li>NT$ {{ activityList[0]["a_fee"] }}</li>
                        </ul>
                    </div>
                    <div class="item-rules">
                        <p>報名人數上限</p>
                        <ul>
                            <li>{{ activityList[0]["a_max"] }}人</li>
                        </ul>
                    </div>
                    <div v-for="(rule, index) in activityList[0]['a_rules']" :key="index" class="item-rules">
                        <p v-if="rule.type === 'paragraph'">{{ rule.content }}</p>
                        <ul v-else-if="rule.type === 'list'">
                            <li>{{ rule.content }}</li>
                        </ul>
                    </div>
                </div>
                <div class="signup">
                    <RouterLink to="./">立即報名</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section{
    width: 100%;
    font-size: $fontBase;
    line-height: $lineheight;
    letter-spacing: $letterSpacing;
    font-family: $pFont;
    cursor: default;
    .container{
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        .container-title{
            .wrap-title{
                display: flex;
                .class{
                    display: flex;
                    align-items: flex-start;
                    position: relative;
                    &::before{
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: -50px;
                        width: 50px;
                        height: 50px;
                        background-image: url(../assets/image/about-page/leaf1.png);
                        background-size: contain;
                        @include bp(1200px){
                            content: none;
                        }
                    }
                    &::after{
                        content: "";
                        display: inline-block;
                        width: 10px;
                        height: 100px;
                        background-color: $darkGreen;
                        margin-left: 10px;
                    }
                    h1{
                        min-width: 80px;
                        display: inline-block;
                        font-size: 2.25em;
                        letter-spacing: $letterSpacing;
                        line-height: 1.2;
                        font-family: $titleFont;
                        font-weight: bold;
                        color: #2E2E2E;
                        @include lg(){
                            font-size: 24px;
                            min-width: 60px;
                        }
                        @include md(){
                            min-width: auto;
                        }
                    }
                }
                .main-title{
                    display: flex;
                    align-items: flex-end;
                    position: relative;
                    &::after{
                        content: "";
                        position: absolute;
                        top: 50%;
                        right: -110px;
                        width: 100px;
                        height: 50px;
                        background-image: url(../assets/image/about-page/leaf2.png);
                        background-size: contain;
                        background-repeat: no-repeat;
                        @include bp(1200px){
                            content: none;
                        }
                    }
                    h2{
                        display: inline-block;
                        font-size: 2.25em;
                        letter-spacing: $letterSpacing;
                        font-family: $titleFont;
                        font-weight: bold;
                        color: #2E2E2E;
                        line-height: 1.2;
                        margin-left: 10px;
                        @include lg(){
                            font-size: 28px;
                        }
                    }
                }
            }
            .wrap-info{
                margin: 20px 0;
                nav{
                    ul{
                        display: flex;
                        li{
                            margin: 0 5px;
                            color: $darkGreen;
                            a{
                                text-decoration: none;
                                color:#2E2E2E;
                                &::after{
                                    content:" /";
                                    margin: 0 5px;
                                }
                            }
                            em{
                                cursor: default;
                            }
                        }
                    }
                }
                hr{
                    color: $darkGreen;
                }
            }
        }
        .content{
            margin: 80px 0 0;
            padding-bottom: 1px;
            width: 100%;
            box-sizing: border-box;
            box-shadow: 0 0 6px hsla(0, 0%, 0%, 0.25);
            border-radius: 20px;
            background-color: $bcgw;
            @include sm(){
                margin: 40px 0 0;
            }
            .pic-content{
                width: 100%;
                img{
                    width: 100%;
                }
            }
            .info-content{
                margin: 60px 50px;
                width: 60%;
                max-width: 250px;
                color: $darkGreen;
                @include sm(){
                    margin: 60px auto;
                    width: 80%;
                }
                .loc{
                    margin-left:20px;
                    @include sm(){
                        margin: auto;
                        width: 90%;
                    }
                    span{
                        letter-spacing: 2px;
                        margin: 0 2px;
                    }
                }
                .date{
                    margin:10px 20px;
                    @include sm(){
                        margin: 10px 15px;
                    }
                    span{
                        margin: 0 10px;
                    }
                }
                .time{
                    margin:10px 20px;
                    @include sm(){
                        margin: 10px 15px;
                    }
                    span{
                        margin: 0 10px;
                    }
                }
                .teacher{
                    margin:10px 20px;
                    @include sm(){
                        margin: 10px 15px;
                    }
                    :last-child{
                        letter-spacing: 3px;
                    }
                    span{
                        margin: 0 10px;
                    }
                    
                }
            }
            .intro{
                width: 90%;
                margin: 0 auto;
                .title-intro{
                    font-size: 2.25em;
                    font-family: $titleFont;
                    font-weight: bold;
                    border-bottom: solid 1px $darkGreen;
                    margin-bottom: 30px;
                    @include sm(){
                        font-size: 1.25em;
                    }
                    h3{
                        width: 150px;
                        display: block;
                        padding: 10px 0;
                        border-bottom: solid 3px #2E2E2E;
                        @include sm(){
                        width: 90px;
                        }
                    }
                }
                div{
                    p{
                        color: $darkGreen;
                        letter-spacing: 3px;
                        margin-bottom: 20px;
                    }
                    ul{
                        list-style: disc;
                        margin-left: 20px;
                        li{
                            color: $darkGreen;
                            letter-spacing: 3px;
                            margin-bottom: 20px;
                        }
                    }
                }
                
            }
            .rules{
                width: 90%;
                margin: 50px auto 0;
                .title-rules{
                    font-size: 2.25em;
                    font-family: $titleFont;
                    font-weight: bold;
                    border-bottom: solid 1px $darkGreen;
                    margin-bottom: 30px;
                    @include sm(){
                        font-size: 1.25em;
                    }
                    h3{
                        width: 150px;
                        display: block;
                        padding: 10px 0;
                        border-bottom: solid 3px #2E2E2E;
                        @include sm(){
                            width: 90px;
                        }
                    }
                }
                .item-rules{
                    margin-bottom: 20px;
                    p{
                        color: $darkGreen;
                        letter-spacing: 3px;
                        // margin-bottom: 20px;
                    }
                    ul{
                        list-style: disc;
                        margin-left: 20px;
                        li{
                            color: $darkGreen;
                            letter-spacing: 3px;
                        }
                    }  
                }
            }
            .signup{
                a{
                    display: block;
                    width: 150px;
                    background-color: $darkGreen;
                    text-align: center;
                    border-radius: 25px;
                    border: solid 1px transparent;
                    padding: 11px 81px;
                    margin: 80px auto;
                    color: #fff;
                    font-weight: bold;
                    text-decoration: none;
                    letter-spacing: 2px;
                    transition: 0.5s;
                    @include sm(){
                        width: 100px;
                    }
                    &:hover{
                        color: $darkGreen;
                        background-color: $bcgw;
                        border: solid 1px $darkGreen;
                        // box-sizing: border-box;

                    }
                }
            }
        }
    }
}
</style>