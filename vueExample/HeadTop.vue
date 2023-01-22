<template>
  <div class="hero">
    <div class="hero__text">
      <h1>Top reapers</h1>
      <h2>
        Curious about the journey? Perhaps your time will come soon for advancement? You would require your own
        unique soul for ascension</h2>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero {
  padding: 100px 0 60px;

  @media (max-width:767px) {
    padding: 60px 0 30px;
  }

  &__text {
    max-width: 370px;
    z-index: 1;

    @media (max-width: 767px) {
      max-width: 300px;
    }
  }

  h1 {
    margin: 0 0 5px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: calc(36px + 18 * (100vw / 1920));
  }

  h2 {
    margin: 0;
    color: #888888;
    font-weight: 400;
    font-size: 14px;

    @media (max-width: 767px) {
      padding-bottom: 0;
    }
  }
}
</style>
