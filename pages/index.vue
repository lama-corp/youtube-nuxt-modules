<template>
  <Welcome />
</template>

<script>
export default {
  data() {
    return {
      data: {
        metaTitle: 'Home page !',
        metaDescription: 'Description home !',
        metaImage: {
          url: 'http://imagehome.png',
          twitterVariant: { url: 'http://twitterhome.png' },
        },
      },
    }
  },
  head() {
    const { metaTitle, metaDescription, metaImage } = this.data
    return this.$buildHead({
      title: metaTitle || '💐',
      description: metaDescription,
      metaImage: { og: metaImage.url, tw: metaImage.twitterVariant.url },
      path: this.$route.path,
    })
  },
}
</script>
