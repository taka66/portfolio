<template>
  <div class="top-image">
    <p class="top-image-title">Takahiro Fujii</p>
    <p class="top-image-sub">UI/UX Engineer / Engineering Manager</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.top-image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  background-image: url('../../assets/profile.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  height: 50%;
  color: #fffffc;
}

.top-image-title {
  font-size: 60px;
  color: #fffffc;
}
</style>
