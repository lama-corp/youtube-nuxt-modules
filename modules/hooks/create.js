export default function (moduleOptions) {
  this.nuxt.hook('hello:howAreYou', () => {
    console.log(`I'm feeling ${this.options.howAreYou} thanks!`)
    this.options.howAreYou =
      this.options.howAreYou === 'fine' ? 'bad...' : 'very good'
  })
}
