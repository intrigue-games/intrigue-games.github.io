<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="columns is-vcentered">
        <div class="column">
          <div class="columns">
            <div class="column is-one-quarter"></div>
            <div class="column">
              <h1 class="title">Xal's Path</h1>
              <h2 class="subtitle">Subtitle</h2>
              <p class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
                eros donec ac odio tempor orci dapibus. A diam sollicitudin
                tempor id eu nisl nunc mi. Arcu dui vivamus arcu felis bibendum.
              </p>
            </div>
            <div class="column is-one-quarter"></div>
          </div>
        </div>
        <div class="column">
          <video-embed
            class="has-text-centered"
            src="https://www.youtube.com/watch?v=ZZ5LpwO-An4"
          ></video-embed>
        </div>
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
  margin-bottom: 2rem;
}
</style>
