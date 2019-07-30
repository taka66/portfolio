<template>
  <div class="rtp">
    <img class="rtp-thumbnail" src="/works/react-tokyo-plus.jpg" />
    <p class="rtp-subtitle">reat tokyo plus</p>
    <h1>Large react product with 20+ FrontEnd Engineers in Rakuten Travel</h1>

    <div class="rtp-description">
      <a
        target="_blank"
        href="https://www.meetup.com/ja-JP/ReactJS-Tokyo/events/262199021/"
        >react tokyo plus</a
      >という、react関連のmeetupでの登壇、発表になります。 <br />
      株式会社メルカリにて、3名にて発表を行いました。
      タイトルにある通り、20人超のエンジニアでの、大規模なプロダクトの実装や課題、取り組みなどについて話をしました。<br />
      資料と同様に、英語での発表となります。<br />
      3部構成となっていて、
      <li>1部 - プロジェクトが始まる前の基盤、フレームワーク周りの話</li>
      <li>2部 - プロジェクト通じての振り返りや課題</li>
      <li>3部 - 振り返りを経ての現在の取り組み</li>
      私は2部を担当しました。
      <br />
      日本の会社の中では、20名以上の規模で、reactを利用したアプリを実装している組織は少ないので、
      こういった観点での話をするのも面白いのではないかと思い、話をさせて頂きました。
      主にはUIコンポーネントライブラリを実装することによるメリットと課題、組織的な課題などについて話をしました。
      日本語であれば、こちらのLTでお話しした内容についても合わせて確認していただくと、より我々がどのようなことを行なっているのか、
      全体像を把握することができると思います。 <br />
    </div>
    <SpeakerDeck id="fa85299fba1242df8060f1f0e3651e8a" />
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
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 32px;
    margin-top: 8px;
  }
}
.rtp-thumbnail {
  width: 100%;
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
</style>
