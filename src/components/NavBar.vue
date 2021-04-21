<template>
  <b-navbar type="is-primary" :spaced="true" :fixed-top="true">
    <template #brand>
      <b-navbar-item class="brand">
        <b-navbar-item @click="scrollIntoView('banner')"
          ><img
            class="image"
            alt="Intrigue Games Logo"
            src="@/assets/logo-crop.png"
        /></b-navbar-item>
        <b-navbar-item href="https://twitter.com/intrigue_games">
          <b-icon type="is-white" icon="twitter" title="Twitter Icon"></b-icon
        ></b-navbar-item>
        <b-navbar-item
          href="https://www.youtube.com/channel/UCQPXkDppOggoio7FFq_dpcg"
          ><b-icon type="is-white" icon="youtube" title="youtube Icon"></b-icon
        ></b-navbar-item>
      </b-navbar-item>
    </template>
    <template #start> </template>
    <template #end>
      <b-navbar-item class="has-text-white" @click="scrollIntoView('story')"
        >Story</b-navbar-item
      >
      <b-navbar-item class="has-text-white" @click="scrollIntoView('gameplay')"
        >Gameplay</b-navbar-item
      >
      <b-navbar-item class="has-text-white" @click="scrollIntoView('music')"
        >Music</b-navbar-item
      >
      <b-navbar-item
        class="has-text-white"
        @click="scrollIntoView('coming-soon')"
        >Coming Soon!</b-navbar-item
      >
    </template>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  scrollIntoView(classNameOfSection: string) {
    const element = document.getElementsByClassName(classNameOfSection)[0];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
</script>

<style scoped lang="scss">
.image {
  max-height: 40px;
}
.navbar.is-primary .navbar-brand > a.navbar-item:hover {
  background-color: inherit;
}
</style>
