<template>
  <div class="container">
    <div>
      <NuxtLink
        to="/"
      >
        <Logo />
      </NuxtLink>
      <h1 class="title">
        {{ meta.title }}
        <span>red</span>
      </h1>
      <div class="links">
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <NuxtLink
          to="/"
          class="button--grey"
        >
          Top
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="button--grey"
        >
          About
        </NuxtLink>
        <a
          href="#div-id"
          v-smooth-scroll
          class="button--grey"
        >
          Anchor
        </a>
      </div>
      <div style="height: 1500px;"></div>
      <div id="div-id">ここです</div>
      <div style="height: 1500px;"></div>
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
// 共通のscssはnuxt.config.jsで読み込む
// 個別ページのscssは各ページ用のコンポーネント内で @import で読み込む
// ここで読み込んだscssはnuxt.config.jsに指定したscssのあとで読み込むことになる
@import "~assets/sass/about/style.scss";

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
