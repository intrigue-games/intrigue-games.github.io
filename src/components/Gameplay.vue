<template>
  <section class="gameplay hero bg-image">
    <div class="hero-body">
      <h1 class="title has-background-green">Gameplay</h1>
      <b-carousel indicator indicator-mode="click" indicator-style="is-dots">
        <b-carousel-item
          v-for="(carouselItem, index) in carouselItems"
          :key="index"
        >
          <section class="columns is-centered">
            <div class="column">
              <b-image
                :src="carouselItem.image"
                class="my-carousel"
                :alt="carouselItem.title"
              ></b-image>
              <h1 class="title has-background-green">
                {{ carouselItem.title }}
              </h1>
              <p class="content has-background-green">
                {{ carouselItem.description }}
              </p>
            </div>
          </section>
        </b-carousel-item>
      </b-carousel>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
const gameplayClick = require("@/assets/gameplay-click.png");
const gameplayBuffs = require("@/assets/gameplay-buffs.png");
const gameplayRewards = require("@/assets/gameplay-rewards.png");
const gameplayShop = require("@/assets/gameplay-shop.png");

@Component
export default class Gameplay extends Vue {
  carouselItems = [
    {
      title: "Spells",
      description:
        "Cast spells to raise your influence and help the creatures you encounter.",
      image: gameplayClick,
    },
    {
      title: "Buffs",
      description: "Use buffs to gain temporary benefits against mana cost.",
      image: gameplayBuffs,
    },
    {
      title: "Rewards",
      description:
        "Earn rewards to level up your abilities and gain more influence.",
      image: gameplayRewards,
    },
    {
      title: "Shop",
      description:
        "Purchase Tomes from the shop so that you can earn influence over time.",
      image: gameplayShop,
    },
  ];
}
</script>

<style scoped lang="scss">
.bg-image {
  background-image: url("../assets/River.png");
  background-size: auto 100%;
  background-color: #84b342;
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
.gameplay .my-carousel img {
  padding: 5px;
  background-color: black;
}
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
