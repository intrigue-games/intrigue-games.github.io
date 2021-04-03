<template>
  <section class="hero is-info">
    <div class="columns">
      <div class="column is-3 is-offset-2">
        <b-image class="image" :src="require('@/assets/story.png')"></b-image>
      </div>
      <div class="hero-body column is-2">
        <h1 class="title">Story</h1>
      </div>
      <div class="column is-3 is-offset-2">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel eros
          donec ac odio tempor orci dapibus. A diam sollicitudin tempor id eu
          nisl nunc mi. Arcu dui vivamus arcu felis bibendum. Lacinia quis vel
          eros donec ac.
        </h2>
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

<style scoped>
.title {
  text-align: center;
}
.image {
  margin: 1rem;
}
</style>
