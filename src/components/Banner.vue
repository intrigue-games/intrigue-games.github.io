<template>
  <section class="hero is-primary">
    <div class="columns">
      <div class="hero-body column is-4 is-offset-2">
        <h1 class="title">Xal's Path</h1>
        <h2 class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel eros
          donec ac odio tempor orci dapibus. A diam sollicitudin tempor id eu
          nisl nunc mi. Arcu dui vivamus arcu felis bibendum.
        </h2>
      </div>
      <div class="column is-3 is-offset-3">
        <p>Trailer goes here</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Banner extends Vue {}
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
