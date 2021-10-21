import * as membersStore from '../modules/members/store/index.js'
import * as profileStore from '../modules/members/store/profile.js'

export default async ({ store }) => {
  // const membersStore = await import('../modules/members/store/index.js')
  // const profileStore = await import('../modules/members/store/profile.js')

  await store.registerModule('members', membersStore, {
    namespaced: membersStore.namespaced,
  })
  // await store.registerModule('members', {})
  await store.registerModule(['members', 'profiles'], profileStore, {
    namespaced: profileStore.namespaced,
  })
}
