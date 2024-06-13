<script>
export default {
  data() {
    return {
      activityorders: [
        {
          "ao_no": "061201", "a_date": "2024/06/12", "ao_status": '已報名', "ao_ordertime": "2024/06/15"
        },
        {
          "ao_no": "061201", "a_date": "2024/06/13", "ao_status": '取消', "ao_ordertime": "2024/06/20"
        }
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

  },
}
</script>
<template>
  <div class="useractivity">
    <button class="cancel"><router-link to="/userlayout"><i class="fa-solid fa-xmark"></i></router-link></button>
    <h2>活動訂單查詢</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">訂購日期</th>
          <th scope="col">訂單編號</th>
          <th scope="col">活動日期</th>
          <th scope="col">訂單狀態</th>
          <th scope="col">取消訂單</th>
          <th scope="col">訂單詳情</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in activityorders" :key="index">
          <td>{{ order.ao_ordertime }}</td>
          <td>{{ order.ao_no }}</td>
          <td>{{ order.a_date }}</td>
          <td>{{ order.ao_status }}</td>
          <td><button>取消</button></td>
          <td>查看</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.useractivity {
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
