const Sass = require('sass')
const Fiber = require('fibers')

export default {
  server: {
    host: '0'
  },

  publicRuntimeConfig: {
    baseURL: 'https://www.exmple.co.jp'
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'site name',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'viewport-fit=cover, width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'google-site-verification', content: '' },
      { name: 'msvalidate.01', content: '' },
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:site_name', content: 'site name' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.exmple.co.jp/ogp.png' },
    ],

    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'preconnect',
        href:
          'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@400;700&display=swap',
      },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: 'normalize.css' },
    { src: '~/assets/sass/style.scss', lang: 'scss' },
  ],

  script: [
    {
      src: 'https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js'
    },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/object-fit-images', mode: 'client' },
    { src: '~plugins/vue-scrollto', mode: 'client' },
    { src: '~plugins/svg4everybody.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/stylelint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    'nuxt-mq',
  ],
  'mq': {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 968,
      md: Infinity
    }
  },

  styleResources: {
    scss: [
      '~/assets/sass/common/base/_variable.scss',
      '~/assets/sass/common/base/_mixin.scss'
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['ufo'],
    postcss: {
      preset: {
        autoprefixer: {
          grid: 'autoplace'
        }
      }
    },
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  },

  // storybook
  storybook: {
    // Options
  },

  generate: {
    dir: '../dist'
  }
}
