<template>
  <section>
    <div class="bio">
      <h3>主な発表・公演</h3>
      <div class="flex">
        <div class="card">
          <a href="https://takahirofujii.com">
            <img class="thumbnail" src="~/assets/test.jpg" />
          </a>
          <p class="thumbnail-p">2019</p>
          <p class="thumbnail-p">React Tokyo Plus</p>
          <p class="thumbnail-p">
            Large react product with 20+ FrontEnd Engineers in Rakuten Travel
          </p>
        </div>
        <div class="card">
          <a href="https://takahirofujii.com">
            <img class="thumbnail" src="~/assets/test.jpg" />
          </a>
          <p>test</p>
        </div>
        <div class="card">
          <a href="https://takahirofujii.com">
            <img class="thumbnail" src="~/assets/test.jpg" />
          </a>
          <p>test</p>
        </div>
        <div class="card">
          <a href="https://takahirofujii.com">
            <img class="thumbnail" src="~/assets/test.jpg" />
          </a>
          <p>test</p>
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
.thumbnail {
  width: 100%;
}
.thumbnail-p {
  font-size: 20px;
}
a:hover .thumbnail {
  opacity: 0.7;
  transition-duration: 0.3s;
}
</style>
