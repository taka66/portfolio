<template>
  <div>
    <div class="blog__h">
      <h1>転職して一ヶ月働いてみて(Rakuten -> WealthPark)</h1>
    </div>
    <div class="blog__header">
      <NameCard date="3/Feb" min="8" />
      <Share
        url="http://takahirofujii.dev/articles/one-month"
        text="転職して一ヶ月働いてみて(Rakuten -> WealthPark) UI/UX Engineer Takahiro Fujii's portfolio"
      />
    </div>
    <BlogTitleImage
      class="one_month__blog__title__image"
      uri="/articles/one-month"
      backgroundcolor="#b8a86f"
    />
    <div class="blog__h">
      <h2>はじめに</h2>
    </div>
    <Paragraph text="one-month.1" />
    <Paragraph text="one-month.2" />
    <Separater />
    <div class="blog__h">
      <h2>前職と現職</h2>
    </div>
    <Paragraph text="one-month.3" />
    <ExternalLink
      link="https://wealth-park.com/ja/corporate-corporate/"
      text="会社概要 | WealthPark"
    />
    <ExternalLink
      link="https://thebridge.jp/2019/05/wealthpark-interview"
      text="WealthPark が取り組むオルタナティブ資産投資とは"
    />
    <Paragraph text="one-month.4" />
    <Separater />
    <div class="blog__h">
      <h2>1.ひさしぶりの緊張感</h2>
    </div>
    <Paragraph text="one-month.5" />
    <Separater />
    <div class="blog__h">
      <h2>2.メンバーとの関係性の構築</h2>
    </div>
    <Paragraph text="one-month.6" />
    <Paragraph text="one-month.7" />
    <Separater />
    <div class="blog__h">
      <h2>3.3時のコーヒータイム(散歩)</h2>
    </div>
    <Paragraph text="one-month.coffee" />
    <InternalImage url="coffee.jpg" desc="Coffee" />
    <Separater />
    <div class="blog__h">
      <h2>4.QAによるオンボーディング</h2>
    </div>
    <Paragraph text="one-month.onboarding" />
    <Separater />
    <div class="blog__h">
      <h2>5.QAがスクラムマスター</h2>
    </div>
    <Paragraph text="one-month.scrum-1" />

    <List :texts="scrum" />
    <Paragraph text="one-month.scrum-2" />
    <ExternalLink
      link="https://www.ssipeople.com/2015/11/03/can-qa-be-a-scrum-master/"
      text="Can QA Be A Scrum Master?"
    />
    <ExternalLink
      link="https://www.scrumalliance.org/get-certified/product-owner-track/certified-scrum-product-owner"
      text="Certified Scrum Product Owner®"
    />
    <Separater />
    <div class="blog__h">
      <h2>7.組織の垂直型分業と水平分業 / Squadについて</h2>
    </div>
    <Paragraph text="one-month.squad-0" />
    <ExternalLink
      link="https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf"
      text="Scaling Agile @ Spotify"
    />
    <ExternalLink
      link="https://lean-trenches.com/scaling-agile-at-spotify-ja/"
      text="Spotifyのスケーリングアジャイル – 部隊、分隊、支部やギルドと共に歩む"
    />
    <Paragraph text="one-month.squad-1" />
    <Paragraph text="one-month.squad-2" />
    <Paragraph text="one-month.squad-3" />
    <List :texts="squad" />
    <Paragraph text="one-month.squad-4" />
    <Paragraph text="one-month.squad-5" />
    <ExternalLink
      link="https://techplay.jp/column/709"
      text="エンジニアリング組織の設計と実践──「メルペイ」の事例から学ぶ、組織とアーキテクトの関係性とは？"
    />
    <Paragraph text="one-month.squad-6" />
    <ExternalLink
      link="https://qiita.com/panpanpanyasan/items/f0e58a5625f7f40bcbb2"
      text="Spotifyモデルの勉強をしてみる"
    />
    <Separater />
    <div class="blog__h">
      <h2>7.QCD</h2>
    </div>
    <Paragraph text="one-month.qcd-1" />
    <div class="margin__w">
      <SpeakerDeck id="df80a3e8925440008e727cb3b2763c61" />
    </div>
    <Paragraph text="one-month.qcd-2" />
    <Separater />
    <div class="blog__h">
      <h2>8.その他</h2>
    </div>
    <Paragraph text="one-month.8" />
    <List :texts="onemonth" />
    <Separater />
    <Share
      url="http://takahirofujii.dev/articles/one-month"
      text="転職して一ヶ月働いてみて(Rakuten -> WealthPark) UI/UX Engineer Takahiro Fujii's portfolio"
    />
  </div>
</template>

<script>
import Meta from '~/components/mixins/meta'
import ExternalLink from '~/components/atoms/ExternalLink.vue'
import Share from '~/components/organisms/Share.vue'
import List from '~/components/blogs/List.vue'
import Paragraph from '~/components/blogs/Paragraph.vue'
import Separater from '~/components/blogs/Separater.vue'
import NameCard from '~/components/blogs/NameCard.vue'
import SpeakerDeck from '~/components/atoms/SpeakerDeck.vue'
import BlogTitleImage from '~/components/blogs/BlogTitleImage.vue'
import InternalImage from '~/components/blogs/InternalImage.vue'
export default {
  components: {
    Share,
    List,
    Paragraph,
    Separater,
    NameCard,
    SpeakerDeck,
    BlogTitleImage,
    ExternalLink,
    InternalImage
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '転職して一ヶ月働いてみて(Rakuten -> WealthPark)',
        description:
          '転職して一ヶ月働いてみて(Rakuten -> WealthPark) by takahiro fujii',
        type: 'article',
        url: 'https://takahirofujii.dev/articles/one-month',
        image: 'https://takahirofujii.dev/ogp/ogp-one-month.png'
      },
      scrum: ['one-month.scrum.1', 'one-month.scrum.2', 'one-month.scrum.3'],
      squad: ['one-month.squad.1', 'one-month.squad.2', 'one-month.squad.3'],
      onemonth: [
        'one-month.1mmonth.1',
        'one-month.1mmonth.2',
        'one-month.1mmonth.3',
        'one-month.1mmonth.4',
        'one-month.1mmonth.5',
        'one-month.1mmonth.6',
        'one-month.1mmonth.7',
        'one-month.1mmonth.8',
        'one-month.1mmonth.9',
        'one-month.1mmonth.10',
        'one-month.1mmonth.11'
      ]
    }
  },
  /* https://qiita.com/kei_0121/items/71735756556c29dc2d16 */
  mounted() {
    document.getElementById('content').scrollTop = 0
  }
}
</script>

<style lang="scss">
.blog__h {
  text-align: left;
  margin-top: 24px;
  margin-left: 15%;
  margin-right: 15%;
}
.one_month__blog__title__image {
  margin-top: 24px;
  margin-bottom: 48px;
}

.blog__header {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-left: 15%;
  margin-right: 15%;
}

.margin__w {
  margin-top: 48px;
}
@media (max-width: 768px) {
  .blog__h {
    margin-left: 10%;
  }
  .blog__header {
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
