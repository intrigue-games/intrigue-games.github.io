<template>
  <b-navbar :fixed-top="true">
    <template #brand>
      <b-navbar-item class="brand" href="#">
        <img style="max-height: 52px;" src="@/assets/logo-crop.png" />
      </b-navbar-item>
    </template>
    <template #start>
      <h1>[twitter icon]</h1>
      <h1>[YouTube icon]</h1>
    </template>
    <template #end>
      <b-navbar-item href="#story">Story</b-navbar-item>
      <b-navbar-item href="#gameplay">Gameplay</b-navbar-item>
      <b-navbar-item href="#music">Music</b-navbar-item>
      <b-navbar-item href="#comingsoon">Coming Soon!</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>

<style scoped>
.brand {
  margin-right: 1rem;
  padding: 0;
}
</style>
