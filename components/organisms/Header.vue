<template>
  <div class="header-container">
    <div class="header-title">
      <NuxtLink
        :class="{ active: page === 'index' }"
        :to="$i18n.path('')"
        class="header-link"
        exact
      >
        <svg
          id="logo"
          class="header-logo"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 450 450"
          style="enable-background:new 0 0 450 450;"
          xml:space="preserve"
        >
          <g>
            <circle class="logo__st0" cx="323.08" cy="95.12" r="66.04" />
            <g>
              <path
                class="logo__st1"
                d="M126.56,240.38l24.08-86.46h125.9l19.49,56.19l-33.94-12.15l-28.9,13.76l-36-13.76l-37.95,7.91l-9.63,33.02
			l47.7-13.42l34.51,15.14l31.65-13.76l44.03,17.89l27.86-9.98l-40.25-111.11H130L96.75,240.38
			C96.75,240.38,126.79,240.6,126.56,240.38z"
              />
              <polygon
                class="logo__st2"
                points="126.56,240.38 83.22,396.09 358.41,396.09 315.75,270.88 344.65,259.87 399,423.61 44,423.61 
			96.75,240.38 		"
              />
            </g>
          </g>
        </svg>
      </NuxtLink>
    </div>
    <ul class="header-menu">
      <li>
        <NuxtLink
          :class="{ active: page === 'about' || page === 'lang-about' }"
          :to="$i18n.path('about')"
          class="header-link"
          exact
        >
          {{ $t('header.about') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :class="{
            active: page === 'works' || page === 'lang-works'
          }"
          :to="$i18n.path('works')"
          class="header-link"
          exact
        >
          {{ $t('header.works') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :class="{
            active: page === 'blog' || page === 'lang-blog'
          }"
          :to="$i18n.path('blog')"
          class="header-link"
          exact
        >
          {{ $t('header.blog') }}
        </NuxtLink>
      </li>
      <li>
        |
      </li>
      <li>
        <NuxtLink
          :to="`/ja` + $route.fullPath"
          :class="{ active: $i18n.locale === 'ja' }"
          class="header-link"
          exact
        >
          <svg
            id="layer_1"
            :class="{ active: $i18n.locale === 'ja' }"
            class="lang-link"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 128 128"
            style="enable-background:new 0 0 128 128;"
            xml:space="preserve"
          >
            <g>
              <path
                d="M61.06,20.94c-0.34,1.96-0.81,4.02-1.15,6.32c14.02-0.57,26.43-2.06,39.07-5.06l0.11,13.32
		c-11.26,2.06-26.66,3.45-40.79,4.02c-0.34,3.45-0.68,7-0.81,10.45c5.51-1.26,11.49-2.06,17.13-2.06c0.68,0,1.38,0,2.06,0
		c0.47-2.3,0.92-5.17,1.04-6.89l14.02,3.34c-0.47,1.26-1.38,3.68-2.06,5.85c13.32,4.36,22.17,14.83,22.17,28.15
		c0,16.32-9.53,32.05-37.79,36.3l-7.58-12.06c22.17-2.41,31.13-13.68,31.13-24.94c0-6.89-4.02-12.98-11.96-16.09
		C79.45,77.2,70.26,89.27,61.53,96.5c0.81,2.87,1.72,5.74,2.64,8.51l-13.21,4.02c-0.47-1.49-1.04-3.11-1.49-4.7
		c-5.62,2.76-11.72,4.6-17.81,4.6c-8.38,0-15.51-5.06-15.51-16.66c0-14.83,12.17-30.22,28.26-37.79c0.23-4.94,0.57-9.77,1.04-14.47
		c-1.26,0-2.41,0-3.68,0c-5.98,0-14.94-0.47-20.34-0.68L21.08,26c4.02,0.68,14.13,1.62,21.15,1.62c1.62,0,3.11,0,4.6,0
		c0.23-2.19,0.47-4.25,0.68-6.21c0.11-2.19,0.34-4.94,0.23-6.89l14.94,0.34C61.98,17.15,61.53,19.21,61.06,20.94z M35,94.92
		c3.21,0,7.36-1.38,11.49-3.79c-1.26-7.13-2.17-15.04-2.41-22.98c-8.62,5.85-14.36,14.6-14.36,21.13
		C29.7,92.96,31.32,94.92,35,94.92z M58.43,81.6C63.83,75.96,69,68.96,72.9,59.66c-6.09,0.11-11.38,1.15-15.85,2.53v0.34
		C57.04,69.54,57.51,75.86,58.43,81.6z"
              />
            </g>
          </svg>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
          :class="{ active: $i18n.locale === 'en' }"
          class="header-link"
          exact
        >
          <svg
            id="layer_2"
            :class="{ active: $i18n.locale === 'en' }"
            class="lang-link"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 128 128"
            style="enable-background:new 0 0 128 128;"
            xml:space="preserve"
          >
            <g>
              <path
                d="M76.43,90.99H45.94l-7.51,21.98H19L54.73,13h14.32l35.73,99.96H84.37L76.43,90.99z M50.9,75.39h21.27L64.8,53.27
		l-2.98-15.6h-0.71l-2.98,15.74L50.9,75.39z"
              />
            </g>
          </svg>
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
  width: 24px;
  height: 24px;
  .logo__st0 {
    fill: #d91d25;
  }
  .logo__st1 {
    fill: #cccccc;
  }
  .logo__st2 {
    fill: #0071bc;
  }
}
.header-link {
  text-decoration: none;
  transition: 0.3s;
  font-weight: bold;
  .lang-link {
    width: 20px;
    fill: #c0c6c9; //Haiao
    &.active {
      fill: #38a1db; //Tsuyukusa
      pointer-events: none;
    }
    &:hover {
      fill: #38a1db; //Tsuyukusa
      transition: 0.3s;
    }
  }
  &:link {
    color: #c0c6c9; //Haiao
    outline: none;
    &.active {
      color: #38a1db; //Tsuyukusa
      pointer-events: none;
    }
  }
  &:visited {
    color: #c0c6c9; //Haiao
    &.active {
      color: #38a1db; //Tsuyukusa
      pointer-events: none;
    }
  }
  &:hover {
    color: #38a1db; //Tsuyukusa
  }
}

.header-menu {
  margin: 0;
  padding: 0;
  font-size: 18px;
  list-style: none;
  display: flex;
  li {
    margin-left: 10px;
    a {
      vertical-align: text-bottom;
    }
  }
}
@media (max-width: 480px) {
  .header-logo {
    width: 24px;
    height: 24px;
  }
}
</style>
