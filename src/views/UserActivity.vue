<script>
import Swal from 'sweetalert2' //引用sweetalert2

export default {
  data() {
    return {
      activityorders: [], // 儲存活動訂單列表
      userData: '', // 儲存當前會員的資訊
      m_no: '', // 會員號碼
      ao_status: '', // 活動訂單狀態
      ao_no: '', // 活動訂單編號
      ao_noList: [], // 活動訂單編號的列表
    }
  },
  methods: {
    fetchData() {
      // 檢查是否有 m_no
      if (!this.m_no) {
        console.error("m_no is not available");
        return;
      }

      fetch(`${import.meta.env.VITE_API_URL}/userActivity.php`, {
        method: 'POST',
        body: JSON.stringify({ m_no: this.m_no }) // 將 m_no 作為字串發送
      })
        .then((res) => res.json())
        .then((json) => {
          this.activityorders = json['data']['list']; // 將獲取到的活動訂單列表存到 activityorders
          console.log(json);
          console.log(this.activityorders);
        })
    },
    formatTime(dateTime) {
      return dateTime.split(' ')[0]; // 提取日期部分
    },
    toggleStatus(order) {
      const newStatus = order.ao_status == 1 ? 0 : 1; // 切換 ao_status 的值

      // const url = `http://localhost/php_g4/updateUserActivity.php`;
      const url = `${import.meta.env.VITE_API_URL}/updateUserActivity.php`;
      const body = {
        ao_no: order.ao_no,
        ao_status: newStatus
      };

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.code === 200) {
            Swal.fire({
              title: "更新成功",
              icon: "success",
            });
            order.ao_status = newStatus; // 更新本地狀態
            this.fetchData() // 新增成功後重新獲取資料
          } else {
            alert(json.msg);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
    setAoNo(ao_no) {
      // 將 ao_no 存到 localStorage
      localStorage.setItem('ao_no', ao_no);
      console.log(ao_no);
    },

  },
  mounted() {
    const user = localStorage.getItem('currentUser');
    console.log(user);
    console.log(user);
    if (user) {
      this.userData = JSON.parse(user);
      this.m_no = this.userData.m_no; // 提取 m_no
      this.fetchData(); // 確保 m_no 被設置後再調用 fetchData
    }
  },
}
</script>
<template>
  <div class="useractivity">
    <router-link to="/userlayout"><button class="cancel"><i class="fa-solid fa-xmark"></i></button></router-link>
    <h2>活動訂單查詢</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">活動類別</th>
          <!-- <th scope="col">編號</th> -->
          <th scope="col">活動日期</th>
          <th scope="col">狀態</th>
          <!-- <th scope="col">取消報名</th> -->
          <th scope="col">報名詳情</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in activityorders" :key="index">
          <td>{{ order.c_no }}</td>
          <!-- <td>{{ order.ao_no }}</td> -->
          <td>{{ order.a_start_date }}</td>
          <td>
            <span class="normal" v-if="order.ao_status == 1">已報名</span>
            <span class="status-cancel" v-if="order.ao_status == 0">已取消</span>
          </td>
          <!-- <td>
            <button 
              v-if="order.ao_status == 1"
              @click="toggleStatus(order)"
              class="cancel-btn"
              >取消
            </button>
            <button 
              @click="toggleStatus(order)" 
              v-if="order.ao_status == 0"
              class="back-btn"
              >恢復
            </button>
          </td> -->
          <td>
            <router-link :to="{
              name: 'ActivityDetail',
              params: { activityId: order.ao_no }
            }">
              <button class="detail" @click="setAoNo(order.ao_no)">
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
.useractivity {
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
      grid-template-columns: 1fr 1fr .5fr .8fr;
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

        .normal {
          color: $darkGreen;
        }

        .status-cancel {
          color: $red;
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
