<template>
  <section class="music hero bg-image is-large">
    <div class="anchor" id="music"></div>
    <div class="hero-body">
      <h1 class="title">Music</h1>
      <div class="has-text-centered">
        <b-button
          type="has-background-grey is-primary has-text-black"
          class="is-centered"
          size="is-large"
          @click="clickMe"
          >Listen to the Soundtrack</b-button
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Music extends Vue {
  soundtrackLink =
    "https://songwhip.com/stevenlogan/xals-path-original-game-soundtrack";

  clickMe() {
    window.open(this.soundtrackLink, "_blank");
  }
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/dirtWithTransition.png");
  background-size: auto 100%;
}
.title {
  text-align: center;
}
</style>
