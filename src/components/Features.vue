<template>
  <b-carousel indicator indicator-mode="click" indicator-style="is-dots">
    <b-carousel-item
      v-for="(carouselItem, index) in carouselItems"
      :key="index"
    >
      <section>
        <h1 class="title">{{ carouselItem.title }}</h1>
        <p class="content">{{ carouselItem.description }}</p>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Features extends Vue {
  carouselItems = [
    { title: "Story", description: "a description about the story", image: "" },
  ];
}
</script>

<style scoped></style>
