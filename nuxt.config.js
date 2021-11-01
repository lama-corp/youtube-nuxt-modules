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
  ],

  // components: false,

  watch: ['~/modules/options/editor.js'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '~/modules/my-module.js',
    // function (moduleOptions) {
    //   console.log('Module en tant que fonction dans nuxt.config.js !')
    // },
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
    '@nuxtjs/svg',
    [
      '@lihbr/utils-nuxt.head',
      {
        name: 'Lama Codeur',
        description: 'Youtube videos over NuxtJS',
        url: 'http://localhost:3000/',
        twitterHandle: '@LamaCodeur',
      },
    ],
    // '@nuxtjs/i18n',
    // '~/modules/auth',
    // '~/modules/members',
    // '~/modules/blog',
    // '~/modules/hooks/create',
    // '~/modules/hooks/call',
    // ['~/modules/options/first', { randomValue2: false }],
    // '~/modules/options/second',
    // ['~/modules/options/editor', { title: 'Youtube Nuxt Modules' }],
    // '~/modules/options/defu',
    // '~/modules/methods/add-template',
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

  // A Tailwind config
  // Break the site ; console.log only with module defu !
  // tailwindcss: {
  //   config: {
  //     future: {
  //       purgeLayersByDefault: true,
  //       removeDeprecatedGapUtilities: true,
  //       defaultLineHeights: true,
  //       standardFontWeights: true,
  //     },
  //     theme: {
  //       fontFamily: {
  //         impact: ['Impact', 'serif'],
  //       },
  //       boxShadow: {
  //         md: '0 5px 15px 0 rgba(0, 0, 0, 0.15)',
  //         lg: '0 3px 10px 0 rgba(154, 154, 154, 0.15)',
  //         xl: '0 0 25px 0 rgba(112, 112, 112, 0.25)',
  //         '2xl': '0 0 50px 0 rgba(112, 112, 112, 0.25)',
  //       },
  //       extend: {
  //         strokeWidth: {
  //           5: '5',
  //         },
  //         colors: {
  //           mango: 'var(--mango)',
  //           dark: 'var(--dark)',
  //         },
  //       },
  //     },
  //     variants: {},
  //     plugins: [],
  //     purge: {
  //       enabled: process.env.NODE_ENV === 'production',
  //       content: [
  //         'components/**/*.vue',
  //         'constants/**/*.js',
  //         'layouts/**/*.vue',
  //         'mixins/**/*.js',
  //         'pages/**/*.vue',
  //         'plugins/**/*.js',
  //         'nuxt.config.js',
  //         'node_modules/tv-*/dist/tv-*.umd.min.js',
  //       ],
  //       options: {
  //         safelist: ['bg-mango', 'bg-dark'],
  //       },
  //     },
  //   },
  // },
}
