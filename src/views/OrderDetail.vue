<template>
    <div>
        <h2>商品訂單詳情</h2>
        <div class="contain">
            <router-link to="/userlayout/userorder"><button class="cancel1"><i class="fa-solid fa-xmark"
                        style="color: #FFF;"></i></button></router-link>
            <div class="order_info">
                <div>
                    <p>訂單日期:</p> 
                    <span>{{ formatDate(displayData.po_time)  }}</span>
                    <p>訂單編號:</p> 
                    <span>{{ displayData.po_no }}</span>
                    <p v-if="displayData.po_status != 4">出貨日期:</p> 
                    <span v-if="displayData.po_status == 0 || displayData.po_status == 3">{{ addSevenDays(displayData.po_time) }}前</span>
                    <span v-if="displayData.po_status == 1 || displayData.po_status == 2">{{ formatDate(displayData.po_deliverdate) }}</span>
                    <p>訂單狀態:</p> 
                    <span v-if="displayData.po_status == 0">待配送</span>
                    <span v-if="displayData.po_status == 1">配送中</span>
                    <span v-if="displayData.po_status == 2" class="green">配送完成</span>
                    <span v-if="displayData.po_status == 3" class="orange">待審核</span>
                    <span v-if="displayData.po_status == 4" class="red">已註銷</span>
                </div>
            </div>
            <div class="order">
                <div class="order_list">
                    <div class="order_item" v-for="item in orders" :key="item">
                        <div class="product_pic">
                            <img :src="parsePic(item.pi_img)" alt="product picture">
                        </div>
                        <div class="text">
                            <h3><span>{{ item.f_name }}</span>-<span>{{ item.p_name }}</span></h3>
                            <p>單位:<span>{{ item.p_unit }}</span></p>
                        </div>
                        <div class="num">
                            <div class="price"><span>NT$</span>{{ item.p_fee }}</div>
                            <div class="quatity">
                                <span>數量:</span>
                                <span>{{ item.o_quatity }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 其他訂單詳情 -->
                <div class="priceinfo">
                    <div class="priceinfo_item">
                        <span class="title">金額:</span>
                        <span class="int">NT${{ displayData.po_total }}</span>
                    </div>
                    <div class="priceinfo_item">
                        <span class="title">運費:</span>
                        <span class="int">NT$60</span>
                    </div>
                    <div class="priceinfo_item">
                        <span class="title">總計:</span>
                        <span class="int">NT${{ displayData.po_finalprice }}</span>
                    </div>
                </div>
                <div class="contact-person">
                    <h4>收件人基本資料</h4>
                    <div class="name">
                        <span>姓名:</span>
                        <span class="info">{{ displayData.po_name }}</span>
                    </div>
                    <div class="email">
                        <span>電子信箱:</span>
                        <span class="info">{{ displayData.m_account }}</span>
                    </div>
                    <div class="phone">
                        <span>聯絡電話:</span>
                        <span class="info">{{ displayData.m_phone }}</span>
                    </div>
                    <div class="address">
                        <span>收件地址:</span>
                        <span class="info">{{ displayData.po_address }}</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="btn">
            <button class="cancel" @click="comfirmToggle()" v-if="displayData.po_status == 0">取消訂單</button>
            <button class="cancel finish" @click="comfirmToggle()" v-if="displayData.po_status == 1">完成訂單</button>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2' //引用sweetalert2

export default {
    data() {
        return {
            orders: [], //商品訂單
            displayData:[], //單筆商品訂單
            userData:'', //會員資訊
            m_no:'', //會員編號
            po_no:'', //商品訂單編號
            po_status:'', //商品訂單狀態
            p_no:'', //商品編號
        }
    },
    methods: {
        fetchData() {
            // const url = 'http://localhost/php_G4/userProductDetail.php'//本地
            const url = `${import.meta.env.VITE_API_URL}/userProductDetail.php`//部屬
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({ 
                    m_no: this.m_no,
                    po_no: this.po_no
                })
            })
            .then((res) => res.json())
            .then((json) => {
                this.orders = json['data']['list']; // 將獲取到的商品訂單列表存到orders
                console.log(json);
                console.log(this.orders);
                this.displayData = this.orders.find((item) => item.po_no == this.po_no ) // 根據商品訂單編號在order中查找對應的商品訂單資訊資訊
                console.log( this.displayData);
            })
        },
        // parsePic(file) {
        //     return new URL(`../assets/image/${file}`, import.meta.url).href //本地圖片
        // },
        parsePic(file) { //部屬圖片
            return `${import.meta.env.VITE_FILE_URL}${file}`;
        },
        formatDate(dateTime) {
            if (!dateTime) {
                return ''; 
            }
        return dateTime.split(' ')[0]; // 從日期時間字串中提取日期部分
        },
        formatTime(dateTime) {
            if (!dateTime) {
                return ''; 
            }
        return dateTime.split(' ')[1]; // 從日期時間字串中提取時間部分
        },
        addSevenDays(dateTime) {
            // 將日期字串轉換為 Date 物件
            const date = new Date(dateTime);
            // 加上7天
            date.setDate(date.getDate() + 7);
            // 格式化為 YYYY-MM-DD 字串
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${month}-${day}`;
        },
        toggleStatus() {
            
            let newStatus;
            if (this.displayData.po_status == 1) { //如果在配送中
                newStatus = 2; //配送完成
            } else {
                newStatus = 3; //待審核
            }

            
            // const url = `http://localhost/php_g4/updateUserProduct.php`;//本地
            const url = `${import.meta.env.VITE_API_URL}/updateUserProduct.php`//部屬
            const body = {
                po_no: this.po_no,
                po_status: newStatus,
                
            };
            
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
            })
            .then((response) => response.json())
            .then((json) => {
                if (json.code === 200) {
                    this.fetchData();
                } else {
                    alert(json.msg);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        },
        comfirmToggle(){
            if(this.displayData.po_status == 1){
                Swal.fire({
                    title: "確定完成訂單?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "確認!",
                    cancelButtonText:"取消"
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.toggleStatus()
                        Swal.fire({
                            title: "訂單完成!",
                            icon: "success",
                        });
                    }
                });
            }else{
                Swal.fire({
                    title: "確定取消訂單?",
                    text: "取消訂單需先經過審核喔!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "確認!",
                    cancelButtonText:"取消"
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.toggleStatus()
                        Swal.fire({
                            title: "訂單審核中!",
                            icon: "success",
                        });
                    }
                });
            }
        }
    },
    computed: {
        orderId() {
            return this.$route.params.orderId;
        }
    },
    mounted() {
        const user = localStorage.getItem('currentUser');
        const po_no = localStorage.getItem('po_no');
        console.log(user);
        console.log(po_no);
        if (user) {
            this.userData = JSON.parse(user);
            this.m_no = this.userData.m_no; //會員編號
        }
        if (po_no) {
            this.po_no = po_no; // 商品訂單編號
        }
        if (this.m_no && this.po_no) {
            this.fetchData(); // 確保 m_no 和 po_no 被設置後再調用 fetchData
        }

    },
}
</script>

