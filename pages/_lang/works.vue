<template>
  <div>
    <Presentations />
    <Design />
  </div>
</template>

<script>
import Design from '~/components/organisms/Design.vue'
import Presentations from '~/components/organisms/Presentations.vue'
import Meta from '~/components/mixins/meta'
export default {
  components: {
    Design,
    Presentations
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

<style lang="scss"></style>
