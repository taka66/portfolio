<template>
  <div class="card">
    <div v-if="disabled">
      <img class="card-thumbnail" :src="thumbnail" />
      <p>{{ year }}</p>
      <p>{{ name }}</p>
      <p class="card-title">
        {{ title }}
      </p>
    </div>
    <NuxtLink v-else class="card-thumbnail-link" :to="$i18n.path(link)" exact>
      <img class="card-thumbnail" :src="thumbnail" />
      <p>{{ year }}</p>
      <p>{{ name }}</p>
      <p class="card-title">
        {{ title }}
      </p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    year: String,
    name: String,
    link: String,
    title: String,
    disabled: {
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
  text-decoration: none;
  color: #373c38;
}
.card a:hover,
.card-thumbnail-link:hover {
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
}
a:hover .card-thumbnail {
  opacity: 0.7;
  transition-duration: 0.3s;
}

@media (max-width: 768px) {
  .card {
    padding: 15px 0px;
    width: 100%;
  }
  .card-thumbnail {
    margin-bottom: 10px;
  }
}
</style>
