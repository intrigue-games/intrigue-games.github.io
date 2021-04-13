<template>
  <section class="hero is-info bg-image is-medium">
    <div class="anchor" id="music"></div>
    <div class="hero-body">
      <h1 class="title">Music</h1>
      <div class="has-text-centered">
        <b-button type="is-primary" class="is-centered" @click="clickMe"
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
  clickMe() {
    this.$buefy.notification.open("clicked");
  }
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/bg-music.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
}
.title {
  text-align: center;
}
</style>
