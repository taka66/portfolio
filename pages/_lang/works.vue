<template>
  <section>
    <div class="bio">
      <h3>主な発表・公演</h3>
      <div class="flex">
        <Card
          year="2019"
          name="react tokyo plus"
          link="contents/react-tokyo-plus"
          title="Large react product with 20+ FrontEnd Engineers in Rakuten Travel"
          thumbnail="/works/react-tokyo-plus.png"
        />
        <Card
          year="2019"
          name="react meetup"
          link="contents/travel-frontend-react"
          title="楽天トラベルのフロントエンドについて"
          thumbnail="/works/travel-frontend-react.png"
        />
        <Card
          year="2018"
          name="Microservice Meetup Vol.6"
          link="contents/microservice-meetup"
          title="FrontEndからみるmicroserviceとBackendからみるmicroservice"
          thumbnail="/works/microservice-meetup.png"
          disabled
        />
        <Card
          year="2017"
          name="東京理科大学 - 公演"
          link="contents/tokyo-university-of-science-class"
          title="グローバルな環境におけるエンジニアのキャリア形成"
          thumbnail="/works/tokyo-university-of-science-class.jpg"
          disabled
        />
        <Card
          year="2017"
          name="東京理科大学 - 寄稿(科学フォーラム)"
          link="contents/tokyo-university-of-science-article"
          title="好きなことを仕事にする"
          thumbnail="/works/tokyo-university-of-science-article.png"
          disabled
        />
        <Card
          year="2016"
          name="Spring Day 2016"
          link="contents/travel-spring"
          title="楽天トラベルとSpring"
          thumbnail="/works/travel-spring.png"
          disabled
        />
        <Card
          year="2015"
          name="JSUG(Japan Spring User Group)"
          link="contents/jsug-spring-rest-docs"
          title="Spring Rest Docs(SpringOneを経験してよりよいWebサービスを作るために僕らが取り組むこと)"
          thumbnail="/works/jsug-spring-rest-docs.png"
          disabled
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
        title: 'Works',
        description: 'Works bt takahiro fujii',
        type: 'article',
        url: 'https://takahirofujii.dev/works'
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
</style>
