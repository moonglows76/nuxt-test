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
      <figure class="illust-dog">
        <img src="~/assets/img/about/img_index_02.jpg" alt="">
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
          href="#"
          v-scroll-to="'#div-id'"
          class="button--grey">
          a要素ページ内リンク
        </a>
        <NuxtLink
          v-scroll-to="'#div-id'"
          to
          class="button--grey"
        >
          NuxtLinkページ内リンク
        </NuxtLink>
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
      <div class="block-container">
        <div style="height: 1500px;">これ</div>
        <div id="div-id">div-idはここです</div>
        <div style="height: 1500px;">これ</div>
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
  data ({$config, $route}) {
    return {
      meta: {
        robots: 'noindex, nofollow',
        title: 'About | サイトタイトル',
        description: 'Aboutページ個別のディスクリプション',
        image: $config.baseURL + '/ogp.png',
        canonical: $config.baseURL + $route.path,
        publisher: 'https://www.facebook.com/synapsestation/',
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

// 親コンポーネントから子コンポーネント内のスタイル調整をするときは ::v-deep を使います
// 下記はサンプルとして、VueSlickCarouselコンポーネント内の.slick-prev, .slick-nextに色を付けるため、セレクタに::v-deepを付け加えています
::v-deep {
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
.illust-dog {
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: center center;
    font-family: 'object-fit: cover; object-position: center center;';
  }
}
</style>
