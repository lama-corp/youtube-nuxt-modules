export default (context, inject) => {
  /* eslint-disable no-console */
  console.log('Loading sayHowAreYou')
  inject('sayHowAreYou', () => console.log('How are you friend!'))
}
