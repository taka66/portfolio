<template>
  <div class="external__link">
    <a :href="link" target="__blank">
      <span>{{ text }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.external__link {
  margin-top: 24px;
  margin-left: 15%;
  margin-right: 15%;
  display: flex;
  align-items: baseline;
  a {
    cursor: pointer;
    text-decoration: none;
    text-align: left;
    outline: none;
    span {
      border-bottom: 1px #222 solid;
      font-size: 21px;
      color: #222;
      line-height: normal;
      &:hover {
        border-bottom: 1px #38a1db solid;
        color: #38a1db; //Tsuyukusa
        transition: 0.3s;
      }
    }
  }
}

@media (max-width: 768px) {
  .external__link {
    margin-left: 10%;
    margin-right: 10%;
    a {
      span {
        font-size: 18px;
      }
    }
  }
}
</style>
