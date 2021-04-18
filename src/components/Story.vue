<template>
  <section class="story hero is-medium bg-image">
    <div class="hero-body">
      <div class="anchor" id="story"></div>
      <h1 class="title has-text-centered">Story</h1>
      <div class="columns is-vcentered">
        <div class="column">
          <!--          <b-image class="image" :src="require('@/assets/story.png')"></b-image>-->
          <img
            :src="require('@/assets/story-animation.gif')"
            alt="Xal at his desk"
            class="image"
          />
        </div>
        <div class="column">
          <p class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel eros
            donec ac odio tempor orci dapibus. A diam sollicitudin tempor id eu
            nisl nunc mi. Arcu dui vivamus arcu felis bibendum. Lacinia quis vel
            eros donec ac.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Story extends Vue {}
</script>

<style scoped lang="scss">
.bg-image {
  background-image: url("../assets/bg-gameplay.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: top;
  background-color: #a6843c;
}
.image {
  margin: auto;
  max-height: 500px;
}
</style>
