import path from 'path'

export default function () {
  // eslint-disable-next-line no-console
  console.log('Loading module auth')
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: path.resolve(__dirname, 'components'),
      prefix: 'auth',
    })
    // console.log(dirs)
  })

  console.log(this.options.layouts)
  this.addLayout(path.resolve(__dirname, 'layouts/default.vue'), 'auth.default')

  this.extendRoutes((routes) => {
    // eslint-disable-next-line no-console
    // console.log(routes)
    // Add one or more elements at the beginning of the array
    routes.unshift({
      name: 'auth-users',
      path: '/auth/users',
      component: path.resolve(__dirname, 'pages/users.vue'),
    })
  })

  this.addPlugin(path.resolve(__dirname, 'store/registerStore.js'))
  this.addPlugin(path.resolve(__dirname, 'plugins/sayHello.js'))
}
