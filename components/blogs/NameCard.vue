<template>
  <div class="name_card">
    <Me />
    <div class="name_card_info">
      {{ $t('name') }}
      <br />
      <div class="name_card_m">{{ date }} · {{ min }} min read</div>
    </div>
  </div>
</template>

<script>
import Me from '~/components/atoms/Me.vue'
export default {
  components: {
    Me
  },
  props: {
    date: {
      type: String,
      default: ''
    },
    min: {
      type: String,
      default: '10'
    }
  }
}
</script>

<style lang="scss">
.name_card {
  display: flex;
  font-size: 14px;
  align-items: center;
}
.name_card_info {
  padding-left: 8px;
  display: block;
  text-align: left;
  .name_card_m {
    padding-top: 4px;
  }
}
</style>
