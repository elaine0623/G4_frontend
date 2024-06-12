<template>
    <section class="section">
        <div class="container">
            <div class="title">
                <h1>活動資料</h1>
            </div>
            <div class="info-activity">
                <div>
                    <span>活動類別 : </span>
                    <span>{{ userInfo[$route.params.signupId - 1].c_no }}</span>
                </div>
                <div>
                    <span>活動名稱 : </span>
                    <span>{{ userInfo[$route.params.signupId - 1].a_name }}</span>
                </div>
            </div>
            <div class="title">
                <h2>基本資料</h2>
            </div>
            <div class="info-basic">
                <div>
                    <span>*</span>
                    <label for="m_name">姓名 : </label>
                    <input type="text" id="m_name" name="m_name">
                </div>
                <div>
                    <span>*</span>
                    <label for="ao_count">報名人數 : </label>
                    <input type="number" id="ao_count" name="ao_count">
                </div>
                <div>
                    <span>*</span>
                    <label for="m_account">電子信箱 : </label>
                    <input type="email" id="m_account" name="m_account">
                </div>
                <div>
                    <span>*</span>
                    <label for="m_phone">連絡電話 : </label>
                    <input type="tel" id="m_phone" name="m_phone">
                </div>
                <div>
                    <span>*</span>
                    <label for="m_add">通訊地址 : </label>
                    <input type="text" id="m_add" name="m_add">
                </div>
            </div>
            
            <div class="info-pay" v-if="userInfo[$route.params.signupId - 1].a_fee > 0">
                <div class="title">
                    <h2>付款資訊</h2>
                </div>
                <div class="money">
                    <label>應付金額 : </label>
                    <span>NT$</span>
                    <span>{{ userInfo[$route.params.signupId - 1].a_fee }}</span>
                </div>
                <div class="pay">
                    <label>付款方式 : </label>
                    <button>信用卡付款</button>
                </div>
                <div class="card">
                    <span>*</span>
                    <label>信用卡號 : </label>
                    <div>
                        <input type="text">
                        <span>-</span>
                        <input type="text">
                        <span>-</span>
                        <input type="text">
                        <span>-</span>
                        <input type="text">
                    </div>
                </div>
                <div class="deadline">
                    <span>*</span>
                    <label>有效期限 : </label>
                    <div>
                        <input type="text">
                        <span>-</span>
                        <input type="text">
                    </div>
                </div>
                <div class="code">
                    <span>*</span>
                    <label>末3碼 : </label>
                    <input type="text" placeholder="末3碼">
                </div>
            </div>
            <hr>
            <div class="submit">
                <button>確認送出</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            userInfo: [],
            // loading: true // 控制数据加载状态
        }
    },
    computed: {
        userId() {
            return this.$route.params.signupId;
        },
    },
    watch: {
        userId: async function (val) {
            this.userInfo = await this.fetchUserInfo(val);
        },
    },
    methods:{
        async fetchUserInfo() {
            return await fetch("../../public/activityPage.json")
                .then((response) => response.json())
                .then((json) => json);
        },
    },
    async created() {
        this.userInfo = await this.fetchUserInfo(this.userId);
    }
}    
    
