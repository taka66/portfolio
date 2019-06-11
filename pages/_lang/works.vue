<template>
  <section>
    <div class="bio">
      <h3>主な発表・公演</h3>
      <div class="flex">
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
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: auto;
}
.card {
  padding: 10px;
  width: 50%;
}
.thumbnail {
  width: 100%;
}
a:hover .thumbnail {
  opacity: 0.7;
  transition-duration: 0.3s;
}
</style>
