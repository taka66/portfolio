<template>
  <div class="photo">
    <v-lazy-image :src="url" src-placeholder="/loading.jpg" :alt="desc" />
    <span v-if="desc">{{ desc }}</span>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.photo {
  display: flex;
  flex-direction: column;
  img {
    margin: 10px auto;
    width: 100%;
    max-width: 960px;
  }
  span {
    text-align: center;
    color: #7194a5;
  }
}

@media (max-width: 768px) {
  .photo {
    width: 100%;
  }
}
</style>
