import DefaultLayout from '~/layouts/Default.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

export default function (Vue, { appOptions, router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto+Noto+Sans:300,400,500,700,400italic|Material+Icons'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css'
  })

  head.meta.push({
    name: 'keywords',
    content: 'aptula, hyphen,dzhem, james, cv'
  })

  head.script.push({ src: '/hotjar.js' })
  
  const opts = {
    theme: {
      dark: true,
      themes: {
        dark: {
          accent: '#f03'
        },
      }
    },
  }

  appOptions.vuetify = new Vuetify(opts)

  Vue.use(Vuetify)

  Vue.component('Layout', DefaultLayout)
}
