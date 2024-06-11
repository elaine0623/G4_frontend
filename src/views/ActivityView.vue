<template>
  <main class="activity-section">
  <div class="activity-container">
  <h1 class="activity-title">活動</h1>
  <div class="search-field">
    <select id="event-class" name="event-class"  v-on:change="eventClass()">
      <option value="0" selected disabled hidden >類別</option>
      <option value="市集">市集</option>
      <option value="講座">講座</option>
    </select>
    <div class="search-area">
    <input type="text" placeholder="搜尋">
    <button class="search-btn"><i class="fa-solid fa-magnifying-glass" style="color: #144433;"></i></button>
    </div>
  </div>
  <div class="main-content">
  <!-- <Calendar /> -->
  <div class="myvc-container">
    <DatePicker :color="selectedColor"
                 :attributes="attrs"
                 v-model="date"
                 mode="date" 
                 :rules="rules"/>
    <div class="current-event" >
      <div class="curr-header">{{ formattedDate }}</div>
      <div class="curr-content" v-for="item in activeEvents" :key="item.id"  v-show="item.date == date && item.type === currentClass && currentClass != 0">
        {{item.title}}
      </div>
      <div class="curr-content" v-for="item in activeEvents" :key="item.id"  v-show="item.date == date && currentClass === 0">
        {{item.title}}
      </div>
    </div>
  </div>
  <div class="container"> 
    <div class="row" >
      <div class="event-card col-6 col-sm-12"  v-show="item.date == date && currentClass === 0"  v-for="item in activeEvents" :key="item.id">
        <img :src=item.imgURL alt="活動圖片">
        <div class="event-content">
        <h3 class="event-title">{{item.title}}</h3>
        <span class="event-date">{{ item.time }}</span>
        <div class="event-class-tag">{{item.type}}</div>
        <div class="event-location"><i class="fa-solid fa-location-dot" style="color: #0FA958;"></i>{{item.location}}</div>
      </div>
    </div>
      <div class="event-card col-6 col-sm-12"  v-show="item.date == date && item.type === currentClass &&currentClass != 0"  v-for="item in activeEvents" :key="item.id" >
        <img :src=item.imgURL alt="活動圖片">
        <div class="event-content">
        <h3 class="event-title">{{item.title}}</h3>
        <span class="event-date">{{ item.time }}</span>
        <div class="event-class-tag">{{item.type}}</div>
        <div class="event-location"><i class="fa-solid fa-location-dot" style="color: #0FA958;"></i>{{item.location}}</div>
      </div>
      </div>
    </div> 
  </div> 
</div>
</div>
</main>
</template>

<script >
import { DatePicker  } from 'v-calendar';
import 'v-calendar/style.css';
export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      date:new Date(),
      currentClass:0,
      activeEvents:[{
        id:1,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/12',//活動卡片顯示資料
        date:'Wed Jun 12 2024 00:00:00 GMT+0800 (台北標準時間)',//calendar判斷資料
        type:'講座',
        imgURL:'src/assets/image/event-images/event-img.png',
        isExpired:false,
        isavailable:true,
      },
      {
        id:2,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/13',
        date:'Thu Jun 13 2024 00:00:00 GMT+0800 (台北標準時間)',//new date value 未處理
        type:'講座',
        imgURL:'src/assets/image/event-images/event-img.png',
      },
      {
        id:3,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/13',
        date:'Thu Jun 13 2024 00:00:00 GMT+0800 (台北標準時間)',
        type:'市集',
        imgURL:'src/assets/image/event-images/event-img.png',
      },//pagination test data
      {
        id:4,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/14',
        date:'Fri Jun 14 2024 00:00:00 GMT+0800 (台北標準時間)',
        type:'市集',
        imgURL:'src/assets/image/event-images/event-img.png',
      },
      {
        id:5,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/14',
        date:'Fri Jun 14 2024 00:00:00 GMT+0800 (台北標準時間)',
        type:'講座',
        imgURL:'src/assets/image/event-images/event-img.png',
      },
      {
        id:6,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/14',
        date:'Fri Jun 14 2024 00:00:00 GMT+0800 (台北標準時間)',
        type:'市集',
        imgURL:'src/assets/image/event-images/event-img.png',
      },
      {
        id:7,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/14',
        date:'Fri Jun 14 2024 00:00:00 GMT+0800 (台北標準時間)',
        type:'講座',
        imgURL:'src/assets/image/event-images/event-img.png',
      },
      {
        id:8,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/14',
        date:'Fri Jun 14 2024 00:00:00 GMT+0800 (台北標準時間)',
        type:'市集',
        imgURL:'src/assets/image/event-images/event-img.png',
      },
      {
        id:9,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/14',
        date:'Fri Jun 14 2024 00:00:00 GMT+0800 (台北標準時間)',
        type:'講座',
        imgURL:'src/assets/image/event-images/event-img.png',
      },
      {
        id:10,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/14',
        date:'Fri Jun 14 2024 00:00:00 GMT+0800 (台北標準時間)',
        type:'講座',
        imgURL:'src/assets/image/event-images/event-img.png',
      },
      {
        id:11,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/14',
        date:'Fri Jun 14 2024 00:00:00 GMT+0800 (台北標準時間)',
        type:'講座',
        imgURL:'src/assets/image/event-images/event-img.png',
      },
      {
        id:12,
        title:"探險農業!食農教育與小農的組合，創造嶄新的農體驗。",
        location:'苗栗市公館鄉活動中心',
        time:'2024/06/14',
        date:'Fri Jun 14 2024 00:00:00 GMT+0800 (台北標準時間)',
        type:'講座',
        imgURL:'src/assets/image/event-images/event-img.png',
      },
    ]
    };
  },methods: {
    eventClass () {
      let currentClassValue = document.querySelector('#event-class');
      this.currentClass = currentClassValue.value;
      console.log(this.currentClass);
      console.log(typeof this.currentClass);
    },
    formatDate (date) {
      const localDate = new Date(date);
      localDate.setHours(0,0,0,0);
      // Extract the date part in 'YYYY-MM-DD' format
      const year = localDate.getFullYear();
      const month = String(localDate.getMonth() + 1).padStart(2, '0');
      const day = String(localDate.getDate()).padStart(2, '0');
      
      return `${year}-${month}-${day}`;
    },

  },computed: {
    formattedDate() {
      return this.formatDate(this.date);
    },
  },
}
</script>
<script setup>
import { ref} from 'vue';
const selectedColor = ref('green');
const attrs = ref([
  {
    key: 'today',
    highlight: true,
    dates:new Date(),
  }
]);
const rules = ref({ 
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
})

