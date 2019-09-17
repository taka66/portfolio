<template>
  <div class="rtp">
    <img class="rtp-thumbnail" src="/works/travel-frontend-react.jpg" />
    <p class="rtp-subtitle">react meetup #7</p>
    <h1>楽天トラベルのフロントエンドについて</h1>

    <div class="rtp-description">
      <a
        target="_blank"
        href="https://reactjs-meetup.connpass.com/event/130682/"
        >react meetup #7</a
      >という、react関連のmeetupでのLT発表になります。 <br />
      株式会社Sansanにて、発表を行いました。
      今回は"楽天トラベルのフロントエンドについて"、というざっくりとしたタイトルですが、2019年現在における楽天トラベルのフロントエンドの近況について話をしました。
      <br />
      <br />
      スライドにもある通り、2017年から舵を切って変更してきた楽天トラベルのフロントエンドの近況について話をしました。<br />
      microservice
      meetupで話をして以来、外部向けに楽天トラベルのreactのプロダクト、行なっている取り組みを初めて共有しました。<br />
      短い発表時間であった為、全てをスライドに含めることは出来ませんでしたが、メインで作成しているプロダクト、ライブラリ、フレームワークの概要を把握できる内容となっています。
      <br />
    </div>
    <SpeakerDeck id="e9f8b2820c1642b78293ddf3182f3e72" />
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
  a {
    position: relative;
    display: inline-block;
    outline: none;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
  }

  a:hover,
  a:focus {
    outline: none;
  }
  a::before,
  a::after {
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

  a::after {
    width: 90px;
    height: 90px;
    border-width: 6px;
    transform: translateX(-50%) translateY(-50%) scale(0.8);
  }

  a:hover::before,
  a:hover::after,
  a:focus::before,
  a:focus::after {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) scale(1);
  }
  ul {
    margin: 16px;
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

@media (max-width: 768px) {
  .rtp-description {
    width: 90%;
  }
}
</style>
