import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  //ref()就是state屬性
  const count = ref(0)
  //computed()就是getters
  const doubleCount = computed(() => count.value * 2)
  //function()methods就是actions
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