</script>
<style lang="scss" scoped>
.myvc-container:deep(.vc-arrow) {
  border-radius: 20px;
  margin:0 10px;
  color: $darkGreen;

} 
.myvc-container :deep(.vc-header) {
  background-color: #144333;
  padding: 0;
  margin:auto ;
  color: #fff;
  width:100%;
  height: 50px;
  border-top-left-radius:5px ;
  border-top-right-radius: 5px;
}
.myvc-container :deep(.vc-title) {
    color: #fff;
    background-color: transparent
  }
  .myvc-container :deep(.vc-weeks)  {
    background-color: #F8F3D8;
  }
  .myvc-container :deep(.vc-weekday)  {
    border-bottom: 1px solid #144333;
    color: #000;
  }
  .myvc-container :deep(.vc-light) {
    --vc-header-title-color:#fff;
    --vc-nav-title-color:#fff;
  } 
  //title active nav 
  .myvc-container :deep(.vc-nav-title) {
    color: #000
  }
  //main area 
  .activity-section {
    width: 100vw;
    max-width: 1200px;
    .activity-container {
      width: 80%;
      margin: auto;
      .activity-title {
        color:$darkGreen;
        font-size:map-get($title ,h2);
        font-family: $titleFont;
      }
      .search-field {
        width: 100%;
        margin: 40px 0 50px 0;
        display: flex;
        justify-content: flex-end
      }
      select {
        width: 180px;
        border: none;
        color:$darkGreen;
        border-bottom:1px solid #979797;
        margin: 5px 10px;
        padding-bottom:5px ;
        cursor: pointer;
        outline: none;
      }
      .search-area {
        position: relative;
      input[type="text"] {
        border:none;
        border-bottom:1px solid  #979797;
        padding: 5px 10px;
        color:$darkGreen;
      }
      .search-btn {
        background-color: transparent;
        border:none;
        position:absolute;
        right:5px;
        top:5px;
        cursor: pointer;
      }
      }
    }
    .main-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .current-event {
        width: 250px;
        margin-top: 40px;
        height: 270.5px;
        overflow: hidden;
        .curr-header {
          font-family: inherit;
          width: 100%;
          font-size: $fontBase;
          color:#fff;
          background-color: $darkGreen;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          padding: 10px 20px;
          box-sizing: border-box;
          text-align: center;
        }
        .curr-content {
            color:$darkGreen;
            font-size: 14px;
            padding: 15px 10px ;
            border: none;
            border-bottom: 0.5px solid $darkGreen;
            border-left: 0.5px solid $darkGreen;
            cursor: pointer;
          }
      }
      .container {
        width: 65%;
        margin:0 0 0 auto ;
        .row {
          justify-content: space-between;
        .event-card {
          width:45%;
          padding: 0;
          position: relative;
          margin-bottom: 5%;
          > img {
            width: 100%;
            vertical-align: bottom;
            cursor: pointer;
          }
          .event-content {
            border:1px solid $darkGreen;
            padding: 5px 10px;
            box-sizing: border-box;
            border-top: none;
            .event-title {
              font-size: $fontBase;
              color:$darkGreen;
              margin-bottom: 1px;
            }
            .event-date {
              font-size: 10px;
              color: $darkGreen;
            }
            .event-class-tag {
              position: absolute;
              right: 2px;
              top: -10px;
              width: 35px;
              background-color: #144333;
              padding: 5px;
              color: #fff;
              font-size: 14px;
              text-align: center;
              &::before {
                content: "";
                position: absolute;
                top:0;
                left: -10px;
                width: 0;
                height: 0;
                border-bottom: 10px solid #6B8A7A;
                border-left: 10px solid transparent;
              }
            }
            .event-location {
              margin-top: 10px;
              margin-bottom: 10px;
              font-size: 14px;
              color: $darkGreen;
              i {
                margin-right:5px ;
              }
            }
          }
        }
        }
      }
    }
  }
</style>