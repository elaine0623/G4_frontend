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
                required
                maxlength="2"
                pattern="\d{2}"
                :min="1"
                :max = "numMax"
                v-on:change="totalFee()"
                @keyup="handleKeyUp($event)"
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
                @keyup="handleKeyUp($event, 'card1')"
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
                @keyup="handleKeyUp($event, 'card2')"
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
                @keyup="handleKeyUp($event, 'card3')"
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
                @keyup="handleKeyUp($event, 'card4')"
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
                    @keydown="handleKeyDown"
                    @keyup="handleKeyUp($event, 'month')"
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
                    @keydown="handleKeyDown"
                    @keyup="handleKeyUp($event, 'year')"
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
// import { useAdminStore } from '@/stores/userLogin';
// import { mapActions, mapState } from 'pinia';
export default {
    data() {
        return {
        userData:'',// 用戶資訊
        activityInfo: [],//所有活動資料
        displayData:[],//單筆活動資料
        name: '',//用戶姓名
        a_max:'',//報名人數上限
        a_attendee:'',//已報名人數
        numMax:'',//剩餘可報名人數
        ao_count: 1,//報名人數
        ao_status:1,//報名狀態
        email:'',//用戶信箱
        phone:'',//用戶電話
        errorMsg: { //錯誤提示
            name: '',
            email: '',
            phone: ''
        },
        //信用卡
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
        // 獲取路由參數中的活動ID
        activityId() {
        return this.$route.params.signupId;
        },
        // 計算總費用
        totalFees() {
        return this.displayData.a_fee * this.ao_count
        },
        // 獲取當前年份後兩位
        currentYear() {
            return new Date().getFullYear() % 100; // 獲取今年後兩位
        },
        // 從 Pinia store 中映射 currentUser 狀態
        // ...mapState(useAdminStore, ['currentUser'])
        
    },
    watch: {
        // 監聽 activityId 的變化，變化時重新獲取活動信息
        activityId: function () {
        this.fetchActivityInfo();
        }
    },
    methods: {
        // ...mapActions(useAdminStore, ['loadCurrentUser']),
        // 從 API 獲取活動資訊
        fetchActivityInfo() {
            // const url = 'http://localhost/php_G4/activitiesList.php'//本地
            const url = `${import.meta.env.VITE_API_URL}/activitiesList.php`//部屬
            fetch(url, {
                method: 'post' // 以 POST 方法請求活動列表
            })
            .then((res) => res.json()) // 將響應轉換為 JSON
            .then((json) => {
                console.log(json)
                this.activityInfo = json['data']['list'] // 取得活動列表並儲存
                console.log(this.activityInfo);
                console.log(this.activityId)
                this.displayData = this.activityInfo.find((item) => item.a_no == this.activityId ) // 根據 activityId 查找對應的活動
                console.log( this.displayData);
                this.numberLimit(); // 計算剩餘可報名人數
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
        // 計算活動剩餘可報名人數
        numberLimit(){
            this.a_max = this.displayData.a_max
            this.a_attendee = this.displayData.a_attendee
            this.numMax = this.a_max - this.a_attendee // 計算最大可報名人數
            return this.numMax
        },
        // 前端驗證：使用者email有效
        checkemail() {
        const emaillimit =
            // eslint-disable-next-line no-useless-escape
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
        // 檢查信用卡資訊是否完整（如果活動收費）
        checkCard(){
            if(this.displayData.a_fee > 0){ // 如果活動有費用，則檢查信用卡資訊
                if ( //信用卡資訊不為空
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
                return true; // 如果活動免費，不檢查信用卡
            }
            
        },
        // 處理信用卡輸入時的鍵盤按下事件（例如backspace）
        handleKeyDown(event) {
            const target = event.target;
            const value = target.value;

            if ((event.which >= 48 && event.which <= 57) || event.which === 8) { // 只允許數字鍵或backspace
                if (value.length === 0 && event.which === 8) {
                    const previous = target.previousElementSibling?.previousElementSibling;
                if (previous && previous.tagName === 'INPUT') {
                    previous.focus(); // 如果是backspace且當前輸入為空，移至前一個欄位
                }
                }
            } else {
                event.preventDefault();// 阻止非數字鍵輸入
            }
        },
        handleKeyUp(event, field) {
            const target = event.target;
            let value = target.value.replace(/\D/g, '');// 移除所有非數字字符
            const maxLength = target.getAttribute('maxlength');// 獲取輸入框的最大長度屬性

            if (field === 'month') {
                if (parseInt(value) > 12) {
                this.mm = "12";
                // 如果輸入的月份大於 12，則自動設置為 12
                }
            } else if (field === 'year') {
                // 如果年份小於當前年份且輸入的位數為 2，則自動設置為當前年份
                if (parseInt(value) < this.currentYear && value.length === 2) {
                value = this.currentYear.toString().padStart(2, '0'); // 將當前年份轉為兩位數格式
                }
            } else {
                // 如果輸入的長度超過了最大長度，則截取最多允許的位數
                if (value.length > maxLength) {
                value = value.slice(0, maxLength);
                }
            }

            target.value = value;
            this[field] = value;
            // 自動跳轉到下一個輸入框
            if (value.length >= maxLength) {
                const next = target.nextElementSibling?.nextElementSibling;
                if (next && next.tagName === 'INPUT') {
                next.focus();
                }
            }
        },
        // 提交報名資訊
        submit() {
            if (!this.checkname() || !this.checkemail() || !this.checkphone() || !this.checkCard()) {
                Swal.fire({
                    title: "資料未填寫完全",
                    icon: "error"
                });
                return false;
            }
            // const url = `http://localhost/php_G4/signupPage.php` //本地
            const url = `${import.meta.env.VITE_API_URL}/signupPage.php`//部屬
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
                                }, 280) //解決sweetalert硬控的問題
                            } else if (result.dismiss === Swal.DismissReason.cancel) {
                                this.$router.push('/userlayout/useractivity')
                                await this.$nextTick()
                                setTimeout(() => {
                                window.scrollTo({
                                    left: 0,
                                    top: 0,
                                    behavior: 'smooth'
                                })
                                }, 280) //解決sweetalert硬控的問題
                            }
                            })
                    }
                );
            
        },
    },
    mounted() {
        this.fetchActivityInfo(); // 初次載入時取得活動資料
        const user = localStorage.getItem('currentUser'); // 從 localStorage 取得使用者資訊
        console.log(user);
        if (user) {
            this.userData = JSON.parse(user);
            this.m_no = this.userData.m_no;
            this.name = this.userData.m_name;
            this.email = this.userData.m_account;
            this.phone = this.userData.m_phone;
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
