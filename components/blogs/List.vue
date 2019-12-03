<template>
  <ul class="list">
    <li v-for="text in texts" :key="text">
      {{ $t(text) }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.list {
  margin: 48px 15% 0px;
  padding-left: 21px;
  font-size: 21px;
  line-height: 1.58;
  text-align: left;
  list-style: disc;
}
@media (max-width: 768px) {
  .list {
    font-size: 18px;
    margin: 48px 10% 0px;
  }
}
</style>
