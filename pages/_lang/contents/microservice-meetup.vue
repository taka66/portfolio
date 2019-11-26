<template>
  <div class="microservice">
    <div class="microservice-background">
      <img
        class="microservice-thumbnail"
        src="/works/microservice-meetup.png"
      />
    </div>
    <p class="microservice-subtitle">Microservices Meetup vol.6</p>
    <h1>{{ $t('microservice-meetup.title') }}</h1>
    <br />
    <br />
    <SpeakerDeck id="78961d6bdd1e464893bd356ea499a047" />

    <div class="microservice-description">
      <a
        class="microservice-link"
        target="_blank"
        href="https://microservices-meetup.connpass.com/event/75332/"
        >Microservices Meetup vol.6</a
      >
      {{ $t('microservice-meetup.1') }}
      <br />
      {{ $t('microservice-meetup.2') }}
      <br />
      <br />
      <Photo
        url="/works/microservice-meetup.jpg"
        desc="presentation at Finc.inc"
      />
      <br />
      {{ $t('microservice-meetup.3') }}
      <ul>
        <li>{{ $t('microservice-meetup.phase1') }}</li>
        <li>{{ $t('microservice-meetup.phase2') }}</li>
        <li>{{ $t('microservice-meetup.phase3') }}</li>
      </ul>
      <br />
      {{ $t('microservice-meetup.4') }}
      <br />
      <!-- <section class="chapter1">
        <h4>{{ $t('microservice-meetup.phase1') }}</h4>
      </section> -->
    </div>
    <!-- <div
      class="fb-share-button"
      data-href="https://takahirofujii.dev/contents/microservice-meetup"
      data-layout="button"
      data-size="large"
    ></div> -->
  </div>
</template>

<script>
import SpeakerDeck from '~/components/atoms/SpeakerDeck.vue'
import Photo from '~/components/atoms/Photo.vue'
import Meta from '~/components/mixins/meta'
export default {
  components: {
    SpeakerDeck,
    Photo
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title:
          'Microservices from frontend point of view at Microservice meetup vol6',
        description:
          'Presentation at react meetup #7. Topic is how Rakuten Travel use React and related technologies',
        type: 'article',
        url: 'https://takahirofujii.dev/contents/travel-frontend-react'
      }
    }
  }
}
</script>

<style lang="scss">
.microservice {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 32px;
    padding: 10px;
  }
  h4 {
    font-weight: bold;
    font-size: 20px;
    padding: 10px 0px;
  }
  ul {
    margin: 16px;
  }
}

.microservice-link {
  text-decoration: none;
  transition: 0.3s;
  &:link {
    color: #c0c6c9; //Haiao
    outline: none;
  }
  &:visited {
    color: #c0c6c9; //Haiao
  }
  &:hover {
    color: #38a1db; //Tsuyukusa
    transform: rotate(5deg);
  }
}

.microservice-background {
  width: 100%;
  background: #fbc93b;
}

.microservice-thumbnail {
  width: 100%;
  max-width: 720px;
}
.microservice-subtitle {
  font-weight: bold;
  margin-top: 16px;
}
.microservice-description {
  line-height: 32px;
  text-align: left;
  margin: 48px;
  max-width: 960px;
}

@media (max-width: 768px) {
  .microservice-description {
    width: 90%;
  }
}
</style>
