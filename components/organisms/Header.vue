<template>
  <div class="header-container">
    <div class="header-title">
      <NuxtLink
        class="header-link"
        :class="{ active: page === 'index' }"
        :to="$i18n.path('')"
        exact
      >
        <img class="header-logo" src="~/assets/logo.png" />
        <p class="header-name">
          takahirofujii.dev
        </p>
      </NuxtLink>
    </div>
    <ul class="header-menu">
      <li>
        <NuxtLink
          class="header-link"
          :class="{ active: page === 'about' }"
          :to="$i18n.path('about')"
          exact
        >
          {{ $t('header.about') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="header-link"
          :class="{ active: page === 'works' }"
          :to="$i18n.path('works')"
          exact
        >
          {{ $t('header.works') }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page'])
}
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
  &:link {
    color: #c0c6c9; //Haiao
    outline: none;
    &.active {
      color: #38a1db; //Tsuyukusa
    }
  }
  &:visited {
    color: #c0c6c9; //Haiao
    &.active {
      color: #38a1db; //Tsuyukusa
    }
  }
  &:hover {
    color: #38a1db; //Tsuyukusa
    transform: rotate(5deg);
  }
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
