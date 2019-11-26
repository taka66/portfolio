<template>
  <section>
    <div>
      <h3>{{ $t('design.title') }}</h3>
      <div class="design-flex">
        <Card
          year="2019"
          name="design.name.nabnab"
          link="https://store.line.me/stickershop/product/6828126"
          title="design.titles.nabnab"
          thumbnail="/design/nabnab.png"
          outsidelink
        />
        <Card
          year="2019"
          name="design.name.tokyoflower"
          link="tokyoflower"
          title="design.titles.tokyoflower"
          thumbnail="/design/tokyoflower.png"
          disabled
        />
        <Card
          year="2019"
          name="design.name.webhack"
          link="webhack"
          title="design.titles.webhack"
          thumbnail="/design/webhack.png"
          disabled
        />
        <Card
          year="2019"
          name="design.name.winx"
          link="winx"
          title="design.titles.winx"
          thumbnail="/design/winx.png"
          disabled
        />
        <Card
          year="2019"
          name="design.name.business-card"
          link="business-card"
          title="design.titles.business-card"
          thumbnail="/design/business-card.png"
          disabled
        />
        <Card
          year="2018"
          name="design.name.nabnab-old"
          link="https://store.line.me/stickershop/product/4813573"
          title="design.titles.nabnab-old"
          thumbnail="/design/nabnab-old.png"
          outsidelink
        />
        <Card
          year="2015"
          name="design.name.superpoints"
          link="superpoints"
          title="design.titles.superpoints"
          thumbnail="/design/superpoints.png"
          disabled
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
.design-flex {
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
  transition: 0.3s ease;
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

@media (min-width: 1440px) {
  .card {
    width: 33%;
  }
}
</style>
