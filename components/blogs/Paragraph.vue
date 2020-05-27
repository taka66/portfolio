<template>
  <div>
    <div
      v-if="nospace"
      class="paragraph__nospace"
      v-bind:class="{ bold: bold }"
    >
      {{ $t(text) }}
    </div>
    <div v-else class="paragraph" v-bind:class="{ bold: bold }">
      {{ $t(text) }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    nospace: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
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
.paragraph__nospace {
  margin: 0px 15% 0px;
  font-size: 21px;
  line-height: 1.58;
  text-align: left;
}

.bold {
  font-weight: bold;
}

@media (max-width: 768px) {
  .paragraph {
    font-size: 18px;
    margin: 48px 10% 0px;
  }
  .paragraph__nospace {
    font-size: 18px;
    margin: 0px 10% 0px;
  }
}
</style>
