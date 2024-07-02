<template>
    <section class="section">
        <div class="container">
        <div class="title">
            <h1>活動資料</h1>
        </div>
        <div class="info-activity">
            <div>
            <span>活動類別 : </span>
            <span>{{ displayData.c_no }}</span>
            </div>
            <div>
            <span>活動名稱 : </span>
            <span>{{ displayData.a_name }}</span>
            </div>
        </div>
        <div class="title">
            <h2>基本資料</h2>
        </div>
        <form class="info-basic">
            <div>
            <span>*</span>
            <label for="m_name">姓名 : </label>
            <input type="text" id="m_name" name="m_name" @blur="checkname()" v-model="name" />
            <span v-text="errorMsg.name" class="wrong-msg"></span>
            </div>
            <div>
            <span>*</span>
            <label for="ao_count">報名人數 : </label>
            <input
                v-model.number="ao_count"
                type="number"
                id="ao_count"
                name="ao_count"
                min="1"
                v-on:change="totalFee()"
            />
            </div>
            <div>
            <span>*</span>
            <label for="m_account">電子信箱 : </label>
            <input
                type="email"
                id="m_account"
                name="m_account"
                @blur="checkemail()"
                v-model="email"
            />
            <span v-text="errorMsg.email" class="wrong-msg"></span>
            </div>
            <div>
            <span>*</span>
            <label for="m_phone">連絡電話 : </label>
            <input type="tel" id="m_phone" name="m_phone" @blur="checkphone()" v-model="phone" />
            <span v-text="errorMsg.phone" class="wrong-msg"></span>
            </div>
            <div>
            <span>*</span>
            <label for="m_add">通訊地址 : </label>
            <input type="text" id="m_add" name="m_add" />
            </div>
        </form>
        <form class="info-pay" v-if="displayData.a_fee > 0">
            <div class="title">
            <h2>付款資訊</h2>
            </div>
            <div class="money">
            <label>應付金額 : </label>
            <span>NT$</span>
            <span>{{ totalFees }} </span>
            </div>
            <div class="pay">
            <label>付款方式 : </label>
            <button>信用卡付款</button>
            </div>
            <div class="card">
            <span>*</span>
            <label>信用卡號 : </label>
            <div>
                <input
                class="card1"
                type="text"
                required
                maxlength="4"
                pattern="\d{4}"
                @keydown="handleKeyDown($event)"
                @keyup="handleKeyUp($event)"
                v-model="card1"
                />
                <span>-</span>
                <input
                class="card2"
                type="text"
                required
                maxlength="4"
                pattern="\d{4}"
                @keydown="handleKeyDown($event)"
                @keyup="handleKeyUp($event)"
                v-model="card2"
                />
                <span>-</span>
                <input
                class="card3"
                type="text"
                required
                maxlength="4"
                pattern="\d{4}"
                @keydown="handleKeyDown($event)"
                @keyup="handleKeyUp($event)"
                v-model="card3"
                />
                <span>-</span>
                <input
                class="card3"
                type="text"
                required
                maxlength="4"
                pattern="\d{4}"
                @keydown="handleKeyDown($event)"
                @keyup="handleKeyUp($event)"
                v-model="card4"
                />
            </div>
            </div>
            <div class="deadline">
            <span>*</span>
            <label>有效期限 : </label>
            <div>
                <input
                type="text"
                inputmode="numeric"
                required
                maxlength="2"
                pattern="\d{2}"
                @keydown="handleKeyDown($event)"
                @keyup="handleKeyUp($event)"
                placeholder="MM"
                v-model="mm"
                />
                <span>-</span>
                <input
                type="text"
                inputmode="numeric"
                required
                maxlength="2"
                pattern="\d{2}"
                @keydown="handleKeyDown($event)"
                @keyup="handleKeyUp($event)"
                placeholder="YY"
                v-model="yy"
                />
            </div>
            </div>
            <div class="code">
            <span>*</span>
            <label>CVC : </label>
            <input 
            type="text" 
            placeholder="末3碼" 
            required maxlength="3" 
            pattern="\d{3}"
            v-model="cvc"
            @blur="checkCard"
            />
            </div>
        </form>
        <hr />
        <div class="submit">
            <button @click="submit" type="submit">確認送出</button>
        </div>
        </div>
    </section>
