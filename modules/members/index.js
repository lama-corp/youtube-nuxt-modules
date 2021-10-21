const { resolve } = require('path')
const { readdirSync } = require('fs')

export default function () {
  // eslint-disable-next-line no-console
  console.log('Loading module members')
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: resolve(__dirname, 'components'),
      prefix: 'member',
    })
  })

  // this.addLayout(resolve(__dirname, 'layouts/default.vue'), 'member.default')
  // this.addLayout(resolve(__dirname, 'layouts/profile.vue'), 'member.profile')
  const layoutsPath = resolve(__dirname, 'layouts')
  for (const file of readdirSync(layoutsPath)) {
    const layoutName = file.substr(0, file.indexOf('.'))
    this.addLayout(
      resolve(__dirname, `layouts/${file}`),
      `member.${layoutName}`
    )
  }

  // const path = resolve(__dirname, 'pages')
  // for (const file of readdirSync(path)) {
  //   console.log('pagesPath', file)
  //   // => Returns setting
  // }
  this.extendRoutes((routes) => {
    // Add one or more elements at the beginning of the array
    routes.unshift({
      name: 'members-setting-profile',
      path: '/members/settings/profile',
      component: resolve(__dirname, 'pages/setting/profile.vue'),
    })
  })

  // this.addPlugin(resolve(__dirname, 'store/registerStore.js'))
  // this.addPlugin(resolve(__dirname, 'plugins/sayHello.js'))

  const pluginsPath = resolve(__dirname, 'plugins')
  for (const file of readdirSync(pluginsPath)) {
    this.addPlugin(resolve(__dirname, `plugins/${file}`))
  }

  this.addPlugin(resolve(__dirname, 'store/registerStore.js'))
}
