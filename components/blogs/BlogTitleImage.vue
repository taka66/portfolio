<template>
  <div :style="{ background: backgroundcolor }" class="blog__title__image">
    <picture>
      <source
        :srcset="uri + '.webp'"
        class="blog__thumbnail"
        type="image/webp"
        loading="lazy"
      />
      <img
        :src="uri + '.png'"
        class="blog__thumbnail"
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