</template>

<script>
import Swal from 'sweetalert2' //引用sweetalert2
import { useAdminStore } from '@/stores/userLogin';
import { mapActions, mapState } from 'pinia';
export default {
    data() {
        return {
        userData:'',
        activityInfo: [],
        displayData:[],
        name: '',
        ao_count: 1,
        ao_status:1,
        email:'',
        phone:'',
        errorMsg: {
            name: '',
            email: '',
            phone: ''
        },
        card1: '',
        card2: '',
        card3: '',
        card4: '',
        mm: '',
        yy: '',
        cvc: ''
        }
    },
    computed: {
        activityId() {
        return this.$route.params.signupId;
        },
        totalFees() {
        return this.displayData.a_fee * this.ao_count
        },
        ...mapState(useAdminStore, ['currentUser'])
    },
    watch: {
        activityId: function () {
        this.fetchActivityInfo();
        }
    },
    methods: {
        ...mapActions(useAdminStore, ['loadCurrentUser']),
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
        // 前端驗證：使用者註冊時姓名不得為空
        checkname() {
        const namelimit = /^[a-zA-Z\u4e00-\u9fa5]{1,15}$/g //正規表達式：不可輸入數字、空白及特殊符號 最多15字
        if (this.name === '') {
            this.errorMsg.name = '*請輸入姓名';
            return false;
        } else if (namelimit.test(this.name)) {
            this.errorMsg.name = '';
            return true;
        } else {
            this.errorMsg.name = '*姓名不得輸入數字、空白及特殊符號';
            return false;
        }
        },
        // 前端驗證：使用者email有效
        checkemail() {
        const emaillimit =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //正規表達式：email格式
        if (emaillimit.test(this.email)) {
            this.errorMsg.email = '';
            return true;
        } else {
            this.errorMsg.email = '*請輸入正確的email';
            return false;
        }
        },
        // 前端驗證：手機
        checkphone() {
        const phonelimit = /^[0-9]{8,10}$/ //正規表達式:手機
        if (phonelimit.test(this.phone)) {
            this.errorMsg.phone = ''
            return true;
        } else {
            this.errorMsg.phone = '*請輸入正確的電話號碼'
            return false;
        }
        },
        checkCard(){
            if(this.displayData.a_fee > 0){
                if (
                this.card1 && 
                this.card2 && 
                this.card3 && 
                this.card4 && 
                this.mm && 
                this.yy && 
                this.cvc
                ) {
                    return true;
                } else {
                    return false;
                }
            }else{
                return true;
            }
            
        },
        //信用卡自動換格
        handleKeyDown(event) {
            const target = event.target
            const value = target.value

            if ((event.which >= 48 && event.which <= 57) || event.which === 8) {
                if (value.length === 0 && event.which === 8) {
                    const previous = target.previousElementSibling?.previousElementSibling
                    if (previous && previous.tagName === 'INPUT') {
                        previous.focus()
                    }
                }
            } else {
                event.preventDefault()
            }
        },
        //信用卡自動換格
        handleKeyUp(event) {
            const target = event.target
            let value = target.value.replace(/\D/g, '')
            target.value = value
            const maxLength = target.getAttribute('maxlength')

            if (value.length >= maxLength) {
                const next = target.nextElementSibling?.nextElementSibling
                if (next && next.tagName === 'INPUT') {
                    next.focus()
                }
            }
        },
        submit() {
            if (!this.checkname() || !this.checkemail() || !this.checkphone() || !this.checkCard()) {
                Swal.fire({
                    title: "資料未填寫完全",
                    icon: "error"
                });
                return false;
            }
            const url = `http://localhost/php_G4/signupPage.php`
            let body = {
                "a_no": this.displayData.a_no,
                "m_no": this.userData.m_no,
                "ao_count": this.ao_count,
                "ao_status": this.ao_status,
                "a_date": this.displayData.a_time,
                "ao_totalfee": this.totalFees,
            }

            fetch(url, {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(
                    json => {
                        this.data = json
                        Swal.fire({
                            title: '<strong>報名成功</strong>',
                            icon: 'success',
                            iconColor: '#144433',
                            html: ``,
                            showCloseButton: false,
                            showCancelButton: true,
                            focusConfirm: false,
                            confirmButtonText: '返回活動',
                            confirmButtonColor: '#144433',
                            cancelButtonText: '活動紀錄',
                            cancelButtonColor: '#144433',
                            background: '#eeeeee'
                            }).then(async (result) => {
                            if (result.isConfirmed) {
                                this.$router.push('/activity')
                                await this.$nextTick()
                                setTimeout(() => {
                                window.scrollTo({
                                    left: 0,
                                    top: 0,
                                    behavior: 'smooth'
                                })
                                }, 280)
                            } else if (result.dismiss === Swal.DismissReason.cancel) {
                                this.$router.push('/userlayout/useractivity')
                                await this.$nextTick()
                                setTimeout(() => {
                                window.scrollTo({
                                    left: 0,
                                    top: 0,
                                    behavior: 'smooth'
                                })
                                }, 280)
                            }
                            })
                    }
                );
            
        },
        checkLogin() {
            this.loadCurrentUser();
            if (!this.currentUser) {
                alert('尚未登入');
                this.$router.push('/user');
            }
        }
    },
    mounted() {
        this.fetchActivityInfo();
        this.checkLogin();
        const store = useAdminStore();
        const isLogin = store.isLoggedIn();
        if (!isLogin) {
        this.$router.push('/user');
        }
        const user = localStorage.getItem('currentUser');
        console.log(user);
        if (user) {
        this.userData = JSON.parse(user);
        this.m_no = this.userData.m_no;
        }
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
    text-decoration: none;

    cursor: default;

    .container {
        width: 80%;
        max-width: 1200px;
        margin: auto;
        padding: 50px 80px;
        box-sizing: border-box;
        box-shadow: 0 0 6px hsla(0, 0%, 0%, 0.25);
        border-radius: 20px;
        background-color: $bcgw;

        @include md() {
            padding: 30px 20px;
        }

        .title {
            font-size: 2.25em;
            font-family: $titleFont;
            font-weight: bold;
            border-bottom: solid 1px $darkGreen;
            margin-bottom: 30px;

            @include sm() {
                font-size: 1.25em;
            }

            h1 {
                width: 150px;
                color: $darkGreen;
                display: block;
                padding: 10px 0;
                border-bottom: solid 3px $darkGreen;

                @include sm() {
                    width: 90px;
                }
            }
        }

        .info-activity {
            margin: 10px 0;

            div {
                margin: 20px 0;

                :first-child {
                    font-weight: bold;
                }

                span {
                    color: $darkGreen;
                    display: inline-block;
                    margin-right: 10px;
                }
            }
        }

        .title {
            font-size: 2.25em;
            font-family: $titleFont;
            font-weight: bold;
            border-bottom: solid 1px $darkGreen;
            margin-bottom: 30px;

            @include sm() {
                font-size: 1.25em;
            }

            h2 {
                width: 150px;
                color: $darkGreen;
                display: block;
                padding: 10px 0;
                border-bottom: solid 3px $darkGreen;

                @include sm() {
                    width: 90px;
                }
            }
        }

        .info-basic {
            margin: 10px 0;

            div {
                width: 70%;
                margin: 20px 0;
                padding: 10px 0;
                display: grid;
                grid-template-columns: 0.01fr 0.5fr 1fr;
                color: $darkGreen;
                position: relative;

                @include md() {
                    width: 100%;
                    grid-template-columns: 0.01fr 0.4fr 1fr;
                }

                @include sm() {
                    width: 100%;
                    display: block;
                }

                span:first-child {
                    color: $red;
                }

                input {
                    border: solid 1px $darkGreen;
                    background-color: #eee;
                    padding: 8px 15px;
                    outline: none;

                    &:focus {
                        outline: none;
                        background-color: #fff;
                    }

                    @include sm() {
                        display: block;
                        margin-top: 10px;
                    }
                }

                .wrong-msg {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    font-size: $desc;
                    color: $red;
                    // margin: 1px 0;
                    padding: 0;
                    height: 12px;

                    // width: calc(100% - 30px);
                    // text-align: start;
                    @include sm() {
                        left: 0;
                    }
                }
            }
        }

        .info-pay {
            width: 100%;
            margin: 10px 0;
            color: $darkGreen;

            .title {
                font-size: 2.25em;
                font-family: $titleFont;
                font-weight: bold;
                border-bottom: solid 1px $darkGreen;
                margin-bottom: 30px;

                @include sm() {
                    font-size: 1.25em;
                }

                h2 {
                    width: 150px;
                    color: $darkGreen;
                    display: block;
                    padding: 10px 0;
                    border-bottom: solid 3px $darkGreen;

                    @include sm() {
                        width: 90px;
                    }
                }
            }

            .money {
                margin: 20px 0;

                label {
                    margin-right: 50px;
                }
            }

            .pay {
                margin: 20px 0;

                label {
                    margin-right: 50px;
                }

                button {
                    background-color: $darkGreen;
                    color: #fff;
                    padding: 8px 15px;
                    border: none;
                }
            }

            .card {
                margin: 20px 0;

                span:first-child {
                    color: $red;
                }

                span {
                    color: $darkGreen;
                }

                label {
                    margin-right: 40px;
                }

                div {
                    display: inline-block;

                    @include sm() {
                        display: block;
                        margin-top: 10px;
                    }

                    input {
                        color: #000;
                        width: 30px;
                        padding: 8px 10px;
                        // margin-right: 5px;
                        background-color: #eee;
                        border: solid 1px $darkGreen;
                        outline: none;
                        text-align: center;

                        &:focus {
                            outline: none;
                            background-color: #fff;

                            &::placeholder {
                                color: transparent;
                            }
                        }
                    }

                    :nth-child(2),
                    :nth-child(4),
                    :nth-child(6) {
                        margin: 0 5px;
                    }
                }
            }

            .deadline {
                margin: 20px 0;

                span:first-child {
                    color: $red;
                }

                label {
                    margin-right: 40px;

                    @include sm() {
                        margin-right: 35px;
                    }
                }

                div {
                    display: inline-block;

                    @include sm() {
                        display: block;
                        margin-top: 10px;
                    }

                    input {
                        width: 30px;
                        padding: 8px 10px;
                        // margin-right: 5px;
                        background-color: #eee;
                        border: solid 1px $darkGreen;
                        outline: none;
                        text-align: center;

                        &::placeholder {
                            text-align: center;
                            vertical-align: bottom;
                        }

                        &:focus {
                            outline: none;
                            background-color: #fff;

                            &::placeholder {
                                color: transparent;
                            }
                        }
                    }

                    :nth-child(2) {
                        margin: 0 5px;
                    }
                }
            }

            .code {
                margin: 20px 0;

                span:first-child {
                    color: $red;
                }

                label {
                    margin-right: 75px;
                }

                input {
                    width: 35px;
                    padding: 8px 10px;
                    background-color: #eee;
                    border: solid 1px $darkGreen;
                    outline: none;
                    text-align: center;

                    &:focus {
                        outline: none;
                        background-color: #fff;

                        &::placeholder {
                            color: transparent;
                        }
                    }

                    @include sm() {
                        display: block;
                        margin-top: 10px;
                    }

                    &::placeholder {
                        text-align: center;
                        vertical-align: bottom;
                    }
                }
            }
        }

        hr {
            color: $darkGreen;
            display: block;
        }

        .submit {
            button {
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

                @include sm() {
                    // width: 100px;
                    padding: 11px 17px;
                    margin: 30px auto 0;
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
</style>
