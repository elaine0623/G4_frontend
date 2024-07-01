<template>
  <main class="activity-section">
    <div class="activity-container">
      <h1 class="activity-title">活動</h1>
      <div class="search-field">
        <select id="event-class" name="event-class" v-on:change="eventClass()">
          <option value="0" selected disabled hidden>類別</option>
          <option value="0">全部</option>
          <option value="市集">市集</option>
          <option value="講座">講座</option>
        </select>
        <div class="search-area">
          <input
            type="search"
            v-model.lazy.trim="keyworlds"
            placeholder="搜尋"
            @change="SearchMode"
          />
          <button class="search-btn">
            <i class="fa-solid fa-magnifying-glass" style="color: #144433"></i>
          </button>
        </div>
      </div>
      <div class="main-content">
        <!-- <Calendar /> -->
        <div class="myvc-container">
          <DatePicker
            :key="JSON.stringify(isActivedEvent.value)"
            :color="selectedColor"
            :attributes="attrs"
            v-model="date"
            mode="date"
            :rules="rules"
          />
          <div class="current-event">
            <div class="curr-header">{{ formattedDate }}</div>
            <div class="curr-content" v-for="(item, index) in currentEvent" :key="item.a_no">
              <router-link :to="`/activity/${index + 1}`"> {{ item.a_name }}</router-link>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div
              class="event-card"
              v-show="isSearchMode === true"
              v-for="item in searchModePage"
              :key="item.a_no"
            >
              <router-link :to="`/activity/${item.a_no}`">
                <img :src="parsePic(item.a_img)" alt="活動圖片" class="event-img" />
                <div class="event-content">
                  <h3 class="event-title">{{ item.a_name }}</h3>
                  <span class="event-date">{{ item.time }}</span>
                  <div class="event-class-tag market" v-if="item.c_no === '市集'">
                    {{ item.c_no }}
                  </div>
                  <div class="event-class-tag" v-else>{{ item.c_no }}</div>
                  <div class="card-footer">
                    <div class="event-location">
                      <i class="fa-solid fa-location-dot" style="color: #0fa958"></i
                      >{{ item.a_loc }}
                    </div>
                    <div v-show="item.c_no === '講座'" class="parti-curr">
                      目前報名人數:{{ item.a_curr }}人/{{ item.a_max }}
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
            <div
              class="event-card col-12 col-md-6 col-lg-3"
              v-show="isSearchMode === false && item.isvisable === true"
              v-for="item in pagenateData"
              :key="item.a_no"
            >
              <router-link :to="`/activity/${item.a_no}`">
                <img :src="parsePic(item.a_img)" alt="活動圖片" class="event-img" />
                <div class="event-content">
                  <h3 class="event-title">{{ item.a_name }}</h3>
                  <span class="event-date" v-if="item.c_no ==='講座'">{{ item.a_time }}</span>
                  <span class="event-date" v-else>{{ item.a_start_date }}~{{ item.a_end_date }}</span>
                  <div class="event-class-tag market" v-if="item.c_no === '市集'">
                    {{ item.c_no }}
                  </div>
                  <div class="event-class-tag" v-else>{{ item.c_no }}</div>
                  <div class="card-footer">
                    <div class="event-location">
                      <i class="fa-solid fa-location-dot" style="color: #0fa958"></i
                      >{{ item.a_loc }}
                    </div>
                    <div
                      v-show="item.c_no === '講座' && item.a_status === 1"
                      class="parti-curr"
                    >
                      報名人數:{{ item.a_attendee }}/{{ item.a_max }}人
                    </div>
                    <div
                      v-show="item.c_no === '講座' && item.a_attendee === a_max"
                      class="fully-booked"
                    >
                      已額滿
                    </div>
                  </div>
                </div>
              </router-link>
            </div>

            <div class="btn-field" v-if="isVisable.length >= 6 && isSearchMode === false">
              <button @click="backPage()" :disabled="currentPage === 1" class="pre-btn">
                <img src="/src/assets/image/event-images/pre-btn.svg" alt="上一頁箭頭" />
              </button>
              <button
                v-for="item in Math.ceil(isVisable.length / perPage)"
                :key="item"
                @click="() => goToPage(item)"
                class="pageNum"
              >
                {{ item }}
              </button>
              <button @click="nextPage()" class="next-btn">
                <img src="/src/assets/image/event-images/next-btn.svg" alt="下一頁箭頭" />
              </button>
            </div> 
            <div class="btn-field" v-if="filterEvents.length >= 6 && isSearchMode === true">
              <button @click="backPage()" :disabled="currentPage === 1" class="pre-btn">
                <img src="/src/assets/image/event-images/pre-btn.svg" alt="上一頁箭頭" />
              </button>
              <button
                v-for="item in Math.ceil(filterEvents.length / perPage)"
                :key="item"
                @click="() => goToPage(item)"
                class="pageNum"
              >
                {{ item }}
              </button>
              <button
                @click="nextPage()"
                class="next-btn"
                :disabled="currentPage == Math.ceil(filterEvents.length / perPage)"
              >
                <img src="/src/assets/image/event-images/next-btn.svg" alt="下一頁箭頭" />
              </button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </main>
  <FruitNinja/>
