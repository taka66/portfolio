<template>
  <section>
    <div class="bio">
      <h3>主な発表・公演</h3>
      <div class="flex">
        <div class="card">
          <NuxtLink
            class="thumbnail-link"
            :to="$i18n.path('contents/react-tokyo-plus')"
            exact
          >
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p>2019</p>
            <p>React Tokyo Plus</p>
            <p>
              Large react product with 20+ FrontEnd Engineers in Rakuten Travel
            </p>
          </NuxtLink>
        </div>
        <div class="card">
          <NuxtLink
            class="thumbnail-link"
            :to="$i18n.path('contents/travel-frontend-react')"
            exact
          >
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p>2019</p>
            <p>React Meetup</p>
            <p>楽天トラベルのフロントエンドについて</p>
          </NuxtLink>
        </div>
        <div class="card">
          <NuxtLink
            class="thumbnail-link"
            :to="$i18n.path('contents/microservice-meetup')"
            exact
          >
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p>2018</p>
            <p>Microservice Meetup Vol.6</p>
            <p>
              FrontEndからみるmicroserviceとBackendからみるmicroservice
            </p>
          </NuxtLink>
        </div>
        <div class="card">
          <NuxtLink
            class="thumbnail-link"
            :to="$i18n.path('contents/tokyo-university-of-science-class')"
            exact
          >
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p>2017</p>
            <p>東京理科大学 - 公演</p>
            <p>
              グローバルな環境におけるエンジニアのキャリア形成
            </p>
          </NuxtLink>
        </div>
        <div class="card">
          <NuxtLink
            class="thumbnail-link"
            :to="$i18n.path('contents/tokyo-university-of-science-article')"
            exact
          >
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p>2017</p>
            <p>東京理科大学 - 寄稿(科学フォーラム)</p>
            <p>
              好きなことを仕事にする
            </p>
          </NuxtLink>
        </div>
        <div class="card">
          <NuxtLink
            class="thumbnail-link"
            :to="$i18n.path('contents/travel-spring')"
            exact
          >
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p>2016</p>
            <p>Spring Day 2016</p>
            <p>
              楽天トラベルとSpring
            </p>
          </NuxtLink>
        </div>
        <div class="card">
          <NuxtLink
            class="thumbnail-link"
            :to="$i18n.path('contents/jsug-spring-rest-docs')"
            exact
          >
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p>2015</p>
            <p>JSUG(Japan Spring User Group)</p>
            <p>
              Spring Rest
              Docs(SpringOneを経験してよりよいWebサービスを作るために僕らが取り組むこと)
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
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
</style>
