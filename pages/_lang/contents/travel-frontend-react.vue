<template>
  <div class="tfr">
    <div class="tfr-background">
      <img class="tfr-thumbnail" src="/works/travel-frontend-react.png" />
    </div>
    <p class="tfr-subtitle">react meetup #7</p>
    <h1>楽天トラベルのフロントエンドについて</h1>

    <div class="tfr-description">
      <a
        class="tfr-link"
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
    <div
      class="fb-share-button"
      data-href="https://takahirofujii.dev/contents/travel-frontend-react"
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
.tfr {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 32px;
    padding: 10px;
  }
  .tfr-link {
    position: relative;
    display: inline-block;
    outline: none;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
  }

  .tfr-link:hover,
  .tfr-link:focus {
    outline: none;
  }
  .tfr-link::before,
  .tfr-link::after {
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

  .tfr-link::after {
    width: 90px;
    height: 90px;
    border-width: 6px;
    transform: translateX(-50%) translateY(-50%) scale(0.8);
  }

  .tfr-link:hover::before,
  .tfr-link:hover::after,
  .tfr-link:focus::before,
  .tfr-link:focus::after {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) scale(1);
  }
  ul {
    margin: 16px;
  }
}
.tfr-background {
  width: 100%;
  background: #9986ae;
}

.tfr-thumbnail {
  width: 100%;
  max-width: 720px;
}
.tfr-subtitle {
  font-weight: bold;
  margin-top: 16px;
}
.tfr-description {
  line-height: 32px;
  text-align: left;
  margin: 48px;
  max-width: 960px;
}

@media (max-width: 768px) {
  .tfr-description {
    width: 90%;
  }
}
</style>
