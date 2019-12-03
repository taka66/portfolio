<template>
  <div class="internal__image">
    <picture>
      <source
        class="internal__image__thumbnail"
        :srcset="domain + '/articles/' + removeExt(url) + '.webp'"
        type="image/webp"
        :alt="desc"
        loading="lazy"
      />
      <img
        class="internal__image__thumbnail"
        :src="domain + '/articles/' + url"
        :alt="desc"
        loading="lazy"
      />
    </picture>
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
  },
  computed: {
    domain() {
      return `${process.env.baseUrl}`
    }
  },
  methods: {
    removeExt: function(str) {
      return str.replace(/^.*\/|\.[^.]*$/g, '', '')
    }
  }
}
</script>

<style lang="scss">
.internal__image {
  margin-top: 24px;
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
  .internal__image {
    width: 100%;
  }
}
</style>
