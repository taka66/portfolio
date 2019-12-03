<template>
  <div class="blog__title__image" :style="{ background: backgroundcolor }">
    <picture>
      <source
        class="blog__thumbnail"
        :srcset="uri + '.webp'"
        type="image/webp"
        loading="lazy"
      />
      <img
        class="blog__thumbnail"
        :src="uri + '.png'"
        alt="fallback"
        loading="lazy"
      />
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
    backgroundcolor: {
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
