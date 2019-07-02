<template>
  <div class="test">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss">
.test {
  color: #666;
}
</style>
