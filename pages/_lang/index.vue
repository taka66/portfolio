<template>
  <section class="container">
    <Header class="header" />
    <div class="content">
      <h1 class="title">
        <p>UI / UX Engineer</p>
        <span>TAKAHIRO FUJII</span>
        <img class="profile" src="~/assets/me.png" alt="profile" />
      </h1>
      <p>
        Sriracha small batch tousled Tumblr banh mi sartorial. Cosby sweater
        XOXO direct trade Austin meggings banjo. Wayfarers deep v tousled
        Schlitz shabby chic, Portland Truffaut Marfa aesthetic keffiyeh. Salvia
        retro tattooed sartorial polaroid. Selvage hella 3 wolf moon PBR pug,
        ugh Schlitz freegan keffiyeh raw denim jean shorts wayfarers roof party.
        Neutra Shoreditch iPhone, +1 brunch Echo Park XOXO slow-carb street art
        Vice Williamsburg tattooed forage. Butcher Godard ethical try-hard.
      </p>

      <p>
        Vegan blog Truffaut irony deep v Etsy. You probably haven't heard of
        them Schlitz chambray art party craft beer Echo Park mixtape, deep v
        fashion axe Wes Anderson twee McSweeney's DIY. Retro twee polaroid 3
        wolf moon, Bushwick locavore organic skateboard keffiyeh Kickstarter
        Williamsburg sustainable Godard sartorial trust fund. Stumptown paleo
        put a bird on it VHS hella. Put a bird on it mixtape Godard, vegan
        farm-to-table letterpress chia hella. Meggings DIY freegan normcore
        gastropub blog. Dreamcatcher wolf kitsch biodiesel lomo jean shorts, pug
        fap Odd Future craft beer stumptown locavore cornhole put a bird on it
        salvia.
      </p>

      <p>
        Hoodie Truffaut chillwave PBR art party. Slow-carb literally readymade,
        tousled stumptown ennui trust fund seitan paleo blog typewriter vegan.
        90's mixtape American Apparel, kale chips art party iPhone Etsy Neutra
        organic kogi direct trade typewriter. Aesthetic occupy Portland artisan
        craft beer fixie, Pinterest irony normcore letterpress. 8-bit craft beer
        seitan flexitarian, synth banh mi cardigan ethical High Life. Fixie
        whatever literally semiotics Helvetica 8-bit. Gluten-free tattooed Odd
        Future umami blog master cleanse, asymmetrical 8-bit yr.
      </p>

      <p>
        Tattooed gentrify asymmetrical twee, fashion axe normcore banh mi Etsy.
        Irony post-ironic kale chips readymade selfies art party, Marfa narwhal
        occupy before they sold out Thundercats. Banjo locavore 3 wolf moon
        artisan Marfa. XOXO church-key hella bitters, pour-over Blue Bottle wolf
        typewriter Carles. American Apparel umami twee locavore, blog hella
        artisan. Mixtape Shoreditch sriracha, organic before they sold out
        asymmetrical fashion axe ugh. Kale chips yr Pitchfork jean shorts Vice
        gentrify.
      </p>
      <p>
        Sriracha small batch tousled Tumblr banh mi sartorial. Cosby sweater
        XOXO direct trade Austin meggings banjo. Wayfarers deep v tousled
        Schlitz shabby chic, Portland Truffaut Marfa aesthetic keffiyeh. Salvia
        retro tattooed sartorial polaroid. Selvage hella 3 wolf moon PBR pug,
        ugh Schlitz freegan keffiyeh raw denim jean shorts wayfarers roof party.
        Neutra Shoreditch iPhone, +1 brunch Echo Park XOXO slow-carb street art
        Vice Williamsburg tattooed forage. Butcher Godard ethical try-hard.
      </p>

      <p>
        Vegan blog Truffaut irony deep v Etsy. You probably haven't heard of
        them Schlitz chambray art party craft beer Echo Park mixtape, deep v
        fashion axe Wes Anderson twee McSweeney's DIY. Retro twee polaroid 3
        wolf moon, Bushwick locavore organic skateboard keffiyeh Kickstarter
        Williamsburg sustainable Godard sartorial trust fund. Stumptown paleo
        put a bird on it VHS hella. Put a bird on it mixtape Godard, vegan
        farm-to-table letterpress chia hella. Meggings DIY freegan normcore
        gastropub blog. Dreamcatcher wolf kitsch biodiesel lomo jean shorts, pug
        fap Odd Future craft beer stumptown locavore cornhole put a bird on it
        salvia.
      </p>

      <p>
        Hoodie Truffaut chillwave PBR art party. Slow-carb literally readymade,
        tousled stumptown ennui trust fund seitan paleo blog typewriter vegan.
        90's mixtape American Apparel, kale chips art party iPhone Etsy Neutra
        organic kogi direct trade typewriter. Aesthetic occupy Portland artisan
        craft beer fixie, Pinterest irony normcore letterpress. 8-bit craft beer
        seitan flexitarian, synth banh mi cardigan ethical High Life. Fixie
        whatever literally semiotics Helvetica 8-bit. Gluten-free tattooed Odd
        Future umami blog master cleanse, asymmetrical 8-bit yr.
      </p>

      <p>
        Tattooed gentrify asymmetrical twee, fashion axe normcore banh mi Etsy.
        Irony post-ironic kale chips readymade selfies art party, Marfa narwhal
        occupy before they sold out Thundercats. Banjo locavore 3 wolf moon
        artisan Marfa. XOXO church-key hella bitters, pour-over Blue Bottle wolf
        typewriter Carles. American Apparel umami twee locavore, blog hella
        artisan. Mixtape Shoreditch sriracha, organic before they sold out
        asymmetrical fashion axe ugh. Kale chips yr Pitchfork jean shorts Vice
        gentrify.
      </p>
    </div>
    <Footer class="footer" />
  </section>
</template>

<script>
import Header from '~/components/organisms/Header.vue'
import Footer from '~/components/organisms/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.container {
  // min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url('../../assets/logo-neon.png');
  background-repeat: no-repeat;
  background-position: center center;
}

.header {
  height: 50px;
  width: 100%;
  background-color: #dcdcdc;
}

.content {
  overflow-y: auto;
}

.footer {
  height: 50px;
  width: 100%;
  background-color: #dcdcdc;
}

.title {
  font-family: 'PT Sans', 'Quicksand', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  margin-top: 200px;
  margin-bottom: 200px;
  font-weight: 300;
  font-size: 80px;
  color: #333333;
  letter-spacing: 1px;

  img {
    width: 60px;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
