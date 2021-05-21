export default {
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'robots', name: 'robots', content: this.meta.robots != undefined ? this.meta.robots : 'index, follow' },
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url != undefined ? this.meta.url : this.$config.baseURL + this.$route.path },
        { hid: 'og:image', property: 'og:image', content: this.meta.image != undefined ? this.meta.image : this.$config.baseURL + '/ogp.png' },
        { hid: 'article:publisher', property: 'article:publisher', content: this.meta.publisher != undefined ? this.meta.publisher : 'https://www.facebook.com/synapsestation/' },
      ],
      link: [
        { rel: 'canonical', href: this.meta.canonical != undefined ? this.meta.canonical : this.$config.baseURL + this.$route.path },
      ]
    }
  }
}
