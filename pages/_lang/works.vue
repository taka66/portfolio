<template>
  <div>
    <h1 class="works-title">Works</h1>
    <Presentations />
    <Design />
    <Sns link="https://takahirofujii.dev/contents/about" />
  </div>
</template>

<script>
import Sns from '~/components/atoms/Sns.vue'
import Design from '~/components/organisms/Design.vue'
import Presentations from '~/components/organisms/Presentations.vue'
import Meta from '~/components/mixins/meta'
export default {
  components: {
    Design,
    Presentations,
    Sns
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
  }
}
</script>

<style lang="scss">
.works-title {
  margin: 24px;
}
</style>
