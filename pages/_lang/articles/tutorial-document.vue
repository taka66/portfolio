<template>
  <div>
    <div class="blog__h">
      <h1>
        インターン向けの事前オンボード、チュートリアル資料を作成するにあたって意識する5つのこと
      </h1>
    </div>
    <div class="blog__header">
      <NameCard date="7/Feb" min="5" />
      <Share
        url="http://takahirofujii.dev/articles/tutorial-document"
        text="インターン向けの事前オンボード、チュートリアル資料を作成するにあたって意識する5つのこと UI/UX Engineer Takahiro Fujii's portfolio"
      />
    </div>
    <BlogTitleImage
      class="tutorial-document_blog__title__image"
      uri="/articles/tutorial-document"
      backgroundcolor="#4491e4"
    />
    <div class="blog__h">
      <h2>はじめに</h2>
    </div>
    <Paragraph text="tutorial-document.1" />
    <Separater />
    <div class="blog__h">
      <h2>この記事の対象となるケース</h2>
    </div>
    <List :texts="target" />
    <Separater />
    <div class="blog__h">
      <h2>この記事の対象とならないケース</h2>
    </div>
    <List :texts="outOfScope" />
    <Paragraph text="tutorial-document.4" />
    <Separater />
    <div class="blog__h">
      <h2>1.文章を多くしすぎない、自分の文章で全てを説明しない</h2>
    </div>
    <Paragraph text="tutorial-document.first" />
    <Separater />
    <div class="blog__h">
      <h2>2.資料は経年劣化する</h2>
    </div>
    <Paragraph text="tutorial-document.second" />
    <Separater />
    <div class="blog__h">
      <h2>3.期待値、なぜを書く</h2>
    </div>
    <Paragraph text="tutorial-document.third" />
    <Separater />
    <div class="blog__h">
      <h2>4.最低限やってほしいこと、ボーナスポイントを用意する</h2>
    </div>
    <Paragraph text="tutorial-document.fourth.1" />
    <Paragraph text="tutorial-document.fourth.2" />
    <Paragraph text="tutorial-document.fourth.3" />
    <Paragraph text="tutorial-document.fourth.4" />
    <Paragraph text="tutorial-document.fourth.5" />
    <Paragraph text="tutorial-document.fourth.6" />
    <Paragraph text="tutorial-document.fourth.7" />
    <Separater />
    <div class="blog__h">
      <h2>
        5.どこかのタイミングでチュートリアルを捨て、自走してもらえたら最高
      </h2>
    </div>
    <Paragraph text="tutorial-document.fifth.1" />
    <Paragraph text="tutorial-document.fifth.2" />
    <Paragraph text="tutorial-document.fifth.3" />
    <Separater />
    <Paragraph text="tutorial-document.5" />
    <Separater />
    <Share
      url="http://takahirofujii.dev/articles/tutorial-document"
      text="インターン向けの事前オンボード、チュートリアル資料を作成するにあたって意識する5つのこと(エンジニア) UI/UX Engineer Takahiro Fujii's portfolio"
    />
  </div>
</template>

<script>
import Meta from '~/components/mixins/meta'
import Share from '~/components/organisms/Share.vue'
import List from '~/components/blogs/List.vue'
import Paragraph from '~/components/blogs/Paragraph.vue'
import Separater from '~/components/blogs/Separater.vue'
import NameCard from '~/components/blogs/NameCard.vue'
import BlogTitleImage from '~/components/blogs/BlogTitleImage.vue'
export default {
  components: {
    Share,
    List,
    Paragraph,
    Separater,
    NameCard,
    BlogTitleImage
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title:
          'インターン向けの事前オンボード、チュートリアル資料を作成するにあたって意識する5つのこと(エンジニア)',
        description:
          'インターン向けの事前オンボード、チュートリアル資料を作成するにあたって意識する5つのこと(エンジニア) by takahiro fujii',
        type: 'article',
        url: 'https://takahirofujii.dev/articles/tutorial-document',
        image: 'https://takahirofujii.dev/ogp/ogp-tutorial-document.png'
      },
      target: [
        'tutorial-document.target.1',
        'tutorial-document.target.2',
        'tutorial-document.target.3'
      ],
      outOfScope: [
        'tutorial-document.outOfScope.1',
        'tutorial-document.outOfScope.2',
        'tutorial-document.outOfScope.3'
      ]
    }
  }
}
</script>

<style lang="scss">
.blog__h {
  text-align: left;
  margin-top: 48px;
  margin-left: 15%;
  margin-right: 15%;
}
.tutorial-document__blog__title__image {
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
