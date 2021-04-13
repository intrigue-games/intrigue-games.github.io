<template>
  <section class="hero is-primary is-fullheight bg-image">
    <div class="hero-body">
      <div class="columns is-vcentered banner-content">
        <div class="column">
          <div class="columns">
            <div class="column is-one-quarter"></div>
            <div class="column">
              <img src="../assets/XalTitle.png" alt="Xal title" class="image" />
              <!--              <h1 class="title">Xal's Path</h1>-->
              <h2 class="subtitle">Subtitle</h2>
              <p class="content">
                Xal's Path is a story-driven clicker game where you, a stranger,
                are tasked to help Xal rid the realm of a terrible blight and
                uncover the deceitful truth behind it.
              </p>
            </div>
            <div class="column is-one-quarter"></div>
          </div>
        </div>
        <div class="column is-6">
          <video-embed
            class="has-text-centered my-video"
            src="https://www.youtube.com/watch?v=ZZ5LpwO-An4"
            css="embed-responsive-21by9"
          ></video-embed>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Banner extends Vue {}
</script>

<style scoped lang="scss">
.bg-image {
  background-image: url("../assets/bg-coming-soon.png");
}
</style>

<style lang="scss">
iframe {
  margin: auto;
  height: 318px;
  width: 550px;
}
</style>
