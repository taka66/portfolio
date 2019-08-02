<template>
  <section>
    <div>
      <h1 class="title">
        <p>UI / UX Engineer</p>
        <span>TAKAHIRO FUJII</span>
        <img class="profile" src="~/assets/me.png" alt="profile" />
      </h1>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.title {
  font-family: 'PT Sans', 'Quicksand', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  margin-top: 200px;
  margin-bottom: 200px;
  font-weight: 300;
  font-size: 80px;
  color: #333333;
  letter-spacing: 1px;

  img {
    width: 60px;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
