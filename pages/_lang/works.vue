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
          thumbnail="/works/react-tokyo-plus.jpg"
        />
        <Card
          year="2019"
          name="react meetup"
          link="contents/travel-frontend-react"
          title="楽天トラベルのフロントエンドについて"
          thumbnail="/works/travel-frontend-react.jpg"
        />
        <Card
          year="2018"
          name="Microservice Meetup Vol.6"
          link="contents/microservice-meetup"
          title="FrontEndからみるmicroserviceとBackendからみるmicroservice"
          thumbnail="/works/microservice-meetup.jpg"
          isDisabled
        />
        <Card
          year="2017"
          name="東京理科大学 - 公演"
          link="contents/tokyo-university-of-science-class"
          title="グローバルな環境におけるエンジニアのキャリア形成"
          thumbnail="/works/tokyo-university-of-science-class.jpg"
          isDisabled
        />
        <Card
          year="2017"
          name="東京理科大学 - 寄稿(科学フォーラム)"
          link="contents/tokyo-university-of-science-article"
          title="好きなことを仕事にする"
          thumbnail="/works/tokyo-university-of-science-article.jpg"
          isDisabled
        />
        <Card
          year="2016"
          name="Spring Day 2016"
          link="contents/travel-spring"
          description="楽天トラベルとSpring"
          thumbnail="/works/travel-spring.jpg"
          isDisabled
        />
        <Card
          year="2015"
          name="JSUG(Japan Spring User Group)"
          link="contents/jsug-spring-rest-docs"
          description="Spring Rest Docs(SpringOneを経験してよりよいWebサービスを作るために僕らが取り組むこと)"
          thumbnail="/works/jsug-spring-rest-docs.jpg"
          isDisabled
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
.card a,
.thumbnail-link {
  text-decoration: none;
  color: #373c38;
}
.card a:hover,
.thumbnail-link:hover {
  text-decoration: none;
  color: #38a1db; //Tsuyukusa
}
.thumbnail {
  width: 100%;
}
a:hover .thumbnail {
  opacity: 0.7;
  transition-duration: 0.3s;
}

@media (max-width: 768px) {
  .flex {
    width: 100%;
  }
  .card {
    padding: 15px 0px;
    width: 100%;
  }
}
</style>
