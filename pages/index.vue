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
      <figure class="illust">
        <img src="~/assets/img/top/img_index_01.png" alt="">
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
      <div class="grid-cols-4 sample-grid">
        <div>SP・PC共通1</div>
        <div>SP・PC共通2</div>
        <div>SP・PC共通3</div>
        <div>SP・PC共通4</div>
      </div>
      <div class="grid-cols-xs-4 sample-grid">
        <div>SPのみ1</div>
        <div>SPのみ2</div>
        <div>SPのみ3</div>
        <div>SPのみ4</div>
      </div>
      <div class="grid-cols-sm-4 sample-grid">
        <div>PCのみ1</div>
        <div>PCのみ2</div>
        <div>PCのみ3</div>
        <div>PCのみ4</div>
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
        title: 'サイトタイトル',
        description: 'ページ個別のディスクリプション',
        keywords: 'ページ個別のキーワード',
        type: 'website',
        url: 'https://www.exmple.co.jp',
        image: 'https://example.com/ogp.png',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
// nuxt.config.jsに指定した~/assets/sass/style.scssよりもあとに下記のscssファイルを読み込みます
// vueファイルのstyle要素内ではimportしているscssファイルも含めて、Sassの変数とmixinが使えるようにしてあります
// - ~/assets/sass/common/base/_variable.scss
// - ~/assets/sass/common/base/_mixin.scss
@import "~assets/sass/top/style.scss";
.sample-grid {
  &>* {
    background-color: gray;
    color: #fff;
  }
}
.button--grey {
  transition: opacity var(--duration) var(--timing);
  &:hover {
    opacity: var(--hover-opacity);
  }
}
</style>
