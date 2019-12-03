<template>
  <div class="paragraph">
    {{ $t(text) }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.paragraph {
  margin: 48px 15% 0px;
  font-size: 21px;
  line-height: 1.58;
  text-align: left;
}
@media (max-width: 768px) {
  .paragraph {
    font-size: 18px;
    margin: 48px 10% 0px;
  }
}
</style>
