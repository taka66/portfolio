<template>
  <div class="header-container">
    <div class="header-title">
      <NuxtLink class="header-link" :to="$i18n.path('')" exact>
        <img class="header-logo" src="~/assets/logo.png" />
        <p class="header-name">
          takahirofujii.com
        </p>
      </NuxtLink>
    </div>
    <ul class="header-menu">
      <li>
        <NuxtLink class="header-link" :to="$i18n.path('about')" exact>
          {{ $t('header.about') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="header-link" :to="$i18n.path('works')" exact>
          {{ $t('header.works') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="header-link" :to="$i18n.path('articles')" exact>
          {{ $t('header.articles') }}
        </NuxtLink>
      </li>
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
}
.header-name {
  padding-left: 10px;
  margin: 5px 0px;
}
.header-link {
  text-decoration: none;
  display: flex;
  transition: 0.3s;
}
.header-link:link {
  color: #c0c6c9; //Haiao
}
.header-link:visited {
  color: #c0c6c9; //Haiao
}
.header-link:hover {
  color: #38a1db; //Tsuyukusa
  transform: rotate(5deg);
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
