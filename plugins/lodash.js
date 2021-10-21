import { merge } from 'lodash-es'

export default (context, inject) => {
  /* eslint-disable no-console */
  console.log('Loading lodash plugin')
  console.log(context.store.state.test2)
  console.log(context.store.state.users?.test)

  inject('lodash', {
    merge,
  })
  console.log('lodashPlugin')
  if (context.$sayHello) context.$sayHello()
}
