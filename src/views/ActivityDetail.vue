<template>
    <div>
        <h2>活動訂單詳情</h2>
        <div class="contain">
            <router-link to="/userlayout/useractivity">
                <button class="cancel1">
                    <i class="fa-solid fa-xmark" style="color: #FFF;"></i>
                </button>
            </router-link>
            <div class="signup_info">
                <div>
                    <p>報名日期:</p> 
                    <span>{{ formatDate(displayData.ao_ordertime) }}</span>
                    <p>報名編號:</p> 
                    <span>{{ displayData.ao_no }}</span>
                    <p>活動日期:</p> 
                    <span>{{ displayData.a_start_date }}</span>
                    <p>報名狀態:</p> 
                    <span v-if="displayData.ao_status == 1">已報名</span>
                    <span v-if="displayData.ao_status == 0">已取消</span>
                </div>

            </div>
            <div class="order">
                <div class="order_list">
                    <div class="order_item">
                        <div class="event_pic">
                            <img :src="parsePic( displayData.a_img)" alt="act1">
                        </div>
                        <div class="text">
                            <h3>{{ displayData.a_name }}</h3>
                            <div>
                                <span>日 期 : </span>
                                <span>{{ displayData.a_start_date }}</span>
                            </div>
                            <div>
                                <span>時 間 : </span>
                                <span>{{ formatTime(displayData.a_time) }}</span>
                            </div>
                            <div>
                                <span>地 點 : </span>
                                <span>{{ displayData.a_loc }}</span>
                            </div>
                            <div v-if="displayData.a_teacher != '無'">
                                <span>講 師 : </span>
                                <span>{{ displayData.a_teacher }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 其他訂單詳情 -->
                <div class="priceinfo">
                    <div class="priceinfo_item">
                        <div>
                            <span class="title">報名人數:</span>
                            <span class="int">{{ displayData.ao_count }} 人</span>
                        </div>
                        <div>
                            <span class="title">費用:</span>
                            <span class="int">NT$ {{ displayData.ao_totalfee }} 元</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn">
            <button 
            class="cancel" 
            @click="comfirmToggle"
            v-if="displayData.ao_status == 1">
                取消報名
            </button>
            <button 
            class="cancelDone" 
            v-if="displayData.ao_status == 0">
                已取消
            </button>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2' //引用sweetalert2

export default {
    data() {
        return {
            orders: [], // 儲存所有活動訂單的列表
            displayData:[], // 儲存當前活動的詳細資料
            userData:'', // 儲存當前會員的資訊
            m_no:'', // 會員號碼
            ao_no:'', //活動訂單編號
            ao_status:'', //活動狀態
            a_no:'', //活動編號
            ao_count:'' //活動報名人數
            
            
        }
    },
    methods:{
        fetchData() {
            // const url = 'http://localhost/php_G4/userActivityDetail.php'//本地
            const url = `${import.meta.env.VITE_API_URL}/userActivityDetail.php`//部屬
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({ 
                    m_no: this.m_no, //會員號碼
                    ao_no: this.ao_no //活動訂單編號
                })
            })
            .then((res) => res.json())
            .then((json) => {
                this.orders = json['data']['list']; // 將獲取到的活動訂單列表存到orders
                console.log(json); 
                console.log(this.orders);
                this.displayData = this.orders.find((item) => item.ao_no == this.ao_no ) // 根據活動訂單編號在order中查找對應的活動訂單資訊
                console.log( this.displayData);
            })
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
        // parsePic(file) {
        //     return new URL(`../assets/image/${file}`, import.meta.url).href
        // },//本地
        parsePic(file) {
            return `${import.meta.env.VITE_FILE_URL}event-images/${file}`;
        }, //部屬圖片
        toggleStatus() {
            const newStatus = this.ao_status === 0; //取消報名，0代表取消
            
            // const url = `http://localhost/php_g4/updateUserActivity.php`;//本地
            const url = `${import.meta.env.VITE_API_URL}/updateUserActivity.php`//部屬
            const body = {
                ao_no: this.ao_no,
                ao_status: newStatus,
                a_no:this.displayData.a_no,
                ao_count: this.displayData.ao_count
                
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
            Swal.fire({
                title: "確定取消報名?",
                text: "取消後就必須重新報名!",
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
                        title: "已取消!",
                        icon: "success",
                    });
                }
            });
        }
    },
    computed: {
        orderId() {
            return this.$route.params.activityId;
        }
    },
    mounted() {
        const user = localStorage.getItem('currentUser');
        const ao_no = localStorage.getItem('ao_no');
        console.log(user);
        console.log(ao_no);
        if (user) {
            this.userData = JSON.parse(user);
            this.m_no = this.userData.m_no; //會員編號
        }
        if (ao_no) {
            this.ao_no = ao_no; // 活動訂單編號
        }
        if (this.m_no && this.ao_no) {
            this.fetchData(); // 確保 m_no 和 ao_no 被設置後再調用 fetchData
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



.signup_info {
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
    border-top: 1px solid #144433;

    @include md() {
        font-size: 14px;
        width: 80%;
    }
}
.order_list {
    width: 100%;
    height: 267px;
    overflow-y: scroll;
    color:grey;
    border-bottom: 1px solid #144433;


    @include md() {
        height: 225px;
    }

    .order_item {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        margin: 6px 4px;
        // gap: 10px;
        align-items: center;
        padding: 5px 10px;

        &:first-child {
            margin: 0px 4px;
            content: '';
        }

        @include md() {
            padding: 0px;
        }

    }
}
.event_pic {
    width: 150px;
    height: 90px;
    margin: 6px 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: top;
    }
}
.text {
    font-size: 16px;
    width: 100%;
    h3 {
        padding: 0px;
        line-height: 1.5;
        color: $darkGreen;
        font-weight: bold;
    }
    div{
        margin: 8px 0;
        span {
            font-size: 14px;
            margin: 4px 0;
        }
    }

}

// .price {
//     padding-bottom: 5px;
// }

// .price,
// .quatity {
//     font-size: 12px;
//     text-align: end;
// }



.priceinfo {
    // width: 60%;
    // margin-left: 0;
    padding: 10px 0;
    text-align: end;
    font-size: 14px;
    border-bottom: 1px solid #144433;
    color: grey;
    span {
        display: inline-block;
        // text-align: center;
        margin: 4px 0;
        text-align: end;
    }
    
    .title {
        width: 45%;
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
    margin-top: 75px;

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
}
</style>