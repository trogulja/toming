// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import {
  VCol,
  VRow,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow,
  },
})

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#E4605F',
        secondary: '#999999',
        accent: '#CDAD92',
        accentDark: '#7D8295',
        shade: '#EFF2EC',
        shadeDark: '#2F414D',
        info: '#EFF2EC',
        success: '#7a9755',
        warning: '#f7871d',
        danger: '#f44336',
      },
      dark: {
        primary: '#E4605F',
        secondary: '#999999',
        accent: '#7D8295',
        shade: '#2F414D',
        info: '#2F414D',
        success: '#7a9755',
        warning: '#f7871d',
        danger: '#f44336',
      },
    },
  },
})
