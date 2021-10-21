export default (context, inject) => {
  /* eslint-disable no-console */
  inject('sayHello', () => console.log('Hello friend!'))
  console.log(
    'Loading sayHelloPlugin',
    context.$lodash?.merge({}, { say: 'hello' })
  )
}
