<template>
  <div>
    <div class="blog__h">
      <h1>{{ $t('blogs.titles.spotify-model') }}</h1>
    </div>
    <div class="blog__header">
      <NameCard date="19/Sep" min="20" />
      <Share url="links.spotify-model" text="blogs.titles.spotify-model" i18n />
    </div>
    <BlogTitleImage
      class="job_change__blog__title__image"
      uri="/articles/spotify-logo"
      backgroundcolor="#5EB978"
    />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.pro.title') }}</h2>
    </div>
    <Paragraph text="spotify-model.pro.1" />
    <Paragraph text="spotify-model.pro.2" />
    <Paragraph text="spotify-model.pro.3" />
    <ExternalLink
      link="https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf"
      text="Scaling Agile@Spotify"
    />
    <ExternalLink
      link="https://lean-trenches.com/scaling-agile-at-spotify-ja/"
      text="Scaling Agile@Spotify(Japanese)"
    />
    <ExternalLink
      link="https://www.youtube.com/watch?v=Yvfz4HGtoPc"
      text="Spotify Engineering Culture - Part 1(Youtube)"
    />
    <ExternalLink
      link="https://www.youtube.com/watch?v=vOt4BbWLWQw"
      text="Spotify Engineering Culture - Part 2(Youtube)"
    />
    <Paragraph text="spotify-model.pro.3" />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.goal.title') }}</h2>
    </div>
    <Paragraph text="spotify-model.goal.1" />
    <Separater />
    <div class="blog__h">
      <h2 id="squad">{{ $t('spotify-model.squad.title') }}</h2>
    </div>
    <ExternalImage
      url="https://www.spacerefinery.com/wp-content/uploads/2018/04/2_Squads-tribes-01.png"
      link="https://spacerefinery.com/spotify-squads-agile-design/"
      desc="2 Things Your Company Can Learn From Spotify Squads and Agile Design"
    />
    <Paragraph text="spotify-model.squad.1" />
    <Paragraph text="spotify-model.squad.2" />
    <Paragraph text="spotify-model.squad.3" nospace />
    <Paragraph text="spotify-model.squad.4" nospace />
    <Paragraph text="spotify-model.squad.5" nospace />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.chapter.title') }}</h2>
    </div>
    <InternalImage url="chapter.png" desc="Chapter" />
    <Paragraph text="spotify-model.chapter.1" />
    <Paragraph text="spotify-model.chapter.2" />
    <Paragraph text="spotify-model.chapter.3" />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.squad-plus-chapter.title') }}</h2>
    </div>
    <InternalImage url="matrix.png" desc="Matrix Organization" />
    <Paragraph text="spotify-model.squad-plus-chapter.1" />
    <Paragraph text="spotify-model.squad-plus-chapter.2" />
    <Paragraph text="spotify-model.squad-plus-chapter.3" />
    <Paragraph text="spotify-model.squad-plus-chapter.4" />
    <Paragraph text="spotify-model.squad-plus-chapter.5" />
    <Paragraph text="spotify-model.squad-plus-chapter.6" />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.chapter-lead.title') }}</h2>
    </div>
    <div class="blog__h">
      <h3>
        {{ $t('spotify-model.chapter-lead.leadership.title') }}
      </h3>
    </div>
    <InternalImage url="chapter-lead.png" desc="Chapter Lead" />
    <Paragraph text="spotify-model.chapter-lead.leadership.1" />
    <Paragraph text="spotify-model.chapter-lead.leadership.2" nospace />
    <Paragraph text="spotify-model.chapter-lead.leadership.3" nospace />
    <Quote message="spotify-model.chapter-lead.leadership.4" />
    <Paragraph text="spotify-model.chapter-lead.leadership.5" />
    <Separater />
    <div class="blog__h">
      <h3>
        {{ $t('spotify-model.chapter-lead.hands-on.title') }}
      </h3>
    </div>
    <Paragraph text="spotify-model.chapter-lead.hands-on.1" />
    <Quote message="spotify-model.chapter-lead.hands-on.2" />
    <Paragraph text="spotify-model.chapter-lead.hands-on.3" />
    <Paragraph text="spotify-model.chapter-lead.hands-on.4" nospace />
    <Paragraph text="spotify-model.chapter-lead.hands-on.5" nospace />
    <Paragraph text="spotify-model.chapter-lead.hands-on.6" />
    <Separater />
    <div class="blog__h">
      <h3>
        {{ $t('spotify-model.chapter-lead.summary.title') }}
      </h3>
    </div>
    <Paragraph text="spotify-model.chapter-lead.summary.1" />
    <List :texts="patterns" />
    <InternalImage
      url="ratio.png"
      desc="Balance of management and development"
    />
    <Paragraph text="spotify-model.chapter-lead.summary.2" />
    <Paragraph text="spotify-model.chapter-lead.summary.3" />
    <Paragraph text="spotify-model.chapter-lead.summary.4" />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.other.title') }}</h2>
    </div>
    <ExternalImage
      url="https://assets.st-note.com/production/uploads/images/18406049/rectangle_large_type_2_00a5d6011b3cd711ac32f4f09a6b5e2c.png?fit=bounds&quality=60&width=1280"
      link="https://note.com/usop/n/n358ab8389460"
      desc="Tribe and Guild"
    />
    <div class="blog__h">
      <h3>
        {{ $t('spotify-model.other.tribe.title') }}
      </h3>
    </div>
    <Paragraph text="spotify-model.other.tribe.1" />
    <Quote message="spotify-model.other.tribe.2" />
    <Paragraph text="spotify-model.other.tribe.3" />
    <Separater />
    <div class="blog__h">
      <h3>
        {{ $t('spotify-model.other.guild.title') }}
      </h3>
    </div>
    <Quote message="spotify-model.other.guild.1" />
    <Paragraph text="spotify-model.other.guild.2" />
    <Paragraph text="spotify-model.other.guild.3" />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.another.title') }}</h2>
    </div>
    <Paragraph text="spotify-model.another.1" />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.pros.title') }}</h2>
    </div>
    <Paragraph text="spotify-model.pros.1" />
    <Paragraph text="spotify-model.pros.2" nospace />
    <Paragraph text="spotify-model.pros.3" />
    <Paragraph text="spotify-model.pros.4" nospace />
    <Paragraph text="spotify-model.pros.5" />
    <Paragraph text="spotify-model.pros.6" nospace />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.cons.title') }}</h2>
    </div>
    <Paragraph text="spotify-model.cons.1" />
    <Paragraph text="spotify-model.cons.2" nospace />
    <Paragraph text="spotify-model.cons.3" />
    <Paragraph text="spotify-model.cons.4" nospace />
    <Paragraph text="spotify-model.cons.5" />
    <Paragraph text="spotify-model.cons.6" nospace />
    <Paragraph text="spotify-model.cons.7" />
    <Paragraph text="spotify-model.cons.8" nospace />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.consideration.title') }}</h2>
    </div>
    <Paragraph text="spotify-model.consideration.0" />
    <Quote message="spotify-model.consideration.1" />
    <Paragraph text="spotify-model.consideration.2" />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.doubt.title') }}</h2>
    </div>
    <Paragraph text="spotify-model.doubt.1" />
    <ExternalLink
      link="https://www.jeremiahlee.com/posts/failed-squad-goals/"
      text="Failed#SquadGoals"
    />
    <ExternalLink
      link=" https://www.agility11.com/blog/2020/6/22/spotify-doesnt-use-the-spotify-model"
      text="Spotify Doesn't Use the Spotify Model — Agility 11"
    />
    <Paragraph text="spotify-model.doubt.2" />
    <Quote message="spotify-model.doubt.list.1" />
    <Quote message="spotify-model.doubt.list.2" />
    <Quote message="spotify-model.doubt.list.3" />
    <Quote message="spotify-model.doubt.list.4" />
    <Paragraph text="spotify-model.doubt.3" />
    <Paragraph text="spotify-model.doubt.4" />
    <Paragraph text="spotify-model.doubt.5" />
    <Paragraph text="spotify-model.doubt.6" />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.last.title') }}</h2>
    </div>
    <Paragraph text="spotify-model.last.1" />
    <Paragraph text="spotify-model.last.2" />
    <Separater />
    <div class="blog__h">
      <h2>{{ $t('spotify-model.reference.title') }}</h2>
    </div>
    <ExternalLink
      link="https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf"
      text="Scaling Agile@Spotify"
      i18n
    />
    <ExternalLink
      link="https://lean-trenches.com/scaling-agile-at-spotify-ja/"
      text="Scaling Agile@Spotify(Japanese)"
      i18n
    />
    <ExternalLink
      link="https://www.youtube.com/watch?v=Yvfz4HGtoPc"
      text="Spotify Engineering Culture - Part 1(Youtube)"
    />
    <ExternalLink
      link="https://www.youtube.com/watch?v=vOt4BbWLWQw"
      text="Spotify Engineering Culture - Part 2(Youtube)"
    />
    <ExternalLink
      link="https://www.atlassian.com/agile/agile-at-scale/spotify"
      text="The Spotify model - Atlassian"
      i18n
    />
    <ExternalLink
      link="https://www.jeremiahlee.com/posts/failed-squad-goals/"
      text="Failed#SquadGoals"
    />
    <ExternalLink
      link="https://norihiko-saito-1219.hatenablog.com/entry/2020/06/18/095233"
      text="Web系企業/事業会社への最高の反面教師: Spotify's Failed #SquadGoalsを読んで(Japanese)"
      i18n
    />
    <ExternalLink
      link=" https://www.agility11.com/blog/2020/6/22/spotify-doesnt-use-the-spotify-model"
      text="Spotify Doesn't Use the Spotify Model — Agility 11"
    />
    <ExternalLink
      link="https://medium.com/the-ready/how-to-build-your-own-spotify-model-dce98025d32f"
      text="How to Build Your Own “Spotify Model” by Jurriaan Kamer - The Ready - Medium"
    />
    <ExternalLink
      link="https://medium.com/@achardypm/agile-team-organisation-squads-chapters-tribes-and-guilds-80932ace0fdc"
      text="Agile Team Organisation_ Squads, Chapters, Tribes and Guilds - by Ashley-Christian Hardy - Medium"
    />
    <ExternalLink
      link="http://www.agileadventures.net/index.php/2015/10/01/team-lead-versus-chapter-lead-same-but-different/"
      text="Team Lead versus Chapter Lead: the 5 biggest differences"
    />
    <ExternalLink
      link="https://www.linkedin.com/pulse/agile-career-paths-day-life-chapter-lead-kelly-paulino/"
      text="Agile career paths — day in the life of a Chapter Lead"
    />
    <ExternalLink
      link="https://monzo.com/blog/2018/06/27/engineering-management-at-monzo"
      text="Organising teams and managing engineers(Monzo)"
    />
    <Separater />
    <Share url="links.spotify-model" text="blogs.titles.spotify-model" i18n />
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
        title:
          this.$i18n.locale === 'ja'
            ? 'Spotify Modelの実像と虚像'
            : 'Real and Falsehood in the spotify model',
        description:
          this.$i18n.locale === 'ja'
            ? 'Spotify Modelの実像と虚像'
            : 'Real and Falsehood in the spotify model',
        type: 'article',
        url: 'https://takahirofujii.dev/articles/spotify-model',
        image: 'https://takahirofujii.dev/ogp/ogp-spotify-model.png'
      },
      patterns: [
        'spotify-model.chapter-lead.summary.case.1',
        'spotify-model.chapter-lead.summary.case.2',
        'spotify-model.chapter-lead.summary.case.3'
      ]
    }
  },
  /* https://qiita.com/kei_0121/items/71735756556c29dc2d16 */
  mounted() {
    // document.getElementById('content').scrollTop = 0
    const hash = this.$route.hash
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(hash)
      // Temporary logic for scroll
      if (hash === '#squad') {
        document.getElementById('content').scrollTop = 1400
      }
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
