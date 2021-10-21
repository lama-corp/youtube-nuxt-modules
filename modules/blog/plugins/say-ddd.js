export default (context, inject) => {
  /* eslint-disable no-console */
  console.log('Loading sayDdd')
  inject('sayDdd', () => console.log("I'm saying ddd! Awesome no?!"))
}
