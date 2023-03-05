import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  },
  theme: {
    defaultTheme: 'appTheme',
    themes: {
      appTheme: {
        dark: false,
        colors: {
          primary: '#f6a022'
        }
      }
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
