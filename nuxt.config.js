import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'UI/UX Engineer',
    titleTemplate: "%s | Takahiro Fujii's portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'takahirofujii.dev'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://takahirofujii.dev'
      },
      { hid: 'og:title', property: 'og:title', content: 'takahirofujii.dev' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "UI/UX engineer Takahiro Fujii's portfolio website "
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://takahirofujii.dev/ogp/common.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  router: {
    middleware: 'i18n'
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/css/reset.css', '@/assets/css/global.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/i18n.js'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.md$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'vue-loader',
          {
            loader: 'markdown-to-vue-loader',
            options: {
              exportSource: true
            }
          }
        ]
      })
    }
  }
}
