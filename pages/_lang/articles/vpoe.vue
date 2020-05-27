<template>
  <div>
    <div class="blog__h">
      <h1>VPoEになって、まず取り組んでいること</h1>
    </div>
    <div class="blog__header">
      <NameCard date="7/Jan" />
      <Share
        url="http://takahirofujii.dev/articles/vpoe"
        text="VPoEになって、まず取り組んでいること | UI/UX Engineer Takahiro Fujii's portfolio"
      />
    </div>
    <BlogTitleImage
      class="job_change__blog__title__image"
      uri="/articles/vpoe"
      backgroundcolor="#1a1a1a"
    />
    <div class="blog__h">
      <h2>最初に</h2>
    </div>
    <Paragraph text="vpoe.pro.1" />
    <Paragraph text="vpoe.pro.2" />
    <Separater />
    <div class="blog__h">
      <h2>はじめに</h2>
    </div>
    <Paragraph text="vpoe.pro2.1" />
    <InternalImage url="organization.jpg" desc="大まかな組織図" />
    <Paragraph text="vpoe.pro2.2" />
    <Paragraph text="vpoe.pro2.3" />
    <Quote message="vpoe.pro2.4" />
    <ExternalLink
      link="https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf"
      text="Scaling Agile @ Spotify"
    />
    <Paragraph text="vpoe.pro2.5" />
    <List :texts="note" />
    <Paragraph text="vpoe.pro2.6" />
    <Paragraph text="vpoe.pro2.7" />
    <Separater />
    <div class="blog__h">
      <h2>1.自分の仕事の可視化</h2>
    </div>
    <Paragraph text="vpoe.vidualize-mywork.1" />
    <Paragraph text="vpoe.vidualize-mywork.2" />
    <Paragraph text="vpoe.vidualize-mywork.3" />
    <InternalImage
      url="WhatFujiiIsDoing.png"
      desc="今やっていることをmiroのボードで公開しています"
    />
    <Paragraph text="vpoe.vidualize-mywork.4" />
    <Paragraph text="vpoe.vidualize-mywork.5" />
    <Separater />
    <div class="blog__h">
      <h2>2.周りの仕事の可視化</h2>
    </div>
    <Paragraph text="vpoe.vidualize-others.1" />
    <Separater />
    <div class="blog__h">
      <h3>2-1.社内</h3>
    </div>
    <Paragraph text="vpoe.vidualize-others.2-1.1" />
    <List :texts="points" />
    <Paragraph text="vpoe.vidualize-others.2-1.2" />
    <Separater />
    <div class="blog__h">
      <h3>2-2.社外</h3>
    </div>
    <Paragraph text="vpoe.vidualize-others.2-2.1" />
    <Paragraph text="vpoe.vidualize-others.2-2.2" />
    <Separater />
    <div class="blog__h">
      <h2>
        3.プロセスの改善(MaintenanceとProjectのBoard分離)
      </h2>
    </div>
    <Paragraph text="vpoe.process.1" />
    <Paragraph text="vpoe.process.2" />
    <List :texts="improvements" />
    <Paragraph text="vpoe.process.3" />
    <Paragraph text="vpoe.process.4" nospace />
    <List :texts="board" />
    <Paragraph text="vpoe.process.5" />
    <Paragraph text="vpoe.process.6" nospace />
    <Paragraph text="vpoe.process.7" nospace />
    <Paragraph text="vpoe.process.8" />
    <Paragraph text="vpoe.process.9" nospace />
    <Separater />
    <div class="blog__h">
      <h2>
        4.Spotify Model(Squad, Chapter)を参考にした組織、開発手法
      </h2>
    </div>
    <div class="blog__h">
      <h3>
        4-1.Spotify Modelの導入 / (Squad, Chapter)
      </h3>
    </div>
    <Paragraph text="vpoe.spotify.4-1.1" />
    <ExternalImage
      url="https://blog.crisp.se/wp-content/uploads/2012/11/ScalingAgileAtSpotify-Cover-1.png"
      link="https://blog.crisp.se/2012/11/14/henrikkniberg/scaling-agile-at-spotify"
      desc="Scaling Agile @ Spotify with Tribes, Squads, Chapters & Guilds"
    />
    <ExternalImage
      url="https://www.spacerefinery.com/wp-content/uploads/2018/04/2_Squads-tribes-01.png"
      link="https://spacerefinery.com/spotify-squads-agile-design/"
      desc="2 Things Your Company Can Learn From Spotify Squads and Agile Design"
    />
    <Paragraph text="vpoe.spotify.4-1.2" />
    <Paragraph text="vpoe.spotify.4-1.3" />
    <ExternalImage
      url="https://www.spacerefinery.com/wp-content/uploads/2018/04/3_Squads-tribes-02.png"
      link="https://spacerefinery.com/spotify-squads-agile-design/"
      desc="2 Things Your Company Can Learn From Spotify Squads and Agile Design"
    />
    <Separater />
    <div class="blog__h">
      <h3>
        4-2.目的(自己組織化)
      </h3>
    </div>
    <Paragraph text="vpoe.spotify.4-2.1" />
    <Paragraph text="vpoe.spotify.4-2.2" nospace />
    <Separater />
    <ExternalLink
      link="https://www.wantedly.com/companies/wealth-park/post_articles/232995"
      text="【WealthPark 社員インタビュー vol. 8】一人一人が自走するチームを作るのがリーダーの仕事。周囲を自然にモチベートするVP of Productのチームビルディング術"
    />
    <Quote message="vpoe.spotify.4-2.3" />
    <Quote message="vpoe.spotify.4-2.4" />
    <Separater />
    <Paragraph text="vpoe.spotify.4-2.5" />
    <Paragraph text="vpoe.spotify.4-2.6" />
    <ExternalImage
      url="https://res.infoq.com/articles/what-are-self-organising-teams/en/resources/AuthorityMatrix_figure1.png"
      link="https://www.infoq.com/jp/articles/what-are-self-organising-teams/"
      desc="自己組織化チームとは何か？"
    />
    <Quote message="vpoe.spotify.4-2.organization1" />
    <Quote message="vpoe.spotify.4-2.organization2" />
    <Quote message="vpoe.spotify.4-2.organization3" />
    <Quote message="vpoe.spotify.4-2.organization4" />
    <Paragraph text="vpoe.spotify.4-2.7" />
    <Paragraph text="vpoe.spotify.4-2.8" />
    <Paragraph text="vpoe.spotify.4-2.9" />
    <Paragraph text="vpoe.spotify.4-2.10" />
    <Separater />
    <div class="blog__h">
      <h2>
        5.Chapter LeadというRollの洗練
      </h2>
    </div>
    <Paragraph text="vpoe.chapter-lead.1" />
    <Paragraph text="vpoe.chapter-lead.2" nospace />
    <Separater />
    <div class="blog__h">
      <h3>
        5-1.Leadershipについて
      </h3>
    </div>

    <Paragraph text="vpoe.chapter-lead.5-1.1" />
    <Paragraph text="vpoe.chapter-lead.5-1.2" />
    <Paragraph text="vpoe.chapter-lead.5-1.3" nospace />

    <Paragraph text="vpoe.chapter-lead.5-1.4" />
    <Paragraph text="vpoe.chapter-lead.5-1.5" />
    <Quote message="vpoe.chapter-lead.5-1.6" />
    <Paragraph text="vpoe.chapter-lead.5-1.7" />
    <Paragraph text="vpoe.chapter-lead.5-1.8" />
    <Paragraph text="vpoe.chapter-lead.5-1.9" />
    <Separater />
    <div class="blog__h">
      <h3>
        5-2.Hands-onについて
      </h3>
    </div>
    <Paragraph text="vpoe.chapter-lead.5-2.1" />
    <Paragraph text="vpoe.chapter-lead.5-2.2" nospace />
    <Quote message="vpoe.chapter-lead.5-2.3" />
    <Paragraph text="vpoe.chapter-lead.5-2.4" />
    <Paragraph text="vpoe.chapter-lead.5-2.5" />
    <Paragraph text="vpoe.chapter-lead.5-2.6" />
    <Paragraph text="vpoe.chapter-lead.5-2.7" />
    <Paragraph text="vpoe.chapter-lead.5-2.8" />
    <Paragraph text="vpoe.chapter-lead.5-2.9" />
    <Paragraph text="vpoe.chapter-lead.5-2.10" />
    <List :texts="patterns" />
    <Paragraph text="vpoe.chapter-lead.5-2.11" />
    <Paragraph text="vpoe.chapter-lead.5-2.12" />
    <Paragraph text="vpoe.chapter-lead.5-2.13" />
    <Paragraph text="vpoe.chapter-lead.5-2.14" />
    <Paragraph text="vpoe.chapter-lead.5-2.15" />
    <Paragraph text="vpoe.chapter-lead.5-2.16" />
    <Separater />
    <div class="blog__h">
      <h3>
        5-3.未来と今
      </h3>
    </div>
    <Paragraph text="vpoe.chapter-lead.5-3.1" />
    <Paragraph text="vpoe.chapter-lead.5-3.2" />
    <Separater />
    <div class="blog__h">
      <h3>
        5-4.Chapter Lead
      </h3>
    </div>
    <Paragraph text="vpoe.chapter-lead.5-4.1" />
    <Separater />
    <div class="blog__h">
      <h2>
        6.技術的負債と新規開発の向き合い方
      </h2>
    </div>
    <Paragraph text="vpoe.technical-debt.1" />
    <Paragraph text="vpoe.technical-debt.2" />
    <Paragraph text="vpoe.technical-debt.3" />
    <List :texts="approaches" />
    <Paragraph text="vpoe.technical-debt.4" />
    <Separater />
    <div class="blog__h">
      <h2>
        7.責務
      </h2>
    </div>
    <Paragraph text="vpoe.responsibility.1" />
    <Paragraph text="vpoe.responsibility.2" />
    <ExternalLink
      link="https://github.com/takayukishmz/VPoE-handbook"
      text="takayukishmz/VPoE-handbook"
    />
    <Paragraph text="vpoe.responsibility.3" />
    <Paragraph text="vpoe.responsibility.4" />
    <ExternalLink
      link="http://www.techventurebusiness.com/archives/116"
      text="tech venture business 役職の謎：CTO vs. VP of Engineering"
    />
    <Quote message="vpoe.responsibility.5" />
    <Paragraph text="vpoe.responsibility.6" />
    <Separater />
    <div class="blog__h">
      <h2>
        8.まとめ
      </h2>
    </div>
    <Paragraph text="vpoe.last" />
    <Separater />
    <Share
      url="http://takahirofujii.dev/articles/vpoe"
      text="VPoEになって、まず取り組んでいること | UI/UX Engineer Takahiro Fujii's portfolio"
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
import ExternalImage from '~/components/blogs/ExternalImage.vue'
import InternalImage from '~/components/blogs/InternalImage.vue'
import Quote from '~/components/blogs/Quote.vue'
import List from '~/components/blogs/List.vue'
export default {
  components: {
    Share,
    Paragraph,
    Separater,
    NameCard,
    BlogTitleImage,
    ExternalImage,
    InternalImage,
    ExternalLink,
    Quote,
    List
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
      note: ['vpoe.pro2.note.1', 'vpoe.pro2.note.2', 'vpoe.pro2.note.3'],
      points: [
        'vpoe.vidualize-others.2-1.points.1',
        'vpoe.vidualize-others.2-1.points.2'
      ],
      improvements: [
        'vpoe.process.improvements.1',
        'vpoe.process.improvements.2',
        'vpoe.process.improvements.3',
        'vpoe.process.improvements.4'
      ],
      board: ['vpoe.process.project', 'vpoe.process.maintenance'],
      patterns: [
        'vpoe.chapter-lead.5-2.patterns.1',
        'vpoe.chapter-lead.5-2.patterns.2',
        'vpoe.chapter-lead.5-2.patterns.3'
      ],
      approaches: [
        'vpoe.technical-debt.approaches.1',
        'vpoe.technical-debt.approaches.2',
        'vpoe.technical-debt.approaches.3',
        'vpoe.technical-debt.approaches.4'
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
