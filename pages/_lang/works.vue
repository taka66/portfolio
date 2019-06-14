<template>
  <section>
    <div class="bio">
      <h3>主な発表・公演</h3>
      <div class="flex">
        <div class="card">
          <a href="https://takahirofujii.com">
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p class="thumbnail-p">2019</p>
            <p class="thumbnail-p">React Tokyo Plus</p>
            <p class="thumbnail-p">
              Large react product with 20+ FrontEnd Engineers in Rakuten Travel
            </p>
          </a>
        </div>
        <div class="card">
          <a href="https://takahirofujii.com">
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p class="thumbnail-p">2019</p>
            <p class="thumbnail-p">React Meetup</p>
            <p class="thumbnail-p">楽天トラベルのフロントエンドについて</p>
          </a>
        </div>
        <div class="card">
          <a href="https://takahirofujii.com">
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p class="thumbnail-p">2018</p>
            <p class="thumbnail-p">Microservice Meetup Vol.6</p>
            <p class="thumbnail-p">
              FrontEndからみるmicroserviceとBackendからみるmicroservice
            </p>
          </a>
        </div>
        <div class="card">
          <a href="https://takahirofujii.com">
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p class="thumbnail-p">2017</p>
            <p class="thumbnail-p">東京理科大学 - 公演</p>
            <p class="thumbnail-p">
              グローバルな環境におけるエンジニアのキャリア形成
            </p>
          </a>
        </div>
        <div class="card">
          <a href="https://takahirofujii.com">
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p class="thumbnail-p">2017</p>
            <p class="thumbnail-p">東京理科大学 - 寄稿(科学フォーラム)</p>
            <p class="thumbnail-p">
              好きなことを仕事にする
            </p>
          </a>
        </div>
        <div class="card">
          <a href="https://takahirofujii.com">
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p class="thumbnail-p">2016</p>
            <p class="thumbnail-p">Spring Day 2016</p>
            <p class="thumbnail-p">
              楽天トラベルとSpring
            </p>
          </a>
        </div>
        <div class="card">
          <a href="https://takahirofujii.com">
            <img class="thumbnail" src="~/assets/test.jpg" />
            <p class="thumbnail-p">2015</p>
            <p class="thumbnail-p">JSUG(Japan Spring User Group)</p>
            <p class="thumbnail-p">
              Spring Rest
              Docs(SpringOneを経験してよりよいWebサービスを作るために僕らが取り組むこと)
            </p>
          </a>
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
}
.card a {
  text-decoration: none;
  color: #373c38;
}
.card a:hover {
  text-decoration: none;
  color: #38a1db; //Tsuyukusa
}
.thumbnail {
  width: 100%;
}
.thumbnail-p {
  font-size: 14px;
}
a:hover .thumbnail {
  opacity: 0.7;
  transition-duration: 0.3s;
}
</style>
