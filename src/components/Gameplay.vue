<template>
  <div>
    <h1 class="title">Gameplay</h1>
    <b-carousel indicator indicator-mode="click" indicator-style="is-dots">
      <b-carousel-item
        v-for="(carouselItem, index) in carouselItems"
        :key="index"
      >
        <section class="columns">
          <div class="column is-offset-3 is-6">
            <b-image :src="carouselItem.image"></b-image>
            <h1 class="subtitle">{{ carouselItem.title }}</h1>
            <p class="content">{{ carouselItem.description }}</p>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Gameplay extends Vue {
  carouselItems = [
    {
      title: "Clicking",
      description: "a description about the clicking mechanic",
      image: require("@/assets/android.png")
    },
    {
      title: "Playing",
      description: "you can play this game",
      image: require("@/assets/apple.png")
    }
  ];
}
</script>

<style scoped lang="scss">
.title {
  text-align: center;
}
</style>
