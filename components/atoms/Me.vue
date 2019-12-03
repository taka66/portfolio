<template>
  <div class="me">
    <picture>
      <source
        class="me__thumbnail"
        srcset="~/assets/me.webp"
        type="image/webp"
      />
      <img class="me__thumbnail" src="~/assets/me.jpg" alt="fallback" />
    </picture>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.me__thumbnail {
  width: 48px;
  border-radius: 50%;
}
</style>
