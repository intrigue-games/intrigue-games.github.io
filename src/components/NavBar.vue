<template>
  <b-navbar type="is-primary" :spaced="true" :fixed-top="true">
    <template #brand>
      <b-navbar-item class="brand" href="#">
        <b-navbar-item href="#"
          ><img class="image" src="@/assets/logo-crop.png"
        /></b-navbar-item>
        <b-navbar-item href="https://twitter.com/intrigue_games">
          <b-icon type="is-white" icon="twitter"></b-icon
        ></b-navbar-item>
        <b-navbar-item
          href="https://www.youtube.com/channel/UCQPXkDppOggoio7FFq_dpcg"
          ><b-icon type="is-white" icon="youtube"></b-icon
        ></b-navbar-item>
      </b-navbar-item>
    </template>
    <template #start> </template>
    <template #end>
      <b-navbar-item class="has-text-white" href="#story">Story</b-navbar-item>
      <b-navbar-item class="has-text-white" href="#gameplay"
        >Gameplay</b-navbar-item
      >
      <b-navbar-item class="has-text-white" href="#music">Music</b-navbar-item>
      <b-navbar-item class="has-text-white" href="#comingsoon"
        >Coming Soon!</b-navbar-item
      >
    </template>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>

<style scoped lang="scss">
.image {
  max-height: 40px;
}
</style>
