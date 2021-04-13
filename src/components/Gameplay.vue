<template>
  <div class="bg-image gameplay">
    <div class="anchor" id="gameplay"></div>
    <h1 class="title is-4">Gameplay</h1>
    <b-carousel indicator indicator-mode="click" indicator-style="is-dots">
      <b-carousel-item
        v-for="(carouselItem, index) in carouselItems"
        :key="index"
      >
        <section class="columns is-centered">
          <div class="column">
            <b-image :src="carouselItem.image" class="my-carousel"></b-image>
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
      image: gameplayclick,
    },
    {
      title: "Buffs",
      description: "A description about the buffs mechanic",
      image: gameplaybuffs,
    },
    {
      title: "Rewards",
      description: "A description about the Rewards mechanic",
      image: gameplayrewards,
    },
    {
      title: "Shop",
      description: "A description about the Shop mechanic",
      image: gameplayshop,
    },
  ];
}
</script>

<style scoped lang="scss">
.bg-image {
  background-image: url("../assets/bg-gameplay.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-color: #a6843c;
}
.content {
  margin-bottom: 2rem;
}
.title,
.subtitle,
.content {
  text-align: center;
}
</style>

<style lang="scss">
.gameplay .my-carousel {
  display: block;
  max-height: 928px;
  max-width: 300px;
  text-align: center;
  margin: auto;
}
.gameplay .carousel > .carousel-items {
  margin: auto;
  width: 75%;
}
</style>
