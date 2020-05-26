<template>
  <blockquote>
    <p class="quote">{{ $t(message) }}</p>
  </blockquote>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.quote {
  margin-left: calc(15% - 20px);
  margin-right: 15%;
  margin-top: 24px;
  border-left: 3px #222222 solid;
  text-align: left;
  padding-left: 20px;
  font-style: oblique;
  color: #333333;
  line-height: 24px;
}
@media (max-width: 768px) {
  .quote {
    margin-left: calc(10% - 20px);
    margin-right: 10%;
  }
}
</style>
