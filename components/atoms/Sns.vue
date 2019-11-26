<template>
  <client-only>
    <div class="sns">
      <div
        class="fb-share-button"
        :data-href="link"
        data-layout="button"
        data-size="large"
      ></div>
      <div id="fb-root"></div>
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: 'https://takahirofujii.dev'
    }
  },
  mounted() {
    if (!document.getElementById('facebook-jssdk')) {
      ;(function(d, s, id) {
        let js // eslint-disable-line
        const fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s) // eslint-disable-line
        js.id = id
        js.src =
          'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.2'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    }
  }
}
</script>

<style lang="scss">
.sns {
  margin-top: 20px;
}
</style>
