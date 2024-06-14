<script>
export default {
  data() {
    return {
      orders: [
        // {
        //   "po_no": "061201", "po_time": "2024/06/12", "po_status": '待配送', "po_deliverdate": "2024/06/15"
        // },
        // {
        //   "po_no": "061201", "po_time": "2024/06/13", "po_status": '已出貨', "po_deliverdate": "2024/06/20"
        // }
      ],
    }
  },
  methods: {
    // aaa() {
    //   const list = JSON.stringify(this.orders);
    //   console.log(list);
    // }
  },
  mounted() {
    fetch('/public/userOrder.json')
      .then(res => res.json())
      .then(data => {
        this.orders = data;
      })
  },
}
</script>
<template>
  <div class="userorder">
    <button class="cancel"><router-link to="/userlayout"><i class="fa-solid fa-xmark"></i></router-link></button>
    <h2>商品訂單查詢</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">訂購日期</th>
          <th scope="col">訂單編號</th>
          <th scope="col">出貨日期</th>
          <th scope="col">訂單狀態</th>
          <th scope="col">取消訂單</th>
          <th scope="col">訂單詳情</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td>{{ order.po_time }}</td>
          <td>{{ order.po_no }}</td>
          <td>{{ order.po_deliverdate }}</td>
          <td>{{ order.po_status }}</td>
          <td><button>取消</button></td>
          <td>查看</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.userorder {
  width: 95%;
  margin: 0 auto;

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
    thead {
      border-top: 1px solid #144433;
      border-bottom: 1px solid #144433;
    }

    tr {
      line-height: 2.5;
      text-align: center;

      th {
        color: #144433;
        font-size: 14px;
        padding: 4px 4px;

        @include md() {
          font-size: 12px;
          line-height: 1;
        }
      }

      td {
        font-size: 12px;
        margin: 0 3px;
        text-align: center;
      }
    }
  }
}

button {
  display: block;
  margin: 0 auto;
  border-radius: 25px;
  border: 1px solid #eee;
  background-color: #144433;
  color: #fff;
  font-size: 12px;
  padding: 1px 12px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: transform .1s ease-in;

  &:active {
    transform: scale(.9);
  }

  &:focus {
    outline: none;
  }

  @include md() {
    font-size: 12px;
    padding: 1px 6px;
  }
}
</style>
