<template>
  <div>
    <div class="block-container">
      <p>幅によって要素を出し分け↓</p>
      <div v-if="$mq==='sm'">幅が狭い ($mq==='sm')</div>
      <div v-else>幅が広い ($mq==='md')</div>
      <div>computedオプションで$mqを見て処理：{{mqText}}</div>
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
          href="#"
          v-scroll-to="'#div-id'"
          class="button--grey">
          a要素ページ内リンク
        </a>
        <NuxtLink
          v-scroll-to="{
            el: '#div-id',
            offset: -200
          }"
          to
          class="button--grey"
        >
          NuxtLinkページ内リンク
        </NuxtLink>
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

    <div class="block-container">
      <p>
        この下はassets/sprite/svgフォルダにあるsvgを呼び出して利用しています。<br>
        出力されるSVGはフォントサイズを指定すればサイズ調整できます。<br>
        また文字色と同じ色がアイコンに反映されます。<br>
        デフォルトではclass="icon sprite-icons"が指定されますが、class属性で個別のクラスを指定できます。
      </p>
      <svg-icon name="chevron-right" class="icon-chevron-right" />
      <svg-icon name="chevron-left" class="icon-chevron-left" />
      <svg-icon name="chevron-up" class="icon-chevron-up" />
      <svg-icon name="chevron-down" class="icon-chevron-down" />
      <pre>
        &lt;svg-icon name="chevron-right" class="icon-chevron-right" /&gt;
        &lt;svg-icon name="chevron-left" class="icon-chevron-left" /&gt;
        &lt;svg-icon name="chevron-up" class="icon-chevron-up" /&gt;
        &lt;svg-icon name="chevron-down" class="icon-chevron-down" /&gt;
      </pre>

      <p>この下はスタイル確認用のダミーテキストです。</p>

      <h1>この見出し1はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</h1>
      <h2>この見出し2はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</h2>
      <h3>この見出し3はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</h3>
      <h4>この見出し4はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</h4>
      <h5>この見出し5はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</h5>
      <h6>この見出し6はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</h6>
      <p>
        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        <a href="#">リンクテキスト</a>、
        <strong>重要なテキスト</strong>、<em>強調するテキスト</em>、
        <code>コードスニペット</code>、
        <abbr title="省略元テキスト">省略</abbr>、
        <q>短い引用</q>、
        <cite>作品のタイトル</cite>、
        <mark>ハイライトするテキスト</mark>、
        <kbd>キーボード入力</kbd>、
        <s>打ち消し線</s>、
        <del>削除</del>と<ins>挿入</ins>、
        <samp>サンプルテキスト</samp>、
        <small>細目のテキスト</small>、
        言葉と<sub>下付き文字</sub><sup>上付き文字</sup>
      </p>
      <p>区切り線です。</p>
      <hr>
      <p>順番なしリストです。</p>
      <ul>
        <li>
          From basic lists
          <ul>
            <li>
              With nested items
              <ul>
                <li>
                  That have a different bullet point
                  <ul>
                    <li>
                      At each level
                      <ul>
                        <li>
                          Up to
                          <ul>
                            <li>The 6th level</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>With items that can spawn multiple lines</li>
        <li>Like this one: lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at aliquet orci. Curabitur eget porttitor sem. Aenean eu convallis diam. Sed nibh massa, rhoncus id interdum pellentesque, congue ac erat.</li>
      </ul>
      <p>
        順番ありリストです。
      </p>
      <ol>
        <li>
          Step one
          <ol>
            <li>
              Side step one
              <ol>
                <li>
                  Side step two
                  <ol>
                    <li>
                      Site step three
                      <ol>
                        <li>
                          Side step four
                          <ol>
                            <li>Side step five</li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>Step two</li>
        <li>????</li>
        <li>PROFIT!!!</li>
      </ol>
      <p>
        定義リストです。
      </p>
      <dl>
        <dt>Name</dt>
        <dd>Godzilla</dd>
        <dt>Born</dt>
        <dd>1952</dd>
        <dt>Birthplace</dt>
        <dd>Japan</dd>
        <dt>Color</dt>
        <dd>Green</dd>
      </dl>
      <blockquote>
        この引用はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
      </blockquote>
      <p>
        figure要素とfigcaption要素です。
      </p>
      <figure>
        <a href="https://jgthms.com/web-design-in-4-minutes/">
          <img src="https://dummyimage.com/1200x400/000/fff" alt="">
        </a>
        <figcaption>幅いっぱいの画像</figcaption>
      </figure>
      <figure>
        <img src="https://dummyimage.com/300x200/000/fff" alt="">
        <figcaption>小さい画像</figcaption>
      </figure>
      <p>
        表組みです。
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Instruments</th>
            <th>Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Lennon</td>
            <td>Vocals, Guitar</td>
            <td>1960–1969</td>
          </tr>
          <tr>
            <td>Paul McCartney</td>
            <td>Vocals, Bass Guitar</td>
            <td>1960–1970</td>
          </tr>
          <tr>
            <td>George Harrison</td>
            <td>Guitar</td>
            <td>1960–1970</td>
          </tr>
          <tr>
            <td>Ringo Starr</td>
            <td>Drums</td>
            <td>1962–1970</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Instruments</th>
            <th>Period</th>
          </tr>
        </tfoot>
      </table>

      <form action="#" method="post">
        <div>
            <label for="name">テキスト入力</label>
            <input type="text" name="name" id="name" value="" placeholder="入力例が入ります">
        </div>
        <div>
          <label>
            <input type="radio" name="radio-choice" value="choice-1">
            ラジオボタン1
          </label>

          <label>
            <input type="radio" name="radio-choice" value="choice-2">
            ラジオボタン2
          </label>
        </div>
        <div>
          <label for="select-choice">ドロップダウン選択</label>
          <select name="select-choice" id="select-choice">
            <option value="Choice 1">Choice 1</option>
            <option value="Choice 2">Choice 2</option>
            <option value="Choice 3">Choice 3</option>
          </select>
        </div>
        <div>
          <label for="textarea">テキストエリア</label>
          <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
        </div>
        <div>
            <label>
              <input type="checkbox" name="checkbox">
              チェックボックス
            </label>
        </div>
        <div>
            <input type="submit" value="送信">
          </div>
      </form>

      <div id="div-id">div-idはここです</div>
      <div>これ</div>
      <div class="article-list">
        <div class="article-list__item article-list__item--active">
          アクティブ
        </div>
        <div class="article-list__item">
          ノーマル
        </div>
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
        title: 'サイトタイトル',
        description: 'ページ個別のディスクリプション',
        type: 'website',
        image: this.$config.baseURL + '/ogp.png',
        canonical: this.$config.baseURL + this.$route.path,
        publisher: 'https://www.facebook.com/synapsestation/',
      },
    }
  },
  computed: {
    mqText() {
      return this.$mq === 'sm' ? '幅が狭い' : '幅が広い'
    }
  }
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

.icon-chevron-right {
  color: red;
  font-size: 2rem;
}
.icon-chevron-left {
  color: blue;
  font-size: 2.5rem;
}
.icon-chevron-up {
  color: green;
  font-size: 3rem;
}

.button--grey {
  transition: opacity var(--duration) var(--timing);
  &:hover {
    opacity: var(--hover-opacity);
  }
}

// article-listブロックのlint設定例
// ブロックの定義を @defineで行う（コメントの開始記号は /** です。ご留意を。）
/** @define article-list */
.article-list {
  // あとに続く1セレクタだけlintを無視する書き方（このコメントの開始記号は通常の /* です。ご留意を。）
  /* postcss-bem-linter: ignore */
  &.is-active {
    /* postcss-bem-linter: ignore */
    &__item {
    }
  }
  &__item {
    color: #f0f;
    &--active {
      color: red;
    }
  }
}
// @endでブロックの定義を終了する（コメントの開始記号は /** です。ご留意を。）
/** @end */

// article-detailブロックのlint設定例
/** @define article-detail */
.article-detail {
  &__title {

  }
  &__content {

  }
  &__img {
    &--wide {

    }
  }
}
/** @end */
</style>