<style lang="scss" scoped>
*{
    cursor: default;
}
h2 {
    text-align: center;
    color: #144433;
    margin: 20px 0;
    font-family: $titleFont;
    font-size: 24px;
    font-weight: bold;

    @include md() {
        font-size: 20px;
    }
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



.order_info {
    width: 30%;
    height: 230px;
    max-width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid $darkGreen;
    padding: 6px 8px;
    box-sizing: border-box;

    div{
        height: 95%;
        display: flex;
        flex-direction: column;
        p{
            color: $darkGreen;
            font-weight: bold;
            font-size: 16px;
            @include md(){
                font-size: 14px;
            }
        }
        span {
            margin: 2px 0px;
            font-size: 14px;
            padding: 10px 0;
            color: grey;
            @include md(){
                font-size: 12px;
            }
        }
        .green{
            color: $darkGreen;
        }
        .orange{
            color: #E76900;
        }
        .red{
            color: $red;
        }
    }
    @include md(){
        width: 35%;
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
.order {
    width: 90%;

    @include md() {
        font-size: 14px;
    }
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
    font-size: 16px;

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

.product_pic {
    width: 50px;
    height: 50px;

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
        color: grey;
    }
    .int {
        width: 45%;
        text-align: end;
        font-size: 16px;
        color:$darkGreen;
        font-weight: bold;
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
    // margin-top: 75px;

    button {
        background-color: #144433;
        color: #fff;
        letter-spacing: 5px;
        padding: 7px 15px;
        border-radius: 20px;
        border: 1.5px solid #144433;
        transition: 0.5s;

        &:hover {
            background-color: $red;
            color: #fff;
            border: 1.5px solid transparent;
        }
    }
    .cancelDone{
        background-color: $red;
        border: 1.5px solid $red;
    }
    .finish{
        &:hover {
            background-color: #fff;
            color: $darkGreen;
            border: 1px solid $darkGreen;
        }
    }
}
</style>