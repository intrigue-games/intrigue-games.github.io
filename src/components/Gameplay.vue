<template>
  <div>
    <div class="anchor" id="gameplay"></div>
    <h1 class="title">Gameplay</h1>
    <b-carousel indicator indicator-mode="click" indicator-style="is-dots">
      <b-carousel-item
        v-for="(carouselItem, index) in carouselItems"
        :key="index"
      >
        <section class="columns">
          <div class="column is-offset-4 is-4">
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
var gameplayclick = require("@/assets/gameplay-click.png");
var gameplaybuffs = require("@/assets/gameplay-buffs.png");
var gameplayrewards = require("@/assets/gameplay-rewards.png");
var gameplayshop = require("@/assets/gameplay-shop.png");

@Component
export default class Gameplay extends Vue {
  carouselItems = [
    {
      title: "Clicking",
      description: "A description about the clicking mechanic",
      image: gameplayclick
    },
    {
      title: "Buffs",
      description: "A description about the buffs mechanic",
      image: gameplaybuffs
    },
    {
      title: "Rewards",
      description: "A description about the Rewards mechanic",
      image: gameplayrewards
    },
    {
      title: "Shop",
      description: "A description about the Shop mechanic",
      image: gameplayshop
    }
  ];
}
</script>

<style scoped lang="scss">
.content {
  margin-bottom: 2rem;
}
.title,
.subtitle,
.content {
  text-align: center;
}
</style>
