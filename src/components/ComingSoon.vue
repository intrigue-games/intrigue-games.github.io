<template>
  <section class="coming-soon hero bg-image is-large">
    <div class="hero-body">
      <h1 class="title has-text-centered">Coming Soon!</h1>
      <div class="columns">
        <div class="column is-4 is-offset-4 columns">
          <div class="column is-5">
            <b-image
              class="image"
              :src="require('@/assets/android.png')"
              alt="Android Logo Image"
            ></b-image>
          </div>
          <div class="column is-5 is-offset-2">
            <b-image
              class="image"
              :src="require('@/assets/apple.png')"
              alt="Apple Logo Image"
            ></b-image>
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
export default class ComingSoon extends Vue {}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/bg-coming-soon.png");
  background-size: auto 100%;
}
</style>
