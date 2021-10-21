import * as authStore from '../modules/auth/store/auth.js'

export default async ({ store }) => {
  await store.registerModule('auth', authStore, {
    namespaced: authStore.namespaced,
  })
}
