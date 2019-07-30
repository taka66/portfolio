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
export default {
  props: {
    id: String
  }
}
</script>

<style lang="scss">
.speakerdeck {
  border: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  max-width: 90%;
}

@media (max-width: 768px) {
  .speakerdeck iframe {
    max-width: 90%;
  }
}
</style>
