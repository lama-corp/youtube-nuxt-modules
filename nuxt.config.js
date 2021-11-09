export default {
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],

  // components: false,

  watch: ['~/modules/options/editor.js'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '~/modules/hooks/bases',
    // '~/modules/hooks/create',
    // '~/modules/hooks/call',
    '~/modules/hooks/examples',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['lodash-es'],
  },

  activate: {
    lodash: true,
  },

  // my-module options:
  optionsFirst: { randomValue2: true },

  // howAreYou
  howAreYou: 'fine',
}
