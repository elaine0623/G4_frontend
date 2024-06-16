<template>
    <div>
        <h2>商品訂單詳情</h2>
        <div class="contain">
            <div>
                <div class="order_info">
                    <p>訂單日期:</p> <span>{{ this.orders[0].po_time }}</span>
                    <p>訂單編號:</p> <span>{{ orderId }}</span>
                    <p>出貨日期:</p> <span>{{ this.orders[0].po_deliverdate }}</span>
                    <p>訂單狀態:</p> <span>{{ this.orders[0].po_status }}</span>
                </div>
            </div>
            <div class="order_list">
                <div class="order_item">
                    <div class="product_pic">
                        <img src="../assets/image/brocoli.png" alt="product picture">
                    </div>
                    <div class="text">
                        <h3>墻森園-草莓 </h3>
                        <p>單位:約5台斤*1箱</p>
                    </div>
                    <div class="price">NT2880</div>
                    <div class="quatity">
                        <span>數量:</span>
                        <span>2</span>
                    </div>
                </div>
                <div class="order_item">
                    <div class="product_pic">
                        <img src="../assets/image/brocoli.png" alt="product picture">
                    </div>
                    <div class="text">
                        <h3>墻森園-草莓 </h3>
                        <p>單位:約5台斤*1箱</p>
                    </div>
                    <div class="price">NT2880</div>
                    <div class="quatity">
                        <span>數量:</span>
                        <span>2</span>
                    </div>
                </div>
                <div class="order_item">
                    <div class="product_pic">
                        <img src="../assets/image/brocoli.png" alt="product picture">
                    </div>
                    <div class="text">
                        <h3>墻森園-草莓 </h3>
                        <p>單位:約5台斤*1箱</p>
                    </div>
                    <div class="price">NT2880</div>
                    <div class="quatity">
                        <span>數量:</span>
                        <span>2</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 其他訂單詳情 -->
        <div class="priceinfo">
            <div class="priceinfo_item">
                <span class="title">商品:</span><span class="int">NT$480</span>
            </div>
            <div class="priceinfo_item">
                <span class="title">運費:</span><span class="int">NT60</span>
            </div>
            <div class="priceinfo_item">
                <span class="title">總計:</span><span class="int">NT520</span>
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
                    "po_no": "061201", "po_time": "2024/06/12", "po_status": '待配送', "po_deliverdate": "2024/06/15", "product_img": '../src/assets/image/brocoli.png',
                }
            ]
        }
    },
    props: ['orderId'],
    computed: {
        orderId() {
            return this.$route.params.orderId;
        }
    },
    created() {
        // 根據 orderId 獲取訂單詳情
    }
}
</script>

<style lang="scss">
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

.contain {
    display: flex;
}

.order_info {
    width: 100px;
    display: flex;
    flex-direction: column;
    border: 1px solid #144433;
    padding: 6px 8px;

    span {
        margin: 2px 6px;
        font-size: 14px;
    }
}

.order_list {

    .order_item {
        display: flex;
        justify-content: space-around;
        margin: 6px 4px;
        gap: 10px;
        align-items: center;
    }
}

.text {
    p {
        font-size: 14px;
        margin: 4px 0;
    }
}

.price {
    font-size: 14px;
}

.product_pic {
    width: 70px;
    height: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: top;
    }
}

.priceinfo {
    width: 60%;
    margin-left: auto;

    .title {
        width: 45%;
    }

    span {
        display: inline-block;
        text-align: center;
        margin: 4px 0;
    }

    .int {
        width: 45%;
        text-align: end;
    }
}
</style>