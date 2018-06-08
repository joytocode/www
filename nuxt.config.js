require('dotenv').config()
const path = require('path')

const isGenerating = process.env.DEPLOY_ENV === 'GH_PAGES'

exports.rootDir = __dirname

exports.srcDir = path.join(__dirname, 'src')

exports.env = {
  HEAP_ANALYTICS_KEY: process.env.HEAP_ANALYTICS_KEY
}

exports.loading = {
  color: '#08888F',
  height: '3px'
}

exports.head = {
  meta: [
    { charset: 'utf-8' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-title', content: 'JoyToCode' },
    { name: 'application-name', content: 'JoyToCode' },
    { name: 'msapplication-TileColor', content: '#FFFFFF' },
    { name: 'theme-color', content: '#FFFFFF' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' }
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#08888F' },
    { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
    { rel: 'stylesheet', type: 'text/css', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp', crossorigin: 'anonymous' }
  ]
}

exports.css = [
  path.join(__dirname, 'src/assets/css/app.styl')
]

exports.plugins = [
  path.join(__dirname, 'src/plugins/vuetify'),
  { src: path.join(__dirname, 'src/plugins/heap-analytics'), ssr: false }
]

exports.serverMiddleware = [
  path.join(__dirname, 'src/server/ignore-src')
]

const modules = [
  isGenerating && ['@nuxtjs/google-analytics', { id: process.env.GOOGLE_ANALYTICS_KEY }]
]

exports.modules = modules.filter((m) => !!m)

exports.build = {
  extractCSS: true,
  vendor: [
    // Only keep common vendor modules here
    '@nuxtjs/google-analytics', 'vuetify'
  ]
}
