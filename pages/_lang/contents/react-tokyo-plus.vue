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
      >{{ $t('react-tokyo-plus.1') }} <br />
      {{ $t('react-tokyo-plus.2') }} <br />
      {{ $t('react-tokyo-plus.3') }}
      <ul>
        <li>{{ $t('react-tokyo-plus.chapter1') }}</li>
        <li>{{ $t('react-tokyo-plus.chapter2') }}</li>
        <li>{{ $t('react-tokyo-plus.chapter3') }}</li>
      </ul>
      {{ $t('react-tokyo-plus.4') }}
      <br />
      {{ $t('react-tokyo-plus.5') }}
      <br />
      {{ $t('react-tokyo-plus.6') }}
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
import Meta from '~/components/mixins/meta'
import SpeakerDeck from '~/components/atoms/SpeakerDeck.vue'
export default {
  components: {
    SpeakerDeck
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'Large react product with 20+ FrontEnd Engineers',
        description:
          'Presentation at react tokyo plus. title is Large react product with 20+ FrontEnd Engineers in Rakuten Travel.',
        type: 'article',
        url: 'https://takahirofujii.dev/contents/react-tokyo-plus'
      }
    }
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
