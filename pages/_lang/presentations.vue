<template>
  <section>
    <div class="bio">
      <h3>{{ $t('presentations.title') }}</h3>
      <div class="flex">
        <Card
          year="2019"
          name="presentations.name.react-tokyo-plus"
          link="contents/react-tokyo-plus"
          title="presentations.titles.react-tokyo-plus"
          thumbnail="/works/react-tokyo-plus.png"
        />
        <Card
          year="2019"
          name="presentations.name.travel-frontend-react"
          link="contents/travel-frontend-react"
          title="presentations.titles.travel-frontend-react"
          thumbnail="/works/travel-frontend-react.png"
        />
        <Card
          year="2018"
          name="presentations.name.microservice-meetup"
          link="contents/microservice-meetup"
          title="presentations.titles.microservice-meetup"
          thumbnail="/works/microservice-meetup.png"
        />
        <Card
          year="2017"
          name="presentations.name.tus-class"
          link="contents/tokyo-university-of-science-class"
          title="presentations.titles.tus-class"
          thumbnail="/works/tokyo-university-of-science-class.jpg"
          disabled
        />
        <Card
          year="2017"
          name="presentations.name.tus-article"
          link="contents/tokyo-university-of-science-article"
          title="presentations.titles.tus-article"
          thumbnail="/works/tokyo-university-of-science-article.png"
          disabled
        />
        <Card
          year="2016"
          name="presentations.name.travel-spring"
          link="https://www.slideshare.net/rakutentech/springspring-day-2016"
          title="presentations.titles.travel-spring"
          thumbnail="/works/travel-spring.png"
          outsidelink
        />
        <Card
          year="2015"
          name="presentations.name.jsug-spring-rest-docs"
          link="https://www.slideshare.net/241takahiro/spring-onewebdocument?qid=ffe79537-e28c-41f1-8e24-0bb9de20cf48"
          title="presentations.titles.jsug-spring-rest-docs"
          thumbnail="/works/jsug-spring-rest-docs.png"
          outsidelink
        />
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/organisms/Card.vue'
import Meta from '~/components/mixins/meta'
export default {
  components: {
    Card
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
.flex {
  width: 90%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: auto;
}
.card {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  width: 50%;
  font-size: 14px;
  transition: 0.3s ease;
}

@media (max-width: 768px) {
  .flex {
    width: 100%;
  }
  .card {
    padding: 15px 5px;
    width: 100%;
  }
}

@media (min-width: 1440px) {
  .card {
    width: 33%;
  }
}
</style>
