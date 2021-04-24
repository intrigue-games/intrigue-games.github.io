<template>
  <section class="story hero is-medium bg-image">
    <div class="hero-body">
      <h1 class="title has-text-centered">Story</h1>
      <div class="columns is-vcentered">
        <div class="column">
          <img
            :src="require('@/assets/story-animation.gif')"
            alt="Xal at his desk"
            class="image"
          />
        </div>
        <div class="column">
          <p class="content">
            Xal's path's story focuses on the concept of relativity and control
            and how far people will go to fight the natural impermanence of
            life. Join the druid, Xal, on his path as the stranger. On your
            journey, you will travel across different regions and encounter
            several creatures that span various areas of mythology. On your
            path, not only will you slowly learn more about Xal, but you will
            also start to uncover the truth behind his intentions as well as
            your own.
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
  background-image: url("../assets/bg-story.png");
  background-size: auto 100%;
  background-color: #a6843c;
}
.image {
  margin: auto;
  max-height: 500px;
}
</style>
