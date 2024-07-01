<template>
    <div>
        <section v-if="activityInfo" class="section">
            <div class="container">
                <div class="container-title">
                    <div class="wrap-title">
                        <div class="class">
                            <h1>{{ displayData.c_no }}</h1>
                        </div>
                        <div class="main-title">
                            <h2>{{  displayData.a_name }}</h2>
                        </div>
                    </div>
                    <div class="wrap-info">
                        <nav aria-label="Breadcrumb">
                            <ul>
                                <li>
                                    <RouterLink to="/">首頁</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/activity">活動</RouterLink>
                                </li>
                                <li class="current"><em aria-current="page">{{  displayData.c_no }}</em></li>
                            </ul>
                        </nav>
                        <hr>
                    </div>
                </div>
                <div class="content">
                    <div class="pic-content">
                        <!-- <img :src="activityInfo.a_img" alt="act1"> -->
                        <img :src="parsePic( displayData.a_img)" alt="act1">
                    </div>
                    <div class="info-content">
                        <div class="loc">
                            <span><i class="fa-solid fa-location-dot"></i></span>
                            <span>{{  displayData.a_loc }}</span>
                        </div>
                        <hr>
                        <div class="date">
                            <span :class="dateClass">日 期 : </span>
                            <span class="oneday" v-if="displayData.a_start_date === displayData.a_end_date">
                                {{  displayData.a_start_date }}
                            </span>
                            <span class="multiday" v-if="displayData.a_start_date !== displayData.a_end_date">
                                {{  displayData.a_start_date }}~{{  displayData.a_end_date }}
                            </span>
                        </div>
                        <div class="time" v-if=" displayData.a_time">
                            <span>時 間 : </span>
                            <span>
                                {{ formatTime(displayData.a_time) }}
                            </span>
                        </div>
                        <div class="teacher" v-if=" displayData.a_teacher !== '無'">
                            <span>講 師 : </span>
                            <span>
                                {{  displayData.a_teacher }}
                            </span>
                        </div>
                        <hr>
                    </div>
                    <div class="intro">
                        <div class="title-intro">
                            <h3>活動介紹</h3>
                        </div>
                        <div>
                            <p>{{  displayData.a_info }}</p>
                            <ul>
                                <li v-if=" displayData.a_info1">
                                    {{  displayData.a_info1 }}
                                </li>
                                <li v-if=" displayData.a_info2">
                                    {{  displayData.a_info2 }}
                                </li>
                                <li v-if=" displayData.a_info3">
                                    {{  displayData.a_info3 }}
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="rules">
                        <div class="title-rules">
                            <h3>活動須知</h3>
                        </div>
                        <div class="item-rules" v-if=" displayData.a_signupe !== '0000-00-00'">
                            <p>報名截止日期</p>
                            <ul>
                                <li>{{  displayData.a_signupe }}</li>
                            </ul>
                        </div>
                        <div class="item-rules">
                            <p>報名費用</p>
                            <ul>
                                <li v-if=" displayData.a_fee != 0">
                                    NT$ {{  displayData.a_fee }}
                                </li>
                                <li v-else>
                                    免費
                                </li>
                            </ul>
                        </div>
                        <div class="item-rules" v-if=" displayData.a_max != 999">
                            <p>報名人數上限</p>
                            <ul>
                                <li>{{  displayData.a_max }}人</li>
                            </ul>
                        </div>
                        <div class="item-rules" v-if=" displayData.a_max != 999">
                            <p>已報名人數</p>
                            <ul>
                                <li>{{  displayData.a_attendee }}人</li>
                            </ul>
                        </div>
                        <div class="item-rules">
                            <p>當日注意事項</p>
                            <ul>
                                <li v-if=" displayData.a_rules1">
                                    {{  displayData.a_rules1 }}
                                </li>
                                <li v-if=" displayData.a_rules2">
                                    {{  displayData.a_rules2 }}
                                </li>
                                <li v-if=" displayData.a_rules3">
                                    {{  displayData.a_rules3 }}
                                </li>
                            </ul>
                        </div>
                        <div class="item-rules">
                            <p>聯繫方式</p>
                            <ul>
                                <li>電子郵件：info@organicfarming.com</li>
                                <li>電話：123-456-7890</li>
                                <li>地址：苗栗縣公館鄉社區中心，信義路123號</li>
                            </ul>
                        </div>
                        <div class="item-rules">
                            <p>我們期待您的參與，共同探討有機農業的未來發展與挑戰。如果您有任何疑問或需要更多資訊，請隨時與我們聯繫。</p>
                        </div>
                    </div>
                    <div class="signup">
                        <router-link :to="`/signuppage/${activityId}`">立即報名</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activityInfo: [],
            displayData:[],
        }
    },
    computed: {
        activityId() {
            return this.$route.params.activityId;
        },
        dateClass() {
            return {
                'onedate': this.displayData.a_start_date === this.displayData.a_end_date,
                'multidate': this.displayData.a_start_date !== this.displayData.a_end_date
            }
        }
    },
    watch: {
        activityId: function () {
            this.fetchActivityInfo();
        },
    },
    methods: {
        fetchActivityInfo() {
            fetch(`http://localhost/php_G4/activitiesList.php`, {
                method: 'post'
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.activityInfo = json['data']['list']
                console.log(this.activityInfo);
                console.log(this.activityId)
                this.displayData = this.activityInfo.find((item) => item.a_no == this.activityId )
                console.log( this.displayData);
            })
        },
        parsePic(file) {
            return new URL(`../assets/image/${file}`, import.meta.url).href
        },
        formatTime(dateTime) {
            return dateTime.split(' ')[1]; // 提取時間部分
        }
    },
    mounted() {
        this.fetchActivityInfo()
    }
}
</script>

