export default {
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/lodash'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/svg',
    // https://www.npmjs.com/package/@nuxtjs/svg
    // {
    //   options: { randomValue1: 'counter' },
    //   handler(options) {
    //     console.log('Object style 1', options)
    //   },
    // },
    // {
    //   src: '~/modules/my-module',
    //   options: { randomValue1: 'counter' },
    // },
    // ['~/modules/my-module', { randomValue1: 'counter' }],
    '@nuxtjs/i18n',
    '~/modules/auth',
    '~/modules/members',
    '~/modules/blog'
    // function (moduleOptions) {
    //   console.log('Module en tant que fonction dans nuxt.config.js !')
    // },
    // '~/modules/hooks/create',
    // '~/modules/hooks/call',
    // '~/modules/options/first',
    // '~/modules/options/second',
    // '~/modules/options/editor',
    // '~/modules/methods/add-template',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['lodash-es']
  },

  activate: {
    lodash: true
  },

  // my-module options:
  iAmAnOptionWithARandomName: { randomValue2: true },

  // howareyou
  howareyou: 'fine'
}
