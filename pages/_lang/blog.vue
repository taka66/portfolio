<template>
  <section>
    <div>
      <h1 class="blogs-title">{{ $t('blogs.title') }}</h1>
      <div class="flex">
        <Card
          year="2019"
          name="blogs.10mins"
          link="articles/job-change"
          title="blogs.titles.job-change"
          thumbnail="/articles/job-change.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/organisms/Card.vue'
export default {
  components: {
    Card
  }
}
</script>

<style lang="scss">
.blogs-title {
  margin: 24px;
}
</style>
