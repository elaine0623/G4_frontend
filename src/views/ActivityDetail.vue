<template>
    <div>
        <h2>活動訂單詳情</h2>
        <div class="contain">
            <router-link to="/userlayout/useractivity"><button class="cancel1"><i class="fa-solid fa-xmark"
                        style="color: #FFF;"></i></button></router-link>
            <div>
                <div class="signup_info">
                    <p>報名日期:</p> <span>{{ this.orders[0].ao_ordertime }}</span>
                    <p>報名編號:</p> <span>{{ orderId }}</span>
                    <p>活動日期:</p> <span>{{ this.orders[0].a_date }}</span>
                    <p>報名狀態:</p> <span>{{ this.orders[0].ao_status }}</span>
                </div>
            </div>
            <div class="order">
                <div class="order_list">
                    <div class="order_item">
                        <div class="event_pic">
                            <img src="../assets/image/event-images/event-img.png" alt="product picture">
                        </div>
                        <div class="text">
                            <h3>探險農業!食農教育與小農的組合，創造嶄新的農體驗</h3>
                            <p>日 期 <span>2024/05/24
                                </span></p>
                            <p>時 間 <span> 14:00-16:00
                                </span></p>
                            <p>地 點 <span>苗栗縣公館鄉活動中心
                                </span></p>
                            <p>講 師 <span>李美華 女士</span></p>
                        </div>
                    </div>
                </div>
                <!-- 其他訂單詳情 -->
                <div class="priceinfo">
                    <div class="priceinfo_item">
                        <span class="title">費用:</span><span class="int">NT$480</span>
                    </div>
                </div>
                <div class="contact-person">
                    <h4>收件人基本資料</h4>
                    <div class="name">
                        <span>姓名:</span>
                        <span>方老伯</span>
                    </div>
                    <div class="email">
                        <span>電子信箱:</span>
                        <span>oldbobo@gmail.com</span>
                    </div>
                    <div class="phone">
                        <span>聯絡電話:</span>
                        <span>0987654321</span>
                    </div>
                    <div class="address">
                        <span>收件地址:</span>
                        <span>台北市中正區中山北路123號</span>
                    </div>
                </div>
                <div class="btn">
                    <button class="cancel">取消報名</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            orders: [
                {
                    "ao_no": "48", "a_date": "2024/06/12", "ao_status": '已報名', "ao_ordertime": "2024/06/10", "product_img": '../src/assets/image/brocoli.png',
                }
            ]
        }
    },
    props: ['activityId'],
    computed: {
        orderId() {
            return this.$route.params.activityId;
        }
    },
    created() {
        // 根據 orderId 獲取訂單詳情
    }
}
</script>

<style lang="scss" scoped>
h2 {
    text-align: center;
    color: #144433;
    margin: 20px 0;
    font-family: $titleFont;
    font-size: 24px;
    font-weight: 500;

    @include md() {
        font-size: 20px;
    }
}

h3 {
    padding: 3px;
    line-height: 1.3;
}

.contain {
    display: flex;
    padding: 0 5px;
    justify-content: space-around;
    width: 95%;
}

.cancel1 {
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px 10px;
    margin: 4px 4px;
    border-radius: 50%;
    background-color: #144433;
    border: 1px solid #eee;
    cursor: pointer;

    @include s2bmd() {
        display: none;
    }
}

.order {
    width: 90%;

    @include md() {
        font-size: 14px;
    }
}

.signup_info {
    max-width: 100px;
    display: flex;
    flex-direction: column;
    border: 1px solid #144433;
    padding: 6px 8px;
    box-sizing: border-box;

    span {
        margin: 2px 6px;
        font-size: 12px;
        padding: 10px 0;
    }

    @include sm() {
        max-width: 100px;
    }


}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px $bcgr;
    background-color: #F5F5F5;
}

::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
    background-color: #144433;
}

.order_list {
    width: 100%;
    border-top: 1px solid #144433;
    height: 267px;
    overflow-y: scroll;

    @include md() {
        height: 225px;
    }

    .order_item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 6px 4px;
        // gap: 10px;
        align-items: center;
        padding: 5px 0;
        border-bottom: 1px solid #144433;

        &:first-child {
            margin: 0px 4px;
            content: '';
        }

        @include md() {
            padding: 0px;
        }

    }
}

.text {
    font-size: 14px;

    p {
        font-size: 12px;
        margin: 4px 0;
    }
}

.price {
    padding-bottom: 5px;
}

.price,
.quatity {
    font-size: 12px;
    text-align: end;
}

.event_pic {
    width: 90px;
    height: 90px;
    margin: 6px 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: top;
    }
}

.priceinfo {
    // width: 60%;
    margin-left: 0;
    text-align: end;
    font-size: 12px;
    border-bottom: 1px solid #144433;

    .title {
        width: 45%;
        text-align: end;


    }

    span {
        display: inline-block;
        // text-align: center;
        margin: 4px 0;
        text-align: end;


    }

    .int {
        width: 45%;
        text-align: end;

    }
}

.contact-person {
    padding: 5px 0;
    color: #979191;

    @include md() {
        padding: 4px 0;
    }

    ;

    h4 {
        font-size: 14px;
    }

    .name,
    .email,
    .phone,
    .address {
        margin: 5px;
        position: relative;

        span {
            padding-left: 5px;
            font-size: 12px;
        }

        &::before {
            content: '*';
            position: absolute;
            color: red;
            transform: translateY(30%);
            left: -5px;

        }
    }
}

.btn {

    width: 100%;
    display: flex;
    justify-content: center;
    // position: relative;
    // top: 2px;
    padding-top: 10px;

    button {
        background-color: #144433;
        color: #fff;
        letter-spacing: 5px;
        padding: 5px 10px;
        border-radius: 20px;
        border: 1.5px solid #144433;
        transition: 0.5s;

        &:hover {
            background-color: transparent;
            color: #144433;
        }


    }
}
</style>