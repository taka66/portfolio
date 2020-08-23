<template>
  <div>
    <div class="blog__h">
      <h1>{{ $t('blogs.titles.wealth-park') }}</h1>
    </div>
    <div class="blog__header">
      <NameCard date="21/Aug" min="20" />
      <Share
        url="https://takahirofujii.dev/articles/wealth-park"
        text="Introducing WealthPark's engineering organization and technology stack."
      />
    </div>
    <BlogTitleImage
      class="job_change__blog__title__image"
      uri="/articles/wealth-park"
      backgroundcolor="#000000"
    />
    <div class="blog__h">
      <h2>{{ $t('wealth-park.pro.title') }}</h2>
    </div>
    <Paragraph text="wealth-park.pro.1" />
    <Paragraph text="wealth-park.pro.2" />
    <Paragraph text="wealth-park.pro.3" />
    <Paragraph text="wealth-park.pro.4" />
    <ExternalImage
      url="https://www.green-japan.com/photo/346097"
      link="https://www.wantedly.com/companies/wealth-park"
      desc="WealthPark Team Member(From Green)"
    />
    <Paragraph text="wealth-park.pro.5" />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('wealth-park.business.title') }}</h2>
    </div>
    <Paragraph text="wealth-park.business.1" />
    <Separater />
    <Paragraph text="wealth-park.business.2" />
    <ExternalLink
      link="https://wealth-park.com/corporate/"
      text="wealth-park.business.cooperate.name"
      i18n
    />
    <ExternalLink
      link="https://wealth-park.com/corporate/careers/"
      text="wealth-park.business.recruit.name"
      i18n
    />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('wealth-park.diversity.title') }}</h2>
    </div>
    <Paragraph text="wealth-park.diversity.1" />
    <Paragraph text="wealth-park.diversity.2" />
    <Paragraph text="wealth-park.diversity.3" />
    <Paragraph text="wealth-park.diversity.4" />
    <ExternalLink
      link="https://www.wantedly.com/companies/wealth-park/post_articles/187339#h2-%E5%A4%9A%E6%A7%98%E6%80%A7%E3%81%AE%E3%81%82%E3%82%8B%E3%83%81%E3%83%BC%E3%83%A0%E3%81%A7%E5%83%8D%E3%81%8D%E3%81%9F%E3%81%84"
      text="wealth-park.diversity.shoumei"
      i18n
    />
    <Quote message="wealth-park.diversity.diversity" />
    <Paragraph text="wealth-park.diversity.5" />
    <InternalImage url="coffee.jpg" desc="Coffee" />
    <Paragraph text="wealth-park.diversity.6" />
    <Paragraph text="wealth-park.diversity.7" />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('wealth-park.organization.title') }}</h2>
    </div>
    <Paragraph text="wealth-park.organization.1" />
    <Separater />
    <div class="blog__h">
      <h3>
        {{ $t('wealth-park.organization.PDE.title') }}
      </h3>
    </div>
    <Paragraph text="wealth-park.organization.PDE.1" />
    <InternalImage url="organization.jpg" desc="大まかな組織図" />
    <Separater />
    <div class="blog__h">
      <h3>
        {{ $t('wealth-park.organization.horizontal.title') }}
      </h3>
    </div>
    <Paragraph text="wealth-park.organization.horizontal.1" />
    <Paragraph text="wealth-park.organization.horizontal.2" />
    <Paragraph text="wealth-park.organization.horizontal.3" />
    <InternalImage
      url="expectation.png"
      desc="WealthParkが考えるChapter Leadへの期待値"
    />
    <Separater />
    <div class="blog__h">
      <h3>
        {{ $t('wealth-park.organization.vertical.title') }}
      </h3>
    </div>
    <Paragraph text="wealth-park.organization.vertical.1" />
    <ExternalLink
      link="https://takahirofujii.dev/articles/vpoe"
      text="https://takahirofujii.dev/articles/vpoe"
      i18n
    />
    <ExternalImage
      url="https://www.spacerefinery.com/wp-content/uploads/2018/04/2_Squads-tribes-01.png"
      link="https://spacerefinery.com/spotify-squads-agile-design/"
      desc="2 Things Your Company Can Learn From Spotify Squads and Agile Design"
    />
    <Paragraph text="wealth-park.organization.vertical.2" />
    <Paragraph text="wealth-park.organization.vertical.3" />
    <Separater />
    <Paragraph text="wealth-park.organization.vertical.summary.1" />
    <InternalImage url="matrix.png" desc="Matrix Organization" />
    <Separater />

    <div class="blog__h">
      <h2>{{ $t('wealth-park.development.title') }}</h2>
    </div>
    <div class="blog__h">
      <h3>
        Discovey
      </h3>
    </div>
    <Paragraph text="wealth-park.development.discovery.1" />
    <Paragraph text="wealth-park.development.discovery.2" />
    <Paragraph text="wealth-park.development.discovery.3" />
    <Separater />
    <div class="blog__h">
      <h3>
        Development
      </h3>
    </div>
    <Paragraph text="wealth-park.development.development.1" />
    <Paragraph text="wealth-park.development.development.2" />
    <Paragraph text="wealth-park.development.development.3" nospace />
    <Paragraph text="wealth-park.development.development.4" />
    <InternalImage url="kanbanvsscrum.png" desc="Kanban vs Scrum" />
    <ExternalLink
      link="https://www.atlassian.com/ja/agile/kanban/kanban-vs-scrum"
      text="Kanban vs Scrum"
    />
    <ExternalImage
      url="https://blog.trello.com/hs-fs/hubfs/scrum-kanban-ja.png?width=530&name=scrum-kanban-ja.png"
      link="https://blog.trello.com/ja/kanban-method-to-make-teams-agile"
      desc=""
    />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('wealth-park.techstacks.title') }}</h2>
    </div>
    <List :texts="techstacks" />
    <Paragraph text="wealth-park.techstacks.1" />
    <Paragraph text="wealth-park.techstacks.2" />
    <Paragraph text="wealth-park.techstacks.3" />
    <Paragraph text="wealth-park.techstacks.4" />
    <ExternalLink
      link="https://wealth-park.com/ja/careers/backend-engineer/"
      text="[Engineering Dept.] Backend Engineer (PHP or Ruby + Go)"
    />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('wealth-park.wrap.title') }}</h2>
    </div>
    <Paragraph text="wealth-park.wrap.1" />
    <Paragraph text="wealth-park.wrap.2" />
    <ExternalLink
      link="https://www.linkedin.com/in/takahiro-fujii-221a7461/"
      text="Takahiro Fujii | WealthPark Co., Ltd. - Vice President Of Engineering"
    />
    <Paragraph text="wealth-park.wrap.3" />
    <Separater />
    <Share
      url="http://takahirofujii.dev/articles/wealth-park"
      text="Introducing WealthPark's engineering organization and technology stack."
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
import ExternalImage from '~/components/blogs/ExternalImage.vue'
import List from '~/components/blogs/List.vue'
import Quote from '~/components/blogs/Quote.vue'
export default {
  components: {
    Share,
    Paragraph,
    Separater,
    NameCard,
    BlogTitleImage,
    InternalImage,
    ExternalImage,
    ExternalLink,
    List,
    Quote
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'Introduce WealthPark Engineering',
        description: 'Introduce WealthPark Engineering',
        type: 'article',
        url: 'https://takahirofujii.dev/articles/wealth-park',
        image: 'https://takahirofujii.dev/ogp/ogp-wealth-park.png'
      },
      techstacks: [
        'wealth-park.techstacks.list.1',
        'wealth-park.techstacks.list.2',
        'wealth-park.techstacks.list.3',
        'wealth-park.techstacks.list.4',
        'wealth-park.techstacks.list.5',
        'wealth-park.techstacks.list.6',
        'wealth-park.techstacks.list.7'
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
