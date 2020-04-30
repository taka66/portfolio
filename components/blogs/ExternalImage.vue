<template>
  <div class="external__image">
    <v-lazy-image
      :src="url"
      :alt="desc"
      src-placeholder="/loading.jpg"
      role="presentation"
    />
    <a :href="link" target="__blank">
      <span>{{ desc }}</span>
    </a>
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
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.external__image {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  img {
    margin: 10px auto;
    width: 100%;
    max-width: 600px;
    box-shadow: 0px 4px 14px rgba(40, 55, 57, 0.3);
    border-radius: 10px;
  }
  span {
    text-align: center;
    color: #7194a5;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    outline: none;
  }
}

@media (max-width: 768px) {
  .external__image {
    width: 100%;
  }
}
</style>
