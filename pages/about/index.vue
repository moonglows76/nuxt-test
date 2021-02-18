<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{ meta.title }}
        <span>red</span>
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
  data () {
    return {
      meta: {
        title: 'About',
        titleElement: 'About | サイトタイトル',
        description: 'Aboutページ個別のディスクリプション',
        keywords: 'Aboutページ個別のキーワード',
        type: 'article',
        url: 'https://www.exmple.co.jp',
        image: 'https://example.com/ogp.png',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
// nuxt.config.jsに指定したものよりもあとから読み込む
@import "~assets/sass/top/style.scss";

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  // color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
