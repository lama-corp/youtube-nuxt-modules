export default function (moduleOptions) {
  console.log('In module')
  // eslint-disable-next-line require-await

  const _nuxt = this.nuxt
  const sayHowYoureFeeling = function () {
    setTimeout(() => {
      // if (applySayHowYoureFeeling) {
      //   _nuxt.callHook('hello:howareyou', this)
      // }
      _nuxt.callHook('hello:howareyou', this)
      sayHowYoureFeeling()
    }, 5000)
  }
  sayHowYoureFeeling()

  // this.nuxt.hook('build:before', (nuxt) => {
  //   console.log('Starting build')
  //   applySayHowYoureFeeling = false
  // })
  // this.nuxt.hook('build:done', (nuxt) => {
  //   console.log('Build done')
  //   applySayHowYoureFeeling = true
  // })
  // let applySayHowYoureFeeling = true

  // const beforeBuildHook = (nuxt) => {
  //   console.log('Starting build')
  //   applySayHowYoureFeeling = false
  // }
  // const buildDoneHook = (nuxt) => {
  //   console.log('Build done')
  //   applySayHowYoureFeeling = true
  // }
  // this.nuxt.addHooks({
  //   'build:before': beforeBuildHook,
  //   'build:done': buildDoneHook,
  // })
}
