<template>
  <div class="share">
    <Twitter
      v-if="i18n"
      :text="$t(text)"
      :url="$t(url)"
      class="share__margin"
    />
    <Twitter v-else :text="text" :url="url" class="share__margin" />
    <Facebook v-if="i18n" :url="$t(url)" />
    <Facebook v-else :url="url" />
  </div>
</template>

<script>
import Twitter from '~/components/atoms/svgs/Twitter.vue'
import Facebook from '~/components/atoms/svgs/Facebook.vue'
export default {
  components: {
    Twitter,
    Facebook
  },
  props: {
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: 'https://takahirofujii.dev'
    },
    i18n: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss">
.share {
  display: flex;
  align-items: center;
  justify-content: center;
}
.share__margin {
  margin-right: 8px;
}
</style>
