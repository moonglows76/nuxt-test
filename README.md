# nuxt-test

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# generate storybook
$ npm run storybook
```

## 環境変数の定義

nuxt.config.jsと同じ階層に `.env` を作って、4つの環境変数を定義してください。

```
BASE_URL=https://www.exmple.co.jp
API_URL=https://www.exmple.co.jp/api
API_KEY=test
GTM_ID=GTM-XXXXXXX
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
