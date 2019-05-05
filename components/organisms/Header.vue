<template>
  <div class="header-container">
    <div class="header-title">
      <img class="header-logo" src="~/assets/logo.png" />
      <p class="header-name">takahirofujii.com</p>
    </div>
    <ul class="header-menu">
      <li>{{ $t('header.about') }}</li>
      <li>{{ $t('header.works') }}</li>
      <li>Articles</li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.header-logo {
  width: 30px;
  height: 30px;
}
.header-title {
  display: flex;
  align-items: center;
}
.header-name {
  padding-left: 10px;
}
.header-menu {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  li {
    margin-left: 10px;
  }
}
</style>
