<template>
  <div class="achieves">
    <div class="achieves__title">
      <span class="achieves__title_front-lane"></span>
      <h3>{{ title }}</h3>
      <span class="achieves__title_back-lane"></span>
    </div>

    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "AchiveWrap",
  props: {
    title: {
      type: String,
      requied: true,
    }
  }
}
</script>

<style scoped lang="scss">
.achieves__title {
  display: grid;
  grid-template: 1fr / 1fr auto 1fr;
  width: 100%;
  align-items: center;
  gap: 1em;
  position: relative;

  &_front-lane {
    height: 1px;
    background: #444444;
  }

  &_back-lane {
    height: 1px;
    background: #444444;
  }

  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #E8E8E8;
  }
}
</style>
