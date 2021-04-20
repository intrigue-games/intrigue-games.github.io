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
          >Listen to the Free Soundtrack</b-button
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
  soundtrackLink = "https://www.youtube.com/watch?v=hDrSy_biKRo";

  clickMe() {
    window.open(this.soundtrackLink, "_blank");
  }
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/dirtWithTransition.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center top;
}
.title {
  text-align: center;
}
</style>
