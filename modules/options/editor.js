export default function (moduleOptions) {
  // Global page headers: https://go.nuxtjs.dev/config-head
  this.options.head = {
    title: moduleOptions.title,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  }

  this.options.css.push('~/assets/main.css')

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  this.options.plugins.push('~/plugins/lodash')

  // Auto import components: https://go.nuxtjs.dev/config-components
  this.options.components = true
}
