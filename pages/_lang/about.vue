<template>
  <section class="about">
    <TopImage />
    <p class="about-description">
      {{ $t('about.description-name') }}
      <br />
      {{ $t('about.description-title') }}
      <br />
      <br />
      {{ $t('about.description-overview') }}
      <br />
      <br />
      {{ $t('about.description-main') }}
    </p>
    <a href="/resume.pdf">
      <button class="btn">See resume(PDF)</button>
    </a>
    <div class="bio">
      <h3>{{ $t('about.techstack') }}</h3>
      <div class="row">
        <div class="row-left-s">
          <span class="company cell">Language</span>
        </div>
        <div class="row-right-l">
          <span class="cell"
            >Javasctipt, Node.js, Java, HTML, CSS(Less, Sass), SQL</span
          >
        </div>
      </div>
      <div class="row">
        <div class="row-left-s">
          <span class="company cell">Frameworks, Liblalies</span>
        </div>
        <div class="row-right-l">
          <span class="cell">React, Redux, Spring Boot</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left-s">
          <span class="company cell">Testing</span>
        </div>
        <div class="row-right-l">
          <span class="cell"
            >React Testing Library, Jest, Enzyme, JUnit, Cypress, Selenium</span
          >
        </div>
      </div>
      <div class="row">
        <div class="row-left-s">
          <span class="company cell">Middleware</span>
        </div>
        <div class="row-right-l">
          <span class="cell"
            >Apache Tomcat, Oracle, mysql, mongoDB, redis, hazelcast</span
          >
        </div>
      </div>
      <div class="row">
        <div class="row-left-s">
          <span class="company cell">CI</span>
        </div>
        <div class="row-right-l">
          <span class="cell">Jenkins, Ansible</span>
        </div>
      </div>
    </div>
    <div class="bio">
      <h3>{{ $t('about.biography') }}</h3>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Wealth Park</span>
        </div>
        <div class="row-right">
          <span class="cell">Engineering Manager / FrontEnd Engineer</span>
          <div class="cell">
            <span class="cell-from">2020/01 -</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <a
            class="link"
            target="_brank"
            href="https://corp.rakuten.co.jp/careers/interview/takahiro/"
          >
            <span class="company cell">Rakuten</span>
          </a>
          <span class="cell">Rakuten Travel Innovation Section</span>
        </div>
        <div class="row-right">
          <span class="cell">Engineering Manager / FrontEnd Engineer</span>
          <div class="cell">
            <span class="cell-from">2019/06 -</span>
            <span class="cell-to">2019/12</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Rakuten</span>
          <span class="cell">UI Service Development Group</span>
        </div>
        <div class="row-right">
          <span class="cell">Engineering Manager / FrontEnd Engineer </span>
          <div class="cell">
            <span class="cell-from">2019/01 -</span>
            <span class="cell-to">2019/12</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Rakuten</span>
        </div>
        <div class="row-right">
          <span class="cell">Engineer </span>
          <span class="cell">2010/04 - 2019/12</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Ishijima Lab</span>
        </div>
        <div class="row-right">
          <span class="cell">Lab member</span>
          <span class="cell">2019 -</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <a class="link" href="https://goodpatch.com/blog/designers-gym/">
            <span class="company cell">Designers Gym(Good Patch)</span>
          </a>
        </div>
        <div class="row-right">
          <span class="cell">Gym Member</span>
          <span class="cell">2019/01 - 2019/09</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <a class="link" href="https://koikijs.github.io/">
            <span class="company cell">Koiki</span>
          </a>
        </div>
        <div class="row-right">
          <span class="cell">Co-Founder / Engineer / Designer</span>
          <span class="cell">2013 -</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Tokyo University Of Science</span>
        </div>
        <div class="row-right">
          <span class="cell">Mathematical information science</span>
          <span class="cell">2007 - 2010</span>
        </div>
      </div>
    </div>
    <div class="bio">
      <h3>{{ $t('about.awards') }}</h3>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Rakuten</span>
        </div>
        <div class="row-right">
          <span class="cell">Rakuten Travel MVP Award</span>
          <span class="cell">2018/01</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Rakuten</span>
        </div>
        <div class="row-right">
          <span class="cell">Rakuten Development Project Garnd Award * 2</span>
          <span class="cell">2017</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Rakuten</span>
        </div>
        <div class="row-right">
          <span class="cell">Rakuten Travel MVP Award</span>
          <span class="cell">2016/05</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Rakuten</span>
        </div>
        <div class="row-right">
          <span class="cell">Rakuten Development Project Grand Award</span>
          <span class="cell">2016</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Rakuten</span>
        </div>
        <div class="row-right">
          <span class="cell">Rakuten Development Project Grand Award</span>
          <span class="cell">2015</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Rakuten</span>
        </div>
        <div class="row-right">
          <span class="cell">Rakuten Travel MVP Award</span>
          <span class="cell">2014/11</span>
        </div>
      </div>
    </div>
    <Sns link="https://takahirofujii.dev/contents/about" />
  </section>
</template>

<script>
import Sns from '~/components/atoms/Sns.vue'
import TopImage from '~/components/tmp/TopImage.vue'
import Meta from '~/components/mixins/meta'
export default {
  components: {
    TopImage,
    Sns
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'About me',
        description:
          'About me. This page describe about Takahiro FUjii who works as UI/UX engineer, engineering manager.',
        type: 'article',
        url: 'https://takahirofujii.dev/about'
      }
    }
  }
}
</script>

<style lang="scss">
.about-description {
  width: 80%;
  line-height: 32px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: initial;
}
.bio {
  margin-bottom: 100px;
}
.link {
  color: #373c38;
}
.company {
  font-weight: bold;
}
.cell {
  text-align: left;
  padding-right: 20px;
}
.btn {
  background: none;
  border: solid 1px #222;
  cursor: pointer;
  line-height: 1.5;
  padding: 1em 2em;
  letter-spacing: 0.05rem;
  margin-bottom: 70px;
  &:hover {
    border: solid 1px #38a1db;
    color: #38a1db; //Tsuyukusa
    transition: 0.3s all;
  }
}
.row {
  padding: 20px 0px;
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #0000002b;
}
.row-left {
  min-width: 50%;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.row-left-s {
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.row-right {
  min-width: 50%;
  display: flex;
  justify-content: space-between;
}
.row-right-l {
  width: 55%;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .about-description {
    margin: 20px auto;
  }
  .cell {
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .btn {
    margin-bottom: 0px;
  }
  .row {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
  .row-left {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
  .row-right {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
  .row-right-l {
    width: 100%;
  }
}
</style>
