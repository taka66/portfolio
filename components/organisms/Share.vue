<template>
  <div class="share">
    <Twitter :text="text" :url="url" class="share__margin" />
    <Facebook :url="url" />
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
