<template>
  <div>
    <div class="blog__h">
      <h1>"直感と論理をつなぐ思考法 VISION DRIVEN" を読んで考えていること</h1>
    </div>
    <div class="blog__header">
      <NameCard date="7/Jan" />
      <Share
        url="http://takahirofujii.dev/articles/vision-driven"
        text="直感と論理をつなぐ思考法 VISION DRIVEN を読んで考えていること UI/UX Engineer Takahiro Fujii's portfolio"
      />
    </div>
    <BlogTitleImage
      class="job_change__blog__title__image"
      uri="/articles/vision-driven"
      backgroundcolor="#FB8F42"
    />
    <div class="blog__h">
      <h2>読んだ本</h2>
    </div>
    <ExternalLink
      link="https://amzn.to/2SZVHb2"
      text="直感と論理をつなぐ思考法 VISION DRIVEN"
    />
    <InternalImage
      url="vision-driven-book.jpg"
      desc="直感と論理をつなぐ思考法 VISION DRIVEN by 左宗邦威"
    />
    <Separater />
    <div class="blog__h">
      <h2>まとめ</h2>
    </div>
    <Separater />
    <div class="blog__h">
      <h3>よかった点</h3>
    </div>
    <List :texts="good" />
    <Separater />
    <div class="blog__h">
      <h3>考えさせられた点、感じたこと</h3>
    </div>
    <List :texts="cons" />
    <Separater />
    <div class="blog__h">
      <h3>自分にとって、この本は</h3>
    </div>
    <Paragraph text="vision-driven.1" />
    <List :texts="personal" />
    <Paragraph text="vision-driven.2" />
    <Separater />
    <div class="blog__h">
      <h2>最初に</h2>
    </div>
    <Paragraph text="vision-driven.3" />
    <Paragraph text="vision-driven.4" />
    <Paragraph text="vision-driven.4-1" nospace />
    <List :texts="topics" />
    <Paragraph text="vision-driven.5" />
    <Separater />
    <div class="blog__h">
      <h2>他人モードと自分モード</h2>
    </div>
    <Paragraph text="vision-driven.6" />
    <br />
    <Paragraph text="vision-driven.7" />
    <Paragraph text="vision-driven.8" nospace />
    <Paragraph text="vision-driven.9" />
    <Paragraph text="vision-driven.10" />
    <Paragraph text="vision-driven.11" />
    <Paragraph text="vision-driven.12" nospace />
    <Paragraph text="vision-driven.13" />
    <Paragraph text="vision-driven.14" />
    <Paragraph text="vision-driven.15" />
    <Paragraph text="vision-driven.16" />
    <Separater />
    <div class="blog__h">
      <h2>
        自分モードから生まれる直感や妄想をどのように自分の中に落とし込んでいくのか
      </h2>
    </div>
    <Paragraph text="vision-driven.17" />
    <Paragraph text="vision-driven.18" />
    <Paragraph text="vision-driven.19" />
    <Separater />
    <div class="blog__h">
      <h2>
        おまけ
      </h2>
    </div>
    <Paragraph text="vision-driven.20" />
    <Paragraph text="vision-driven.21" />
    <Paragraph text="vision-driven.22" />
    <ExternalLink
      link="https://conferences.oreilly.com/solid/solid2014/public/schedule/detail/34097"
      text="Vision-Driven: Beyond Tangible Bits, Towards Radical Atoms"
    />
    <Separater />
    <div class="blog__h">
      <h2>
        あとがき
      </h2>
    </div>
    <Paragraph text="vision-driven.23" />
    <ExternalLink
      link="https://amzn.to/39N6Rps"
      text="ひとりの妄想で未来は変わる VISION DRIVEN INNOVATION"
    />
    <Separater />
    <Share
      url="http://takahirofujii.dev/articles/vision-driven"
      text="直感と論理をつなぐ思考法 VISION DRIVEN を読んで考えていること。 UI/UX Engineer Takahiro Fujii's portfolio"
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
import InternalImage from '~/components/blogs/InternalImage.vue'
import BlogTitleImage from '~/components/blogs/BlogTitleImage.vue'
export default {
  components: {
    Share,
    List,
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
        title: '直感と論理をつなぐ思考法 VISION DRIVEN を読んで考えていること',
        description:
          '直感と論理をつなぐ思考法 VISION DRIVEN を読んで考えていること by takahiro fujii',
        type: 'article',
        url: 'https://takahirofujii.dev/articles/vision-driven'
      },
      good: [
        'vision-driven.good.1',
        'vision-driven.good.2',
        'vision-driven.good.3'
      ],
      cons: [
        'vision-driven.cons.1',
        'vision-driven.cons.2',
        'vision-driven.cons.3'
      ],
      topics: ['vision-driven.topics.1', 'vision-driven.topics.2'],
      personal: ['vision-driven.personal.1', 'vision-driven.personal.2']
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
