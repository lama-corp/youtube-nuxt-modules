<template>
  <div>
    <div>My settings/profile page!</div>
    <MemberSettingProfile />
    <div>Store value : {{ storeValue }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PageSettingProfile',
  layout: 'auth.default',
  // layout: 'member.default',
  // layout: 'member.profile',
  computed: {
    ...mapState({
      storeValue: (state) => state,
    }),
  },
}
</script>
