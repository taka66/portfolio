<template>
  <div class="container">
    <Header class="header" />
    <div id="content" class="content">
      <nuxt class="nuxt" />
      <Footer class="footer" />
    </div>
  </div>
</template>

<script>
import Header from '~/components/organisms/Header.vue'
import Footer from '~/components/organisms/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
html {
  font-family: 'PT Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
}

h2 {
  font-size: 1.6rem;
  font-weight: bold;
}

h3 {
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0px;
}

.container {
  // min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  background-image: url('../assets/logo-neon.png');
  background-repeat: no-repeat;
  background-position: center center;
}

.header {
  height: 50px;
  width: 100%;
  // background-color: #dcdcdc;
}

.content {
  overflow-y: auto;
  height: inherit;
  -webkit-overflow-scrolling: touch;
}

.footer {
  margin: 20px 0px 10px;
  height: 30px;
  width: 100%;
  // background-color: #dcdcdc;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
@media (max-width: 768px) {
  .footer {
    margin: 20px 0px 50px;
  }
}
</style>
