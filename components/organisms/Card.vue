<template>
  <div class="card">
    <!-- No Link -->
    <div v-if="disabled">
      <v-lazy-image
        class="card-thumbnail"
        :src="thumbnail"
        src-placeholder="/loading.jpg"
        :alt="$t(title)"
      />
      <p v-if="year">{{ year }}</p>
      <p>{{ $t(name) }}</p>
      <p class="card-title">
        {{ $t(title) }}
      </p>
    </div>
    <!-- Outside Link -->
    <div v-else-if="outsidelink">
      <a :href="link" target="_blank">
        <v-lazy-image
          class="card-thumbnail"
          :src="thumbnail"
          src-placeholder="/loading.jpg"
          :alt="$t(title)"
        />
        <p>{{ year }}</p>
        <p>{{ $t(name) }}</p>
        <p class="card-title">
          {{ $t(title) }}
        </p>
      </a>
    </div>
    <!-- Internal Link -->
    <NuxtLink v-else class="card-thumbnail-link" :to="$i18n.path(link)" exact>
      <v-lazy-image
        class="card-thumbnail"
        :src="thumbnail"
        src-placeholder="/loading.jpg"
        :alt="$t(title)"
      />
      <p>{{ year }}</p>
      <p>{{ $t(name) }}</p>
      <p class="card-title">
        {{ $t(title) }}
      </p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: 'https://takahirofujii.dev'
    },
    title: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    outsidelink: {
      type: Boolean,
      default: false
    },
    thumbnail: {
      type: String,
      default: 'img/test.jpg'
    }
  }
}
</script>

<style lang="scss">
//https://blog.did0es.me/posts/2019-08-12-nuxt-lazy-image/
// .v-lazy-image {
//   // opacity: 0;
//   // transition: all 0.4s;
// }
// .v-lazy-image-loaded {
//   opacity: 1;
//   transition: all 0.4s ease-in;
// }

.card {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  width: 50%;
  font-size: 14px;
}
.card a,
.card-thumbnail-link {
  opacity: 0.7;
  text-decoration: none;
  color: #373c38;
  transition: all 0.3s;
}
.card a:hover,
.card-thumbnail-link:hover {
  opacity: 1;
  text-decoration: none;
  color: #38a1db; //Tsuyukusa
}

.card-title {
  padding-top: 4px;
  font-weight: bold;
  font-size: 18px;
}

.card-thumbnail {
  width: 100%;
  height: 56.25%;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(40, 55, 57, 0.3);
  margin-bottom: 10px;
}
a:hover .card-thumbnail {
  transition-duration: 0.3s;
}

@media (max-width: 768px) {
  .card {
    padding: 15px 10px;
    width: 100%;
    p {
      padding: 5px 5px 0px 0px;
    }
  }
}
</style>
