<template>
  <div>
    <div class="blog__h">
      <h1>
        エンジニアリングマネージャについてのポッドキャスト始めました(Koiki.fm)
      </h1>
    </div>
    <div class="blog__header">
      <NameCard date="19/Aug" min="5" />
      <Share
        url="http://takahirofujii.dev/articles/koikifm"
        text="ポッドキャスト始めました(Koiki.fm / 小粋.fm) UI/UX Engineer Takahiro Fujii's portfolio"
      />
    </div>
    <BlogTitleImage
      class="job_change__blog__title__image"
      uri="/articles/koikifm"
      backgroundcolor="#ffffff"
    />
    <div class="blog__h">
      <h2>Twitter</h2>
    </div>
    <ExternalLink link="https://twitter.com/taka_ft" text="@taka_ft" />
    <ExternalLink link="https://twitter.com/inase17000" text="@inase17000" />
    <Separater />
    <div class="blog__h">
      <h2>最初に</h2>
    </div>
    <InternalImage url="spotify.png" desc="3回配信しました！" />
    <Paragraph text="koikifm.pro.1" />
    <ExternalLink link="https://anchor.fm/koiki.fm" text="Koki.fm(Anchor)" />
    <ExternalLink
      link="https://open.spotify.com/show/6eKFTnS5scjybo6VHnyFgI?si=MWa5aUN8QmCUpCZUk13NXA"
      text="Koki.fm(Spotify)"
    />
    <Paragraph text="koikifm.pro.2" />
    <InternalImage url="whykoikifm.png" desc="誘ってもらった時" />
    <Separater />
    <div class="blog__h">
      <h2>やってみたいと思った理由</h2>
    </div>
    <div class="blog__h">
      <h3>説明機会・説明責任</h3>
    </div>
    <Paragraph text="koikifm.reason.explanation.1" />
    <Separater />
    <div class="blog__h">
      <h3>体系的な知識を整理する</h3>
    </div>
    <Paragraph text="koikifm.reason.arrangement.1" />
    <Separater />
    <div class="blog__h">
      <h3>同じような仕事をしている人との壁打ち</h3>
    </div>
    <Paragraph text="koikifm.reason.stroke.1" />
    <Separater />
    <div class="blog__h">
      <h3>楽しそう/未知</h3>
    </div>
    <Paragraph text="koikifm.reason.interest.1" />
    <Paragraph text="koikifm.reason.sum" />
    <Separater />
    <div class="blog__h">
      <h2>準備</h2>
    </div>
    <div class="blog__h">
      <h3>Anchor</h3>
    </div>
    <Paragraph text="koikifm.preparation.anchor" />
    <Separater />
    <div class="blog__h">
      <h3>ロゴ・Tシャツ作り</h3>
    </div>
    <InternalImage url="koikifmt.jpg" desc="自作Tシャツ" />
    <Paragraph text="koikifm.preparation.logo" />
    <Separater />
    <div class="blog__h">
      <h3>Miroでゆるーく準備</h3>
    </div>
    <Paragraph text="koikifm.preparation.miro" />
    <Separater />
    <div class="blog__h">
      <h3>難しさ</h3>
    </div>
    <Paragraph text="koikifm.preparation.difficulity" />
    <Separater />
    <div class="blog__h">
      <h3>反響</h3>
    </div>
    <Paragraph text="koikifm.preparation.reaction" />
    <Separater />
    <div class="blog__h">
      <h3>口癖に気づく</h3>
    </div>
    <Paragraph text="koikifm.preparation.habit" />
    <Separater />
    <div class="blog__h">
      <h2>さいごに</h2>
    </div>
    <Paragraph text="koikifm.wrap.1" />
    <Paragraph text="koikifm.wrap.2" />
    <Paragraph text="koikifm.wrap.3" />
    <ExternalLink link="https://twitter.com/taka_ft" text="@taka_ft" />
    <ExternalLink link="https://twitter.com/inase17000" text="@inase17000" />
    <Separater />
    <Share
      url="http://takahirofujii.dev/articles/koikifm"
      text="ポッドキャスト始めました(Koiki.fm / 小粋.fm) UI/UX Engineer Takahiro Fujii's portfolio"
    />
  </div>
</template>

<script>
import Meta from '~/components/mixins/meta'
import ExternalLink from '~/components/atoms/ExternalLink.vue'
import Share from '~/components/organisms/Share.vue'
import Paragraph from '~/components/blogs/Paragraph.vue'
import Separater from '~/components/blogs/Separater.vue'
import NameCard from '~/components/blogs/NameCard.vue'
import BlogTitleImage from '~/components/blogs/BlogTitleImage.vue'
import InternalImage from '~/components/blogs/InternalImage.vue'
export default {
  components: {
    Share,
    Paragraph,
    Separater,
    NameCard,
    BlogTitleImage,
    InternalImage,
    ExternalLink
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'ポッドキャスト始めました(Koiki.fm / 小粋.fm) ',
        description: 'ポッドキャスト始めました(Koiki.fm / 小粋.fm) ',
        type: 'article',
        url: 'https://takahirofujii.dev/articles/koikifm',
        image: 'https://takahirofujii.dev/ogp/ogp-koikifm.png'
      }
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
.job_change__blog__title__image {
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
