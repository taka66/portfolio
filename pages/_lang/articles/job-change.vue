<template>
  <div>
    <div class="blog__h">
      <h1>退職エントリー</h1>
    </div>
    <div class="blog__header">
      <NameCard date="1/Dec" />
      <Share
        url="http://takahirofujii.dev/articles/job-change"
        text="退職エントリー UI/UX Engineer Takahiro Fujii's portfolio"
      />
    </div>
    <BlogTitleImage
      class="job_change__blog__title__image"
      uri="/articles/job-change"
      backgroundcolor="#29ABE2"
    />
    <Paragraph text="job-change.prologue.1" />
    <Paragraph text="job-change.prologue.2" />
    <Paragraph text="job-change.prologue.3" />
    <Separater />
    <div class="blog__h">
      <h2>自己紹介</h2>
    </div>
    <Paragraph text="job-change.introduction.1" />
    <List :texts="services" />
    <Paragraph text="job-change.introduction.2" />
    <ExternalLink
      link="https://corp.rakuten.co.jp/careers/interview/takahiro/"
      text="Takahiro：キャリア採用｜楽天株式会社"
    />
    <Separater />
    <div class="blog__h">
      <h2>英語</h2>
    </div>
    <Paragraph text="job-change.english.1" />
    <Paragraph text="job-change.english.2" />
    <Paragraph text="job-change.english.3" />
    <Paragraph text="job-change.english.4" />
    <Separater />
    <div class="blog__h">
      <h2>1~3年目</h2>
    </div>
    <Paragraph text="job-change.1-3year.1" />
    <Paragraph text="job-change.1-3year.2" />
    <Paragraph text="job-change.1-3year.3" />
    <Paragraph text="job-change.1-3year.4" />
    <Paragraph text="job-change.1-3year.5" />
    <ExternalImage
      url="https://speakerd.s3.amazonaws.com/presentations/78961d6bdd1e464893bd356ea499a047/preview_slide_15.jpg?424749"
      link="https://speakerdeck.com/taka66/microservices-at-microservice-meetup-vol-dot-6?slide=16"
      desc="Microservices@microservice Meetup vol.6"
    />
    <Paragraph text="job-change.1-3year.6" />
    <Paragraph text="job-change.1-3year.7" />
    <ExternalImage
      url="https://speakerd.s3.amazonaws.com/presentations/78961d6bdd1e464893bd356ea499a047/preview_slide_16.jpg?424749"
      link="https://speakerdeck.com/taka66/microservices-at-microservice-meetup-vol-dot-6?slide=17"
      desc="Microservices@microservice Meetup vol.6"
    />
    <Paragraph text="job-change.1-3year.8" />
    <Paragraph text="job-change.1-3year.9" />
    <Paragraph text="job-change.1-3year.10" />
    <Separater />
    <div class="blog__h">
      <h2>4~6年目</h2>
    </div>
    <Paragraph text="job-change.4-6year.1" />
    <ExternalImage
      url="https://speakerd.s3.amazonaws.com/presentations/78961d6bdd1e464893bd356ea499a047/preview_slide_32.jpg?424749"
      link="https://speakerdeck.com/taka66/microservices-at-microservice-meetup-vol-dot-6?slide=33"
      desc="Microservices@microservice Meetup vol.6"
    />
    <Paragraph text="job-change.4-6year.2" />
    <ExternalLink
      link="https://careerhack.en-japan.com/report/detail/737"
      text="「理想を追え、世界を見よ」 楽天トラベル 齊藤満が語った、PMこそ理想主義者であるべき理由"
    />
    <ExternalLink
      link="https://type.jp/et/feature/1770"
      text="18年間プロダクトマネジメントを生業にして来た男を支える「5％の光」とは～楽天トラベル齊藤満氏の流儀【及川卓也のプロダクトマネジャー探訪"
    />
    <Paragraph text="job-change.4-6year.3" />
    <Paragraph text="job-change.4-6year.4" />
    <Paragraph text="job-change.4-6year.5" />
    <Separater />
    <div class="blog__h">
      <h2>7~9年目</h2>
    </div>
    <Paragraph text="job-change.7-9year.1" />
    <ExternalImage
      url="https://speakerd.s3.amazonaws.com/presentations/e9f8b2820c1642b78293ddf3182f3e72/preview_slide_5.jpg?519188"
      link="https://speakerdeck.com/taka66/le-tian-toraberufalsehurontoendonituite-react-meetup?slide=6"
      desc="楽天トラベルのフロントエンドについて(LT)"
    />
    <Paragraph text="job-change.7-9year.2" />
    <Paragraph text="job-change.7-9year.3" />
    <Paragraph text="job-change.7-9year.4" />
    <InternalImage
      url="sideroad.jpg"
      desc="よこみちさんとふじい(と見切れている大ボス)"
    />
    <Paragraph text="job-change.7-9year.5" />
    <Paragraph text="job-change.7-9year.6" />
    <Paragraph text="job-change.7-9year.7" />
    <ExternalLink
      link="https://talent.rakuten.careers/jobs/front-end-engineer-travel-tid-9691"
      text="フロントエンドエンジニア（トラベルサービス）：TID - Rakutenのキャリア"
    />
    <Separater />
    <div class="blog__h">
      <h2>転職</h2>
    </div>
    <Paragraph text="job-change.job-change.1" />
    <Paragraph text="job-change.job-change.2" />
    <Paragraph text="job-change.job-change.3" />
    <List :texts="points" />
    <Paragraph text="job-change.job-change.4" />
    <Paragraph text="job-change.job-change.5" />
    <Paragraph text="job-change.job-change.6" />
    <Paragraph text="job-change.job-change.7" />
    <InternalImage url="presents.jpg" desc="退職の際には、色々もらいました！" />
    <Separater />
    <div class="blog__h">
      <h2>楽天での経験を経て身につけられたこと</h2>
    </div>
    <Paragraph text="job-change.experiences.1" />
    <List :texts="skills" />
    <Paragraph text="job-change.experiences.2" />
    <Separater />
    <div class="blog__h">
      <h2>楽天のよかった点</h2>
    </div>
    <Paragraph text="job-change.benefits.1" />
    <List :texts="benefits" />
    <Separater />
    <div class="blog__h">
      <h2>謝辞</h2>
    </div>
    <Paragraph text="job-change.thanks.1" />
    <Paragraph text="job-change.thanks.2" />
    <Paragraph text="job-change.thanks.3" />
    <Paragraph text="job-change.thanks.4" />
    <InternalImage url="basketball.jpg" desc="ばすけ" />
    <Paragraph text="job-change.thanks.5" />
    <ExternalLink
      link="https://www.amazon.jp/hz/wishlist/ls/HDZ80D2ZXX34?ref_=wl_share"
      text="欲しいものリスト作ってみました。ので、もしもよかったら。"
    />
    <Separater />
    <Share
      url="https://takahirofujii.dev/ja/articles/job-change"
      text="退職エントリー UI/UX Engineer Takahiro Fujii's portfolio"
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
import BlogTitleImage from '~/components/blogs/BlogTitleImage.vue'
import InternalImage from '~/components/blogs/InternalImage.vue'
import ExternalImage from '~/components/blogs/ExternalImage.vue'
export default {
  components: {
    Share,
    List,
    Paragraph,
    Separater,
    NameCard,
    BlogTitleImage,
    InternalImage,
    ExternalImage,
    ExternalLink
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '退職エントリー',
        description: '退職エントリー by takahiro fujii',
        type: 'article',
        url: 'https://takahirofujii.dev/articles/job-change'
      },
      services: [
        'job-change.services.travel',
        'job-change.services.extranet',
        'job-change.services.internal',
        'job-change.services.accounting',
        'job-change.services.inbound',
        'job-change.services.connectivity',
        'job-change.services.inquiry',
        'job-change.services.newApp',
        'job-change.services.newPlatform'
      ],
      points: [
        'job-change.job-change.points.1',
        'job-change.job-change.points.2',
        'job-change.job-change.points.3'
      ],
      skills: [
        'job-change.skills.1',
        'job-change.skills.2',
        'job-change.skills.3',
        'job-change.skills.4',
        'job-change.skills.5',
        'job-change.skills.6',
        'job-change.skills.7',
        'job-change.skills.8'
      ],
      benefits: [
        'job-change.benefits.lists.1',
        'job-change.benefits.lists.2',
        'job-change.benefits.lists.3',
        'job-change.benefits.lists.4',
        'job-change.benefits.lists.5'
      ]
    }
  }
}
</script>

<style lang="scss">
.blog__h {
  text-align: left;
  margin-top: 24px;
  margin-left: 15%;
}
.job_change__blog__title__image {
  margin-top: 24px;
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
