<template>
  <div class="facebook">
    <a
      :href="
        'https://www.facebook.com/v3.3/dialog/share?app_id=1125367704324611&href=' +
          url +
          '&display=page'
      "
      class="facebook__link"
      target="_blank"
      rel="noopener"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1024 1024"
        style="enable-background:new 0 0 1024 1024;"
        xml:space="preserve"
      >
        <g>
          <path
            class="st0"
            d="M1024,512C1024,229.23,794.77,0,512,0S0,229.23,0,512c0,255.55,187.23,467.37,432,505.78V660H302V512h130
		V399.2C432,270.88,508.44,200,625.39,200C681.41,200,740,210,740,210v126h-64.56c-63.6,0-83.44,39.47-83.44,79.96V512h142
		l-22.7,148H592v357.78C836.77,979.37,1024,767.55,1024,512z"
          />
          <path
            class="st1"
            d="M711.3,660L734,512H592v-96.04c0-40.49,19.84-79.96,83.44-79.96H740V210c0,0-58.59-10-114.61-10
		C508.44,200,432,270.88,432,399.2V512H302v148h130v357.78c26.07,4.09,52.78,6.22,80,6.22s53.93-2.13,80-6.22V660H711.3z"
          />
        </g>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: 'https://takahirofujii.dev'
    }
  }
}
</script>

<style lang="scss">
.facebook {
  .facebook__link {
    outline: none;
  }
  svg {
    width: 28px;
    &:hover {
      .st0 {
        fill: #1877f2;
        transition: 0.3s;
      }
    }
    .st0 {
      fill: #898f9c;
    }
    .st1 {
      fill: #ffffff;
    }
  }
}
</style>
