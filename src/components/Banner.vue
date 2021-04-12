<template>
  <section class="hero is-primary is-fullheight bg-image">
    <div class="hero-head">
      <div class="bg-image"></div>
    </div>
    <div class="hero-body">
      <div class="columns is-vcentered banner-content">
        <div class="column">
          <div class="columns">
            <div class="column is-one-quarter"></div>
            <div class="column">
              <h1 class="title">Xal's Path</h1>
              <h2 class="subtitle">Subtitle</h2>
              <p class="content">
                Xal's Path is a story-driven clicker game where you, a stranger,
                are tasked to help Xal rid the realm of a terrible blight and
                uncover the deceitful truth behind it.
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
    <div class="hero-foot"></div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Banner extends Vue {}
</script>

<style scoped>
.bg-image {
  background-image: image("../assets/bg-banner.png");
  z-index: 100;
}
.title {
  margin-bottom: 2rem;
}
</style>
