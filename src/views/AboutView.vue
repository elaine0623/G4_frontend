<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ itemIndex }}</p>
    list有{{ count }}個 list有{{ list1.length }}個
    <ul>
      <button @click="add">加入</button>
      <!-- <button @mouseleave="add">加入</button> -->
      <!-- <li v-for="num in itemIndex" :key="num">{{ num }}</li> -->
      <!--取代一下 <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li> -->
      <!-- <li v-for="item in list">{{ item }}</li> -->
      <li v-for="item1 in list1" :key="item1.id">
        <!-- 使用template 不會被渲染 -->
        <template v-if="item1.show">
          <a :href="item1.url" :style="{ color: item1.color }">
            {{ item1.name }}
          </a>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // name: 'box',
  data() {
    return {
      itemIndex: 3,
      // list: ['ingrid', 'ive', 'iii'],
      list1: [
        {
          id: 1,
          name: 'ingrid',
          color: '#ddd',
          url: 'https://www.google.com',
          show: true
        },
        {
          id: 2,
          name: 'Elaine',
          show: false
        },
        {
          id: 3,
          name: 'Leona',
          show: false
        }
      ]
    }
  },
  computed: {
    count() {
      return this.list1.length
    }
  },
  methods: {
    add() {
      console.log(this.list)
      this.itemIndex += 1
      //this.pgae = this.itemIndex + 1
      this.list1.push({
        id: this.itemIndex,
        name: `test${this.itemIndex}`
      })
    }
  }
}
</script>

<style>
/*@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center; 
  }
}*/
</style>
