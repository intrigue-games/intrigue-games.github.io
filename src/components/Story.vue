<template>
  <section class="hero is-info">
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
          <h2 class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel eros
            donec ac odio tempor orci dapibus. A diam sollicitudin tempor id eu
            nisl nunc mi. Arcu dui vivamus arcu felis bibendum. Lacinia quis vel
            eros donec ac.
          </h2>
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
.title {
  text-align: center;
}
.image {
  margin: auto;
  height: 700px;
}
</style>
