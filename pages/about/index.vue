<template>
  <div class="block-container">
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
      <figure class="illust">
        <img src="~/assets/img/about/img_index_01.png" alt="">
      </figure>
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

      <h2>Vue Slick carousel</h2>
      <div>
        <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" :autoplaySpeed="5000" :speed="1000">
          <div><img src="https://dummyimage.com/1200x400/000/fff&amp;text=slide1" alt=""></div>
          <div><img src="https://dummyimage.com/1200x400/000/fff&amp;text=slide2" alt=""></div>
          <div><img src="https://dummyimage.com/1200x400/000/fff&amp;text=slide3" alt=""></div>
          <div><img src="https://dummyimage.com/1200x400/000/fff&amp;text=slide4" alt=""></div>
        </VueSlickCarousel>
      </div>

    </div>
  </div>
</template>

<script>
// 個別ページでのjsと、それに付随するcssをインポート
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
  data () {
    return {
      meta: {
        title: 'About | サイトタイトル',
        description: 'Aboutページ個別のディスクリプション',
        keywords: 'Aboutページ個別のキーワード',
        type: 'article',
        url: 'https://www.exmple.co.jp/about',
        image: 'https://example.com/ogp.png',
      },
    }
  },
  // インポートしたものをcomponentsに登録　→　template要素内で利用可能になります
  components: { VueSlickCarousel },
}
</script>

<style lang="scss" scoped>
// nuxt.config.jsに指定した~/assets/sass/style.scssよりもあとに下記のscssファイルを読み込みます
// vueファイルのstyle要素内ではimportしているscssファイルも含めて、Sassの変数とmixinが使えるようにしてあります
// - ~/assets/sass/common/base/_variable.scss
// - ~/assets/sass/common/base/_mixin.scss
@import "~assets/sass/about/style.scss";

// 子コンポーネント内のスタイル調整をするときはディープセレクタという仕組みを使います
// Vue v3では書き方が ::v-deep(.foo) {  } と変わるようです。
/deep/ {
  .slick-prev,
  .slick-next {
    &:before {
      color: #000;
    }
  }
}
.button--grey {
  transition: opacity var(--duration) var(--timing);
  &:hover {
    opacity: var(--hover-opacity);
  }
}
</style>
