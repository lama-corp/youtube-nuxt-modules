<template>
  <div>
    <div>My article page!</div>
    <BlogArticle />
  </div>
</template>

<script>
export default {
  name: 'LayoutBlog',
  // layout: 'blog.default',
  mounted() {
    this.$sayDdd()
  }
}
</script>
