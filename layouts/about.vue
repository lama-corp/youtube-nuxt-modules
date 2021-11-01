<template>
  <div class="header">
    <div class="p-4">
      <nuxt-link
        key="index"
        :to="{ name: 'index' }"
        class="mr-3"
      >
        Go to index
      </nuxt-link>
    </div>
    <div class="pt-12">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutAbout',
}
</script>

