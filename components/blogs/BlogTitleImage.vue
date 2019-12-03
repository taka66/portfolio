<template>
  <div class="blog__title__image" :style="{ background: backgroundColor }">
    <picture>
      <source
        class="blog__thumbnail"
        :src="uri + '.webp'"
        :srcset="uri + '.webp'"
        type="image/webp"
      />
      <img class="blog__thumbnail" :src="uri + '.png'" alt="fallback" />
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    uri: {
      type: String,
      default: '/test.png'
    },
    backgroundColor: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>

<style lang="scss">
.blog__title__image {
  width: 100%;
}
.blog__thumbnail {
  width: 100%;
  max-width: 720px;
}
</style>
