<template>
  <div class="speakerdeck">
    <iframe
      id="talk_frame_525244"
      :src="`https://speakerdeck.com/player/${id}`"
      width="710"
      height="399"
      frameborder="0"
      allowtransparency="true"
      allowfullscreen="allowfullscreen"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      border="0"
      padding="0"
      margin="0"
      background="transparent"
    ></iframe>
  </div>
</template>

<script>
// Able to get id via https://speakerdeck.com/oembed.json?url=
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.speakerdeck {
  border: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  max-width: 100%;
}

@media (max-width: 768px) {
  .speakerdeck iframe {
    max-width: 100%;
  }
}
</style>
