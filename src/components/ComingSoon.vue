<template>
  <section class="hero is-info">
    <div class="anchor" id="comingsoon"></div>
    <div class="hero-body">
      <h1 class="title">Coming Soon!</h1>
      <div class="columns">
        <div class="column is-4 is-offset-4 columns">
          <div class="column is-5">
            <b-image
              class="image"
              :src="require('@/assets/android.png')"
            ></b-image>
          </div>
          <div class="column is-5 is-offset-2">
            <b-image
              class="image"
              :src="require('@/assets/apple.png')"
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
.title {
  text-align: center;
}
</style>
