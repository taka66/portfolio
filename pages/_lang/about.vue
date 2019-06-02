<template>
  <section>
    <TopImage />
    <p class="about-description">
      UI / UX エンジニア 兼 エンジニアリングマネージャ<br />
      <br />
      オンライン旅行予約システム(楽天トラベル)の開発に従事。<br />
      エンジニアリングマネージャとして、次世代のシステム開発に挑戦している。<br />
      <br />
      大学卒業後、楽天に入社。楽天トラベルの開発に配属。<br />
      国際業務チームにて、海外ホテルの予約システムや管理画面、経理システム、インバウンドサイト、外部システム連携等の開発、立ち上げに参画。<br />
      フルスタックエンジニアとして従事していたが、
      2017年以降UI/UXを専門領域としたエンジニア・エンジニアリングマネージャとなる。<br />
      以降、楽天トラベルのWebフロントエンド、Android/iOSグループのエンジニアリングマネージャとして、
      サービス/組織開発に携わっている。<br />
      フリーランス・プライベートではプロダクトデザイン含めた企画・デザイン・開発を行う。<br />
      趣味はバスケと偶にする海外旅行。 好きなものはコーヒー、お酒、和食。
    </p>
    <div class="bio">
      <h3>略歴</h3>
      <div class="row">
        <div class="row-left">
          <a
            class="link"
            href="https://corp.rakuten.co.jp/careers/interview/takahiro/"
          >
            <span class="cell">Rakuten</span>
          </a>
          <span class="cell">XXX Group</span>
        </div>
        <div class="row-right">
          <span class="cell">Engineering Manager / FrontEnd Engineer</span>
          <span class="cell">2019/06 -</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="cell">Rakuten</span>
          <span class="cell">UI Service Development Group</span>
        </div>
        <div class="row-right">
          <span class="cell">Engineering Manager / FrontEnd Engineer </span>
          <span class="cell">2019/01 -</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="cell">Rakuten</span>
        </div>
        <div class="row-right">
          <span class="cell">Engineer </span>
          <span class="cell">2010/04 -</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="cell">Ishijima Lab</span>
        </div>
        <div class="row-right">
          <span class="cell">Lab member</span>
          <span class="cell">2019 -</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <a class="link" href="https://goodpatch.com/blog/designers-gym/">
            <span class="cell">Designers Lab(Good Patch)</span>
          </a>
        </div>
        <div class="row-right">
          <span class="cell">Lab Member</span>
          <span class="cell">2019/01 -</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <a class="link" href="https://koikijs.github.io/">
            <span class="cell">Koiki</span>
          </a>
        </div>
        <div class="row-right">
          <span class="cell">Co-Founder / Engineer / Designer</span>
          <span class="cell">2013 -</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="cell">Tokyo University Of Science</span>
        </div>
        <div class="row-right">
          <span class="cell">Mathematical information science</span>
          <span class="cell">2007 - 2010</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TopImage from '~/components/tmp/TopImage.vue'
export default {
  components: {
    TopImage
  }
}
</script>

<style lang="scss">
.about-description {
  width: 80%;
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
.cell {
  text-align: left;
  padding-right: 20px;
}
.row {
  padding-right: 0px;
  padding-left: 0px;
  padding-bottom: 20px;
  padding-top: 20px;
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
}
.row-right {
  min-width: 50%;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .row {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
  .row-right {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
}
</style>
