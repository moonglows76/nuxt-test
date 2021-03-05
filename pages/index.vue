<template>
  <div>
    <div class="block-container">
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
    </div>

    <div class="block-container">
      <h2>CSS Gridのグリッドシステム（複数行あるときは使わない）</h2>
    </div>
    <div class="grid-wrapper">
      <div class="grid-cols-4 sample-grid">
        <div>Grid - SP・PC共通　4段組</div>
        <div>Grid - SP・PC共通　4段組</div>
        <div>Grid - SP・PC共通　4段組</div>
        <div>Grid - SP・PC共通　4段組</div>
      </div>
      <div class="grid-cols-xs-4 sample-grid">
        <div>Grid - SPのみ　4段組</div>
        <div>Grid - SPのみ　4段組</div>
        <div>Grid - SPのみ　4段組</div>
        <div>Grid - SPのみ　4段組</div>
      </div>
      <div class="grid-cols-sm-4 sample-grid">
        <div>Grid - PCのみ　4段組</div>
        <div>Grid - PCのみ　4段組</div>
        <div>Grid - PCのみ　4段組</div>
        <div>Grid - PCのみ　4段組</div>
      </div>
      <div class="grid-cols-xs-2 grid-cols-sm-4 sample-grid">
        <div>Grid - SP　2段組　PC　4段組</div>
        <div>Grid - SP　2段組　PC　4段組</div>
        <div>Grid - SP　2段組　PC　4段組</div>
        <div>Grid - SP　2段組　PC　4段組</div>
      </div>
    </div>

    <div class="block-container">
      <h2>flexboxのグリッドシステム（単一行でも複数行あるときでもOK）</h2>
    </div>
    <div class="wrapper container-fluid">
      <div class="row">
        <div class="col-xs-3">
          <div class="sample-flexbox">flexbox - SP・PC共通　4段組</div>
        </div>
        <div class="col-xs-3">
          <div class="sample-flexbox">flexbox - SP・PC共通　4段組</div>
        </div>
        <div class="col-xs-3">
          <div class="sample-flexbox">flexbox - SP・PC共通　4段組</div>
        </div>
        <div class="col-xs-3">
          <div class="sample-flexbox">flexbox - SP・PC共通　4段組</div>
        </div>
        <div class="col-xs-3">
          <div class="sample-flexbox">flexbox - SP・PC共通　4段組</div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3 col-sm-12">
          <div class="sample-flexbox">flexbox - SPのみ　4段組</div>
        </div>
        <div class="col-xs-3 col-sm-12">
          <div class="sample-flexbox">flexbox - SPのみ　4段組</div>
        </div>
        <div class="col-xs-3 col-sm-12">
          <div class="sample-flexbox">flexbox - SPのみ　4段組</div>
        </div>
        <div class="col-xs-3 col-sm-12">
          <div class="sample-flexbox">flexbox - SPのみ　4段組</div>
        </div>
        <div class="col-xs-3 col-sm-12">
          <div class="sample-flexbox">flexbox - SPのみ　4段組</div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-3">
          <div class="sample-flexbox">flexbox - PCのみ　4段組</div>
        </div>
        <div class="col-xs-12 col-sm-3">
          <div class="sample-flexbox">flexbox - PCのみ　4段組</div>
        </div>
        <div class="col-xs-12 col-sm-3">
          <div class="sample-flexbox">flexbox - PCのみ　4段組</div>
        </div>
        <div class="col-xs-12 col-sm-3">
          <div class="sample-flexbox">flexbox - PCのみ　4段組</div>
        </div>
        <div class="col-xs-12 col-sm-3">
          <div class="sample-flexbox">flexbox - PCのみ　4段組</div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-3">
          <div class="sample-flexbox">flexbox - SP　2段組　PC　4段組</div>
        </div>
        <div class="col-xs-6 col-sm-3">
          <div class="sample-flexbox">flexbox - SP　2段組　PC　4段組</div>
        </div>
        <div class="col-xs-6 col-sm-3">
          <div class="sample-flexbox">flexbox - SP　2段組　PC　4段組</div>
        </div>
        <div class="col-xs-6 col-sm-3">
          <div class="sample-flexbox">flexbox - SP　2段組　PC　4段組</div>
        </div>
        <div class="col-xs-6 col-sm-3">
          <div class="sample-flexbox">flexbox - SP　2段組　PC　4段組</div>
        </div>
        <div class="col-xs-6 col-sm-3">
          <div class="sample-flexbox">flexbox - SP　2段組　PC　4段組</div>
        </div>
      </div>
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
.sample-flexbox {
  background-color: gray;
  color: #fff;
}
.button--grey {
  transition: opacity var(--duration) var(--timing);
  &:hover {
    opacity: var(--hover-opacity);
  }
}
</style>
