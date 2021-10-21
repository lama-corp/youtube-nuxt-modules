<template>
  <div>
    <div>My user page!</div>
    <AuthMyModuleComponent />
    <div>Store value : {{ storeValue }}</div>
    <div>{{ $lodash.merge({}, { test1: 1 }, { test2: 2 }) }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PageAuthUsers',
  layout: 'auth.default',
  computed: {
    ...mapState({
      storeValue: (state) => state.auth.test,
    }),
  },
}
</script>
