<template>
  <div class="rtp">
    <div class="rtp-background">
      <img class="rtp-thumbnail" src="/works/react-tokyo-plus.png" />
    </div>
    <p class="rtp-subtitle">reat tokyo plus</p>
    <h1>Large react product with 20+ FrontEnd Engineers in Rakuten Travel</h1>

    <div class="rtp-description">
      <a
        class="rtp-link"
        target="_blank"
        href="https://www.meetup.com/ja-JP/ReactJS-Tokyo/events/262199021/"
        >react tokyo plus</a
      >という、react関連のmeetupでの登壇、発表になります。 <br />
      株式会社メルカリにて、3名にて発表を行いました。
      タイトルにある通り、20人超のエンジニアでの、大規模なプロダクトの実装や課題、取り組みなどについて話をしました。<br />
      資料と同様に、英語での発表となります。<br />
      3部構成となっていて、
      <ul>
        <li>1部 - プロジェクトが始まる前の基盤、フレームワーク周りの話</li>
        <li>2部 - プロジェクト通じての振り返りや課題</li>
        <li>3部 - 振り返りを経ての現在の取り組み</li>
      </ul>
      私は2部を担当しました。
      <br />
      2018,19年現在、日本の会社の中では、20名以上の規模でreactを利用したアプリを実装している組織は少ないので、
      こういった観点での話をするのも面白いのではないかと思い、話をさせて頂きました。
      主にはUIコンポーネントライブラリを実装したことによるメリットと課題の振り返りや、
      アプリの開発の状況やフェーズに応じて、どのように組織を変えていったかを話しました。
      特にUIコンポーネント開発については苦しんだ部分も多く、比較的内容が厚めです。
      <br />
      一部重複している内容もあり、かつ日本語ですが、こちらのLTでお話しした内容についても合わせて確認していただくと、
      より当時我々がどのようなことを行なっていたのか、全体像を把握することができると思います。
      <br />
    </div>
    <SpeakerDeck id="fa85299fba1242df8060f1f0e3651e8a" />
    <div
      class="fb-share-button"
      data-href="https://takahirofujii.dev/contents/react-tokyo-plus"
      data-layout="button"
      data-size="large"
    ></div>
  </div>
</template>

<script>
import SpeakerDeck from '~/components/atoms/SpeakerDeck.vue'
export default {
  components: {
    SpeakerDeck
  }
}
</script>

<style lang="scss">
.rtp {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 32px;
    padding: 10px;
  }
  .rtp-link {
    position: relative;
    display: inline-block;
    outline: none;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
  }

  .rtp-link:hover,
  .rtp-link:focus {
    outline: none;
  }
  .rtp-link::before,
  .rtp-link::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    content: '';
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    transform: translateX(-50%) translateY(-50%) scale(0.2);
  }

  .rtp-link::after {
    width: 90px;
    height: 90px;
    border-width: 6px;
    transform: translateX(-50%) translateY(-50%) scale(0.8);
  }

  .rtp-link:hover::before,
  .rtp-link:hover::after,
  .rtp-link:focus::before,
  .rtp-link:focus::after {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) scale(1);
  }
  ul {
    margin: 16px;
  }
}
.rtp-background {
  width: 100%;
  background: #003689;
}
.rtp-thumbnail {
  width: 100%;
  max-width: 720px;
}
.rtp-subtitle {
  font-weight: bold;
  margin-top: 16px;
}
.rtp-description {
  line-height: 32px;
  text-align: left;
  margin: 48px;
  max-width: 960px;
}

@media (max-width: 768px) {
  .rtp-description {
    width: 90%;
  }
}
</style>
