<script>
export default {
  data() {
    return {
      orders: [], // 商品訂單資訊
      userData: '', // 儲存當前會員的資訊
      m_no: '', // 會員編號
      po_no: '' //商品訂單編號
    }
  },
  methods: {
    fetchData() {
      // 檢查是否有 m_no
      if (!this.m_no) {
        console.error("m_no is not available");
        return;
      }

      fetch(`${import.meta.env.VITE_API_URL}/userProduct.php`, {
        method: 'POST',
        body: JSON.stringify({ m_no: this.m_no }) // 將 m_no 作為字串發送
      })
        .then((res) => res.json())
        .then((json) => {
          this.orders = json['data']['list']; // 將獲取到的商品訂單列表存到orders
          console.log(this.orders);
        })
    },
    formatTime(dateTime) {
      return dateTime.split(' ')[0]; // 提取時間部分
    },
    setAoNo(po_no) {
      // 將 po_no 存到 localStorage
      localStorage.setItem('po_no', po_no);
      console.log(po_no);
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
  },
  mounted() {
    const user = localStorage.getItem('currentUser');
    console.log(user);
    if (user) {
      this.userData = JSON.parse(user);
      this.m_no = this.userData.m_no;
      this.fetchData(); // 確保 m_no 被設置後再調用 fetchData
    }
  },
}
</script>
<template>
  <div class="userorder">
    <router-link to="/userlayout"><button class="cancel"><i class="fa-solid fa-xmark"></i></button></router-link>
    <h2>商品訂單查詢</h2>
    <table>
      <thead>
        <tr>
          <!-- <th scope="col">編號</th> -->
          <th scope="col">訂購日期</th>
          <th scope="col">出貨日期</th>
          <th scope="col">訂單狀態</th>
          <th scope="col">訂單詳情</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <!-- <td>{{ order.po_no }}</td> -->
          <td>{{ formatTime(order.po_time) }}</td>
          <td>
            <span v-if="order.po_status == 0 || order.po_status == 3">{{ addSevenDays(order.po_time) }}前</span>
            <span v-if="order.po_status == 1 || order.po_status == 2">{{ formatTime(order.po_deliverdate) }}</span>
          </td>
          <td>
            <span v-if="order.po_status == 0">待配送</span>
            <span v-if="order.po_status == 1">配送中</span>
            <span v-if="order.po_status == 2" class="green">配送完成</span>
            <span v-if="order.po_status == 3" class="orange">待審核</span>
            <span class="status-cancel" v-if="order.po_status == 4">已註銷</span>
          </td>
          <td>
            <router-link :to="{
              name: 'OrderDetail',
              params: { orderId: order.po_no }
            }">
              <button class="detail" @click="setAoNo(order.po_no)">
                查看
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.userorder {
  width: 95%;
  margin: 0 auto;
  position: relative;
  cursor: default;

  .cancel {
    position: absolute;
    right: 0;
    top: 3;
    padding: 8px 10px;
    margin: 0 4px;
    border-radius: 50%;

    @include s2bmd() {
      display: none;
    }

    a {
      color: #fff;
    }
  }

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

  table {
    display: grid;

    thead {
      border-top: 1px solid #144433;
      border-bottom: 1px solid #144433;
    }

    tbody {
      overflow-y: scroll;
      height: 450px;

      &::-webkit-scrollbar {
        width: 1px;
      }
    }

    tr {
      line-height: 3;
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr .8fr 1fr;
      align-items: center;

      @include md() {
        line-height: 3;
      }

      th {
        color: #144433;
        font-size: 16px;
        padding: 4px 4px;

        @include md() {
          font-size: 12px;
          line-height: 1;
        }
      }

      td {
        font-size: 16px;
        margin: 0 3px;
        text-align: center;

        @include md() {
          font-size: 12px;
          line-height: 3;
        }

        .status-cancel {
          color: $red;
        }

        .green {
          color: $lightGreen;
        }

        .orange {
          color: #E76900;
        }
      }
    }
  }


}

button {
  display: block;
  margin: 0 auto;
  border-radius: 25px;
  border: 1px solid $red;
  background-color: #fff;
  color: $red;
  font-size: 16px;
  padding: 2px 12px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: transform .1s ease-in;
  transition: .5s;

  &:active {
    transform: scale(.9);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: $red;
    color: #fff;
  }

  @include md() {
    font-size: 12px;
    padding: 1px 6px;
  }
}

.back-btn {
  border: 1px solid $darkGreen;
  background-color: #fff;
  color: $darkGreen;

  &:hover {
    background-color: $darkGreen;
    color: #fff;
  }
}

.detail {
  display: block;
  margin: 0 auto;
  border-radius: 25px;
  border: 1px solid $darkGreen;
  background-color: #fff;
  color: $darkGreen;
  font-size: 16px;
  padding: 2px 12px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: transform .1s ease-in;
  transition: .5s;

  &:active {
    transform: scale(.9);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: $darkGreen;
    color: #fff;
  }

  @include md() {
    font-size: 12px;
    padding: 1px 6px;
  }
}

a {
  text-decoration: none;
}
</style>
