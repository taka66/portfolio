<template>
  <div>
    <div class="blog__h">
      <h1>割と大きい会社から割と小さい会社に転職して一ヶ月働いてみて</h1>
    </div>
    <div class="blog__header">
      <NameCard date="2/Feb" />
      <Share
        url="http://takahirofujii.dev/articles/one-month"
        text="割と大きい会社から割と小さい会社に転職して一ヶ月働いてみて UI/UX Engineer Takahiro Fujii's portfolio"
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
      text="https://wealth-park.com/ja/corporate-corporate/"
    />
    <ExternalLink
      link="https://thebridge.jp/2019/05/wealthpark-interview"
      text="https://thebridge.jp/2019/05/wealthpark-interview"
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
      text="https://www.ssipeople.com/2015/11/03/can-qa-be-a-scrum-master/"
    />
    <Separater />
    <div class="blog__h">
      <h2>7.組織の垂直型分業と水平分業 / Squadについて</h2>
    </div>
    <Paragraph text="one-month.squad-1" />
    <Paragraph text="one-month.squad-2" />
    <Paragraph text="one-month.squad-3" />
    <List :texts="squad" />
    <Paragraph text="one-month.squad-4" />
    <Paragraph text="one-month.squad-5" />
    <ExternalLink
      link="https://qiita.com/panpanpanyasan/items/f0e58a5625f7f40bcbb2"
      text="Spotifyモデルの勉強をしてみる"
    />
    <Separater />
    <div class="blog__h">
      <h2>7.QCD(qauality/cost/delivery)</h2>
    </div>
    <Paragraph text="one-month.qcd-1" />
    <SpeakerDeck id="df80a3e8925440008e727cb3b2763c61" />
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
      text="割と大きい会社から割と小さい会社に転職して一ヶ月働いてみて。 UI/UX Engineer Takahiro Fujii's portfolio"
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
export default {
  components: {
    Share,
    List,
    Paragraph,
    Separater,
    NameCard,
    SpeakerDeck,
    BlogTitleImage,
    ExternalLink
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '直感と論理をつなぐ思考法 VISION DRIVEN を読んで考えていること',
        description:
          '直感と論理をつなぐ思考法 VISION DRIVEN を読んで考えていること by takahiro fujii',
        type: 'article',
        url: 'https://takahirofujii.dev/articles/vision-driven'
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
        'one-month.1mmonth.10'
      ],
      personal: ['vision-driven.personal.1', 'vision-driven.personal.2']
    }
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
