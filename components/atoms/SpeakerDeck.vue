<template>
  <div>
    <iframe
      id="talk_frame_525244"
      class="speackerdeck"
      :src="`https://speakerdeck.com/player/${id}`"
      width="710"
      height="399"
      frameborder="0"
      allowtransparency="true"
      allowfullscreen="allowfullscreen"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
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
}
</style>