<style lang="scss" scoped>
section {
    width: 100%;
    font-size: $fontBase;
    line-height: $lineheight;
    letter-spacing: $letterSpacing;
    font-family: $pFont;
    cursor: default;

    .container {
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;

        .container-title {
            .wrap-title {
                display: flex;

                .class {
                    display: flex;
                    align-items: flex-start;
                    position: relative;

                    &::before {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: -50px;
                        width: 50px;
                        height: 50px;
                        background-image: url(../assets/image/about-page/leaf1.png);
                        background-size: contain;

                        @include bp(1200px) {
                            content: none;
                        }
                    }

                    &::after {
                        content: "";
                        display: inline-block;
                        width: 10px;
                        height: 100px;
                        background-color: $darkGreen;
                        margin-left: 10px;
                    }

                    h1 {
                        min-width: 80px;
                        display: inline-block;
                        font-size: 2.25em;
                        letter-spacing: $letterSpacing;
                        line-height: 1.2;
                        font-family: $titleFont;
                        font-weight: bold;
                        color: #2E2E2E;

                        @include lg() {
                            font-size: 24px;
                            min-width: 60px;
                        }

                        @include md() {
                            min-width: auto;
                        }
                    }
                }

                .main-title {
                    display: flex;
                    align-items: flex-end;
                    position: relative;

                    &::after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        right: -110px;
                        width: 100px;
                        height: 50px;
                        background-image: url(../assets/image/about-page/leaf2.png);
                        background-size: contain;
                        background-repeat: no-repeat;

                        @include bp(1200px) {
                            content: none;
                        }
                    }

                    h2 {
                        display: inline-block;
                        font-size: 2.25em;
                        letter-spacing: $letterSpacing;
                        font-family: $titleFont;
                        font-weight: bold;
                        color: #2E2E2E;
                        line-height: 1.2;
                        margin-left: 10px;

                        @include lg() {
                            font-size: 28px;
                        }
                    }
                }
            }

            .wrap-info {
                margin: 20px 0;

                nav {
                    ul {
                        display: flex;

                        li {
                            margin: 0 5px;
                            color: $darkGreen;

                            a {
                                text-decoration: none;
                                color: #2E2E2E;

                                &::after {
                                    content: " /";
                                    margin: 0 5px;
                                }
                            }

                            em {
                                cursor: default;
                            }
                        }
                    }
                }

                hr {
                    color: $darkGreen;
                }
            }
        }

        .content {
            margin: 80px 0 0;
            padding-bottom: 1px;
            width: 100%;
            box-sizing: border-box;
            box-shadow: 0 0 6px hsla(0, 0%, 0%, 0.25);
            border-radius: 20px;
            background-color: $bcgw;

            @include sm() {
                margin: 40px 0 0;
            }

            .pic-content {
                width: 100%;
                max-height: 500px;
                border-radius: 20px 20px 0 0;
                overflow: hidden;

                img {
                    width: 100%;
                }
            }

            .info-content {
                margin: 60px 50px;
                width: 60%;
                max-width: 400px;
                color: $darkGreen;

                @include md() {
                    margin: 60px auto;
                    width: 90%;
                }

                .loc {
                    margin-left: 20px;

                    @include sm() {
                        margin: auto;
                        width: 90%;
                    }

                    span {
                        letter-spacing: 2px;
                        margin: 0 2px;
                        display: inline-block;
                    }
                }

                .date {
                    margin: 10px 20px;

                    @include sm() {
                        margin: 10px 15px;
                    }
                    .onedate{
                        margin: 0 15px 0 10px;
                        display: inline-block;
                        line-height: 1.5;
                        @include sm(){
                            // display: block;
                        }
                    }
                    .multidate{
                        margin: 0 15px 0 10px;
                        display: inline-block;
                        line-height: 1.5;
                        @include sm(){
                            // display: block;
                        }
                    }
                    .oneday{
                        margin-left: 5px;
                    }
                    .multiday{
                        margin-left: 7px;
                        @include sm() {
                            margin-left: 5px;
                        }
                        @include bp(435px) {
                            margin-left: 10px;
                        }
                    }
                    span{
                        display: inline-block;
                        line-height: 1.5;
                    }
                }

                .time {
                    margin: 10px 20px;

                    @include sm() {
                        margin: 10px 15px;
                    }

                    span {
                        margin: 0 10px;
                        display: inline-block;
                        line-height: 1.5;

                    }
                }

                .teacher {
                    margin: 10px 20px;

                    @include sm() {
                        margin: 10px 15px;
                    }

                    :last-child {
                        letter-spacing: 3px;
                    }

                    span {
                        margin: 0 10px;
                        display: inline-block;
                        line-height: 1.5;

                    }

                }
            }

            .intro {
                width: 90%;
                margin: 0 auto;

                .title-intro {
                    font-size: 2.25em;
                    font-family: $titleFont;
                    font-weight: bold;
                    border-bottom: solid 1px $darkGreen;
                    margin-bottom: 30px;

                    @include sm() {
                        font-size: 1.25em;
                    }

                    h3 {
                        width: 150px;
                        display: block;
                        padding: 10px 0;
                        border-bottom: solid 3px #2E2E2E;

                        @include sm() {
                            width: 90px;
                        }
                    }
                }

                div {
                    p {
                        color: $darkGreen;
                        letter-spacing: 3px;
                        margin-bottom: 20px;
                    }

                    ul {
                        list-style: disc;
                        margin-left: 20px;

                        li {
                            color: $darkGreen;
                            letter-spacing: 3px;
                            margin-bottom: 20px;
                        }
                    }
                }

            }

            .rules {
                width: 90%;
                margin: 50px auto 0;

                .title-rules {
                    font-size: 2.25em;
                    font-family: $titleFont;
                    font-weight: bold;
                    border-bottom: solid 1px $darkGreen;
                    margin-bottom: 30px;

                    @include sm() {
                        font-size: 1.25em;
                    }

                    h3 {
                        width: 150px;
                        display: block;
                        padding: 10px 0;
                        border-bottom: solid 3px #2E2E2E;

                        @include sm() {
                            width: 90px;
                        }
                    }
                }

                .item-rules {
                    margin-bottom: 20px;

                    p {
                        color: $darkGreen;
                        letter-spacing: 3px;
                        // margin-bottom: 20px;
                    }

                    ul {
                        list-style: disc;
                        margin-left: 20px;

                        li {
                            color: $darkGreen;
                            letter-spacing: 3px;
                        }
                    }
                }
            }

            .signup {
                a {
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

                    @include sm() {
                        width: 100px;
                    }

                    &:hover {
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