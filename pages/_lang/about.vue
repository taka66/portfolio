<template>
  <section>
    <TopImage />
    <p class="about-description">
      UI / UX エンジニア 兼 エンジニアリングマネージャ<br />
      <br />
      オンライン旅行予約システム(楽天トラベル)の開発を主務としている。<br />
      卒業後、楽天に入社。楽天トラベルの開発に配属。<br />
      国際業務チームにて、海外ホテルの予約システムや管理画面、経理システム、インバウンドサイト、外部システム連携等の開発、立ち上げに参画<br />
      フルスタックエンジニアとして従事していたが、
      2017年以降UI/UXを専門領域としたUI/UXエンジニア・エンジニアリングマネージャとしてサービス・システム開発に携わる。<br />
      現在は、楽天トラベルのWebフロントエンドチーム、Android/iOSチームのエンジニアリングマネージャとして、
      サービス/組織開発に携わっている。<br />
      フリーランス・プライベートではプロダクトデザイン含めた企画・デザイン・開発に携わっている。<br />
      趣味はバスケと偶にする海外旅行。 好きなものはコーヒー、お酒、和食。
    </p>
    <div class="bio">
      <h3>略歴</h3>
      <div class="row">
        <span class="cell">Rakuten</span>
        <span class="cell">XXX Group</span>
        <span class="cell">Engineering Manager / FrontEnd Engineer</span>
        <span class="cell">2019/06 -</span>
      </div>
      <div class="row">
        <span class="cell">Rakuten</span>
        <span class="cell">UI Service Development Group</span>
        <span class="cell">Engineering Manager / FrontEnd Engineer </span>
        <span class="cell">2019/01 -</span>
      </div>
      <div class="row">
        <span class="cell">Rakuten</span>
        <span class="cell">Engineer </span>
        <span class="cell">2010/04 -</span>
      </div>
      <div class="row">
        <span class="cell">Ishijima Lab</span>
        <span class="cell">Lab member</span>
        <span class="cell">2019 -</span>
      </div>
      <div class="row">
        <span class="cell">Designers Lab(Good Patch)</span>
        <span class="cell">Lab Member</span>
        <span class="cell">2019/01 -</span>
      </div>
      <div class="row">
        <span class="cell">Koiki</span>
        <span class="cell">Co-Founder / Engineer / Designer</span>
        <span class="cell">2013 -</span>
      </div>
      <div class="row">
        <span class="cell">Tokyo University Of Science</span>
        <span class="cell">Mathematical information science</span>
        <span class="cell">Ishiwata Lab</span>
        <span class="cell">2007 - 2010</span>
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
  width: 70%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: initial;
}
.bio {
  margin-bottom: 100px;
}
.row {
  padding-right: 0px;
  padding-left: 0px;
  padding-bottom: 20px;
  padding-top: 20px;
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #0000002b;
}
@media (max-width: 768px) {
  .row {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
}
</style>
