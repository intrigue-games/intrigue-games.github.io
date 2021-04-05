<template>
  <section class="hero is-info">
    <div class="anchor" id="music"></div>
    <div class="hero-body">
      <div class="columns">
        <div class="column is-offset-4 is-4">
          <h1 class="title">Music</h1>
          <div class="columns">
            <b-button class="column is-centered" @click="clickMe"
              >Listen to the Free Soundtrack</b-button
            >
          </div>
        </div>
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
.title {
  text-align: center;
}
</style>
