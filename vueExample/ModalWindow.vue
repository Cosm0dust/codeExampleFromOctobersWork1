<template>
  <div class="modal-window" @click.stop="hideModal">
    <div @click.stop class="pop-up">
      <div class="pop-up__head">
        <img :src="storePath(modalGamer.image_path)" alt="">
        <h2 class="pop-up__head_name">{{ modalGamer.username }}</h2>

        <button @click="hideModal" class="pop-up__head_close">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_4_7226)">
              <path d="M19 11L11 19" stroke="#E8E8E8" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M11 11L19 19" stroke="#E8E8E8" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </g>
            <defs>
              <filter id="filter0_d_4_7226" x="-5" y="-5" width="40" height="40" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_7226" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_7226" result="shape" />
              </filter>
            </defs>
          </svg>

        </button>
      </div>

      <achieve-wrap :title="title.activityPoints">
        <template #content>
          <div class="achieves__points-list">
            <div class="elem" :key="idx" v-for="(gamer, idx) in modalGamer.activityPoints">
              <div class="elem_num">{{ gamer.amount }}</div>
              <div>{{ gamer.media }}</div>
            </div>
          </div>
        </template>
      </achieve-wrap>

      <achieve-wrap :title="title.souls">
        <template #content>
          <div class="achieves__points-list">
            <div class="elem" :key="idx" v-for="(soul, idx) in modalGamer.souls">
              <div>
                <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2 23.3629V14.6326C2 11.6956 3.562 8.98045 6.09933 7.50278L14.3493 2.70128C16.9142 1.20895 20.084 1.20895 22.6488 2.70128L30.8988 7.50278C33.438 8.98045 35 11.6956 35 14.6326V23.3629C35 26.2999 33.438 29.0151 30.9007 30.4928L22.6507 35.2943C20.0858 36.7866 16.916 36.7866 14.3512 35.2943L6.10117 30.4928C3.562 29.0151 2 26.2999 2 23.3629Z"
                    :stroke="soul.color" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                  <text x="16" y="23" :fill="soul.color" class="svg-num">{{ soul.amount }}</text>
                </svg>
              </div>
              <div :style="{ color: soul.color }">{{ soul.title }}</div>
            </div>
          </div>
        </template>
      </achieve-wrap>

      <achieve-wrap :title="title.perks">
        <template #content>
          <div class="achieves__points-list">
            <div class="elem" :key="idx" v-for="(perk, idx) in modalGamer.perks">
              <div class="elem_doubled">
                <img :src="perk.image" alt="item">
                <img src="top-reapers/double.svg" alt="*">
                <span class="elem_num">{{ perk.amount }}</span>
              </div>
              <div>{{ perk.title }}</div>
            </div>
          </div>
        </template>
      </achieve-wrap>


      <achieve-wrap :title="title.crystals">
        <template #content>
          <div class="achieves__points-list">
            <div class="elem" :key="idx" v-for="(crystal, idx) in modalGamer.crystals">
              <div class="elem_doubled">
                <img :src="crystal.img" alt="item">
                <img src="top-reapers/double.svg" alt="*">
                <span class="elem_num">{{ crystal.amount }}</span>
              </div>
              <div>{{ crystal.title }}</div>
            </div>
          </div>
        </template>
      </achieve-wrap>


      <achieve-wrap :title="title.achievments">
        <template #content>
          <div class="achieves__points-list">
            <div class="elem" :key="idx" v-for="(item, idx) in modalGamer.achievements">
              <div>
                <img class="elem__achive" :src="item.achieve" alt="">
              </div>
            </div>
          </div>
        </template>
      </achieve-wrap>

    </div>
  </div>
</template>

<script>
import mixins from '../../../mixins';
import AchieveWrap from "./AchieveWrap";

export default {
  name: "ModalWindow",
  mixins: [mixins],
  components: {
    AchieveWrap,
  },
  props: {
    modalGamer: {
      type: Object,
      requied: true,
    }
  },
  data() {
    return {
      title: {
        activityPoints: 'Activity points',
        souls: 'Souls',
        perks: 'Perks',
        crystals: 'Crystals',
        achievments: 'Achievements',
      },
    }
  },
  methods: {
    hideModal() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-window {
  top: 70px;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 12px 0;
  position: fixed;
  display: flex;
  z-index: 5;

  @media screen and (max-width: 767px) {
    top: 40px;
    right: 12px;
    left: 12px;
  }

  @media screen and (max-width: 600px) {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 0;
    z-index: 1000;
  }
}

.pop-up {
  margin: auto;
  background: #141414;
  min-width: 400px;
  max-width: 590px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 10px 44px rgba(0, 0, 0, 0.5), inset 0px 0px 2px rgba(98, 98, 98, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;
  overflow: auto;
  height: 85vh;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0% 1% 7% 1%;
    min-width: 0px;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    min-width: 0px;
    height: 100%;
    max-height: 100vh;
    overflow: auto;
    border-radius: 0;
    padding-bottom: 20px;
  }

  &__head {
    display: flex;
    align-items: center;
    position: relative;
    background: #101010;

    &_name {
      font-style: normal;
      font-weight: 700;
      font-size: 37px;
      line-height: 110%;
      color: #FFFFFF;
      padding-left: 10%;

      @media (max-width: 767px) {
        font-size: 28px;
      }
    }

    &_close {
      position: absolute;
      top: 12px;
      right: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      background-color: transparent;
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }

      @media (max-width: 767px) {
        left: initial;
        right: 12px;
        top: 12px
      }

      &>img {
        max-width: 100%;
        max-height: 100%;
      }

      &>svg {
        flex: none;
      }
    }

  }

  &__head>img {
    width: 128px;
    height: 128px;
  }
}

.achieves {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #888888;
  padding: 4% 5% 0;
  max-width: 410px;
  width: 100%;

  @media (min-width: 768px) {
    margin: 0 auto;
  }

  &__points-list {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
}

.elem {
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  &_num {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    text-align: center;
    color: #E8E8E8;
  }

  &>* {
    padding-top: 5%;
  }

  &__achive {
    mix-blend-mode: screen;
  }
}

svg {
  &-num {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
  }
}
</style>
