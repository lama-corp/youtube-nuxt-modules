export default function (moduleOptions) {
  console.log('In module')
  // eslint-disable-next-line require-await
  // let applySayHowYoureFeeling = true

  const _nuxt = this.nuxt
  const sayHowYoureFeeling = function () {
    setTimeout(() => {
      // if (applySayHowYoureFeeling) {
      //   _nuxt.callHook('hello:howareyou', this)
      // }
      const arg = 12
      _nuxt.callHook('hello:howAreYou', arg, 234)
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
}
