<template>
  <section>
    <div class="bio">
      <h3>主な発表・公演</h3>
      <div class="flex">
        <img class="thumbnail" src="~/assets/test.jpg" />
        <img class="thumbnail" src="~/assets/test.jpg" />
      </div>

      <div class="row">
        <div class="row-left">
          <a
            class="link"
            target="_brank"
            href="https://corp.rakuten.co.jp/careers/interview/takahiro/"
          >
            <span class="company cell">Rakuten</span>
          </a>
          <span class="cell">XXX Group</span>
        </div>
        <div class="row-right">
          <span class="cell">Engineering Manager / FrontEnd Engineer</span>
          <span class="cell">2019/06 -</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Rakuten</span>
          <span class="cell">UI Service Development Group</span>
        </div>
        <div class="row-right">
          <span class="cell">Engineering Manager / FrontEnd Engineer </span>
          <span class="cell">2019/01 -</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <span class="company cell">Rakuten</span>
        </div>
        <div class="row-right">
          <span class="cell">Engineer </span>
          <span class="cell">2010/04 -</span>
        </div>
      </div>
      <div class="row">
        <div class="row-left">
          <a class="link" href="https://goodpatch.com/blog/designers-gym/">
            <span class="company cell">Designers Lab(Good Patch)</span>
          </a>
        </div>
        <div class="row-right">
          <span class="cell">Lab Member</span>
          <span class="cell">2019/01 -</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.flex {
  display: flex;
}
.thumbnail {
  max-width: 50%;
  height: auto;
}
</style>