</script>

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
        margin: auto;
        padding: 50px 80px;
        box-sizing: border-box;
        box-shadow: 0 0 6px hsla(0, 0%, 0%, 0.25);
        border-radius: 20px;
        background-color: $bcgw;
        @include md(){
        padding: 30px 20px;
        }
        .title{
            font-size: 2.25em;
            font-family: $titleFont;
            font-weight: bold;
            border-bottom: solid 1px $darkGreen;
            margin-bottom: 30px;
            @include sm(){
                font-size: 1.25em;
            }
            h1{
                width: 150px;
                color: $darkGreen;
                display: block;
                padding: 10px 0;
                border-bottom: solid 3px $darkGreen;
                @include sm(){
                    width: 90px;
                }
            }
        }
        .info-activity{
            margin: 10px 0;
            div{
                margin: 20px 0;
                :first-child{
                    font-weight: bold;
                }
                span{
                    color: $darkGreen;
                    display: inline-block;
                    margin-right: 10px;
                }
            }
        }
        .title{
            font-size: 2.25em;
            font-family: $titleFont;
            font-weight: bold;
            border-bottom: solid 1px $darkGreen;
            margin-bottom: 30px;
            @include sm(){
                font-size: 1.25em;
            }
            h2{
                width: 150px;
                color: $darkGreen;
                display: block;
                padding: 10px 0;
                border-bottom: solid 3px $darkGreen;
                @include sm(){
                    width: 90px;
                }
            }
        }
        .info-basic{
            margin: 10px 0;
            div{
                width: 70%;
                margin: 20px 0;
                display: grid;
                grid-template-columns: .01fr .5fr 1fr;
                color: $darkGreen;
                @include md(){
                    width: 100%;
                    grid-template-columns: .01fr .4fr 1fr;
                }
                @include sm(){
                    width: 100%;
                    display: block;
                }
                span:first-child{
                    color: $red;
                }
                input{
                    border: solid 1px $darkGreen;
                    background-color: #eee;
                    padding: 8px 15px;
                    outline: none;
                    &:focus {
                        outline: none;
                        background-color: #fff;
                    }
                    @include sm(){
                        display: block;
                        margin-top: 10px;
                    }
                }
            }
        }
        .info-pay{
            width: 100%;
            margin: 10px 0;
            color: $darkGreen;
            .title{
                font-size: 2.25em;
                font-family: $titleFont;
                font-weight: bold;
                border-bottom: solid 1px $darkGreen;
                margin-bottom: 30px;
                @include sm(){
                    font-size: 1.25em;
                }
                h2{
                    width: 150px;
                    color: $darkGreen;
                    display: block;
                    padding: 10px 0;
                    border-bottom: solid 3px $darkGreen;
                    @include sm(){
                        width: 90px;
                    }
                }
            }
            .money{
                margin: 20px 0;
                label{
                    margin-right: 50px;
                }
            }
            .pay{
                margin: 20px 0;
                label{
                    margin-right: 50px;
                }
                button{
                    background-color: $darkGreen;
                    color: #fff;
                    padding: 8px 15px;
                    border: none;
                }
            }
            .card{
                margin: 20px 0;
                span:first-child{
                    color: $red;
                }
                span{
                    color: $darkGreen;
                }
                label{
                    margin-right: 40px;
                }
                div{
                    display: inline-block;
                    @include sm(){
                        display: block;
                        margin-top: 10px;
                    }
                    input{
                        color: #000;
                        width: 25px;
                        padding: 8px 15px;
                        background-color: #eee;
                        border: solid 1px $darkGreen;
                        outline: none;
                        &:focus {
                            outline: none;
                            background-color: #fff;
                        }
                    }
                    span:nth-child(2),
                    span:nth-child(4),
                    span:nth-child(6){
                        margin: 0 5px;
                        @include sm(){
                            margin: 0 1px;
                        }
                    }
                }
            }
            .deadline{
                margin: 20px 0;
                span:first-child{
                    color: $red;
                }
                label{
                    margin-right: 40px;
                    @include sm(){
                        margin-right: 35px;
                    }
                }
                div{
                    display: inline-block;
                    @include sm(){
                        display: block;
                        margin-top: 10px;
                    }
                    input{
                        width: 25px;
                        padding: 8px 15px;
                        background-color: #eee;
                        border: solid 1px $darkGreen;
                        outline: none;
                        &:focus {
                            outline: none;
                            background-color: #fff;
                        }
                    }
                    span:nth-child(2){
                        margin: 0 5px;
                        @include sm(){
                            margin: 0 1px;
                        }
                    }
                }
                
            }
            .code{
                margin: 20px 0;
                span:first-child{
                    color: $red;
                }
                label{
                    margin-right: 65px;
                }
                input{
                    width: 35px;
                    padding: 8px 10px;
                    background-color: #eee;
                    border: solid 1px $darkGreen;
                    outline: none;
                        &:focus {
                            outline: none;
                            background-color: #fff;
                        }
                    @include sm(){
                        display: block;
                        margin-top: 10px;
                    }
                    &::placeholder{
                        text-align: center;
                        vertical-align: bottom;
                    }

                }
            }
        }
        hr{
            color: $darkGreen;
            display: block;
        }
        .submit{
                button{
                    display: block;
                    background-color: $darkGreen;
                    text-align: center;
                    border-radius: 25px;
                    border: solid 1px transparent;
                    padding: 11px 81px;
                    margin: 50px auto 0;
                    color: #fff;
                    font-weight: bold;
                    text-decoration: none;
                    letter-spacing: 2px;
                    transition: 0.5s;
                    cursor: pointer;
                    @include sm(){
                        // width: 100px;
                        padding: 11px 17px;
                        margin: 30px auto 0;
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
</style>