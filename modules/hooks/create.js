export default function (moduleOptions) {
  this.nuxt.hook('hello:howareyou', () => {
    console.log(`I'm feeling ${this.options.howareyou} thanks!`)
    this.options.howareyou =
      this.options.howareyou === 'fine' ? 'bad...' : 'very good'
  })
}