</template>

<script>
import { DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import FruitNinja from '../components/fruitNinja.vue'
const perPage = 6
export default {
  components: {
    DatePicker,
    FruitNinja
  },
  data() {
    return {
      currentPage: 1,
      isSearchMode: false,
      keyworlds: '',
      date: new Date(),
      currentClass: 0,
      activeEvents: []
    }
  },
  methods: {
    parsePic(file) {
      return new URL(`../assets/image/${file}`, import.meta.url).href
    },
    eventClass() {
      let currentClassValue = document.querySelector('#event-class')
      this.currentClass = currentClassValue.value
    },
    formatDate(date) {
      const localDate = new Date(date)
      localDate.setHours(0, 0, 0, 0)
      // Extract the date part in 'YYYY-MM-DD' format
      const year = localDate.getFullYear()
      const month = String(localDate.getMonth() + 1).padStart(2, '0')
      const day = String(localDate.getDate()).padStart(2, '0')

      return `${year}-${month}-${day}`
    },
    nextPage() {
      if (this.currentPage !== Math.ceil(this.isVisable.length / perPage)) {
        this.currentPage += 1
      }
    },
    goToPage(numPage) {
      this.currentPage = numPage
    },
    backPage() {
      if (this.currentPagepage !== 1) {
        this.currentPage -= 1
      }
    },
    SearchMode() {
      if (this.keyworlds != '') {
        this.isSearchMode = true
      } else if (this.keyworlds == '') {
        this.isSearchMode = false
      }
    },
    //fetch json檔活動資料
    fetchData() {
      fetch(`http://localhost/php_G4/activitiesList.php`, {
        method: 'post'
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          this.activeEvents = json['data']['list']
          this.getDates()
        })
    },
    getDates() {
      for (let i = 0; i < this.activeEvents.length; i++) {
        let dates = []
        const startDate = new Date(this.activeEvents[i].a_start_date)
        const endDate = new Date(this.activeEvents[i].a_end_date)
        const days = (endDate.getTime() - startDate.getTime()) / 86400000
        Array.from({ length: days + 1 }, (_, i) => {
          const start = new Date(startDate)
          dates.push(start.setDate(startDate.getDate() + i))
          
        })
        this.activeEvents[i].a_date = dates;
        console.log(this.activeEvents)
      }
    }
  },
  computed: {
    formattedDate() {
      return this.formatDate(this.date)
    },
    isVisable() {
      for (let i = 0; i < this.activeEvents.length; i++) {
        for(let j = 0;j < this.activeEvents[i].a_date.length;j++){
        if (this.currentClass == 0) {
          if (!this.activeEvents[i].a_date.includes(this.date.getTime())) {
            this.activeEvents[i].isvisable = false;
          } else {
            this.activeEvents[i].isvisable = true;
            this.currentPage = 1;
          }
        } else if (this.currentClass != 0) {
          if (
            this.activeEvents[i].a_date.includes(this.date.getTime()) &&
            this.activeEvents[i].c_no == this.currentClass
          ) {
            this.activeEvents[i].isvisable = true
            this.currentPage = 1
          } else {
            this.activeEvents[i].isvisable = false
          }
        }
        
        }
      }
      return this.activeEvents.filter((event) => event.isvisable === true)
      
    },
    pagenateData() {
      return this.isVisable.slice((this.currentPage - 1) * perPage, this.currentPage * perPage)
    },
    filterEvents() {
      const strArr = this.keyworlds.split(' ')
      const arr = []
      strArr.forEach((str) => {
        this.activeEvents.forEach((item) => {
          if (item.a_name.includes(str) || item.c_no.includes(str)) {
            arr.push(item)
          }
        })
      })
      return arr
    },
    currentEvent() {
      if (this.isSearchMode === true) {
        return this.filterEvents.slice(0, 4)
      } else {
        return this.pagenateData.slice(0, 4)
      }
    },
    searchModePage() {
      return this.filterEvents.slice((this.currentPage - 1) * perPage, this.currentPage * perPage)
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
<script setup>
import { ref, onBeforeMount, computed } from 'vue'
//fetch data
let data = ref(null)
let eventsData = ref([])
let activedEvents = ref([])
const fetchData = async () => {
  const response = await fetch(`http://localhost/php_G4/activitiesList.php` ,{method:'POST'})
  const result = await response.json()
  console.log(result)
  data.value = result['data']['list'] //json檔
  console.log(data.value);
  //取得活動開始天與結束天
  for (let i = 0; i < Object.values(data.value).length; i++) {
    const startDate = new Date(data.value[i].a_start_date)
    const endDate = new Date(data.value[i].a_end_date)
    const days = (endDate.getTime() - startDate.getTime()) / 86400000 //總共幾天
    Array.from({ length: days + 1 }, (_, i) => {
      const start = new Date(startDate)
      eventsData.value.push(start.setDate(startDate.getDate() + i))
    })
  }
  //陣列
  let uniqueDate = function () {
    for (let i = 0; i < Object.values(eventsData.value).length; i++) {
      if (
        Object.values(activedEvents.value).includes(Object.values(eventsData.value)[i]) === false
      ) {
        activedEvents.value.push(Object.values(eventsData.value)[i])
      }
    }
  }
  uniqueDate()
}
const isActivedEvent = computed(() => {
  let formatDate = []
  for (let i = 0; i < Object.values(activedEvents.value).length; i++) {
    formatDate.push(new Date(Object.values(activedEvents.value)[i]))
  }
  return formatDate
})
onBeforeMount(() => {
  fetchData()
})
const selectedColor = ref('green')
const attrs = computed(() => {
  return [
    {
      key: 'today',
      highlight: true,
      dates: new Date()
    },
    {
      key: 'custom-dates',
      dot: 'green',
      dates: Object.values(isActivedEvent.value)
    }
  ]
})
const rules = ref(
{
    hours: 8,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  })
</script>
<style lang="scss" scoped>
.myvc-container:deep(.vc-arrow) {
  border-radius: 20px;
  margin: 0 10px;
  color: $darkGreen;
}
.myvc-container :deep(.vc-header) {
  background-color: #144333;
  padding: 0;
  margin: auto;
  color: #fff;
  width: 100%;
  height: 50px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  span {
    z-index: 2;
  }
}
.myvc-container :deep(.vc-title) {
  color: #fff;
  background-color: transparent;
}
.myvc-container :deep(.vc-weeks) {
  background-color: #f8f3d8;
}
.myvc-container :deep(.vc-weekday) {
  border-bottom: 1px solid #144333;
  color: #000;
}
.myvc-container :deep(.vc-light) {
  --vc-header-title-color: #fff;
  --vc-nav-title-color: #fff;
}
//title active nav
.myvc-container :deep(.vc-nav-title) {
  color: #000;
}
//main area
.activity-section {
  width: 100vw;
  max-width: 1200px;
  margin: auto;
  .activity-container {
    width: 80%;
    margin: auto;
    .activity-title {
      color: $darkGreen;
      font-size: map-get($title, h2);
      font-family: $titleFont;
      position: relative;
      @include sm() {
        text-align: center;
      }
      &::before {
        content: '';
        width: 5px;
        height: 60px;
        background-color: $darkGreen;
        display: inline-block;
        position: absolute;
        top: -10px;
        left: -15px;
        @include sm() {
          left: 35%;
        }
      }
    }
    .search-field {
      width: 100%;
      margin: 40px 0 50px 0;
      display: flex;
      justify-content: flex-end;
      @include lg() {
        justify-content: space-between;
        gap: 20px;
      }
      @include sm() {
        flex-direction: column;
      }
    }
    select {
      width: 180px;
      border: none;
      margin-right: 20px;
      color: $darkGreen;
      border-bottom: 1px solid #979797;
      padding-bottom: 5px;
      cursor: pointer;
      outline: none;
      background-color: transparent;
      @include lg() {
        width: 45%;
      }
      @include sm() {
        width: 100%;
      }
    }
    .search-area {
      position: relative;
      @include lg() {
        width: 45%;
      }
      @include sm() {
        width: 100%;
      }
      input[type='search'] {
        border: none;
        width: 100%;
        border-bottom: 1px solid #979797;
        padding: 5px 10px 5px 30px;
        color: $darkGreen;
        background-color: transparent;
      }
      .search-btn {
        background-color: transparent;
        border: none;
        position: absolute;
        left: 0px;
        top: 5px;
        cursor: pointer;
      }
    }
  }
  .main-content {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    @include lg() {
      flex-direction: column;
    }
    .myvc-container {
      @include lg() {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
      }
      @include sm() {
        justify-content: center;
      }
      .current-event {
        width: 250px;
        margin-top: 40px;
        @include lg() {
          width: 300px;
          margin-left: 15px;
        }
        @include sm() {
          display: none;
        }
        .curr-header {
          font-family: inherit;
          width: 100%;
          font-size: $fontBase;
          color: #fff;
          background-color: $darkGreen;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          padding: 10px 20px;
          box-sizing: border-box;
          text-align: center;
        }
        .curr-content {
          color: $darkGreen;
          font-size: 14px;
          padding: 15px 10px;
          border: none;
          border-bottom: 0.5px solid $darkGreen;
          border-left: 0.5px solid $darkGreen;
          cursor: pointer;
          > a {
            text-decoration: none;
            color: $darkGreen;
          }
        }
      }
    }
    .container {
      width: 65%;
      height: 930px;
      margin: 0 0 0 40px;
      position: relative;
      @include lg() {
        width: 100%;
        margin: 0;
        height: auto;
      }
      @include sm() {
        width: 80%;
        max-width: 300px;
        margin: auto;
      }
      .row {
        justify-content: space-between;
        .event-card {
          width: 45%;
          padding: 0;
          position: relative;
          margin: 0 0% 20px 0;
          @include sm() {
            width: 100%;
          }
          a {
            text-decoration: none;
            color: $darkGreen;
            .event-img {
              width: 100%;
              height: 60%;
              object-fit: cover;
              vertical-align: bottom;
              cursor: pointer;
            }
            .event-content {
              border: 1px solid $darkGreen;
              padding: 5px 10px;
              box-sizing: border-box;
              border-top: none;
              height: 100px;
              .event-title {
                font-size: clamp(12px, $fontBase, 15px);
                color: $darkGreen;
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
                  content: '';
                  position: absolute;
                  top: 0;
                  left: -10px;
                  width: 0;
                  height: 0;
                  border-bottom: 10px solid #6b8a7a;
                  border-left: 10px solid transparent;
                }
              }
              .market {
                background-color: $lightGreen;
              }
              .card-footer {
                position: relative;
                .event-location {
                  margin-top: 10px;
                  margin-bottom: 6px;
                  font-size: 14px;
                  color: $darkGreen;
                  i {
                    margin-right: 5px;
                  }
                }
                .parti-curr {
                  font-size: 11px;
                  margin-right: 5px;
                  text-align: end;
                  color: #144333;
                }
                .fully-booked {
                  font-size: 11px;
                  text-align: center;
                  color: #fff;
                  width: 50px;
                  padding: 5px 2px;
                  background-color: #e40e1a;
                  position: absolute;
                  border-radius: 50px;
                  right: 10px;
                  bottom: -11px;
                }
              }
            }
          }
        }
        .btn-field {
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: -50px;
          right: 50%;
          transform: translateX(50%);
          button:nth-child(2) {
            &::before {
              content: '';
              width: 0;
            }
          }
          .pre-btn,
          .next-btn {
            width: 50px;
            height: 50px;
            border: 1.5px solid $darkGreen;
            background-color: transparent;
            margin: 0 20px 0 20px;
            position: relative;
            > img {
              width: 100%;
            }
            @include bp(470px) {
              width: 45px;
              height: 45px;
            }
          }
          .pageNum {
            background-color: transparent;
            border: none;
            font-size: $fontBase;
            color: $darkGreen;
            position: relative;
            margin: 0 20px 0 30px;
            @include bp(470px) {
              margin: auto;
            }
            &::before {
              content: '';
              position: absolute;
              width: 30px;
              border: 1px solid $darkGreen;
              top: 9px;
              right: 30px;
              @include sm {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
