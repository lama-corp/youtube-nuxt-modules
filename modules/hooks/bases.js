export default function (moduleOptions) {
  console.log('In module bases')

  // this.nuxt.hook('build:before', (nuxt) => {
  //   console.log('Starting build')
  // })
  // this.nuxt.hook('build:done', (nuxt) => {
  //   console.log('Build done')
  // })

  const beforeBuildHook = (nuxt) => {
    console.log('Starting build')
  }
  const buildDoneHook = (nuxt) => {
    console.log('Build done')
  }
  this.nuxt.addHooks({
    'build:before': beforeBuildHook,
    'build:done': buildDoneHook,
  })
}
