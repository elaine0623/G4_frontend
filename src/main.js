import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')


import { setupCalendar } from 'v-calendar';

// Use calendar defaults (optional)
app.use(setupCalendar, {})

