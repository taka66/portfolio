<template>
  <div>
    <h1 class="works-title">Works</h1>
    <Presentations />
    <Design />
    <Share
      url="https://takahirofujii.dev/about"
      text="Works UI/UX Engineer Takahiro Fujii's portfolio"
    />
  </div>
</template>

<script>
import Share from '~/components/organisms/Share.vue'
import Design from '~/components/organisms/Design.vue'
import Presentations from '~/components/organisms/Presentations.vue'
import Meta from '~/components/mixins/meta'
export default {
  components: {
    Design,
    Presentations,
    Share
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'Presentations',
        description: 'Presentations by takahiro fujii',
        type: 'article',
        url: 'https://takahirofujii.dev/presentations'
      }
    }
  },
  mounted() {
    document.getElementById('content').scrollTop = 0
  }
}
</script>

<style lang="scss">
.works-title {
  margin: 24px;
}
</style>
