<template>
  <div>
    <Generic />
    <!-- Lodash test : {{ $utils.merge({}, { test: true }) }} -->
  </div>
</template>

<script>
export default {
  layout: 'about',
  data() {
    return {
      data: {
        metaTitle: 'Titre about !',
        metaDescription:
          'Description about très très très très très très très très très très très très très très très très très très très très très très très très longue !',
        metaImage: {
          url: 'http://imageabout.png',
          twitterVariant: { url: 'http://twitterabout.png' },
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
