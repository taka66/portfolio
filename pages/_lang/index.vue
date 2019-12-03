<template>
  <section>
    <div>
      <h1 class="title">
        <p>{{ $t('index.role') }}</p>
        <br />
        <div class="icontext">
          <span>{{ $t('index.name') }}</span>
          <img class="profile" src="~/assets/me.png" alt="profile" />
        </div>
      </h1>
      <section>
        <h3>{{ $t('index.activity') }}</h3>
        <div class="flex">
          <Card
            name="Intoroduce my favorite Tokyo places"
            link="https://takahirofujii.com/tokyo-as-a-local/"
            title="Tokyo as a local(Tokyo as hometown)"
            thumbnail="/products/tokyo-as-a-local.png"
            outsidelink
          />
          <Card
            name="Tech Blog(Mainly Japanese)"
            link="http://takahiro-fujii.hatenablog.com/"
            title="Desi-gineer"
            thumbnail="/products/hatena-blog.png"
            outsidelink
          />
          <Card
            name="KOIKI"
            link="https://koikijs.github.io/"
            title="Co-Founder of creative organization"
            thumbnail="/products/koiki.png"
            outsidelink
          />
        </div>
      </section>
    </div>
    <Share
      url="https://takahirofujii.dev"
      text="takahirofujii.dev UI/UX Engineer Takahiro Fujii's portfolio"
    />
  </section>
</template>

<script>
import Share from '~/components/organisms/Share.vue'
import Card from '~/components/organisms/Card.vue'
export default {
  components: {
    Card,
    Share
  }
}
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
    width: 80px;
  }
}

.icontext {
  span {
    vertical-align: bottom;
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

@media (max-width: 768px) {
  .title {
    font-size: 36px;
    img {
      width: 64px;
    }
  }
}
</style>
