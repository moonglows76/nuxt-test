const Sass = require('sass')
const Fiber = require('fibers')

// process.env.NODE_ENVはnode.jsが自動でつくる環境変数
// npm run dev時（開発サーバ）はdevelopment、
// npm run start時（静的ホスティング）はproductionが入ります
const { API_KEY, BASE_URL, API_URL, GTM_ID, NODE_ENV } = process.env;

export default {
  server: {
    host: '0'
  },

  // $configを使ってクライアントとサーバー両方からアクセス可能（envを読むのはサーバだけ）
  publicRuntimeConfig: {
    baseURL: BASE_URL,
    apiURL: API_URL,
    apiKey: NODE_ENV !== 'production' ? API_KEY : undefined
  },

  // $configを使ってサーバーからのみアクセス可能。publicRuntimeConfigを上書き可能
  privateRuntimeConfig: {
    apiKey: API_KEY,
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
      // { name: 'google-site-verification', content: '' },
      // { name: 'msvalidate.01', content: '' },
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:site_name', content: 'site name' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:image', property: 'og:image', content: BASE_URL + '/ogp.png' },
    ],

    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      // { rel: 'manifest', href: '/site.webmanifest' },
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
    '@nuxtjs/stylelint-module',
    '@nuxtjs/gtm',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    'nuxt-mq',
    '@nuxtjs/sitemap',
  ],

  gtm: {
    id: GTM_ID,
    pageTracking: true,
    // enabled: true, // 常に（npm run devの場合も）GTMイベントを送信して送信内容を確認
  },

  // メディアクエリ用
  'mq': {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 968,
      md: Infinity
    }
  },

  // sitemap.xml生成用（npm run generateでdist/sitemap.xmlとして生成されます）
  // pagesフォルダ内の固定ページは自動でsitemap.xmlに入ります
  // 動的ページは下記でAPIを読み込んで
  sitemap: {
    hostname: BASE_URL,
    gzip: true,
    path: '/sitemap.xml',
    // ブログなど、APIからページを生成するときに利用
    // routes: async () => {
    //   const apiBaseUrl = process.env.API_URL
    //   const results = [
    //     {
    //       url: '/',
    //       changefreq: 'daily'
    //     },
    //     {
    //       url: '/about',
    //       changefreq: 'monthly'
    //     }
    //   ]
    //   const { data } = await axios.get(`${apiBaseUrl}/entities/`)
    //   if (data) {
    //     data.forEach((entity) => {
    //       results.push({
    //         url: `/entities/${entity.slug}`,
    //         lastmod: entity.updated_at,
    //         changefreq: 'weekly'
    //       })
    //     })
    //   }
    //   return results
    // },
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

  // 静的ファイル生成フォルダ
  generate: {
    dir: '../dist'
  }
}
