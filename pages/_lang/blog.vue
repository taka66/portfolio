<template>
  <section>
    <div>
      <h1 class="blogs-title">{{ $t('blogs.title') }}</h1>
      <div class="flex">
        <Card
          year="2020"
          name="blogs.20mins"
          link="articles/spotify-model"
          title="blogs.titles.spotify-model"
          thumbnail="/articles/spotify-logo.png"
        />
        <Card
          year="2020"
          name="blogs.10mins"
          link="articles/wealth-park"
          title="blogs.titles.wealth-park"
          thumbnail="/articles/wealth-park.png"
        />
        <Card
          year="2020"
          name="blogs.5mins"
          link="articles/koikifm"
          title="blogs.titles.koikifm"
          thumbnail="/articles/koikifm.png"
        />
        <Card
          year="2020"
          name="blogs.20mins"
          link="articles/vpoe"
          title="blogs.titles.vpoe"
          thumbnail="/articles/vpoe.png"
        />
        <Card
          year="2020"
          name="blogs.5mins"
          link="articles/tutorial-document"
          title="blogs.titles.tutorial-document"
          thumbnail="/articles/tutorial-document.png"
        />
        <Card
          year="2020"
          name="blogs.8mins"
          link="articles/one-month"
          title="blogs.titles.one-month"
          thumbnail="/articles/one-month.png"
        />
        <Card
          year="2020"
          name="blogs.10mins"
          link="articles/vision-driven"
          title="blogs.titles.vision-driven"
          thumbnail="/articles/vision-driven.png"
        />
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
  },
  mounted() {
    document.getElementById('content').scrollTop = 0
  }
}
</script>

<style lang="scss">
.blogs-title {
  margin: 24px;
}
</style>
