<template>
  <div class="card">
    <NuxtLink class="thumbnail-link" :to="$i18n.path(link)" exact>
      <img class="thumbnail" :src="thumbnail" />
      <p>{{ year }}</p>
      <p>{{ name }}</p>
      <p>
        {{ description }}
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
    description: String,
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
.thumbnail-link {
  text-decoration: none;
  color: #373c38;
}
.card a:hover,
.thumbnail-link:hover {
  text-decoration: none;
  color: #38a1db; //Tsuyukusa
}
.thumbnail {
  width: 100%;
}
a:hover .thumbnail {
  opacity: 0.7;
  transition-duration: 0.3s;
}

@media (max-width: 768px) {
  .card {
    padding: 15px 0px;
    width: 100%;
  }
}
</style>
