<template>
  <tr @click="$emit('click')">
    <td>{{ idx + 1 }}</td>
    <td>
      <div class="list_img">
        <img v-if="gover.image_path" :src="storePath(gover.image_path)" alt="">
      </div>
    </td>
    <td class="username left-align">{{ gover.username }}</td>
    <td>{{ gover.rating_week }}</td>
    <td>{{ gover.activity }}</td>
    <td>{{ crystalCount }}</td>
    <td class="achivements left-align">
      <div class="achivements__inner">
        <div v-for="i in countAchivements" class="list__achieve" :key="i">
          <img src="top-reapers/Group.svg" alt="">
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
import mixins from '../../../mixins';

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default {
  name: "ItemHolder",
  mixins: [mixins],
  props: {
    idx: {
      type: Number,
      required: true,
    },
    gover: {
      type: Object,
      required: true,
    }
  },
  computed: {
    countAchivements() {
      const count = generateRandom(1, 5);
      // const count = this.gover.achievements;

      return [...Array(count).keys()];
    },
    crystalCount() {
      return generateRandom(1, 10);
      // return this.gover.crystals.length;
    },
  },
}
</script>

<style scoped lang="scss">
.list__achieve {
  &>img {
    @media screen and (max-width: 767px) {
      width: 18px;
      height: 18px;
    }
  }
}

.list_img {
  width: 48px;
  height: 48px;

  @media screen and (max-width: 767px) {
    width: 24px;
    height: 24px;
  }

  img {
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
}

.achivements {
  &__inner {
    display: flex;
    flex-wrap: wrap;

    &>* {
      flex: none;
    }
  }

}
</style>
