import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import theme from './theme'

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
  theme
})

export default vuetify
