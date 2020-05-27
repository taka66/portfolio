<template>
  <div class="internal__image">
    <picture>
      <source
        :srcset="domain + '/articles/' + removeExt(url) + '.webp'"
        :alt="desc"
        class="internal__image__thumbnail"
        type="image/webp"
        loading="lazy"
      />
      <img
        :src="domain + '/articles/' + url"
        :alt="desc"
        class="internal__image__thumbnail"
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
    max-width: 1024px;
    box-shadow: 0px 4px 14px rgba(40, 55, 57, 0.3);
    border-radius: 10px;
  }
  span {
    text-align: center;
    color: #7194a5;
  }
}

@media (max-width: 768px) {
  .internal__image {
    width: 100%;
    max-width: 600px;
  }
}
</style>
