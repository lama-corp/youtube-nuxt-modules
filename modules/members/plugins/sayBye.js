export default (context, inject) => {
  /* eslint-disable no-console */
  console.log('Loading sayBye')
  inject('sayBye', () => console.log('Bye my friend!'))
}
