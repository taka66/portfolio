import pkg from './package'

const baseUrl = process.env.BASE_URL || 'https://takahirofujii.dev'
const baseDir = process.env.BASE_DIR || '/'

export default {
  mode: 'universal',
  env: {
    baseUrl: baseUrl
  },
  router: {
    base: baseDir,
    middleware: ['i18n', 'pages']
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'UI/UX Engineer',
    titleTemplate: "%s | Takahiro Fujii's portfolio",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'google', content: 'notranslate' },
      {
        name: 'google-site-verification',
        content: 'fgXsZRT1bj9fmww9WGG9eAOP1RjF5rjkXay-zWjOjyc'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'takahirofujii.dev'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseUrl
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
        content: `${baseUrl}/ogp/ogp.png`
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: '@taka_ft'
      },
      {
        name: 'twitter:creator',
        content: '@taka_ft'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/css/reset.css', '@/assets/css/global.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vue-scrollto.js',
    '~/plugins/v-lazy-image.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['vue-scrollto/nuxt', { duration: 300 }],
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-153773529-1'
      }
    ]
  ],

  webfontloader: {
    google: {
      families: ['PT Sans:400,700i']
    }
  },

  /*
   ** https://github.com/nuxt-community/sitemap-module
   */
  sitemap: {
    hostname: 'https://takahirofujii.dev',
    gzip: true,
    exclude: [
      '/contents/jsug-spring-rest-docs',
      '/contents/tokyo-university-of-science-article',
      '/contents/tokyo-university-of-science-class',
      '/contents/travel-spring'
    ]
  },

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
